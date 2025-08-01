const express = require('express')
const fs = require('fs-extra')
const path = require('path')
const ejs = require('ejs');

// Add syntax highlighting
const hljs = require('highlight.js');

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return ''; // use external default escaping
  }
})

// Add target="_blank" to external links
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const token = tokens[idx];
  const href = token.attrs.find(attr => attr[0] === 'href');
  
  if (href && href[1].startsWith('http')) {
    token.attrSet('target', '_blank');
    token.attrSet('rel', 'noopener noreferrer');
  }
  
  return self.renderToken(tokens, idx, options);
};

const docsDir = path.join(__dirname, '..', 'docs')
const distDir = path.join(__dirname, '..', 'dist')
const layoutPath = path.join(__dirname, '..', 'templates', 'layout.html')
const configPath = path.join(__dirname, '..', 'docs-config.json')

// Ensure dist directory exists and is empty
fs.ensureDirSync(distDir)
fs.emptyDirSync(distDir)

const layoutTemplate = fs.readFileSync(layoutPath, 'utf-8');

// Load configuration
let config = { navigation: {}, site: { title: 'Documentation' } };
if (fs.existsSync(configPath)) {
  config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

// Get all markdown files and create navigation
const files = fs.readdirSync(docsDir).filter(file => file.endsWith('.md'));

// Create navigation menu items
const navigation = files.map(file => {
  const pageTitle = file.replace('.md', '')
  const pageConfig = config.navigation[pageTitle] || {}
  
  return {
    title: pageTitle,
    displayName: pageConfig.displayName || pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1),
    href: `${pageTitle}.html`,
    order: pageConfig.order || 999 // Default to end if no order specified
  }
}).sort((a, b) => a.order - b.order) // Sort by order

console.log(`Found ${files.length} markdown files to process...`);

files.forEach(file => {
    try {
        const filePath = path.join(docsDir, file);
        const mdContent = fs.readFileSync(filePath, 'utf-8');
        const htmlContent = md.render(mdContent);

        const pageTitle = file.replace('.md', '')
        const finalHtml = ejs.render(layoutTemplate, {
            title: pageTitle,
            content: htmlContent,
            navigation: navigation,
            siteTitle: config.site.title
        })

        const outputFile = path.join(distDir, `${pageTitle}.html`);
        fs.writeFileSync(outputFile, finalHtml, 'utf-8');

        console.log(`✅ Generated: ${outputFile}`)
    } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
    }
})

console.log(`\n🎉 Documentation build complete! Files generated in: ${distDir}`)

// Create an index.html file that redirects to getting-started.html
const indexHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=getting-started.html">
    <title>${config.site.title}</title>
</head>
<body>
    <p>Redirecting to <a href="getting-started.html">documentation</a>...</p>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml, 'utf-8');
console.log('✅ Created index.html redirect');
