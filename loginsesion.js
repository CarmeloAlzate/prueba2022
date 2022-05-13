function crearSesion(){
    let usuarioIngresado = document.getElementById("email").value;
    let passwordIngresado = document.getElementById("pwd").value;

    if (usuarioIngresado == "empleado@gmail.com"){
        if(passwordIngresado =="123456"){
                sessionStorage.setItem("CookieSesion", "ASTRID" );
                sessionStorage.setItem("CookieUsuario", usuarioIngresado )
        }
    }
   
}


function verificarSesion(){

    let cookie= sessionStorage.getItem("CookieSesion");
    if (cookie == "null" || cookie == null){
        alert("No se ha logueado");
       
    }else{
        document.getElementById('mensaje').innerHTML= 'Bienvenido '+sessionStorage.getItem("CookieUsuario")			
        let menu = document.createElement('li');
        document.getElementById('cs').appendChild(menu);
              menu.setAttribute("value",'bienvenido');

    }
}