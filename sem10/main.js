let div1 = document.createElement('div');
let body1 = document.querySelector('body');

body1.appendChild(div1);
let parseData = JSON.parse(data);
console.log(parseData);

parseData.message.forEach(element => {
    div1.insertAdjacentHTML('beforeend', `
        <figure>
        <img src="${element}" alt="Dog at sunset" />
        <figcaption>An Dog at sunset</figcaption>
        </figure>`
    );
});

let url1 = 'https://jsonplaceholder.typicode.com/users';
async function getData(url1) {
    const response = await fetch(url1);
    const json1 = await response.json();
    return json1;
}

try {
    const myData = await getData(url1);
    console.log(myData);
    myData.forEach(element => {
        div1.insertAdjacentHTML('beforeend', `
            <h2>${element.name}</h2>
            <p>${element.email}</p>`)
    })
} catch (error) {
    console.log(`Ошибка ${error.message}`);
}