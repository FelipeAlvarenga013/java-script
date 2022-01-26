function verificando() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('#txtano')
    var res = window.document.querySelector('#res')
    var sec = window.document.getElementById('sec1')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = window.document.getElementsByName('txtsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.paddingTop = '10px'
        if (fsex[0].checked) {
            genero = 'Homem'
            sec.style.background = '#5ccbf7'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'fotos/bebe-m.png')
            }else if (idade <= 22 ) {
                //Jovem
                img.setAttribute('src', 'fotos/jovem-m.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotos/adulto-m.png')
            }else {
                //Idoso
                img.setAttribute('src', 'fotos/idoso-m.png')
            }
        }else { 
            genero = 'Mulher'
            sec.style.background = '#e4cdff'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'fotos/bebe-f.png')
            }else if (idade <= 22) {
                //Jovem
                img.setAttribute('src', 'fotos/jovem-f.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotos/adulta-f.png')
            }else {
                //Idosa
                img.setAttribute('src', 'fotos/idosa-f.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com a idade ${idade} Anos `
        res.appendChild(img)
       
    }
}