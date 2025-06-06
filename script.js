function verificarCampos() {
  const nome = document.getElementById('nomeCliente').value.trim();
  const escopo = document.querySelector('input[name="escopo"]:checked');
  const devendo = document.querySelector('input[name="devendo"]:checked');
  const btn = document.getElementById('btnGerar');

  if (nome !== '' && escopo !== null && devendo !== null) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

function gerarEmail() {
  const nome = document.getElementById('nomeCliente').value.trim();
  const escopo = document.querySelector('input[name="escopo"]:checked').value;
  const devendo = document.querySelector('input[name="devendo"]:checked').value;
  const output = document.getElementById('emailOutput');

  let email = `Olá, ${nome}. Parabéns pela certificação!;\nSegue anexo o certificado de conformidade.\nImportante:;\n\n`;

  if (escopo === 'medical') {
    if (devendo === 'nao') {
      email += `Informamos que o certificado foi publicado no site do Inmetro e em até 72 horas ele estará disponível para consulta pública.;\n` +
               `a) O acompanhamento da certificação deverá ocorrer as cada 15 meses.\n` +
               `Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção dentro dos prazos abaixo resultará na suspensão do certificado.`;
    } else {
      email += `Informamos que o certificado foi publicado no site do Inmetro e em até 72 horas ele estará disponível para consulta pública.\n` +
               `a) O acompanhamento da certificação deverá ocorrer as cada 15 meses.\n` +
               `Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção dentro dos prazos abaixo e/ou não atualização da norma, (indicado em b)) resultará na suspensão do certificado.`;
    }
  } else if (escopo === 'escopo2') {
    if (devendo === 'nao') {
      email += `AAAA`;
    } else {
      email += `BBB`;
    }
  }

  output.value = email;
}

function copiarEmail() {
  const emailText = document.getElementById('emailOutput');
  emailText.select();
  emailText.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand('copy');
  alert('Email copiado para a área de transferência!');
}
