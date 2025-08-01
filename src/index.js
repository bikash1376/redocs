const express = require('express')
const fs = require('fs-extra')
const path = require('path')
const md = require('markdown-it')()
const ejs = require('ejs');

const docsDir = path.join(__dirname, '..', 'docs')
const distDir = path.join(__dirname, '..', 'dist')
const layoutPath = path.join(__dirname, '..', 'templates', 'layout.html')

fs.emptyDirSync(distDir)

const layoutTemplate = fs.readFileSync(layoutPath, 'utf-8');

const files = fs.readdirSync(docsDir);

files.forEach(file => {
    const filePath = path.join(docsDir, file);
    const mdContent = fs.readFileSync(filePath, 'utf-8');
    const htmlContent = md.render(mdContent);

    const pageTitle = file.replace('.md', '')
    const finalHtml = ejs.render(layoutTemplate, {
        title: pageTitle,
        content: htmlContent
    })

    const outputFile = path.join(distDir, `${pageTitle}.html`);

    fs.writeFileSync(outputFile, finalHtml, 'utf-8');

    console.log('Generated: ${outputFile}')
})
