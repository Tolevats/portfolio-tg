export const Nav = () => {
    const navEl = document.createElement('nav');
    navEl.innerHTML = `
    </nav>
        <div class="container-nav">
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
                <a href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
            </div>
            <form action="newsletter.php" method="post">
                <input type="text" name="name" placeholder="Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="submit" value="Subscribe">
            </form>
        </div>
    </nav>
    `
//to-do: add colo to container navbar 

    return navEl;
}