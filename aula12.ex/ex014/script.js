function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sec = window.document.getElementById('sec1')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 1 && hora < 12) {
        // BOM DIA!
        msg.innerHTML = `Agora são ${hora} horas do Dia`
        img.src = 'fotos/fotomanha.png'
        sec.style.background = '#fede91'
        msg.style.color = '#000000'
    }else if (hora >= 12 && hora < 13) { 
        msg.innerHTML = `Agora são ${hora} Meio Dia`
        img.src = 'fotos/fototarde.png'
        sec.style.background = '#dd8f51'
        msg.style.color = '#fffffff'
    }else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        msg.innerHTML = `Agora são ${hora} Tarde`
        img.src = 'fotos/fototarde.png'
        sec.style.background = '#dd8f51'
        msg.style.color = '#ffffff'
    }else {
        // BOA NOITE
        msg.innerHTML = `Agora são ${hora} horas da Noite`
        img.src = 'fotos/fotonoite.png'
        sec.style.background = '#22747a'
    }
}

