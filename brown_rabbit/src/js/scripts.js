const coffeeContainer = document.querySelector('.posts');
const logoList = document.querySelector('#logos');

function loadCoffeeItems() {
    for (let i = 0; i < coffeeItems.length; i++) {
        coffeeContainer.innerHTML += `
            <a href="#" class="item">
                <div>
                    <img src="${coffeeItems[i].imageSrc}" alt="${coffeeItems[i].altText}">
                </div>
                <div class="item-desc">
                    <h2>${coffeeItems[i].title}</h2>
                    <time datetime="2021-12-07">Published <span>12/07/2021</span></time>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat...</p>
                    <button>Read more</button>
                </div>
            </a>
        `
    }

    coffeeContainer.innerHTML += `
        <hr>
    
        <div class="buttons">
            <button>Previous</button>
            <button>Next</button>
        </div>
    `;
}

function loadSponsorImages() {
    logos.forEach((logo) => {
        logoList.innerHTML += `
            <img src="${logo.url}" alt="${logo.altText}" />
        `
    })
}


window.addEventListener('load', function () {
    loadCoffeeItems();
    loadSponsorImages();
});
