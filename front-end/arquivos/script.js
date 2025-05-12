//BARRA DE NAV
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

//BOTAO DO HINO
const playButton = document.getElementById("playButton");
const meuAudio = document.getElementById("meuAudio");
const hero = document.querySelector(".hero");

let insistiu = 0;

playButton.addEventListener("click", function () {
    if (meuAudio.paused) {
        meuAudio.play();
        playButton.textContent = "⏸️ PAUSAR HINO";
        insistiu = 0;

        hero.style.backgroundImage = "url('/sitegremio/front-end/arquivos/gif/torcidagremio.gif')";
        hero.style.backgroundSize = "cover";
        hero.style.backgroundPosition = "center";
    } else {
        insistiu++;
        if (insistiu === 1) {
            playButton.textContent = "VOCÊ NÃO VAI PAUSAR ESSA OBRA DE ARTE!";
        } else if (insistiu >= 2) {
            playButton.textContent = "OK JÁ QUE INSISTE 😪";

            meuAudio.pause();
            insistiu = 0;

            hero.style.backgroundImage =
                "url('/sitegremio/front-end/arquivos/img/arena-do-gremio-por-dentro.jpg')";

            setTimeout(() => {
                playButton.textContent = "♫ TOCAR HINO!";
            }, 1000);
        }
    }
});

//GIF MARAVILHOSO
const gifContainer1 = document.getElementById("gifContainer1");

gifContainer1.addEventListener("click", function(event) {
    event.preventDefault(); 

    
    gifContainer1.classList.add("active");

    setTimeout(() => {
        gifContainer1.classList.remove("active");
    }, 5000); 
});

//GREMIOOOOOOOOO
const meuAudio2 = document.getElementById("meuAudio2");
const logoGrêmio = document.getElementById("gremio1");

logoGrêmio.addEventListener("click", function (event) {
    event.preventDefault();
    meuAudio2.play();
    } 
);

//Super gremio

function tocarAudioMascote() {
    const audio = document.getElementById("audioMascote");
    audio.currentTime = 0;
    audio.play().catch((e) => console.error("Erro ao tentar tocar áudio:", e));
}
