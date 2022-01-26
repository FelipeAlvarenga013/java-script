var agora = new Date()
var hora = agora.getHours()
console.log(`Agora São exatamente ${hora}` )
if (hora == 00) {
    console.log('Meia Noite')
}else if (hora <= 05) {
    console.log('Boa Madrugada')
}else if (hora >= 18) {
    console.log('Boa Noite')
}else if (hora > 11) {
    console.log('Boa Tarde')
}else {
    console.log('Bom Dia')
}