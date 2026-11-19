const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
        navigation.classList.toggle("is-open", !isExpanded);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
            navigation.classList.remove("is-open");
        }
    });
}


// Botao Dark Mode

const elemBotaoMode = document.querySelector('.mode-toggle');

const elemBody = document.querySelector('body');

elemBotaoMode.addEventListener('click', () => {
    elemBody.classList.toggle('dark');
    elemBotaoMode.setAttribute('aria-pressed', 'true');
    if (elemBody.classList.contains('dark')) {
        elemBotaoMode.setAttribute('aria-pressed', 'false');
    }
});

