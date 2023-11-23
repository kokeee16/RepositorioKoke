window.addEventListener("load", () => {
    const cardsContainer = document.getElementById("cards");
    const itemsContainer = document.getElementById("items");
    const footerContainer = document.getElementById("footer");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

    const templateCard = document.getElementById("template-card").content;
    const templateCarrito = document.getElementById("template-carrito").content;
    const templateFooter = document.getElementById("template-footer").content;

    const fragment = document.createDocumentFragment();
    const carrito = [];

    fetch("productos.json") // Ajusta la ruta a tu archivo JSON
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((productos) => {
            productos.forEach((producto) => {
                const clone = templateCard.cloneNode(true);
                clone.querySelector("img").setAttribute("src", `imagen/${producto.id}.jpg`);
                clone.querySelector("h5").textContent = producto.title;
                clone.querySelector(".precio").textContent = `$${producto.price}`;
                clone.querySelector("button").dataset.id = producto.id;
                cardsContainer.appendChild(clone);
            });
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });

    function addToCarrito(producto) {
        const index = carrito.findIndex((item) => item.id === producto.id);

        if (index !== -1) {
            carrito[index].cantidad++;
        } else {
            carrito.push({
                id: producto.id,
                title: producto.title,
                cantidad: 1,
                price: producto.price,
            });
        }

        renderCarrito();
    }

    function renderCarrito() {
        itemsContainer.innerHTML = '';
        carrito.forEach((item) => {
            const clone = templateCarrito.cloneNode(true);
            clone.querySelector('th').textContent = item.id;
            clone.querySelector('td:nth-child(2)').textContent = item.title;
            clone.querySelector('td:nth-child(3)').textContent = item.cantidad;
            clone.querySelector('td:nth-child(5) span').textContent = `$${item.cantidad * item.price}`;
            fragment.appendChild(clone);
        });

        itemsContainer.appendChild(fragment);

        renderFooter();
    }

    function renderFooter() {
        footerContainer.innerHTML = '';
        if (carrito.length === 0) {
            const emptyRow = templateFooter.cloneNode(true);
            fragment.appendChild(emptyRow);
        } else {
            const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
            const totalPrecio = carrito.reduce((acc, item) => acc + item.cantidad * item.price, 0);

            const footerRow = templateFooter.cloneNode(true);
            footerRow.querySelector('th').textContent = totalProductos;
            footerRow.querySelector('td:nth-child(5) span').textContent = `$${totalPrecio}`;
            fragment.appendChild(footerRow);
        }

        footerContainer.appendChild(fragment);
    }

    cardsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-dark')) {
            const productoSeleccionado = productos.find(producto => producto.id === parseInt(e.target.dataset.id));
            addToCarrito(productoSeleccionado);
        }
    });

    itemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-info')) {
            const index = carrito.findIndex(item => item.id === parseInt(e.target.parentElement.parentElement.querySelector('th').textContent));
            carrito[index].cantidad++;
            renderCarrito();
        }

        if (e.target.classList.contains('btn-danger')) {
            const index = carrito.findIndex(item => item.id === parseInt(e.target.parentElement.parentElement.querySelector('th').textContent));
            carrito[index].cantidad--;

            if (carrito[index].cantidad === 0) {
                carrito.splice(index, 1);
            }

            renderCarrito();
        }
    });

    vaciarCarritoBtn.addEventListener('click', () => {
        carrito.length = 0;
        renderCarrito();
    });
});
