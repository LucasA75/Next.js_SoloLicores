import getBaseUrl from "./getBaseUrl";

export const checkAuth = async () => {

    const storageUsuario = localStorage.getItem("usuario"); // string 
    if (storageUsuario == null) {
        // si no está autenticado 
        window.location = "./ingreso/form_ingreso.html";
    }

    const objetoUsuario = JSON.parse(storageUsuario);
    const token = objetoUsuario.user.stsTokenManager.accessToken;

    const baseUrl = getBaseUrl();
    const url = baseUrl + '/usuario/check';
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        //body: '{}'
    }).then(respuesta => {
        if (!respuesta.ok) {
            throw new Error("Token no válido");
        }
        respuesta.json();
    }).catch(error => {
        window.location = "./ingreso/form_ingreso.html";
    });
}


