var cuentas = [
    { nombre: "Yeimy", saldo: 200 },
    { nombre: "Iusseff", saldo: 290 },
    { nombre: "Martin", saldo: 67 }
  ];
  
  var cuentaSeleccionada = null;
  
  function login() {
    var selectedAccountIndex = document.getElementById("cuentas").value;
    var password = document.getElementById("password").value;
  
    if (cuentas[selectedAccountIndex] && password === "1234") {
      cuentaSeleccionada = cuentas[selectedAccountIndex];
      document.getElementById("operaciones").style.display = "block";
      document.getElementById("cajero").classList.add("logged-in");
    } else {
      alert("Contraseña incorrecta. Inténtelo nuevamente.");
    }
  }
  
  function consultarSaldo() {
    mostrarResultado("Saldo actual: $" + cuentaSeleccionada.saldo);
  }
  
  function ingresarMonto() {
    var monto = prompt("Ingrese el monto a ingresar:");
    monto = parseFloat(monto);
  
    if (!isNaN(monto) && monto > 0) {
      cuentaSeleccionada.saldo += monto;
      validarReglaDeNegocio();
    } else {
      alert("Por favor, ingrese un monto válido.");
    }
  }
  
  function retirarMonto() {
    var monto = prompt("Ingrese el monto a retirar:");
    monto = parseFloat(monto);
  
    if (!isNaN(monto) && monto > 0) {
      if (cuentaSeleccionada.saldo - monto >= 10) {
        cuentaSeleccionada.saldo -= monto;
        validarReglaDeNegocio();
      } else {
        alert("No se puede retirar ese monto. El saldo mínimo debe ser de $10.");
      }
    } else {
      alert("Por favor, ingrese un monto válido.");
    }
  }
  
  function validarReglaDeNegocio() {
    if (cuentaSeleccionada.saldo > 990) {
      alert("La cuenta no puede tener más de $990. Se alcanzó el límite.");
      cuentaSeleccionada.saldo = 990;
    }
  
    mostrarResultado("Operación exitosa. Nuevo saldo: $" + cuentaSeleccionada.saldo);
  }
  
  function cerrarSesion() {
    cuentaSeleccionada = null;
    document.getElementById("operaciones").style.display = "none";
    document.getElementById("password").value = "";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("cajero").classList.remove("logged-in");
  }
  
  function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").style.display = "block";
  }
  