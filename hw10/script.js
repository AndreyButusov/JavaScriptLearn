const bigList = document.getElementById('product-list');
console.log(bigList);

console.log(data[0]);
console.log(data[0].id);
console.log(data[0].title);


for (let i = 0; i < data.length; i++) {
    const newList = document.createElement('li');
    const img = document.createElement('img');
    const caption = document.createElement('h2');
    const info = document.createElement('p');
    const price = document.createElement('p');
    const buttonEl = document.createElement('button');

    img.src = data[i].image;
    img.width = 150;
    img.height = 150;
    newList.appendChild(img);

    caption.textContent = data[i].title;
    newList.appendChild(caption);

    info.textContent = data[i].description;
    newList.appendChild(info);

    price.textContent = data[i].price;
    newList.appendChild(price);

    buttonEl.textContent = 'Add to Cart';
    newList.appendChild(buttonEl);

    bigList.appendChild(newList);
    newList.classList.add('product');
    
}

