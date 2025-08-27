// Verifica se os campos estão preenchidos corretamente antes de enviar
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '') {
        alert('Por favor, digite seu nome.');
        return false;
    }
    if (email === '' || !email.includes('@')) {
        alert('Por favor, digite um e-mail válido.');
        return false;
    }
    if (mensagem === '') {
        alert('Por favor, digite sua mensagem.');
        return false;
    }

    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    return true;
}

// Alterna a visualização do menu em dispositivos móveis
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Função para encolher o header ao scroll
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { 
        header.classList.add('shrink'); // adiciona a classe shrink
    } else {
        header.classList.remove('shrink'); // remove a classe shrink
    }
}

// Adiciona o botão de menu hamburger para dispositivos móveis
function adicionarBotaoMobile() {
    const botaoMobile = document.createElement('button');
    botaoMobile.innerHTML = '☰';
    botaoMobile.classList.add('menu-mobile');
    botaoMobile.onclick = toggleMenu;

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

// Evento de scroll para encolher o header
window.addEventListener('scroll', handleScroll);
