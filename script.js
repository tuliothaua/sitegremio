const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

// Selecionando o botão e o áudio
const playButton = document.getElementById("playButton");
const meuAudio = document.getElementById("meuAudio");

// Função para tocar ou pausar o áudio ao clicar no botão
playButton.addEventListener("click", function() {
    if (meuAudio.paused) {
        meuAudio.play();  // Toca o áudio
        playButton.textContent = "⏸️ PAUSAR HINO";
    } else {
        playButton.textContent = "VOCÊ NÃO VAI PAUSAR ESSA OBRA DE ARTE!"; 
    }
});
