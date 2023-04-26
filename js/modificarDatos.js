const urlParams = new URLSearchParams(window.location.search);
const codigo_editorial = urlParams.get('codigo_editorial');
const nombre_editorial = urlParams.get('nombre_editorial');
const contacto = urlParams.get('contacto');
const telefono = urlParams.get('telefono');

document.getElementById('codigo_editorial').value = codigo_editorial;
document.getElementById('nombre_editorial').value = nombre_editorial;
document.getElementById('contacto').value = contacto;
document.getElementById('telefono').value = telefono;


const formulario = document.getElementById('ingresoDatos');
const modificarBtn = document.getElementById('modificarDato');

modificarBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    const url = `http://localhost:8000/api/editoriales/${codigo_editorial}`;

    const editorial = {
        nombre_editorial: document.getElementById('nombre_editorial').value,
        contacto: document.getElementById('contacto').value,
        telefono: document.getElementById('telefono').value
    }
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editorial)
    })
    .then(response => {
        if (response.ok) {
            // Si la respuesta del servidor es exitosa, nos redirigimos a la pagina index.html
            window.location.href = 'index.html'
        } else {
            throw new Error('Ha sucedido un error.');
        }
    })
})