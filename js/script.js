// ---=== Circuit Breach JS ===---

document.addEventListener('DOMContentLoaded', async () => { // Make listener async
    console.log('Circuit Breach Systems Online. Loading Partials...');

    // --- Configuration ---
    const partialsBasePath = 'partials/';
    const currentPath = window.location.pathname;
    const isSubdirectory = currentPath.length > 1 && currentPath.substring(1).includes('/');
    const pathPrefix = isSubdirectory ? '../' : '';

    // --- Function to Load HTML Partial (Now returns Promise) ---
    const loadPartial = async (placeholderId, partialFile) => {
        const placeholder = document.getElementById(placeholderId);
        const filePath = pathPrefix + partialsBasePath + partialFile;

        if (!placeholder) {
            console.warn(`Placeholder element #${placeholderId} not found.`);
            return; // Return undefined or throw error if critical
        }

        try {
            console.log(`Attempting to fetch partial: ${filePath}`);
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} for ${filePath}`);
            }
            const html = await response.text();
            placeholder.innerHTML = html;
            console.log(`Successfully loaded ${partialFile} into #${placeholderId}`);

            // Adjust asset paths *within the loaded content*
            adjustAssetPaths(placeholder, isSubdirectory);

        } catch (error) {
            console.error(`Error loading partial ${partialFile}:`, error);
            placeholder.innerHTML = `<p style="color: var(--color-secondary);">Error loading ${placeholderId}. Network issue or file not found at ${filePath}.</p>`;
            throw error; // Re-throw error to signal failure if needed
        }
    };

    // --- Function to Adjust Asset Paths ---
    const adjustAssetPaths = (container, isSubdir) => {
        // Only adjust if needed and in a subdirectory
        // Primarily for sidebar image in this example, but could be extended
        if (!isSubdir) return;

        const images = container.querySelectorAll('img[data-base-src]');
        images.forEach(img => {
            const baseSrc = img.getAttribute('data-base-src');
            if (baseSrc) {
                 // If using root-relative in partials, no prefix needed here
                 // If using relative-from-root in data-base-src, keep prefix:
                // const correctedSrc = baseSrc.startsWith('../') ? baseSrc : `../${baseSrc}`;
                // Let's assume data-base-src is relative from root:
                 img.src = `../${baseSrc}`;
                 console.log(`Adjusted image src to: ${img.src}`);
            }
        });
         // Add similar logic for logo if needed
    };


    // --- Function to Update Active Navigation Link ---
    const updateActiveNav = () => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (!headerPlaceholder) return;

        const navLinks = headerPlaceholder.querySelectorAll('.main-nav a');
        const currentPathname = window.location.pathname; // e.g., "/pages/about.html" or "/index.html"

        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove active class from all links first

            const linkPathname = new URL(link.href, window.location.origin).pathname; // Get pathname from potentially full URL

            // Simple comparison (might need refinement for index pages)
            if (linkPathname === currentPathname || (currentPathname === '/' && linkPathname === '/index.html')) {
                 link.classList.add('active');
                 console.log(`Active link set for: ${linkPathname}`);
            }
        });
    };

    // --- Function to Update Footer Year ---
    const updateFooterYear = () => {
        // Ensure footer is loaded before trying to find the span
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            const currentYearSpan = footerPlaceholder.querySelector('#current-year'); // Query within footer
            if (currentYearSpan) {
                currentYearSpan.textContent = new Date().getFullYear();
            } else {
                console.warn("Element with ID 'current-year' not found in loaded footer.");
            }
        }
    };

    // --- Load All Partials Concurrently (if desired) ---
    try {
        await Promise.all([
            loadPartial('header-placeholder', 'header.html'),
            loadPartial('footer-placeholder', 'footer.html'),
            loadPartial('sidebar-placeholder', 'sidebar_right.html')
            // Add other partials here if needed
        ]);

        // --- Post-Load Actions (Run after ALL partials are loaded) ---
        updateActiveNav(); // Set the active navigation link
        updateFooterYear(); // Update the footer year

        // --- Animation Effect (Run after content is in place) ---
        // Slight delay to ensure rendering after injection
        setTimeout(() => {
            const dynamicElements = document.querySelectorAll('.article-preview, .full-article, .page-content, .sidebar-widget, .site-header'); // Include header elements if desired
            dynamicElements.forEach((element, index) => {
                if (element.style.opacity !== '1') {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                    element.style.transition = `opacity 0.5s ease-out ${index * 0.05}s, transform 0.5s ease-out ${index * 0.05}s`;

                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, 50);
                }
            });
        }, 100); // Small delay

    } catch (error) {
        console.error("Failed to load one or more critical partials.", error);
        // Optionally display a user-facing error message
    }

}); // End DOMContentLoaded listener