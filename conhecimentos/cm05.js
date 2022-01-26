var hora = 01
if (hora >= 06 && hora <= 11) {
    console.log('Bom Dia')
}else if(hora >= 12 && hora <= 18) {
    console.log('Boa Tarde') 
}else if (hora >= 19) {
    console.log('Boa Noite')
}else if (hora == 00) {
    console.log('Meia Noite')
}else {
    console.log('Boa Madrugada')
}