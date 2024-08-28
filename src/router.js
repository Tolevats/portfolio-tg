let ROUTES = {};
let rootEl = "";

//setRootEl sets the root element where the views will be rendered
export const setRootEl = (el) => {
    rootEl = el;
};

//setRoutes sets the routes that will be used in the SPA
export const setRoutes = (routes) => {
    ROUTES = routes;
};

//convert a query string to object
const queryStringToObject = (queryString) => {
    //get the query string from the url
    const params = new URLSearchParams(queryString);
    //create an object from the query string and return it
    return Object.fromEntries(params.entries());
};

//render the view associated with the given pathname inside the root element
const renderView = (pathname, props) => {
    //clear the rootEl
    rootEl.innerHTML = "";

    //find the correct route to render
    const viewPath = ROUTES[pathname];
    //call the view's render function with prop and get the new html element
    if (!viewPath) {
        return navigateTo("/404");
    }
    //render correct view passing value of props
    const viewEl = viewPath(props);
    //add view element to DOM root element
    rootEl.appendChild(viewEl)
};

//navigate to a new route within the SPA
export const navigateTo = (pathname, props = {}) => {
    const searchParams = new URLSearchParams(props).toString();
    const url = `${window.location.origin}${pathname}?${searchParams}`;
    //add new state to browser history
    window.history.pushState({}, pathname, url);
    //renders view
    renderView(pathname, props);
};

//handling URL chamges by updating view based on the new location
export const onURLChange = (location) => {
    const { pathname, search } = window.location;
    const props = queryStringToObject(search);
    renderView(pathname, props);
};

/* window.addEventListener('popstate', onURLChange); */