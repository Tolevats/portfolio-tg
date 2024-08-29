import { Header } from "../components/Header.js";
//import { Nav } from "../components/Nav.js";
import { Footer } from "../components/Footer.js";

const Contact = () => {
    const formEl = document.createElement('form');
    formEl.innerHTML = `
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item"><a href="/about">About</a></li>
            <li class="breadcrumb-item active aria-current="page">Contact</li>
        </ol>
    </nav>
    <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationTooltip01" value="Mary" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
        <div class="col-md-4 position-relative">
            <label for="validationTooltip02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationTooltip02" value="Olsen" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
        <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationTooltip03" required>
            <div class="invalid-tooltip">
                Please provide a valid city.
            </div>
        </div>
        <div class="mb-5 position-relative">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
    </form>
    `
    // HEADER
    formEl.prepend(Header());

 // NAV
// mainEl.appendChild(Nav());

    //FOOTER
    formEl.appendChild(Footer());

    return formEl;
};

export default Contact;