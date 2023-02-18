const nombreInput = document.getElementById('nombre');
const nombreErrorContainer = document.getElementById('error-container-nombre');


nombreInput.addEventListener('blur', function() {
    if (!nombreInput.value) {
      nombreInput.style.border = '';
      nombreErrorContainer.style.display = 'block';
      nombreInput.style.border = '3px solid red';
    }
  });
  
  // Agregar un listener para el evento 'input' en el campo de nombre
  nombreInput.addEventListener('input', function() {
    if (nombreInput.value) {
      nombreInput.style.border = '3px solid green';
      nombreErrorContainer.style.display = 'none';

    }
  });
  
const emailInput = document.getElementById('email');
const emailErrorContainer = document.getElementById('error-container-email');

emailInput.addEventListener('blur', function() {
    if (!emailInput.value) {
      emailInput.style.border = '';
      emailErrorContainer.style.display = 'block';
      emailInput.style.border = '3px solid red';
    } else if (!emailInput.value.includes('@')) {
      emailInput.style.border = '3px solid red';
      emailErrorContainer.innerHTML = `
        <img class="icon-error" src="error.jpg" alt="">
        <p class="error">Email invalido</p>
      `;
      emailErrorContainer.style.display = 'block';
    }
  });
  
  emailInput.addEventListener('input', function() {
    if (emailInput.value) {
      emailInput.style.border = '3px solid green';
      emailErrorContainer.style.display = 'none';
    }
  });

const claveInput = document.getElementById('clave');
const claveErrorContainer = document.getElementById('error-container-clave');


claveInput.addEventListener('blur', function() {
    if (!claveInput.value) {
      claveInput.style.border = '';
      claveErrorContainer.style.display = 'block';
      claveInput.style.border = '3px solid red';
    } else if (claveInput.value.length > 8) {
      claveInput.style.border = '3px solid red';
      claveErrorContainer.innerHTML = '<img class="icon-error" src="error.jpg" alt=""><p class="error">No debe tener mas de 8 caracteres</p>';
      claveErrorContainer.style.display = 'block';
    } else {
      claveInput.style.border = '3px solid green';
      claveErrorContainer.style.display = 'none';
    }
  });
  
  claveInput.addEventListener('input', function() {
    if (claveInput.value && claveInput.value.length <= 8) {
      claveInput.style.border = '3px solid green';
      claveErrorContainer.style.display = 'none';
    }
  });

const claveConfirmInput = document.getElementById('clave-confirm');
const claveConfirmErrorContainer = document.getElementById('error-container-clave-confirm');


claveConfirmInput.addEventListener('blur', function() {
    if (!claveConfirmInput.value) {
      claveConfirmInput.style.border = '';
      claveConfirmErrorContainer.style.display = 'block';
      claveConfirmInput.style.border = '3px solid red';
    }
  });

claveConfirmInput.addEventListener('input', function() {
  if (claveConfirmInput.value) {
    claveConfirmInput.style.border = '3px solid green';
    claveConfirmErrorContainer.style.display = 'none';
  }
});

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (claveInput.value !== claveConfirmInput.value) {
    claveConfirmInput.style.border = '3px solid red';
    claveConfirmErrorContainer.style.display = 'block';
    claveConfirmErrorContainer.querySelector('.error').textContent = 'Las claves no coinciden';
  } else {
    form.submit();
  }
});