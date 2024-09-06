export const Footer = () => {
    const footerEl = document.createElement('footer');
    footerEl.innerHTML = `
    <section class="footer sticky-bottom">
        <p class="author">Made with 🖤 by Tolevats</p>
        <p class="copy"> &copy; Copyright 2024</p>
    </section>
    `;

    return footerEl;
};