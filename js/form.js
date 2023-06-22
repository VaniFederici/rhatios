function valida()
	{
	  permitidos=/[^0-9.]/;
	  permitidosmail=/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	  if(document.form.nombre.value=='') 
	  {
		document.form.nombre.focus();
		Swal.fire('Debe ingresar un nombre')
		return false;
	  } else if (document.form.email.value=='') 
	  {
		document.form.email.focus();
		alert('Debe ingresar un Email');
		return false;
	  } else if(!document.form.email.value.match(permitidosmail)) 
	  {
		document.form.email.focus();
		alert('Debe ingresar un Email valido.');
		return false;
	  } else if (document.form.mensaje.value=='') 
	  {
		document.form.mensaje.focus();
		alert('Debe ingresar un Mensaje');
		return false;
	  }
	  
	  else
	  {
		document.form.submit();
		return true;
	  }
	}
