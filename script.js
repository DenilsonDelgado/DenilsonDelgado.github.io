function submitForm(event) {
    event.preventDefault();

    var form = document.querySelector('form[name="Formulario"]');
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => {
        if (response.ok) {
            showMessage("Formulário enviado com sucesso!");
            form.reset();
        } else {
            alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
    });
}

function showMessage(message) {
    // Aqui você pode adicionar código para exibir a mensagem como preferir,
    // por exemplo, você pode criar um elemento <div> para exibir a mensagem
    // e adicioná-lo ao DOM.
    alert(message); // Este é um exemplo simples, pode não ser a melhor maneira de mostrar a mensagem.
}