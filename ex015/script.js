function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Olha o ano atual 
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // criando uma tag de imagem, como se fosse no HTML 
        if(fsex[0].checked ) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if ( idade < 21 ){
                //jovem
                img.setAttribute('src', 'garoto.png')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoHomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if ( idade < 21 ){
                //jovem
                img.setAttribute('src', 'garota.png')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoMulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}