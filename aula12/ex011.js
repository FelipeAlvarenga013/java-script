var idade = 60
if (idade < 16) {
    console.log(`${idade} Anos (Não vota)`)
}else  if (idade < 18 || idade > 65) {
        console.log(`${idade} Anos (Voto opicional)`)
}else {
    console.log(`${idade} Anos (Voto obrigatorio)`)
}
        