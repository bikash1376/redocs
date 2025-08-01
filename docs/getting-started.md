# Getting Started with Redocs

Welcome to **Redocs** - a modern, lightweight documentation site generator that transforms your Markdown files into beautiful, responsive documentation websites.

## What is Redocs?

Redocs is a Node.js-based documentation generator that:

- **Converts Markdown to HTML** using the powerful markdown-it parser
- **Provides modern styling** with a clean, professional design
- **Offers dynamic navigation** that automatically updates based on your content
- **Supports syntax highlighting** for code blocks
- **Is fully responsive** and works on all devices
- **Requires minimal configuration** to get started

Perfect for:
- 📚 Project documentation
- 🎯 API documentation
- 📖 Technical guides
- 🏢 Company wikis
- 📝 Knowledge bases

## Quick Installation

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/redocs.git

# Navigate to the project directory
cd redocs

# Install dependencies
npm install
```

### First Build

```bash
# Generate your documentation
npm run build

# Serve locally to preview
npm run serve
```

Your documentation will be available at `http://localhost:3000`

## Project Structure

```
redocs/
├── docs/                    # 📁 Your markdown documentation files
│   ├── getting-started.md   # This file
│   ├── features.md          # Features overview
│   ├── components.md        # Available markdown components
│   ├── support.md           # Support and contact information
│   ├── intro.md             # Introduction page
│   ├── test.md              # Test page
│   ├── help.md              # Help guide
│   └── example.md           # Examples showcase
├── templates/               # 📁 HTML templates
│   └── layout.html          # Main layout template with CSS
├── dist/                    # 📁 Generated HTML files (auto-created)
├── src/                     # 📁 Build scripts
│   └── index.js             # Main build script
├── docs-config.json         # ⚙️ Navigation and site configuration
├── package.json             # 📦 Project dependencies and scripts
└── README.md                # 📖 Project overview
```

## Key Files Explained

### `docs/` Directory
This is where you write your documentation in Markdown format. Each `.md` file becomes a page in your documentation site.

### `templates/layout.html`
The main HTML template that wraps all your content. Contains:
- **CSS styling** for the entire site
- **Navigation sidebar** structure
- **Responsive design** rules
- **Typography** and component styles

### `src/index.js`
The build script that:
- **Scans** the `docs/` folder for Markdown files
- **Converts** Markdown to HTML using markdown-it
- **Applies** the layout template
- **Generates** the final HTML files in `dist/`

### `docs-config.json`
Configuration file for:
- **Navigation display names** and ordering
- **Site title** and metadata
- **Custom settings** for your documentation

## Adding Your First Page

1. **Create a new file** in the `docs/` folder:
   ```bash
   touch docs/my-page.md
   ```

2. **Write your content** in Markdown:
   ```markdown
   # My New Page
   
   This is my first documentation page!
   
   ## Features
   
   - Feature 1
   - Feature 2
   ```

3. **Build the site**:
   ```bash
   npm run build
   ```

4. **View your page** at `http://localhost:3000/my-page.html`

## Customization

### Changing the Site Title

Edit `docs-config.json`:
```json
{
  "site": {
    "title": "My Awesome Documentation"
  }
}
```

### Customizing Navigation

Update the navigation in `docs-config.json`:
```json
{
  "navigation": {
    "getting-started": {
      "displayName": "Quick Start",
      "order": 1
    }
  }
}
```

### Modifying Styles

Edit the CSS in `templates/layout.html` to change colors, fonts, and layout.

## Next Steps

- 📖 Read the [Features](./features.html) page to learn about all capabilities
- 🧩 Check out [Components](./components.html) to see available markdown elements
- 🆘 Visit [Support](./support.html) if you need help
- 🎨 Explore the [Examples](./example.html) to see what's possible

## Deployment

Your generated documentation in the `dist/` folder can be deployed to any static hosting service:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3**
- **Any web server**

The `dist/` folder contains everything needed to serve your documentation site.

---

Ready to start building your documentation? Check out the [Features](./features.html) page to learn more about what Redocs can do! 