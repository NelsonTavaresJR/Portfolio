//Verifica se os campos estão preenchidos corretamente antes de enviar
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

//Alterna a visualização em dispositivos móveis
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

//Função para encolher o header
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { 
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}
 
//botão para dispositivos móveis
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

//funções quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada! JavaScript funcionando.');
    adicionarBotaoMobile(); // Adiciona botão mobile
});

//encolhe o header
window.addEventListener('scroll', handleScroll);
