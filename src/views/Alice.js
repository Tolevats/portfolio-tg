const Alice = () => {
    const bodyEl = document.createElement('body');
    bodyEl.innerHTML = `
    <picture id="profile">
        <img src="src/assets/imgs/Alice.jpg" alt="Alice">
    </picture>
    `

    return bodyEl;
    
};

export default Alice;