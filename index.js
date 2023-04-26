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
                    <a href="modify.php?id=${edi.codigo_editorial}" class="btn btn-secondary">Modificar</a>
                    <a href="#" class="btn btn-danger" onclick="eliminarDato('${edi.codigo_editorial}')">Eliminar</a>
                </td>
            `;
            editorialesTable.appendChild(row);
        });
    })
    .catch(error => console.error(error));
}