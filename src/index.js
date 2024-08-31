//defining routes and importing components to render

import { setRootEl, setRoutes, onURLChange } from '../router.js';
import Home from './views/Home.js';
/* import Alice from './views/Alice.js';
import Buck from './views/Buck.js';
import T from './views/T.js'; */
import About from './views/About.js';
import Contact from './views/Contact.js';
/* import NotFound from './views/NotFound.js'; */

const routes = {
    '/': Home,
    '/about': About,
    '/contact': Contact,
/*     '/alice': Alice,
    '/buck': Buck,
    '/t': T,
    '/404': NotFound, */
};

setRoutes(routes);

window.addEventListener('DOMContentLoaded', () => {
    setRootEl(document.getElementById('root'));

    onURLChange(window.location);
});

window.addEventListener('popstate', () => {
    onURLChange(window.location);
});
