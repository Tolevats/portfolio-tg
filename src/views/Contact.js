import { Header } from "../components/Header.js";
import { Nav } from "../components/Nav.js";
import { Footer } from "../components/Footer.js";
//import { Modal } from "./Modal.js";

const Contact = () => {
    const bodyEl = document.createElement('body');
    bodyEl.innerHTML = `
<nav class="top" aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/about">About</a></li>
        <li class="breadcrumb-item active aria-current="page">Contact</li>
    </ol>
</nav>
<h1>Let's connect!</h1>

<form class="row g-3 needs-validation contact-form mx-auto" novalidate>
    <div class="container mx-auto">
        <!-- First and Last Name -->
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <label for="validationTooltip01" class="form-label">First name</label>
                <input type="text" class="form-control form-control-lg" id="validationTooltip01" placeholder="Mary" required>
                <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-sm-12 col-md-6">
                <label for="validationTooltip02" class="form-label">Last name</label>
                <input type="text" class="form-control form-control-lg" id="validationTooltip02" placeholder="Olsen" required>
                <div class="valid-tooltip">Looks good!</div>
            </div>
        </div>
        <!-- Email and Message -->
        <div class="row">
            <div class="col-12 col-md-6">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control form-control-lg" id="email" placeholder="name@example.com" required>
            </div>
            <div class="col-12 col-md-12 mt-3" id="message">
                <label for="textArea" class="form-label">Message</label>
                <textarea class="form-control form-control-lg" id="textArea" rows="3" placeholder="Write me for more information 😉" required></textarea>
            </div>
        </div>
        <!-- Submit Button -->
        <div class="row mt-4">
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

/*     const submitButton = document.querySelector('.btn-primary');
    submitButton.addEventListener('click', () => {
        Modal('Thank you for your message! I will get back to you soon.');
    }); */

    //FOOTER
    bodyEl.appendChild(Footer());

    return bodyEl;

};

export default Contact;