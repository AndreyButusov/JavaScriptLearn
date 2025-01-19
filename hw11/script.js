const url = './data.json';
async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener('DOMContentLoaded', async (e) => {
    const data = await getData(url);
    const list = document.querySelector('.showcase');
    data.forEach(element => {
        list.insertAdjacentHTML('beforeend', `<div class="item1">
            <img class="item_img" src="${element.img}" alt="${element.title}">
            <div class="item_text">
                <h2 class="product_name">${element.title}</h2>
                <p class="descriprion">${element.description}</p>
                <p class="price">$${element.price}</p>
            </div>
        </div>`)
    });
})