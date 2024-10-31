document.getElementById('botao').addEventListener('click', () => {
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const avaliacao = document.querySelector('input[name="avaliacao"]:checked');

    const calcularGorjeta = (avaliacao) => {
        if (avaliacao.id === 'bom') return 10;
        if (avaliacao.id === 'regular') return 6;
        return 2;
    };

    const mostrarResultado = (valor, avaliacao, gorjeta) => {
        const resultadoDiv = document.querySelector('.resultado');
        resultadoDiv.innerHTML = `
        Valor da conta: R$ ${valor.toFixed(2)}<br>
        Avaliação: ${avaliacao}<br>
        Gorjeta sugerida: R$ ${gorjeta}`;
    };

    if (isNaN(valorConta) || valorConta <= 0) {
        document.querySelector('.resultado').innerHTML = 'Por favor, insira um valor válido.';
        return;
    }

    if (!avaliacao) {
        document.querySelector('.resultado').innerHTML = 'Por favor, avalie o serviço.';
        return;
    }

    const avaliacaoTexto = avaliacao.id === 'bom' ? 'Bom' :
                           avaliacao.id === 'regular' ? 'Regular' :
                           'Ruim';

    const gorjeta = calcularGorjeta(avaliacao);

    mostrarResultado(valorConta, avaliacaoTexto, gorjeta);
});