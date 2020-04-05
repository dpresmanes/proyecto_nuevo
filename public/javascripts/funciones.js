function validar() {
  var nombre, apellido, edad, email, contraseña, contraseña2, direccion, codigoPostal, telefono;
  nombre = document.getElementById("nombre").value;
  apellido= document.getElementById("apellido").value;
  edad = document.getElementById("edad").value;
  email = document.getElementById("email").value;
  contraseña = document.getElementById("contraseña").value;
  contraseña2 = document.getElementById("contraseña2").value;
  direccion = document.getElementById("direccion").value;
  codigoPostal = document.getElementById("codigoPostal").value;
  telefono= document.getElementById("telefono").value;



  if (nombre === "" || apellido === "" || edad === "" || email === "" || contraseña === "" || contraseña2 === "" || direccion === "" || codigoPostal === "" || telefono === "") {
    alert("Todos los campos son obligatorios!");
    return false;
    
  }
  else if (nombre.length>30) {
    alert ("Ha ingresado mas caracteres de lo permitido");
    return false;
    
  }
  else if (apellido.length>80) {
    alert ("Ha ingresado mas caracteres de los permitidos!");
    return false;
    
  }
  else if (edad.length>10) {
    alert ("Ha ingresado mas caracteres de los permitidos!");
    return false;
  }
  else if (email.length>100) {
    alert ("Ha ingresado mas caracteres de los permitidos!");
    return false;

  }
  else if ( contraseña.length>80 || contraseña2.leght>80) {
    alert ("Ha ingresado mas caracteres de los permitidos!");
    return false;
  }
  else if (direccion.length>50) {
    alert ("Ha ingresado mas caracteres de los permitidos!");
    return false;
  }
  else if (codigoPostal.length>10) {
    alert ("Ha ingresado mas caracteres de los permitidos!");
    return false;
    
  }
  else if (telefono.length>30) {
    alert ("Ha ingresado mas caracteres de los permitidos!");
    return false;
    
  }
  else if (isNaN(telefono)) {
    alert ("Usted no ha ingresado un numero telefónico correcto!");
    return false;

  }
  else if (isNaN(edad)) {
    alert ("Ha ingresado mal su edad");
    return false;

  }
  else if (isNaN(codigoPostal)) {
    alert ("Ha ingresado mal su codigo postal!");
    return false;

  }
 
    
  if (contraseña != contraseña2) {
    alert("Las contraseñas deben coincidir");
    return false;
  } else {
    alert("Todo esta correcto");
    return true; 
  }





}