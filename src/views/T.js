const T = () => {
    const bodyEl = document.createElement('body');
    bodyEl.innerHTML = `
    <picture id="profile">
        <img src="src/assets/imgs/T.jpg" alt="T">
    </picture>
    `

    return bodyEl;
   
};

export default T;