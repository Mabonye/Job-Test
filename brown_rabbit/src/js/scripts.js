const coffeeContainer = document.querySelector('.posts');
const logoList = document.querySelector('#logos');

function loadCoffeeItems() {
    coffeeItems.forEach((item) => {
        const coffeeItem = document.createElement('a');
        coffeeItem.href = '#';
        coffeeItem.className = 'item';

        const itemContent = `
            <div>
                <img src="${item.imageSrc}" alt="${item.altText}">
            </div>
            <div id="item-desc">
                <h2>${item.title}</h2>
                <time datetime="2021-12-07">Published <span>12/07/2021</span></time>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                <button onclick="openPage(this)">Read more</button>
            </div>
        `;

        coffeeItem.innerHTML = itemContent;
        coffeeContainer.appendChild(coffeeItem);

        const popup = document.createElement('div');
        popup.className = 'popup';

        const popupContent = `
            <div>
                <img src="${item.imageSrc}" alt="${item.altText}">
            </div>
            
            <div class="popUpDescription">
                <h2>${item.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Quam pellentesque nec nam aliquam sem et. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. </p>
                <p>Adipiscing at in tellus integer feugiat scelerisque. Augue interdum velit euismod in. Sed velit dignissim sodales ut eu sem integer vitae. Tempus imperdiet nulla malesuada pellentesque. Nulla pellentesque dignissim enim sit. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Dictum at tempor commodo ullamcorper. Hac habitasse platea dictumst quisque. Egestas diam in arcu cursus euismod.</p>
                <p>Donec enim diam vulputate ut. Ut aliquam purus sit amet. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Praesent tristique magna sit amet purus gravida quis. Ornare lectus sit amet est placerat in egestas. Maecenas pharetra convallis posuere morbi leo urna molestie. Tincidunt praesent semper feugiat nibh sed pulvinar. Id cursus metus aliquam eleifend mi.</p>
                <p>Egestas diam in arcu cursus euismod quis viverra nibh. Gravida neque convallis a cras semper auctor neque vitae. Amet consectetur adipiscing elit ut aliquam purus. Sodales neque sodales ut etiam sit amet nisl purus in. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Lectus arcu bibendum at varius vel pharetra.</p>
                <button onclick="closePage(this)">Close</button>
            </div>
            `;
        popup.innerHTML = popupContent;
        coffeeContainer.appendChild(popup);
    });

    const hrElement = document.createElement('hr');
    coffeeContainer.appendChild(hrElement);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';
    const buttonsContent = `
        <button>Previous</button>
        <button>Next</button>
    `;
    buttonsDiv.innerHTML = buttonsContent;
    coffeeContainer.appendChild(buttonsDiv);
}

function loadSponsorImages() {
    logos.forEach((logo) => {
        const logoImage = document.createElement('img');
        logoImage.src = logo.url;
        logoImage.alt = logo.altText;
        logoList.appendChild(logoImage);
    });
}

function openPage(button) {
    const popup = button.parentNode.parentNode.nextElementSibling;
    popup.classList.add('openPopUp');
}

function closePage(button) {
    const popup = button.parentNode.parentNode;
    popup.classList.add('closePopUp');
}

window.addEventListener('load', function () {
    loadCoffeeItems();
    loadSponsorImages();
});
