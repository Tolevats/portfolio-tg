export const Footer = () => {
    const footerEl = document.createElement('footer');
    footerEl.innerHTML = `
    <section class="footer">
        <p class="author">Made by Pas with 🖤</p>
        <p class="copy">2024 &copy;</p>
    </section>
    `;

    return footerEl;
};