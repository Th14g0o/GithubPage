const ol = document.getElementById("aulas");
const aulas = Array.from(ol.children);
const botaoCima = document.getElementById("bt-cima");
const botaoBaixo = document.getElementById("bt-baixo");
const visiveis = 3;
let indiceAtualAulas = 0;
let clicado = false;

function atualizarPosicao() {
    aulas.forEach((aula, index) => {
        if (index >= indiceAtualAulas && index < indiceAtualAulas + visiveis){
            aula.style.display = "flex";
            setTimeout(() => {
                aula.style.opacity = "1";
            }, 10);
        }
        else{
            aula.style.opacity = "0";
            setTimeout(() => {
                aula.style.display ="none";
            }, 300);
        }
    });
    setTimeout(() => {
        clicado = false;
    }, 300);
}

botaoCima.addEventListener("click", () => {
    if (indiceAtualAulas > 0 && !clicado) {
        indiceAtualAulas -= visiveis;
        if (indiceAtualAulas < 0) indiceAtualAulas = 0;
        clicado = true;
        atualizarPosicao();
    }
});
botaoBaixo.addEventListener("click", () => {
    if (indiceAtualAulas <  aulas.length - visiveis && !clicado) {
        indiceAtualAulas += visiveis;
        clicado = true;
        atualizarPosicao();
    }
});

atualizarPosicao(); 