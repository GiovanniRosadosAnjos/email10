// script.js atualizado para corresponder ao HTML que você enviou:

function verificarCampos() {
    const nomeCliente = document.getElementById('nomeCliente').value.trim();
    const escopoSelecionado = document.querySelector('input[name="escopo"]:checked');
    const devendoSelecionado = document.querySelector('input[name="devendo"]:checked');
    const botao = document.getElementById('btnGerar');

    if (nomeCliente !== '' && escopoSelecionado && devendoSelecionado) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

function gerarEmail() {
    const nomeCliente = document.getElementById('nomeCliente').value.trim();
    const escopo = document.querySelector('input[name="escopo"]:checked').value;
    const devendo = document.querySelector('input[name="devendo"]:checked').value;

    let email = `Olá, ${nomeCliente}. Parabéns pela certificação!\n`;
    email += `Segue anexo o certificado de conformidade.\n\n`;
    email += `Importante:\n\n`;

    if (escopo === 'medical') {
        email += `Informamos que o certificado foi publicado no site do Inmetro e em até 72 horas ele estará disponível para consulta pública.\n`;
        email += `a) O acompanhamento da certificação deverá ocorrer a cada 15 meses.\n`;

        if (devendo === 'sim') {
            email += `Por determinação do órgão regulador (Inmetro/Cgcre), a não conclusão da manutenção dentro dos prazos abaixo e/ou não atualização da norma (indicado em b)) resultará na suspensão do certificado.`;
        } else {
            email += `Por determinação do órgão regulador (Inmetro/Cgcre), a não conclusão da manutenção dentro dos prazos abaixo resultará na suspensão do certificado.`;
        }
    } else {
        // escopo2
        if (devendo === 'sim') {
            email += `BBBB.`;
        } else {
            email += `AAAA.`;
        }
    }

    document.getElementById('emailOutput').value = email;
}
