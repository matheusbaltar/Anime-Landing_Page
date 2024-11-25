document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05) translateY(-10px)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1) translateY(0)';
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtns = document.querySelectorAll('.imgdesc-readMoreBtn');

    readMoreBtns.forEach(btn => {
        const descriptionBox = btn.closest('.imgdesc-description-box').querySelector('.imgdesc-text');
        let isExpanded = false;

        btn.addEventListener('click', () => {
            if (!isExpanded) {
                descriptionBox.classList.add('expanded');
                btn.textContent = 'Leia Menos';
                isExpanded = true;
            } else {
                descriptionBox.classList.remove('expanded');
                btn.textContent = 'Leia Mais';
                isExpanded = false;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const cherryContainer = document.getElementById('cherry-container');

    function createCherryBlossom() {
        const blossom = document.createElement('div');
        blossom.classList.add('cherry-blossom');
        blossom.style.left = Math.random() * 100 + 'vw';
        blossom.style.animationDuration = Math.random() * 6 + 12 + 's'; // Duração de 2 a 5 segundos
        cherryContainer.appendChild(blossom);

        // Remover a folha após a animação
        blossom.addEventListener('animationend', () => {
            blossom.remove();
        });
    }

    setInterval(createCherryBlossom, 250); 
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const validationMessage = document.getElementById('validationMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            validationMessage.textContent = 'Formulário enviado com sucesso!';
            validationMessage.classList.remove('hidden');
            validationMessage.classList.add('validation-message');
            form.reset(); 
        } else {
            validationMessage.textContent = 'Por favor, preencha todos os campos.';
            validationMessage.classList.remove('hidden');
            validationMessage.classList.add('validation-message');
        }
    });
});
