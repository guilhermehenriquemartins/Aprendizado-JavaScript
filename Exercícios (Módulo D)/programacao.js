function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        imagem.src = 'imagens/manha.png'
        window.document.body.style.background = '#e3e36b'
    } else if (hora >= 12 & hora < 18) {
        imagem.src = 'imagens/tarde.png'
        window.document.body.style.background = '#975437'
    } else {
        imagem.src = 'imagens/noite.png'
        window.document.body.style.background = '#303030'
    }
}