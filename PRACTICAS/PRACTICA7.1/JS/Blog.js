// 3
function accedeUsers() {
    console.log('Accediendo a la lista de usuarios...');
    // Utiliza Fetch para acceder a la lista de usuarios
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log('Datos de usuarios obtenidos:', data);
            // Llama a la función pintaUsuarios con la lista de usuarios obtenida
            pintaUsuarios(data);
        })
        .catch(error => console.error('Error al obtener la lista de usuarios:', error));
}

// 4. Continuación - Mostrar lista de usuarios
function pintaUsuarios(listausers) {
    // Obtiene el área principal de contenido del documento
    var contentArea = document.getElementById('contentArea');
    console.log('Área de contenido obtenida:', contentArea);

    // Crea una tabla de Bootstrap
    var table = document.createElement('table');
    table.classList.add('table');
    console.log('Tabla creada:', table);

    // Crea el encabezado de la tabla
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headers = ['Id', 'Username', 'Email', 'Posts'];

    headers.forEach(headerText => {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    console.log('Encabezado de tabla creado:', thead);

    // Crea el cuerpo de la tabla
    var tbody = document.createElement('tbody');
    console.log('Cuerpo de tabla creado:', tbody);

    // Itera sobre la lista de usuarios y crea una fila por cada usuario
    listausers.forEach(user => {
        var row = document.createElement('tr');
        console.log('Creando fila para usuario:', user);

        // Agrega celdas con la información del usuario
        var idCell = document.createElement('td');
        idCell.appendChild(document.createTextNode(user.id));
        row.appendChild(idCell);

        var usernameCell = document.createElement('td');
        var usernameLink = document.createElement('a');
        usernameLink.href = '#';
        usernameLink.dataset.userId = user.id;
        usernameLink.appendChild(document.createTextNode(user.username));
        usernameLink.addEventListener('click', function () {
            pintaUsuario(user.id);
        });
        usernameCell.appendChild(usernameLink);
        row.appendChild(usernameCell);

        var emailCell = document.createElement('td');
        emailCell.appendChild(document.createTextNode(user.email));
        row.appendChild(emailCell);

        var postsCell = document.createElement('td');
        var postsLink = document.createElement('a');
        postsLink.href = '#';
        postsLink.dataset.userId = user.id;
        postsLink.appendChild(document.createTextNode('Ver Posts'));
        postsLink.addEventListener('click', function () {
            obtenerPosts(user.id);
        });
        postsCell.appendChild(postsLink);
        row.appendChild(postsCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Limpia el área principal de contenido y agrega la tabla
    contentArea.innerHTML = '';
    contentArea.appendChild(table);
    console.log('Tabla agregada al área de contenido.');
}

// 5. Continuación - Mostrar detalles de un usuario y enlace "Mostrar Posts"
function pintaUsuario(id) {
    // Utiliza Fetch para obtener los datos detallados del usuario con el id proporcionado
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => {
            // Obtiene el área principal de contenido del documento
            var contentArea = document.getElementById('contentArea');

            // Crea un contenedor para mostrar los detalles del usuario
            var userDetailContainer = document.createElement('div');
            userDetailContainer.classList.add('user-detail-container');

            // Muestra los detalles del usuario
            var userDetail = document.createElement('div');
            userDetail.innerHTML = `<h2>${user.name}</h2>
                                    <p><strong>Nombre de Usuario:</strong> ${user.username}</p>
                                    <p><strong>Email:</strong> ${user.email}</p>
                                    <p><strong>Teléfono:</strong> ${user.phone}</p>
                                    <p><strong>Website:</strong> ${user.website}</p>
                                    <p><strong>Dirección:</strong> ${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}</p>
                                    <p><strong>Compañía:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>`;

            // Agrega un enlace "Mostrar Posts" para ver los posts del usuario
            var showPostsLink = document.createElement('a');
            showPostsLink.href = '#';  // Puedes ajustar el enlace según tus necesidades
            showPostsLink.dataset.userId = user.id;  // Guarda el id del usuario en el dataset
            showPostsLink.appendChild(document.createTextNode('Mostrar Posts'));

            // Agrega un evento clic al enlace para mostrar los posts
            showPostsLink.addEventListener('click', function () {
                obtenerPosts(user.id);
            });

            // Agrega el enlace "Mostrar Posts" al contenedor de detalles del usuario
            userDetail.appendChild(showPostsLink);

            // Agrega el contenedor de detalles del usuario al área principal de contenido
            userDetailContainer.appendChild(userDetail);
            contentArea.innerHTML = '';  // Limpia el área principal antes de agregar los detalles
            contentArea.appendChild(userDetailContainer);

            console.log('Detalles del usuario mostrados correctamente.');
        })
        .catch(error => console.error('Error al obtener los detalles del usuario:', error));
}


// 6. Continuación - Obtener y mostrar posts de un usuario
function obtenerPosts(userId) {
    // Utiliza Fetch para obtener los posts del usuario con el userId proporcionado
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            console.log('Posts obtenidos:', posts);
            // Llama a la función pintaPosts para mostrar los posts obtenidos
            pintaPosts(posts);
        })
        .catch(error => console.error('Error al obtener los posts del usuario:', error));
}

// 7. Continuación - Mostrar los posts del array y añadir botones para cargar más
function pintaPosts(posts) {
    // Obtiene el área principal de contenido del documento
    var contentArea = document.getElementById('contentArea');

    // Crea un contenedor para mostrar los posts
    var postsContainer = document.createElement('div');
    postsContainer.classList.add('posts-container');

    // Muestra los primeros 5 posts del array
    mostrarPosts(posts.slice(0, 5), postsContainer);

    // Añade un botón para cargar más posts
    var loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Cargar los siguientes 5';
    loadMoreButton.addEventListener('click', function () {
        mostrarPosts(posts.slice(postsContainer.children.length, postsContainer.children.length + 5), postsContainer);
    });

    // Agrega el contenedor de posts y el botón al área principal de contenido
    contentArea.innerHTML = '';
    contentArea.appendChild(postsContainer);
    contentArea.appendChild(loadMoreButton);

    console.log('Posts mostrados correctamente.');
}

// Función auxiliar para mostrar un conjunto de posts en el contenedor
function mostrarPosts(postsToShow, container) {
    postsToShow.forEach(post => {
        var postItem = document.createElement('div');
        postItem.innerHTML = `<h3>${post.title}</h3>
                              <p>${post.body}</p>
                              <p><strong>Creado por:</strong> <a href="#" onclick="mostrarUsuario(${post.userId})">Usuario ${post.userId}</a></p>`;
        container.appendChild(postItem);
    });
}

// Función auxiliar para mostrar los detalles del usuario
function mostrarUsuario(userId) {
    pintaUsuario(userId);
}

// 8. Continuación - Mostrar todos los posts
function accedePosts() {
    console.log('Accediendo a la lista de posts...');
    // Utiliza Fetch para acceder a la lista de todos los posts
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            console.log('Todos los posts obtenidos:', posts);
            // Llama a la función pintaPosts para mostrar todos los posts obtenidos
            pintaPosts(posts);
        })
        .catch(error => console.error('Error al obtener todos los posts:', error));
}

// Llama a accedeUsers al cargar la página para obtener la lista de usuarios
accedeUsers();
