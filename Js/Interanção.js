const Esquerda_CT = document.getElementById("Esquerda_Certificados");

const Direita_CT = document.getElementById("Direita_Certificados");

const Tela_Movimento = document.getElementById("Tela_Movimento");

let contador = 0

// mover icone
Esquerda_CT.addEventListener("mousedown",()=>{
    if ( contador < 140){
        contador+=130
    }
    Tela_Movimento.style.transform = (`translate(${contador}px`);
})

Direita_CT.addEventListener("mousedown",()=>{
    if ( contador > -140){
        contador-=130
    }
    Tela_Movimento.style.transform = (`translate(${contador}px`);
})
//Certificados
const Python = document.getElementById("Python");
Python.addEventListener("mousedown",()=>{
    PythonFu()
})
const JS = document.getElementById("JavaScript");
JS.addEventListener("mousedown",()=>{
    JavaScriptFu()
})
const CssHtml = document.getElementById("Html_css");
CssHtml.addEventListener("mousedown",()=>{
    Html_CssFU()
})
// Lua
const Corpo = document.querySelector("body");
const TelaProj = document.getElementById("Tela00");
const TelaHabi = document.getElementById("Tela01");
const Lua = document.getElementById("Lua");
const Imagem_Personagem = document.getElementById("Imagem_Personagem");
const bars = document.getElementById("bars");

let Ativador = 0;
Lua.addEventListener("mousedown",()=>{
    if (Ativador == 1){
        Imagem_Personagem.src = ("Assets/Img/Programador_e_lobo.png");
        bars.style.color = ("rgb(0, 110, 255)");
        Ativador--
        TelaProj.style.display = ('none');
        TelaHabi.style.display = ('flex');
        Corpo.style.flexDirection = ('row');
    }
    else{
        Imagem_Personagem.src = ("Assets/Img/Lobo_programado2.png");
        bars.style.color = ("#b72be2");
        Ativador++
        TelaProj.style.display = ('flex');
        TelaHabi.style.display = ('none');
        Corpo.style.flexDirection = ('row-reverse');
    }
})
//Tela modal certificado
const Tela_Certificando = document.getElementById("Tela_Certificando");
const Certificandoimg = document.getElementById("Certificando");
const Esquerda_CTelaModal = document.getElementById("Esquerda_CertificadosTela");
const Direita_CTelaModal = document.getElementById("Direita_CertificadosTela");
const Contador_Certificados = document.getElementById("Contador_Certificados");
const Link_Certificado = document.getElementById("Link_Certificado");
const Fechar_Janela = document.getElementById("Fechar_JanelaPai");
const Modulo = document.getElementById("Modulo");
const text_Titulo = document.getElementById("text_Titulo");

function PythonFu(){
    text_Titulo.innerHTML = ("Certificados Python");
    let Certificados = 1
    Tela_Certificando.style.display = ('flex');
    Certificandoimg.style.backgroundImage = ("url('Assets/Img/Certificados/Certificado-Py-Curso-em-video.png')");

    Fechar_Janela.addEventListener("click",()=>{
        Tela_Certificando.style.display = ('none');
        Modulo.innerHTML = (`C${Certificados}`);
    })
    function MudarImg(){
        Modulo.innerHTML = (`C${Certificados}`);
        if(Certificados == 1){
            Link_Certificado.href = ("Assets/PDF/Gustavo-Augusto-Python-3-8211-Mundo-1-40-Horas-Certificado-Curso-em-Video.pdf");
    
        }
        if(Certificados == 2){
            Link_Certificado.href = ("Assets/PDF/Gustavo-Augusto-Python-3-8211-Mundo-2-40-Horas-Certificado-Curso-em-Video.pdf");
        }
    }
    
    Contador_Certificados.innerHTML = ("1/2")
    Esquerda_CTelaModal.addEventListener("mousedown",()=>{
        if (Certificados > 1){
            Certificados--
            MudarImg()
        }
        Contador_Certificados.innerHTML = (`${Certificados}/2`)
    })
    Direita_CTelaModal.addEventListener("mousedown",()=>{
        if (Certificados < 2){
            Certificados++
            MudarImg()
        }
        Contador_Certificados.innerHTML = (`${Certificados}/2`)
    })
}

function JavaScriptFu(){
    Link_Certificado.href = ("Assets/PDF/Gustavo-Augusto-Javascript-40-Horas-Certificado-Curso-em-Video.pdf");
    text_Titulo.innerHTML = ("Certificados JavaScript");
    Tela_Certificando.style.display = ('flex');
    Certificandoimg.style.backgroundImage = ("url('Assets/Img/Certificados/Certificado Js Curso em video.png')");

    Fechar_Janela.addEventListener("click",()=>{
        Tela_Certificando.style.display = ('none');
        Modulo.innerHTML = (`C1`);
    })
    Contador_Certificados.innerHTML = ("1/1")
}

function Html_CssFU(){
    text_Titulo.innerHTML = ("Certificados Html e Css");
    let Certificados = 1
    Tela_Certificando.style.display = ('flex');
    Certificandoimg.style.backgroundImage = ("url('Assets/Img/Certificados/Certificado-html-css-Curso-em-video.png')");

    Fechar_Janela.addEventListener("click",()=>{
        Tela_Certificando.style.display = ('none');
        Modulo.innerHTML = (`C${Certificados}`);
    })
    function MudarImg(){
        Modulo.innerHTML = (`C${Certificados}`);
        if(Certificados == 1){
            Link_Certificado.href = ("Assets/PDF/Gustavo-Augusto-Curso-HTML5-e-CSS3-modulo-1-de-5-40-HORAS-Certificado-Curso-em-Video.pdf");
    
        }
        if(Certificados == 2){
            Link_Certificado.href = ("Assets/PDF/Gustavo-Augusto-Curso-HTML5-e-CSS3-modulo-2-de-5-40-HORAS-Certificado-Curso-em-Video.pdf");
    
        }
        if(Certificados == 3){
            Link_Certificado.href = ("Assets/PDF/Gustavo-Augusto-Curso-HTML5-e-CSS3-modulo-3-de-5-40-HORAS-Certificado-Curso-em-Video.pdf");
    
        }
        if(Certificados == 4){
            Link_Certificado.href = ("Assets/PDF/Gustavo-Augusto-Curso-HTML5-e-CSS3-modulo-4-de-5-40-HORAS-Certificado-Curso-em-Video.pdf");
    
        }
    }
    
    Contador_Certificados.innerHTML = ("1/4")
    Esquerda_CTelaModal.addEventListener("mousedown",()=>{
        if (Certificados > 1){
            Certificados--
            MudarImg()
        }
        Contador_Certificados.innerHTML = (`${Certificados}/4`)
    })
    Direita_CTelaModal.addEventListener("mousedown",()=>{
        if (Certificados < 4){
            Certificados++
            MudarImg()
        }
        Contador_Certificados.innerHTML = (`${Certificados}/4`)
    })
}
//Botões
const CopyNum = document.getElementById("CopyNum");
const NumeroTel = ("31 9 7240-7179");
CopyNum.addEventListener("click",()=>{
    navigator.clipboard.writeText(NumeroTel);
    alert("Numero de Telefone Copiado");
})