import { Header } from "../components/Header.js";
//import { Nav } from "../components/Nav.js";
import { Footer } from "../components/Footer.js";

const Home = () => {
    const mainEl = document.createElement('main');
    mainEl.innerHTML = `
    <section>
        <h2>Recent Projects</h2>
    </section>
    `
//en section debo poner una galería tipo cards para exhibir proyectos 

    // HEADER
    mainEl.prepend(Header());

    // NAV
   // mainEl.appendChild(Nav());

    //FOOTER
    mainEl.appendChild(Footer());

    return mainEl;
};

export default Home;