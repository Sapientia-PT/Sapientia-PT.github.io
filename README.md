# João Miguel's Blog

A minimal personal software engineering blog built with Jekyll and GitHub Pages.

## 🚀 Quick Start

This site is automatically built and deployed by GitHub Pages. Simply push changes to the main branch and GitHub will handle the rest.

## 📝 Adding New Posts

1. Create a new file in the `_posts/` directory
2. Name it using the format: `YYYY-MM-DD-title.md` (e.g., `2025-12-28-my-new-post.md`)
3. Add front matter at the top:

```markdown
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +0000
categories: your categories
---

Your content here...
```

## 🎨 Customization

- **Site title and description**: Edit `_config.yml`
- **Styling**: Modify `assets/css/style.css`
- **Layouts**: Edit files in `_layouts/` directory
- **Favicon**: Place your favicon files in the `assets/favicons/` directory (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`)

## 📁 File Structure

```
.
├── _config.yml              # Site configuration
├── _layouts/                # Page templates
│   ├── default.html        # Base layout
│   └── post.html           # Blog post layout
├── _posts/                  # Blog posts (YYYY-MM-DD-title.md)
├── assets/css/             # Stylesheets
│   └── style.css           # Main CSS file
└── index.html              # Homepage listing all posts
```

## 🌐 Local Development

To test locally:

```bash
gem install jekyll bundler
jekyll serve
```

Visit `http://localhost:4000` in your browser.

## 📖 Writing Tips

- Use Markdown for post content
- Keep the YYYY-MM-DD-title.md naming convention
- Include meaningful front matter (title, date, categories)
- Write posts by hand in your favorite text editor
