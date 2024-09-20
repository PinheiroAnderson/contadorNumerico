function iniciar() {
    var startNumber = parseInt(document.getElementById('txtinic').value);
    var endNumber = parseInt(document.getElementById('txtfim').value);
    var stepNumber = parseInt(document.getElementById('txtpass').value);
    var resultElement = document.getElementById('insert')

    if (isNaN(startNumber) || isNaN(endNumber) || isNaN(stepNumber)) {
        resultElement.textContent = 'Impossível contar!';
        return;
    }

    if (stepNumber <= 0) {
        alert('Passo inválido! Considerando passo como 1')
        stepNumber = 1
    }

    var result = 'Contando ...' 

    if (startNumber < endNumber) {
        for (var i = startNumber; i <= endNumber; i += stepNumber) {
            result += i + '\u{27A1}'
        }
    }

    else if (startNumber > endNumber) {
        for (var i = startNumber; i >= endNumber; i -= stepNumber) {
            result += i + '\u{27A1}'
        }
    }

    result += '\u{1F3C1}'

    resultElement.textContent = result.trim()
}

function toggleTema() {
    const body = document.body;
    const btn = document.querySelector('.btn');

    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        btn.textContent = 'Tema claro';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        btn.textContent = 'Tema escuro';
    }
}
