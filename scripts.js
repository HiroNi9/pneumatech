document.addEventListener('DOMContentLoaded', () => {
    const navBtns = document.querySelectorAll('.nav-btn');
    const dropdowns = document.querySelectorAll('.dropdown-content');

    // Função para abrir/fechar dropdown
    const toggleDropdown = (event) => {
        const dropdownContent = event.currentTarget.nextElementSibling;
        dropdownContent.classList.toggle('show');
    };

    // Adiciona eventos de clique para os botões de navegação
    navBtns.forEach(btn => {
        btn.addEventListener('click', toggleDropdown);
    });

    // Fecha todos os dropdowns ao clicar fora
    document.addEventListener('click', (event) => {
        // Verifica se o clique não foi dentro de um dropdown
        if (!event.target.closest('.nav-list')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });

    // Fecha o dropdown ao clicar fora, mas mantém a funcionalidade de abrir/fechar
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita o fechamento imediato ao clicar dentro do dropdown
        });
    });
});
