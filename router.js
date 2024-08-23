let ROUTES = {};
let rootEl = "";

export const setRootEl = (el) => {
    rootEl = el;
};

export const setRoutes = (routes) => {
    ROUTES = routes;
};

export const onURLChange = (location) => {
    const path = location.pathname;
    const view = ROUTES[path] || ROUTES['/']; // Vista por defecto si no hay coincidencia
    rootEl.innerHTML = '';
    rootEl.appendChild(view());
};