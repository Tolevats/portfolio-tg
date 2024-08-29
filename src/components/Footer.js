export const Footer = () => {
    const footerEl = document.createElement('footer');
    footerEl.innerHTML = `
    <section class="footer fixed-bottom">
        <p class="author">Made with 🖤 by Tolevats</p>
        <p class="copy">2024 &copy;</p>
    </section>
    `;

    return footerEl;
};