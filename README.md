
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


![Circuit Breach](https://github.com/n1ghtw1re/Circuit_Breach/blob/main/assets/images/screenshot.png)


## LIVE PREVIEW: https://circuit-breach.neocities.org/

---

## About This Project

Circuit Breach was originally conceived as a cyberpunk media analysis blog focusing on genre themes, critique of tech utopianism, and philosophical/sociological exploration. This repository provides the **fully functional static site template** built for that concept.

It's designed as a lightweight, fast, and easily maintainable blog foundation using only **HTML, CSS, and vanilla JavaScript**. No databases, no complex build tools, no frameworks required. It features a distinct edgy cyberpunk aesthetic inspired by works like Cyberpunk 2077 and retro hacker vibes.

This template is ideal for:

*   Anyone wanting a simple, fast blog without server-side dependencies.
*   Personal blogs, portfolios, or project sites with a cyberpunk/tech/sci-fi theme.
*   Learning basic web development structure and JavaScript DOM manipulation (for partials).
*   Quickly setting up a site focused on content delivery.

## Features

*   **Pure Static Site:** Runs entirely in the browser. No backend needed.
*   **Cyberpunk Aesthetic:** Dark theme with neon accents (Cyan, Magenta, Yellow/Green), monospace fonts, and subtle scanline effects.
*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Maintainable Structure:** Uses JavaScript to dynamically load reusable HTML partials (Header, Footer, Sidebar) into placeholder elements.
*   **Organized Files:** Clear folder structure for CSS, JS, articles, pages, partials, and assets.
*   **SEO Friendly Basics:** Semantic HTML structure and meta tags included.
*   **Easy Content Addition:** Simply create new HTML files for articles/pages and update the index/navigation.
*   **Sample Content:** Includes homepage (`index.html`), an about page (`pages/about.html`), and a sample article (`articles/circuit-breach-detected.html`).
*   **Minimal JavaScript:** Vanilla JS used primarily for loading partials, setting the active nav link, updating the copyright year, and simple entry animations.
## Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/circuit-breach.git
    ```
    (Replace `your-username` with your actual GitHub username)

2.  **Navigate to the Directory:**
    ```bash
    cd circuit-breach
    ```

3.  **Option 1: Open Directly (Limited Functionality):**
    *   You can simply double-click `index.html` to open it in your browser using the `file:///` protocol.
    *   **Caveat:** The dynamic loading of partials (`header.html`, `footer.html`, etc.) via JavaScript's `fetch` API might be blocked by browser security policies when running directly from the filesystem (`file:///`). Root-relative links (`/index.html`) in the header partial **will likely fail**.

4.  **Option 2: Use a Local Web Server (Recommended):**
    *   For full functionality (especially partial loading and root-relative links), run the site using a simple local web server.
    *   **Example using VS Code & Live Server Extension:**
        1.  Install the "Live Server" extension in Visual Studio Code.
        2.  Open the `circuit-breach` folder in VS Code.
        3.  Right-click on `index.html` in the Explorer panel and select "Open with Live Server".
        4.  This will open the site in your browser (usually at `http://127.0.0.1:5500` or similar), allowing `fetch` and root-relative links to work correctly.
    *   Other simple servers like Python's `http.server` (`python -m http.server` in the terminal) or Node.js `http-server` (`npx http-server`) also work.

## Usage - Adding Content

### Adding a New Blog Article

1.  **Create the Article File:** Create a new `.html` file inside the `articles/` directory (e.g., `articles/my-new-post.html`).
2.  **Structure the File:** Copy the basic structure from an existing article (like `articles/circuit-breach-detected.html`). Make sure it includes:
    *   The `DOCTYPE`, `<html>`, `<head>` (with correct relative path `../css/style.css`), and `<body>`.
    *   The `<div class="scanlines"></div>` and `<div class="container">`.
    *   The `<div id="header-placeholder"></div>`.
    *   The main content area, typically within `<main class="main-content">` using `<article class="full-article">`.
    *   **No Sidebar Placeholder** (as per current design for articles).
    *   The `<footer id="footer-placeholder"></div>`.
    *   The script tag with the correct relative path: `<script src="../js/script.js"></script>`.
3.  **Write Your Content:** Edit the `<title>`, meta description, article title (`<h1 class="article-title-main">`), meta information (`<p class="meta article-meta">`), and the main content within `<div class="article-content">`.
4.  **Update the Homepage (`index.html`):**
    *   Open `index.html`.
    *   Find the `<section class="article-list">`.
    *   Copy an existing `<article class="article-preview">...</article>` block.
    *   Paste the copied block below the existing ones.
    *   Update the `href` attributes in the new preview block to point to your new article file (e.g., `href="articles/my-new-post.html"`).
    *   Update the article title (`<h3 class="article-title">`), timestamp (`<time>`), source/author, and the excerpt paragraph (`<div class="excerpt">`) within the preview block.

### Adding a New Static Page (e.g., Contact, Archive)

1.  **Create the Page File:** Create a new `.html` file inside the `pages/` directory (e.g., `pages/contact.html`).
2.  **Structure the File:** Copy the structure from `pages/about.html`. It should include placeholders for the header, footer, and potentially the sidebar if desired for that page type. Ensure CSS/JS paths use `../`.
3.  **Write Content:** Add your page-specific title, meta tags, and content within `<main class="main-content">`. Use appropriate semantic elements.
4.  **Update Navigation:**
    *   Open `partials/header.html`.
    *   Add a new list item `<li>` to the `<nav class="main-nav"><ul>` section.
    *   Include an anchor tag `<a>` pointing to your new page using a **root-relative path** (e.g., `href="/pages/contact.html"`). Give it appropriate link text (e.g., `// Contact_Signal`).
    *   The `js/script.js` will automatically handle highlighting the active link based on the URL.

## Customization

*   **Appearance (CSS):**
    *   Modify `css/style.css`.
    *   Key colors, fonts, and dimensions are defined as CSS variables in the `:root` block at the top for easy changes.
    *   Adjust styles for headers, typography, articles, sidebar, footer, etc.
*   **Layout:** Modify the grid layout in `.main-layout` in `style.css` or adjust HTML structure in the main page/article files.
*   **Header/Footer/Sidebar Content:** Edit the HTML directly in the corresponding files within the `partials/` folder.
*   **JavaScript Behavior:** Modify `js/script.js` to change animation timings, partial loading logic, or add new dynamic features.
*   **Images & Assets:** Add your own images to `assets/images/` and update paths in the HTML where necessary. Remember to use `data-base-src="assets/images/your-image.png"` and relative `src` attributes in partials if they need path correction for subdirectories (like the sidebar image).

## Technology Stack

*   HTML5
*   CSS3 (using CSS Variables)
*   Vanilla JavaScript (ES6+)

## Contributing

Contributions are welcome! If you find bugs, have suggestions for improvements, or want to add new features:

1.  **Check for existing issues:** See if your issue or idea has already been reported.
2.  **Open an issue:** If not, open a new issue describing the bug or feature request.
3.  **Fork the repository:** Create your own copy of the project.
4.  **Create a branch:** Make your changes in a dedicated branch (`git checkout -b feature/your-feature-name` or `bugfix/issue-description`).
5.  **Commit your changes:** Write clear and concise commit messages.
6.  **Push to your fork:** Upload your changes to your forked repository.
7.  **Open a Pull Request:** Submit a pull request back to the main repository, explaining the changes you've made.

Please adhere to standard coding practices and maintain the project's overall style and simplicity.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details. (You should create a file named `LICENSE` in the root and paste the MIT license text into it).

---

Enjoy building your own corner of the net with the Circuit Breach template!
