var enviar = document.getElementById('boton');
var mensaje = document.getElementById('mensaje')
enviar.onclick = function(event){
    event.preventDefault();
    var usuario = document.getElementById('user').value;
    var contraseña = document.getElementById('password').value;
    if (usuario===''){
        mensaje.textContent = 'Ingresar usuario';
    } else if( usuario.indexOf('@') === -1){
        mensaje.textContent = 'Falta el arroba en el usuario';
    }else if (contraseña===''){
        mensaje.textContent = 'Ingresar una contraseña';
    }else{
        mensaje.textContent = 'Enviando formulario...';
    }
}