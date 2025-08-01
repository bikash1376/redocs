# Help: Building a Docs Site with Markdown and markdown-it

This guide explains how to use `.md` files and the `markdown-it` library to build a documentation site from scratch.

---

## What is Markdown?

Markdown is a lightweight markup language for formatting text.  
Files with the `.md` extension use Markdown syntax.

### Common Markdown Syntax

- **Headings:**  
  ```
  # Heading 1
  ## Heading 2
  ### Heading 3
  ```
- **Bold & Italic:**  
  ```
  **bold**
  *italic*
  ```
- **Lists:**  
  ```
  - Item 1
  - Item 2
  ```
- **Links:**  
  ```
  [External Site](https://example.com)
  [Local File](./other.md)
  ```
- **Images:**  
  ```
  ![Alt Text](https://example.com/image.png)
  ```
- **Code Blocks:**  
  ```
  ```js
  console.log('Hello, world!');
  ```
  ```

---

## Using markdown-it

[`markdown-it`](https://github.com/markdown-it/markdown-it) is a fast Markdown parser for JavaScript.

### Basic Usage

1. **Install markdown-it:**
   ```
   npm install markdown-it
   ```

2. **Parse Markdown in Node.js:**
   ```js
   const MarkdownIt = require('markdown-it');
   const md = new MarkdownIt();
   const result = md.render('# Hello Markdown!');
   console.log(result); // Outputs HTML
   ```

---

## Building a Docs Site

### Essential Components

- **Markdown Files (`.md`):**  
  Write your documentation in Markdown files.

- **Express Server:**  
  Serve your docs using [Express](https://expressjs.com/).

- **markdown-it:**  
  Convert Markdown to HTML on the server.

- **Templates:**  
  Use EJS or another templating engine for consistent layouts.

### Example Workflow

1. **Create Markdown Files:**  
   Place docs in a `docs/` folder.

2. **Set Up Express Server:**  
   Serve static files and render Markdown.

3. **Render Markdown:**  
   Use `markdown-it` to convert `.md` files to HTML.

4. **Use Templates:**  
   Wrap rendered HTML in a layout template.

---

## Useful Tips

- Organize docs by topic in subfolders.
- Link between docs using relative paths.
- Use images and code blocks for clarity.
- Preview Markdown locally before publishing.

---

For more details, see the [markdown-it documentation](https://github.com/markdown-it/markdown-it) and [Markdown Guide](https://www.markdownguide.org/)