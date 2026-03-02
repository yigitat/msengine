:root {
    /* Premium IMDb-like Dark Theme */
    --bg-main: #060606;
    --bg-surface: #101013;
    --bg-card: #16161a;
    --primary-color: #e0811b;
    /* IMDb Yellow/Gold */
    --primary-glow: rgba(245, 197, 24, 0.4);
    --secondary-color: #e0811b;
    --text-main: #ffffff;
    --text-muted: #9ca3af;
    --border-color: rgba(255, 255, 255, 0.08);
    --border-highlight: rgba(245, 197, 24, 0.3);

    --glass-bg: rgba(10, 10, 12, 0.7);
    --glass-border: rgba(255, 255, 255, 0.05);

    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Outfit', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: var(--font-body);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Background Glow Effect */
body::before {
    content: '';
    position: fixed;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 50%;
    background: radial-gradient(ellipse at center, rgba(245, 197, 24, 0.06) 0%, transparent 70%);
    z-index: -1;
    pointer-events: none;
}

.hidden {
    display: none !important;
}

a {
    color: inherit;
    text-decoration: none;
    transition: var(--transition);
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
}

.highlight {
    color: var(--primary-color);
    position: relative;
    display: inline-block;
}

.text-muted {
    color: var(--text-muted);
}

/* Glassmorphism */
.glass {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--glass-border);
}

.glass-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    transition: var(--transition);
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 1rem 0;
}

.nav-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: var(--text-main);
    display: flex;
    align-items: center;
}

.logo span {
    color: var(--bg-main);
    background-color: var(--primary-color);
    padding: 0 0.4rem;
    border-radius: 4px;
    margin-left: 0.3rem;
}

.icon-btn {
    background: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-muted);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
}

.icon-btn:hover {
    color: var(--primary-color);
    border-color: var(--primary-color);
    background: rgba(245, 197, 24, 0.1);
}

/* Main Layout */
main {
    flex: 1;
    margin-top: 140px;
    margin-bottom: 4rem;
}

/* Search Section */
.search-section {
    text-align: center;
    margin-bottom: 4rem;
}

.page-title {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    line-height: 1.2;
    font-weight: 700;
}

.search-form {
    max-width: 800px;
    margin: 0 auto;
}

.search-wrapper {
    display: flex;
    align-items: center;
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: 50px;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    transition: var(--transition);
}

.search-wrapper:focus-within {
    border-color: var(--border-highlight);
    box-shadow: 0 0 20px rgba(245, 197, 24, 0.1);
}

.search-icon {
    color: var(--text-muted);
    width: 20px;
    height: 20px;
}

#searchInput {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--text-main);
    font-size: 1.1rem;
    padding: 0.8rem 1rem;
    outline: none;
    font-family: inherit;
}

#searchInput::placeholder {
    color: var(--text-muted);
}

.type-select {
    background: transparent;
    border: none;
    border-left: 1px solid var(--border-color);
    color: var(--text-main);
    padding: 0 1rem;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    font-family: inherit;
    appearance: none;
}

.type-select option {
    background: var(--bg-surface);
    color: var(--text-main);
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    font-family: inherit;
}

.btn-primary {
    background: var(--primary-color);
    color: var(--bg-main);
    box-shadow: 0 4px 15px rgba(245, 197, 24, 0.2);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 197, 24, 0.4);
    background: var(--secondary-color);
}

.btn-outline {
    background: transparent;
    color: var(--text-main);
    border: 1px solid var(--border-color);
}

.btn-outline:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
}

/* Grid Layout */
.movies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 2rem;
}

/* Movie Card */
.movie-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    background: var(--bg-surface);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.movie-card:hover {
    transform: scale(1.05) translateY(-5px);
    z-index: 10;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.movie-poster-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 2/3;
    overflow: hidden;
}

.movie-poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.movie-card:hover .movie-poster {
    transform: scale(1.1);
}

.movie-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem 1rem 1rem 1rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.7), transparent);
    transform: translateY(10px);
    opacity: 0.9;
    transition: var(--transition);
}

