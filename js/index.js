/*La función "cargaDatos()" es una función en JavaScript que utiliza el método "fetch()" para obtener datos de una API RESTful alojada en http://localhost:8000/api/editoriales.
La solicitud "fetch()", se procesa la respuesta utilizando los métodos "response.json()", que analiza la respuesta JSON de la API, y "then()", que se utiliza para manejar la respuesta una vez que se completa la solicitud "fetch()".
*/
function cargaDatos(){
    fetch('http://localhost:8000/api/editoriales')
    .then(response => response.json())
    .then(data => {
        const editorialesTable = document.querySelector('#editoriales-table tbody');
        data.forEach(edi => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${edi.codigo_editorial}</td>
                <td>${edi.nombre_editorial}</td>
                <td>${edi.contacto}</td>
                <td>${edi.telefono}</td>
                <td class="btns">
                <a href="editar.html?codigo_editorial=${edi.codigo_editorial}&nombre_editorial=${edi.nombre_editorial}&contacto=${edi.contacto}&telefono=${edi.telefono}" class="btn btn-secondary">Modificar</a>
                    <a href="#" class="btn btn-danger" onclick="eliminarDato('${edi.codigo_editorial}')">Eliminar</a>
                </td>
            `;
            editorialesTable.appendChild(row);
        });
    })
    //capturar alguna exepcion
    .catch(error => console.error(error));
}

function eliminarDato(codigoEditorial){
    //Validar que se la funcion resivio el id
    if(codigoEditorial){
        const url = `http://localhost:8000/api/editoriales/${codigoEditorial}`;
        console.log(url);
                fetch(url, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = 'index.html';
                }else {
                    throw new Error('Ha sucedido un error.');
                }
            })
            .catch(error => {
                console.error(error);
        });
    }
}