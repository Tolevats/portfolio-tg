export const Nav = () => {
    const navEl = document.createElement('nav');
    navEl.innerHTML = `
    <nav class="bottom">
        <div class="container-nav">
            <h5>Discover more</h5>
            <ul class="other-sections">
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/journal">Journal</a></li>
            </ul>
            <ul class="alters">
                <li><a href="/alice">Alice</a></li>
                <li><a href="/buck">Buck</a></li>
                <li><a href="/t">T</a></li>
            </ul>
            <div class="social-links">
                <h5>Stay in touch</h5>
                <a target="_blank" href="https://www.linkedin.com">
                    <img alt="LinkedIn" src=https://img.icons8.com/?size=100&id=80451&format=png&color=000000/>
                </a>
                <a target="_blank" href="https://www.instagram.com">
                    <img alt="Instagram" src=https://img.icons8.com/?size=100&id=5eT5OnLluNOx&format=png&color=000000/>
                </a>
            </div>
            <form action="newsletter.php" method="post">
            <h5>Join my mailing list</h5>
            <img alt="mail" src="https://img.icons8.com/?size=30&id=CXYJjRfKlwI9&format=png&color=000000"/>
                <input type="text" name="name" placeholder="Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="submit" value="Subscribe">
            </form>
        </div>
    </nav>
    `

    return navEl;
}