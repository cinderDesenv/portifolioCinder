document.addEventListener("DOMContentLoaded", () => {
    // Lógica do Menu Hamburguer
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("menu-aberto");
            menuToggle.classList.toggle("menu-aberto");
        });
        
        // Fechar menu ao clicar em um link
        menu.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove("menu-aberto");
                menuToggle.classList.remove("menu-aberto");
            });
        });
    }

    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.addEventListener("submit", enviarMensagem);
    }
});


function enviarMensagem(event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const mensagemInput = document.getElementById("mensagem");

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim(); // Captura do email
    const mensagem = mensagemInput.value.trim();
    
    // Telefone com código do país e DDD (Mantenha o seu número correto!)
    const telefone = "5568999365536"; 

    // Validação de campos
    if (!nome || !mensagem) {
        alert("Por favor, preencha seu nome, email e a mensagem antes de enviar.");
        return;
    }

    // Mensagem formatada para o WhatsApp
    const texto = `Olá Elton! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    // Abre o WhatsApp
    window.open(url, "_blank");
    
    // Limpa o formulário após o envio
    document.getElementById("formulario").reset();
}