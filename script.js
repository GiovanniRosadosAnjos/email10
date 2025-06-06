function verificarCampos() {
  const nomeCliente = document.getElementById('nomeCliente').value.trim();
  const escopo = document.querySelector('input[name="escopo"]:checked');
  const devendoContainer = document.getElementById('devendoContainer');
  const devendoContainerTitle = document.getElementById('devendoContainerTitle');
  const devendoRadio = document.querySelector('input[name="devendo"]:checked');
  const btnGerar = document.getElementById('btnGerar');

  // Mostrar ou ocultar "Ficou devendo ensaios?" apenas para medical e escopo2
  if (escopo && (escopo.value === 'medical' || escopo.value === 'escopo2')) {
    devendoContainer.style.display = 'flex';
    devendoContainerTitle.style.display = 'block';
  } else {
    devendoContainer.style.display = 'none';
    devendoContainerTitle.style.display = 'none';
    // resetar seleção devendo
    const devendoRadios = document.querySelectorAll('input[name="devendo"]');
    devendoRadios.forEach(radio => (radio.checked = false));
  }

  // Condição para habilitar o botão gerar
  if (
    nomeCliente !== '' &&
    escopo &&
    (
      (devendoContainer.style.display === 'flex' && devendoRadio) || 
      devendoContainer.style.display === 'none'
    )
  ) {
    btnGerar.disabled = false;
  } else {
    btnGerar.disabled = true;
  }
}

function gerarEmail() {
  const nomeCliente = document.getElementById('nomeCliente').value.trim();
  const escopo = document.querySelector('input[name="escopo"]:checked').value;
  const devendoRadio = document.querySelector('input[name="devendo"]:checked');
  const emailOutput = document.getElementById('emailOutput');

  // Frase comum a todos
  let email = `Olá, ${nomeCliente}. Parabéns pela certificação!\nSegue anexo o certificado de conformidade.\nImportante:\n\n`;

  // Conteúdo específico por escopo e devendo ensaios
  if (escopo === 'medical') {
    if (devendoRadio && devendoRadio.value === 'nao') {
      email += "Informamos que o certificado foi publicado no site do Inmetro e em até 72 horas ele estará disponível para consulta pública.\n";
      email += "a) O acompanhamento da certificação deverá ocorrer a cada 15 meses.\n";
      email += "Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção dentro dos prazos abaixo resultará na suspensão do certificado.";
    } else if (devendoRadio && devendoRadio.value === 'sim') {
      email += "Informamos que o certificado foi publicado no site do Inmetro e em até 72 horas ele estará disponível para consulta pública.\n";
      email += "a) O acompanhamento da certificação deverá ocorrer a cada 15 meses.\n";
      email += "Por determinação do órgão regulador (Inmetro/Cgcre) a não conclusão da manutenção dentro dos prazos abaixo e/ou não atualização da norma, (indicado em b)) resultará na suspensão do certificado.";
    }
  } else if (escopo === 'escopo2') {
    if (devendoRadio && devendoRadio.value === 'nao') {
      email += "AAAA";
    } else if (devendoRadio && devendoRadio.value === 'sim') {
      email += "BBB";
    }
  } else {
    // Outros escopos sem devendo ensaios
    email += "Informações específicas deste escopo serão adicionadas aqui.";
  }

  emailOutput.value = email;
}

function copiarEmail() {
  const emailOutput = document.getElementById('emailOutput');
  emailOutput.select();
  emailOutput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(emailOutput.value).then(() => {
    alert('Email copiado para a área de transferência!');
  });
}
