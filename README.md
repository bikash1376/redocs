# Redocs - Markdown Documentation Generator

A simple and elegant documentation site generator that converts Markdown files to styled HTML with a modern documentation layout.

## Features

- 📝 **Markdown to HTML conversion** using markdown-it
- 🎨 **Modern documentation styling** with responsive design
- 📱 **Mobile-friendly** layout
- 🔍 **Syntax highlighting** for code blocks
- 🧭 **Navigation sidebar** with active page highlighting
- ⚡ **Fast build process**

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the documentation:**
   ```bash
   npm run build
   ```

3. **Serve the documentation locally:**
   ```bash
   npm run serve
   ```

## Project Structure

```
redocs/
├── docs/           # Your markdown files
│   ├── intro.md
│   ├── test.md
│   └── help.md
├── templates/      # HTML templates
│   └── layout.html
├── dist/          # Generated HTML files
└── src/
    └── index.js   # Build script
```

## Adding New Documentation

1. Create a new `.md` file in the `docs/` folder
2. Write your documentation in Markdown
3. Run `npm run build` to generate the HTML
4. The new page will automatically appear in the navigation

### Customizing Navigation

Edit `docs-config.json` to customize:
- **Display names** for navigation links
- **Order** of pages in the navigation
- **Site title** and description

Example:
```json
{
  "navigation": {
    "intro": {
      "displayName": "Getting Started",
      "order": 1
    },
    "api": {
      "displayName": "API Reference", 
      "order": 2
    }
  },
  "site": {
    "title": "My Project Docs"
  }
}
```

## Customization

### Styling
Edit the CSS in `templates/layout.html` to customize the appearance.

### Navigation
Update the navigation links in `templates/layout.html` to match your documentation structure.

### Build Process
Modify `src/index.js` to add additional processing steps like:
- Custom markdown plugins
- Asset copying
- SEO optimization

## Markdown Features Supported

- Headers (H1-H6)
- Links (internal and external)
- Images
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Blockquotes
- Tables
- Bold and italic text
- And more!

## Development

To make changes to the build process or styling:

1. Edit the source files
2. Run `npm run build` to test changes
3. Use `npm run serve` to preview locally

## License

ISC 