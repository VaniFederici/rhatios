function validateEmail3628457000000651430() {
  var form = document.forms["WebToLeads3628457000000651430"];
  var emailFld = form.querySelectorAll("[ftype=email]");
  var i;
  for (i = 0; i < emailFld.length; i++) {
    var emailVal = emailFld[i].value;
    if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
      var atpos = emailVal.indexOf("@");
      var dotpos = emailVal.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert("Introduzca una dirección de correo electrónico válida. ");
        emailFld[i].focus();
        return false;
      }
    }
  }
  return true;
}

function checkMandatory3628457000000651430() {
  var mndFileds = new Array(
    "Company",
    "First Name",
    "Last Name",
    "Email",
    "City",
    "State",
    "Country",
    "Description"
  );
  var fldLangVal = new Array(
    "Empresa",
    "Nombre",
    "Apellidos",
    "Correo\x20electr\xF3nico",
    "Ciudad",
    "Provincia",
    "Pa\xEDs",
    "\xBFEn\x20qu\xE9\x20podemos\x20ayudarte\x3F"
  );
  for (i = 0; i < mndFileds.length; i++) {
    var fieldObj =
      document.forms["WebToLeads3628457000000651430"][mndFileds[i]];
    if (fieldObj) {
      if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
        if (fieldObj.type == "file") {
          alert("Seleccione un archivo para cargar.");
          fieldObj.focus();
          return false;
        }
        alert(fldLangVal[i] + " no puede estar vacío.");
        fieldObj.focus();
        return false;
      } else if (fieldObj.nodeName == "SELECT") {
        if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
          alert(fldLangVal[i] + " no puede ser nulo.");
          fieldObj.focus();
          return false;
        }
      } else if (fieldObj.type == "checkbox") {
        if (fieldObj.checked == false) {
          alert("Please accept  " + fldLangVal[i]);
          fieldObj.focus();
          return false;
        }
      }
      try {
        if (fieldObj.name == "Last Name") {
          name = fieldObj.value;
        }
      } catch (e) {}
    }
  }
  if (!validateEmail3628457000000651430()) {
    return false;
  }
  document
    .querySelector(".crmWebToEntityForm .formsubmit")
    .setAttribute("disabled", true);
}

function tooltipShow3628457000000651430(el) {
  var tooltip = el.nextElementSibling;
  var tooltipDisplay = tooltip.style.display;
  if (tooltipDisplay == "none") {
    var allTooltip = document.getElementsByClassName("zcwf_tooltip_over");
    for (i = 0; i < allTooltip.length; i++) {
      allTooltip[i].style.display = "none";
    }
    tooltip.style.display = "block";
  } else {
    tooltip.style.display = "none";
  }
}
