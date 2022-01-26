function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.padding = '10px'
        if (fsex[0].checked) {
            genero = 'Um Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'fotos/bebe-m.png')
            }else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'fotos/jovem-m.png')
            }else if (idade > 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotos/adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'fotos/idoso-m.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Uma Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'fotos/bebe-f.png')
            }else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'fotos/jovem-f.png')
            }else if (idade > 21 && idade <= 50) {
                //Adulto
                img.setAttribute('src', 'fotos/adulta-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'fotos/idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
