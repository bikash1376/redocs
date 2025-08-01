# Redocs Examples & Showcase

This page demonstrates all the markdown components and features available in Redocs. Use this as a reference for creating your own documentation.

## 📝 Text Elements

### Headers
# Heading 1 - Main Page Title
## Heading 2 - Section Title
### Heading 3 - Subsection
#### Heading 4 - Minor Section
##### Heading 5 - Small Section
###### Heading 6 - Tiny Section

### Paragraphs and Emphasis

This is a regular paragraph with **bold text** and *italic text*. You can also use ***bold and italic together***.

Here's another paragraph with `inline code` and [a link to the features page](./features.html).

### Text Styling Examples

- **Bold text** using `**text**`
- *Italic text* using `*text*`
- ***Bold and italic*** using `***text***`
- `Inline code` using backticks
- ~~Strikethrough text~~ using `~~text~~`

## 🔗 Links and References

### External Links
- [Visit GitHub](https://github.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Node.js Documentation](https://nodejs.org/)

### Internal Links
- [Getting Started](./getting-started.html)
- [Features Overview](./features.html)
- [Markdown Components](./components.html)
- [Support & Contact](./support.html)

### Reference Links
[GitHub][github-link] and [Node.js][nodejs-link] are essential tools.

[github-link]: https://github.com/
[nodejs-link]: https://nodejs.org/

## 🖼️ Images

### Basic Images
![Redocs Logo](https://via.placeholder.com/400x200/0366d6/ffffff?text=Redocs+Logo)

### Images with Links
[![Click to visit GitHub](https://via.placeholder.com/300x150/24292e/ffffff?text=GitHub)](https://github.com/)

### Local Images (Example)
![Local Screenshot](./images/screenshot.png "Documentation Screenshot")

## 📋 Lists

### Unordered Lists
- **Redocs Features:**
  - Markdown to HTML conversion
  - Dynamic navigation
  - Syntax highlighting
  - Responsive design
  - Custom themes

### Alternative Bullet Style
* Another way to create lists
* Using asterisks instead
* Works the same way

### Ordered Lists
1. **Install Node.js**
2. **Clone the repository**
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Build the documentation**
   ```bash
   npm run build
   ```
5. **Serve locally**
   ```bash
   npm run serve
   ```

### Nested Lists
- Main category
  - Subcategory 1
    - Item 1.1
    - Item 1.2
  - Subcategory 2
    - Item 2.1
    - Item 2.2
- Another main category
  1. Numbered sub-item
  2. Another numbered item

### Task Lists
- [x] Create markdown files
- [x] Set up build system
- [ ] Add custom themes
- [ ] Deploy to production
- [ ] Write documentation

## 💻 Code Blocks

### JavaScript Example
```javascript
// Redocs build script example
const fs = require('fs-extra');
const path = require('path');
const md = require('markdown-it')();

function buildDocs() {
  const docsDir = path.join(__dirname, 'docs');
  const files = fs.readdirSync(docsDir);
  
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(docsDir, file));
      const html = md.render(content.toString());
      // Process and save HTML
    }
  });
}
```

### Python Example
```python
# Example Python code
def greet_user(name):
    """Greet a user with a personalized message."""
    return f"Hello, {name}! Welcome to Redocs documentation."
    
# Usage
message = greet_user("Developer")
print(message)
```

### CSS Example
```css
/* Redocs styling example */
.documentation {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.sidebar {
  width: 280px;
  background: #fff;
  border-right: 1px solid #e1e4e8;
  position: fixed;
  height: 100vh;
}
```

### HTML Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redocs Documentation</title>
</head>
<body>
  <div class="container">
    <nav class="sidebar">
      <!-- Navigation content -->
    </nav>
    <main class="content">
      <!-- Main content -->
    </main>
  </div>
</body>
</html>
```

### Bash Commands
```bash
# Install dependencies
npm install

# Build documentation
npm run build

# Serve locally
npm run serve

# Check file structure
ls -la docs/
```

## 📊 Tables

### Basic Table
| Feature | Description | Status |
|---------|-------------|--------|
| Markdown Support | Full markdown-it compatibility | ✅ |
| Syntax Highlighting | Code blocks with colors | ✅ |
| Responsive Design | Mobile-friendly layout | ✅ |
| Dynamic Navigation | Auto-generated menu | ✅ |

### Aligned Table
| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Content | Content | Content |
| More content | More content | More content |
| Even more | Even more | Even more |

### Complex Table
| Component | Syntax | Example | Renders As |
|-----------|--------|---------|------------|
| **Bold** | `**text**` | `**Bold text**` | **Bold text** |
| *Italic* | `*text*` | `*Italic text*` | *Italic text* |
| `Code` | `` `code` `` | `` `console.log()` `` | `console.log()` |
| [Link](url) | `[text](url)` | `[GitHub](https://github.com/)` | [GitHub](https://github.com/) |

## 💬 Blockquotes

### Basic Blockquote
> This is a simple blockquote that highlights important information or quotes from other sources.

### Blockquote with Attribution
> The best way to predict the future is to invent it.
> 
> — Alan Kay

### Nested Blockquotes
> Main quote
> > Nested quote
> > > Deeply nested quote

### Blockquote with Code
> Here's a blockquote containing code:
> ```javascript
> console.log("Hello from blockquote!");
> ```

## 📏 Horizontal Rules

Use horizontal rules to separate sections:

---

Above the rule

---

Below the rule

## 🔧 Advanced Features

### Definition Lists
Term 1
: Definition 1

Term 2
: Definition 2
: Another definition for term 2

### Abbreviations
*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
*[JS]: JavaScript

The HTML, CSS, and JS are used for web development.

### Footnotes
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content that appears at the bottom of the page.

### Subscript and Superscript
- H~2~O is water
- X^2^ is X squared
- E = mc^2^ (Einstein's equation)

### Highlighted Text
==This text is highlighted== using the mark syntax.

### Inserted Text
++This text is inserted++ using the insert syntax.

## 🎨 HTML Integration

### Custom HTML Elements
<div class="alert alert-info">
  <strong>Info:</strong> This is an HTML alert box that can be used for important notices.
</div>

### Collapsible Content
<details>
  <summary>Click to expand</summary>
  <p>This content is hidden by default and can be expanded by clicking the summary.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</details>

## 📱 Responsive Elements

### Responsive Table
| Very Wide Table | With Many | Columns | That | Might | Overflow | On Mobile |
|-----------------|-----------|---------|------|-------|----------|-----------|
| Content | Content | Content | Content | Content | Content | Content |

### Responsive Image
![Responsive Image](https://via.placeholder.com/800x400/0366d6/ffffff?text=Responsive+Image)

## 🎯 Complete Example

Here's a complete example combining multiple components:

### API Documentation Example

> **Note**: This example shows how to document an API endpoint.

#### Authentication
All API requests require authentication via API key in the header:

```javascript
const headers = {
  'Authorization': 'Bearer your-api-key',
  'Content-Type': 'application/json'
};
```

#### Endpoint: GET /users

**Description**: Retrieve a list of users

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | number | No | Page number (default: 1) |
| `limit` | number | No | Items per page (default: 10) |
| `search` | string | No | Search term |

**Example Request:**
```bash
curl -X GET "https://api.example.com/users?page=1&limit=5" \
  -H "Authorization: Bearer your-api-key"
```

**Response Format:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "pagination": {
    "page": 1,
    "total": 100,
    "pages": 20
  }
}
```

**Error Handling:**
```javascript
try {
  const response = await fetch('/users');
  const data = await response.json();
} catch (error) {
  console.error('Error:', error.message);
}
```

---

This comprehensive example demonstrates all the markdown components and features available in Redocs. Use these patterns to create rich, well-structured documentation! 