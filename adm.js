
document.getElementById("tabela-usuarios").onload=listUser();

function listUser() {
    var tabUser = document.getElementById("tabela-usuarios");
    var db_usuarios = JSON.parse(localStorage.getItem("db_usuarios"));
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];
                
        console.log("i: "+i);
        tabUser.innerHTML += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${usuario.nome}</td>
                <td>${usuario.login}</td>
                <td>${usuario.email}</td>
            </tr>`       
    }      
}

function uploadFile() {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('avatar', fileField.files[0]);

    fetch('https://icei-puc-minas-pmv-ads.github.io/imgs/galeria', {
        method: 'PUT',
        body: formData
    })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        })
}