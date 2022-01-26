function carregar() {
    var sec = window.document.querySelector('#sec1')
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var body = window.document.querySelector('#bd')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}`
    if (hora > 5 && hora <= 11) {
        msg.innerHTML = `Agora são ${hora} da Manhã`
        img.src = 'fotos/fotomanha.png'
        body.style.backgroundImage = 'linear-Gradient(to right , #f6a902, #bfbdb0, #f6a902 )'
        sec.style.color = '#000000'
        sec.style.background = '#99ccff'
        sec.style.boxShadow = '2px 2px 6px #2e2e2e'
    }else if (hora >= 12 && hora < 19 ) {
        msg.innerHTML = `Agora são ${hora} da Tarde`
        img.src = 'fotos/fototarde.png'
        body.style.backgroundImage = 'linear-Gradient(to right , #b1744d, #da7522, #57321d )'
        sec.style.background = '#57321d'
    }else if (hora == 00) {
        msg.innerHTML = `Agora são ${hora} Meia Noite`
        img.src = 'fotos/fotonoite.png'
        body.style.background = 'linear-Gradient(to right, #003333, #339999, #003333)'
        sec.style.background = '#003333'
    }else {
        msg.innerHTML = `Agora são ${hora} da Noite`
        img.src = 'fotos/fotonoite.png'
        body.style.background = 'linear-Gradient(to right, #003333, #339999, #003333)'
        sec.style.background = '#003333'
    }

}