function valida() {
  permitidos = /[^0-9.]/;
  permitidosmail = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
  if (document.form.nombre.value == "") {
    document.form.nombre.focus();
    document.getElementById("form-error").innerHTML =
      "Debe ingresar un nombre";
    document.getElementById("form-error").style.display = "inline-block";

    return false;
  } else if (document.form.email.value == "") {
    document.form.email.focus();
    document.getElementById("form-error").innerHTML =
      "Debe ingresar un Email";
    document.getElementById("form-error").style.display = "inline-block";
    return false;
  } else if (!document.form.email.value.match(permitidosmail)) {
    document.form.email.focus();
    document.getElementById("form-error").innerHTML =
      "Debe ingresar un Email valido.";
    document.getElementById("form-error").style.display = "inline-block";
    return false;
  } else if (document.form.mensaje.value == "") {
    document.form.mensaje.focus();
    document.getElementById("form-error").innerHTML =
      "Debe ingresar un Mensaje";
    document.getElementById("form-error").style.display = "inline-block";
    return false;
  } else {
    document.form.submit();
    return true;
  }
}
