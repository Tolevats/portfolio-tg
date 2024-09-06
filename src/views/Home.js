import { Header } from "../components/Header.js";
import { Nav } from "../components/Nav.js";
import { Footer } from "../components/Footer.js";

const Home = () => {
    const bodyEl = document.createElement('body');
    bodyEl.innerHTML = `
<nav class="top" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
    <li class="breadcrumb-item"><a href="/about">About</a></li>
    <li class="breadcrumb-item"><a href="/contact">Contact</a></li>
  </ol>
</nav>

<header>
  <h2>Recent Projects</h2>
</header>

<section class="projects">
  <div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://wallco.com/storage/app/resources/resize/img_dacb15f57eba6f2ed7ec43d062afd814_1200_0_0_0_auto.jpeg" class="d-block img-fluid mx-auto" alt="Project 1">
        <div class="carousel-caption d-none d-md-block caption-bg">
          <h5 class="title-caption">Project 1</h5>
          <p class="p-caption">Can you hear the ocean?</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://wallco.com/storage/app/resources/resize/img_8610ac27fdd55a5e11a964217dbdab41_1200_0_0_0_auto.jpeg" class="d-block img-fluid mx-auto" alt="Project 2">
        <div class="carousel-caption d-none d-md-block caption-bg">
          <h5>Project 2</h5>
          <p>Aren't those background leaves beautiful?</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://wallco.com/storage/app/resources/resize/img_de3de394ebdfc612e75e7aeb4e5ea30c_1200_0_0_0_auto.jpeg" class="d-block img-fluid mx-auto" alt="Project 3">
        <div class="carousel-caption d-none d-md-block caption-bg">
          <h5>Project 3</h5>
          <p>Important books right here!</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section>
    `

    // HEADER
    bodyEl.prepend(Header());

    // NAV
    bodyEl.appendChild(Nav());

    //FOOTER
    bodyEl.appendChild(Footer());

    return bodyEl;
};

export default Home;