import { Header } from "../components/Header.js";
import { Nav } from "../components/Nav.js";
import { Footer } from "../components/Footer.js";

const Contact = () => {
    const bodyEl = document.createElement('body');
    bodyEl.innerHTML = `
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="/about">About</a></li>
            <li class="breadcrumb-item active aria-current="page">Contact</li>
        </ol>
    </nav>

    <h1>Let's connect!</h1>

    <form class="row g-3 needs-validation" novalidate>    
        <div class="container mx-auto">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <label for="validationTooltip01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationTooltip01" value="" placeholder="Mary" required>
                    <div class="valid-tooltip">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <label for="validationTooltip02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationTooltip02" value="" placeholder="Olsen" required>
                    <div class="valid-tooltip">
                        Looks good!
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="col-md-6 col-sm-12">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
                </div>
                <div class="col-md-6 col-sm-12" id="message">
                    <label for="textArea" class="form-label">Message</label>
                    <textarea class="form-control" id="textArea" rows="3" placeholder="Write me for more information 😉" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mb-3"><div> </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        </div>
    </form>
    `
    // HEADER
    bodyEl.prepend(Header());

 // NAV
    bodyEl.appendChild(Nav());

    //FOOTER
    bodyEl.appendChild(Footer());

    return bodyEl;
};

export default Contact;