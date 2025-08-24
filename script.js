// Verifica se os campos estão preenchidos corretamente antes de enviar
function validarFormulario() {
    // Pega os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Verifica se o campo nome está vazio
    if (nome === '') {
        alert('Por favor, digite seu nome.');
        return false;
    }
    
    // Verifica se o email está vazio ou não contém @
    if (email === '' || !email.includes('@')) {
        alert('Por favor, digite um e-mail válido.');
        return false;
    }
    
    // Verifica se a mensagem está vazia
    if (mensagem === '') {
        alert('Por favor, digite sua mensagem.');
        return false;
    }
    
    // Se tudo estiver correto, mostra mensagem de sucesso
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    return true;
}

// Alterna a visualização do menu em dispositivos móveis
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Altera a cor de fundo do header quando o usuário scrolla
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#1a2530';
    } else {
        header.style.backgroundColor = '#2c3e50';
    }
};

// Adiciona o botão de menu hamburger para dispositivos móveis
function adicionarBotaoMobile() {
    // Cria o botão
    const botaoMobile = document.createElement('button');
    botaoMobile.innerHTML = '☰'; // Ícone hamburger
    botaoMobile.classList.add('menu-mobile'); // Adiciona classe CSS
    botaoMobile.onclick = toggleMenu; // Associa função ao clique
    
    // Adiciona o botão à navegação
    const nav = document.querySelector('nav');
    if (nav) {
        nav.appendChild(botaoMobile);
    }
}

// Executa as funções quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada! JavaScript funcionando.');
    adicionarBotaoMobile(); // Adiciona botão mobile
});