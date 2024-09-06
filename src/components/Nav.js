export const Nav = () => {
    const navEl = document.createElement('nav');
    navEl.innerHTML = `
<nav class="bottom">
  <div class="container p-4">
    <div class="row">
      <!-- Discover more section -->
      <div class="col-sm-12 col-md-4 more-info mb-4">
        <h5>Discover more</h5>
        <ul class="other-sections list-unstyled">
          <li><a href="/services">Services</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/journal">Journal</a></li>
        </ul>
      </div>
      <!-- Social section -->
      <div class="col-sm-12 col-md-4 social mb-4">
        <h5>Stay in touch</h5>
        <a target="_blank" href="https://www.linkedin.com">
          <img alt="LinkedIn" src="https://img.icons8.com/?size=100&id=80451&format=png&color=000000" class="img-fluid">
        </a>
        <a target="_blank" href="https://www.instagram.com">
          <img alt="Instagram" src="https://img.icons8.com/?size=100&id=5eT5OnLluNOx&format=png&color=000000" class="img-fluid">
        </a>
      </div>

      <!-- Mailing list section -->
      <div class="col-sm-12 col-md-4 form mb-4">
        <h5 class="mail d-flex align-items-center">Join my mailing list</h5>
        <form action="newsletter.php" method="post" class="form-inline">
          <div class="form-group mb-2 w-100">
            <input type="text" name="name" placeholder="Name" required class="form-control w-100">
          </div>
          <div class="form-group mb-2 w-100">
            <input type="email" name="email" placeholder="Email" required class="form-control w-100">
          </div>
          <div class="form-group w-100">
            <input type="submit" value="Subscribe" class="btn btn-primary w-100">
          </div>
        </form>
      </div>
    </div>
  </div>
</nav>
    `

    return navEl;
}