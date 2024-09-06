import { Header } from "../components/Header.js";
import { Nav } from "../components/Nav.js";
import { Footer } from "../components/Footer.js";

const About = () => {
    const bodyEl = document.createElement('body');
    bodyEl.innerHTML = `
    <nav class="top" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">About</li>
            <li class="breadcrumb-item"><a href="/contact">Contact</a></li>
        </ol>
    </nav>
    <section>
        <h2>About me</h2>
        <picture id="profile">
            <img src="https://image.tmdb.org/t/p/original/p7MyqQ8YEwp3XfnpgrEEmAConmN.jpg" alt="Tara">
        </picture>
        <p>Hi, I’m Tara Gregson—artist, wife, mother, and a woman navigating the beautiful chaos of life with Dissociative Identity Disorder. My art is an extension of me, a canvas where my different selves can meet, express, and, at times, clash. It’s a journey, sometimes a battle, as I strive to bring harmony to the many facets of my identity. I’ve learned that my alters aren’t just fragments of who I am; they are pieces of a complex mosaic that make me whole. My work reflects this ongoing exploration of self, capturing the moments where light meets shadow, and where my mind, in all its forms, finds a voice. This isn’t just my story—it’s ours, painted with the colors of resilience, love, and, yes, a fair share of struggles. Welcome to my world.</p>
        <p class="Alice hidden">I love to paint butterflies.</p> 
        <p class="T">I like to paint dark, abstract shapes.</p>
        <p class="Buck">I just don't understand art.</p>
    </section>
    <aside class="row">
        <div class="col-12 col-md-6 container-skills">
            <h3 class="skills">Skills</h3>
            <ul class="artistic">
                <li>Mural painting</li>
                <li>Portrait</li>
                <li>Drawing</li>
                <li>Sketching</li>
                <li>Creative installations</li>
            </ul>
        </div>
        <div class="col-12 col-md-6 container-soft">
            <h3 class="skills">Soft skills</h3>    
            <ul class="soft">
                <li>Versatility</li>
                <li>Resilience</li>
                <li>Empathy</li>
                <li>Collaboration</li>
                <li>Storytelling</li>
            </ul>
        </div>
    </aside>
    `
    // HEADER
    bodyEl.prepend(Header());

 // NAV bootom
    bodyEl.appendChild(Nav());

    //FOOTER
    bodyEl.appendChild(Footer());

    return bodyEl;
};

export default About;