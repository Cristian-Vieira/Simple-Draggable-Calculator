function calcular() {
    const DISPLAY = document.getElementById("result").value;
    const RESULTADO = efetuarCalculo(DISPLAY);
    document.getElementById("result").value = RESULTADO;
}

function validarSegurança(expressão) {
     // Verificar se a expressão contém caracteres invalidos por REGEX
    if (/[^0-9+\-*/.()^()\s]/.test(expressão)) {
        return false;
    }

     // Verificar se a expressão contém sequências maliciosas
    const SEQUENCIA_MALICIOSA = ["Math", "console", "window", "document", "eval"];
    for (const I of SEQUENCIA_MALICIOSA) {
        if (expressão.includes(I)) {
            return false;
        }
    }

    return true;
}

function efetuarCalculo(expressão) {
     // Remover espaços em branco 
    expressão = expressão.replace(/\s+/g, "");

     // Verificação de segurança
    if (!validarSegurança(expressão)) {
        return "Expressão inválida!";
    }

     // Verificar se usuario tentou dividir por 0
    if (expressão.includes("/0")) {
        return "Não existe divisão por 0";
    }

     // Executar o calculo
    try {
        const RESULTADO = Function(`'use strict'; return (${expressão});`)();
        return RESULTADO;
    } catch (error) {
        return "Expressão inválida!";
    }
}