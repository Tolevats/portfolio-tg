//Aquí definir rutas e importar los componentes a renderizar.

import { setRootEl, setRoutes, onURLChange } from './router.js';
import Home from './views/Home.js';
import Alice from './views/Alice.js';
import Buck from './views/Buck.js';
import T from './views/T.js';

const routes = {
    '/': Home,
    '/alice': Alice,
    '/buck': Buck,
    '/t': T,
/*     '/404': NotFound, */
};

setRoutes(routes);

window.addEventListener('DOMContentLoaded', () => {
    setRootEl(document.getElementById('root'));

    onURLChange(window.location);
});

window.addEventListener('popstate', () => {
    onURLChange(window.location);
});
