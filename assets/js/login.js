// registro
// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.querySelector('.form-inputs');
//     var inputs = form.querySelectorAll('input[required]');
//     var typeUserCheckboxes = form.querySelectorAll('input[name^="type-"]');
//     var termsCheckbox = document.querySelector('input[name="terms"]');

//     document.querySelector('#btnCadastro').addEventListener('click', function (e) {
//         e.preventDefault();
        
//         // checkbox user
//         var typeUserChecked = Array.from(typeUserCheckboxes).some(function (checkbox) {
//             return checkbox.checked;
//         });

//          // checkbox terms
//          var termsChecked = termsCheckbox.checked;

//         // campos prenchidos
//         inputs.forEach(function (input) {
//             if (input.value.trim() === '') {
//                 input.style.borderColor = '#ff0000';
//             }else{
//                 input.style.borderColor = '#4FBF26';
//             }
//         });

//         if (!typeUserChecked) {
//             alert('Escolha um tipo de usuario');
//         }

//     });

//     inputs.forEach(function (input) {
//         input.addEventListener('focus', function () {
//             input.style.backgroundColor = '';
//         });
//     });
// });


// login
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var inputs = form.querySelectorAll('input[required]');
    
    document.querySelector('#btnEntrar').addEventListener('click', function (e) {
        e.preventDefault();

        // campos prenchidos
        inputs.forEach(function (input) {
            if (input.value.trim() === '') {
                input.style.borderColor = '#ff0000';
            }else{
                input.style.borderColor = '#4FBF26';
            }
        });

        var emailInput = document.querySelector('input[name="email"]');
        var passwordInput = document.querySelector('input[name="psw"]');
        if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            e.preventDefault();
        }
    });
    inputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            input.style.backgroundColor = '';
        });
    });
});


// // simula registro e direciona para a pagina
// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.querySelector('.form-inputs');
//     var inputs = form.querySelectorAll('input[required]');
//     var typeUserCheckboxes = form.querySelectorAll('input[name^="type-"]');
//     var termsCheckbox = document.querySelector('input[name="terms"]');

//     document.querySelector('#btnCadastro').addEventListener('click', function (e) {
//         e.preventDefault();

//         var typeUserChecked = Array.from(typeUserCheckboxes).some(function (checkbox) {
//             return checkbox.checked;
//         });

//         var termsChecked = termsCheckbox.checked;

//         // Verifica campos obrigatórios
//         var allFieldsFilled = Array.from(inputs).every(function (input) {
//             var isValid = input.value.trim() !== '';
//             input.style.borderColor = isValid ? '#4FBF26' : '#ff0000';
//             return isValid;
//         });

//         // Redireciona
//         if (allFieldsFilled && typeUserChecked && termsChecked) {
//             window.location.href = 'produtor/homeProdutor.html';
//         } else {
//             alert('Por favor, preencha todos os campos obrigatórios e selecione um tipo de usuário.');
//         }
//     });

//     inputs.forEach(function (input) {
//         input.addEventListener('focus', function () {
//             input.style.borderColor = '';
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.form-inputs');
    var inputs = form.querySelectorAll('input[required]');
    var typeUserCheckboxes = form.querySelectorAll('input[name^="type-"]');
    var termsCheckbox = document.querySelector('input[name="terms"]');

    document.querySelector('#btnCadastro').addEventListener('click', function (e) {
        e.preventDefault();

        var typeUserChecked = Array.from(typeUserCheckboxes).find(function (checkbox) {
            return checkbox.checked;
        });

        var termsChecked = termsCheckbox.checked;

        // Verifica campos obrigatórios
        var allFieldsFilled = Array.from(inputs).every(function (input) {
            var isValid = input.value.trim() !== '';
            input.style.borderColor = isValid ? '#4FBF26' : '#ff0000';
            return isValid;
        });

        // Redireciona com base na escolha do tipo de usuário
        if (allFieldsFilled && typeUserChecked && termsChecked) {
            var userType = typeUserChecked.id === 'type-user-1' ? 'consumidor' : 'vendedor';
            window.location.href = userType === 'vendedor' ? 'produtor/homeProdutor.html' : 'consumidor/homeCons.html';
        } else {
            alert('Por favor, preencha todos os campos obrigatórios, selecione um tipo de usuário e concorde com os termos.');
        }
    });

    inputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            input.style.borderColor = '';
        });
    });
});
