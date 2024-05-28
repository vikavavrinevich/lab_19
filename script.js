document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const closeModalButton = document.querySelector('.close');
    const form = document.getElementById('productForm');
    const products = [];

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const product = {
            name: form.name.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            discount: parseFloat(form.discount.value),
            category: form.category.value,
            image: form.image.value
        };

        products.push(product);
        console.log(products);

        form.reset();
        modal.style.display = 'none';
    });
});