.movie-card:hover .movie-overlay {
    transform: translateY(0);
    opacity: 1;
}

.movie-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.movie-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: var(--text-muted);
}

.movie-type {
    text-transform: capitalize;
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 8px;
    border-radius: 4px;
}

/* Modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
}

.modal-content {
    position: relative;
    width: 90%;
    max-width: 900px;
    max-height: 90vh;
    overflow-y: auto;
    z-index: 2001;
    display: flex;
    flex-direction: column;
    animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes scaleIn {
    from {
        transform: scale(0.95);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid var(--border-color);
    color: white;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: var(--transition);
}

.close-btn:hover {
    background: var(--primary-color);
    color: var(--bg-main);
    transform: rotate(90deg);
}

/* Modal Body Detail */
.movie-detail-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2.5rem;
}

.detail-poster {
    flex: 0 0 300px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    display: block;
    /* to avoid inline gaps */
}

.detail-poster img {
    width: 100%;
    border-radius: 12px;
}

.detail-info {
    flex: 1;
    min-width: 300px;
}

.detail-title {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 0.5rem;
}

.detail-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
    color: var(--text-muted);
    font-size: 0.95rem;
}

.imdb-rating {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(245, 197, 24, 0.1);
    color: var(--primary-color);
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: 600;
    border: 1px solid rgba(245, 197, 24, 0.2);
}

.detail-plot {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: #e5e7eb;
}

.detail-stats {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.8rem 1.5rem;
    font-size: 0.95rem;
}

.stat-label {
    color: var(--text-muted);
    font-weight: 500;
}

.stat-value {
    color: var(--text-main);
}

/* API Modal */
.api-modal {
    max-width: 500px;
    padding: 3rem;
}

.api-modal h2 {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
}

.api-modal p {
    margin-bottom: 2rem;
}

.api-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.api-form input {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    color: var(--text-main);
    padding: 1rem;
    border-radius: 8px;
    font-size: 1.1rem;
    outline: none;
    transition: var(--transition);
}

.api-form input:focus {
    border-color: var(--primary-color);
}

.api-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

/* Loader */
.loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 3rem 0;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(245, 197, 24, 0.2);
    border-top-color: var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.error-message {
    text-align: center;
    padding: 2rem;
    background: rgba(220, 38, 38, 0.1);
    border: 1px solid rgba(220, 38, 38, 0.2);
    color: #fca5a5;
    border-radius: 12px;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* Scrollbar customization */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--bg-main);
}

::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* Responsive */
@media (max-width: 768px) {
    .page-title {
        font-size: 2.2rem;
    }

    .search-wrapper {
        flex-direction: column;
        border-radius: 12px;
        padding: 0.5rem;
        gap: 0.5rem;
        background: transparent;
        border: none;
    }

    .search-wrapper>* {
        width: 100%;
        border-radius: 8px;
        background: var(--bg-surface);
        border: 1px solid var(--border-color);
    }

    .search-icon {
        display: none;
    }

    .type-select {
        padding: 0.8rem;
        border: 1px solid var(--border-color);
    }

    .btn-primary {
        padding: 0.8rem;
    }

    .movie-detail-container {
        flex-direction: column;
        padding: 1.5rem;
    }

    .detail-poster {
        flex: 0 0 auto;
        width: 200px;
        margin: 0 auto;
    }
}

/* Footer Container */
footer {
    border-top: 1px solid var(--border-color);
    padding: 2rem 0;
    margin-top: auto;
    /* Push to bottom if content is short */
    background: var(--bg-surface);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-content p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

.footer-links {
    color: var(--text-muted);
    font-size: 0.95rem;
}

.footer-links a {
    color: var(--primary-color);
    font-weight: 600;
    margin-left: 0.5rem;
}

.footer-links a:hover {
    color: var(--secondary-color);
    text-shadow: 0 0 10px rgba(245, 197, 24, 0.5);
}

@media (max-width: 600px) {
    .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}
