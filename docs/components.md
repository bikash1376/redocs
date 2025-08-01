# Markdown Components & Elements

Redocs supports all standard Markdown syntax plus additional features from markdown-it. This guide covers every component you can use in your documentation.

## 📝 Basic Text Elements

### Headers
Create hierarchical document structure with headers:

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

**Renders as:**
- **H1** - Large, prominent heading with bottom border
- **H2** - Section heading with top padding
- **H3** - Subsection heading
- **H4-H6** - Smaller subsection headings

### Paragraphs
Regular text content:

```markdown
This is a regular paragraph with normal text.

This is another paragraph separated by a blank line.
```

### Emphasis
Add emphasis to your text:

```markdown
*This text is italic*
_This is also italic_

**This text is bold**
__This is also bold__

***This text is bold and italic***
___This is also bold and italic___
```

### Inline Code
Highlight code within text:

```markdown
Use the `npm install` command to install dependencies.
```

## 🔗 Links & References

### External Links
Link to external websites:

```markdown
[Visit GitHub](https://github.com/)
[External Documentation](https://example.com "Optional title")
```

### Internal Links
Link to other pages in your documentation:

```markdown
[See the Introduction](./intro.html)
[Check out Examples](./example.html)
```

### Reference Links
Create reusable link references:

```markdown
[GitHub][github-link]
[Documentation][docs-link]

[github-link]: https://github.com/
[docs-link]: https://example.com "Documentation site"
```

## 🖼️ Images

### Basic Images
Add images to your documentation:

```markdown
![Alt text](https://example.com/image.png)
![Logo](https://example.com/logo.png "Company Logo")
```

### Local Images
Reference local image files:

```markdown
![Screenshot](./images/screenshot.png)
![Diagram](./assets/diagram.svg "System Architecture")
```

### Image with Links
Make images clickable:

```markdown
[![Click me](https://example.com/image.png)](https://example.com/)
```

## 📋 Lists

### Unordered Lists
Create bullet point lists:

```markdown
- Item 1
- Item 2
- Item 3

* Alternative bullet style
* Another item
* Third item
```

### Ordered Lists
Create numbered lists:

```markdown
1. First step
2. Second step
3. Third step

1. Start with any number
5. Continue with any number
10. Numbers will be corrected automatically
```

### Nested Lists
Create hierarchical lists:

```markdown
- Main item
  - Sub item
    - Sub-sub item
  - Another sub item
- Another main item
  1. Numbered sub item
  2. Another numbered sub item
```

### Task Lists
Create checkable task lists:

```markdown
- [x] Completed task
- [ ] Pending task
- [ ] Another pending task
```

## 💻 Code Blocks

### Fenced Code Blocks
Create syntax-highlighted code blocks:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```
````

### Language-Specific Highlighting
Specify the programming language:

````markdown
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```
````

### Inline Code
Highlight code within text:

```markdown
Use the `console.log()` function to output to the console.
```

### Indented Code Blocks
Alternative syntax for code blocks:

```markdown
    function example() {
      return "This is indented code";
    }
```

## 📊 Tables

### Basic Tables
Create structured data tables:

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Aligned Tables
Align table content:

```markdown
| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Content      | Content        | Content       |
| More content | More content   | More content  |
```

### Complex Tables
Tables with various content:

```markdown
| Feature | Description | Status | Priority |
|---------|-------------|--------|----------|
| Markdown Support | Full markdown-it features | ✅ | High |
| Syntax Highlighting | Code blocks with colors | ✅ | High |
| Responsive Design | Mobile-friendly layout | ✅ | Medium |
| Custom Themes | Multiple color schemes | 🚧 | Low |
```

## 💬 Blockquotes

### Basic Blockquotes
Quote text or highlight important information:

```markdown
> This is a blockquote.
> It can span multiple lines.

> This is another blockquote with a single line.
```

### Nested Blockquotes
Create nested quote structures:

```markdown
> Main quote
> > Nested quote
> > > Deeply nested quote
```

### Blockquotes with Attribution
Add attribution to quotes:

```markdown
> The best way to predict the future is to invent it.
> 
> — Alan Kay
```

## 📏 Horizontal Rules

Create visual separators:

```markdown
---

Above the rule

---

Below the rule
```

Alternative syntax:
```markdown
***
___
```

## 🔧 Advanced markdown-it Features

### Definition Lists
Create definition lists:

```markdown
Term 1
: Definition 1

Term 2
: Definition 2
: Another definition for term 2
```

### Abbreviations
Define abbreviations:

```markdown
*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets

The HTML and CSS are used for web development.
```

### Footnotes
Add footnotes to your content:

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

### Strikethrough
~~Strike through text~~:

```markdown
~~This text is strikethrough~~
```

### Subscript and Superscript
Add subscript and superscript:

```markdown
H~2~O is water.
X^2^ is X squared.
```

### Mark
==Highlight important text==:

```markdown
==This text is highlighted==
```

### Insert
++Insert new text++:

```markdown
++This text is inserted++
```

## 🎨 Styling Features

### Custom CSS Classes
Add custom CSS classes (if supported by your theme):

```markdown
{.my-custom-class}
This paragraph has a custom CSS class.
```

### HTML Integration
Use raw HTML when needed:

```markdown
<div class="alert alert-info">
  This is an info alert using HTML.
</div>

<details>
  <summary>Click to expand</summary>
  This content is hidden by default.
</details>
```

## 📱 Responsive Elements

### Responsive Images
Images automatically scale on mobile devices:

```markdown
![Responsive Image](https://example.com/image.png)
```

### Responsive Tables
Tables automatically become scrollable on mobile:

```markdown
| Wide Table | With Many | Columns | That | Might | Overflow |
|------------|-----------|---------|------|-------|----------|
| Content    | Content   | Content | Content | Content | Content |
```

## 🔍 Best Practices

### Accessibility
- **Alt Text**: Always provide meaningful alt text for images
- **Link Text**: Use descriptive link text instead of "click here"
- **Headers**: Use proper heading hierarchy (H1 → H2 → H3)

### Performance
- **Image Optimization**: Use optimized images for faster loading
- **Code Blocks**: Specify language for better syntax highlighting
- **Links**: Use relative links for internal documentation

### Readability
- **Line Length**: Keep lines under 80 characters for code blocks
- **Spacing**: Use blank lines to separate sections
- **Consistency**: Use consistent formatting throughout

## 🎯 Component Examples

### Complete Example
Here's a complete example combining multiple components:

```markdown
# API Documentation

## Authentication

> **Note**: All API requests require authentication.

### Getting Started

1. **Install the SDK**:
   ```bash
   npm install my-api-sdk
   ```

2. **Initialize the client**:
   ```javascript
   const client = new APIClient({
     apiKey: 'your-api-key'
   });
   ```

3. **Make your first request**:
   ```javascript
   const data = await client.get('/users');
   ```

### Response Format

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | User ID |
| `name` | string | User name |
| `email` | string | User email |

### Error Handling

```javascript
try {
  const user = await client.get('/users/123');
} catch (error) {
  console.error('Error:', error.message);
}
```

---

For more information, see the [full API reference](./api-reference.html).
```

This comprehensive guide covers all the markdown components and features available in Redocs. Use these elements to create rich, well-structured documentation! 