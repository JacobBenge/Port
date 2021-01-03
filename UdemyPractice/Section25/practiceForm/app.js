const form = document.querySelector('form');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const product = form.elements.product.value;

    const qty = form.elements.qty.value;

    const addProduct = document.createElement('li');

    addProduct.innerText = `${qty} ${product}`;

    const productList = document.querySelector("#list");

    productList.appendChild(addProduct);

    form.elements.product.value = '';

    form.elements.qty.value = '';



})