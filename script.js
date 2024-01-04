function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var tit = window.document.getElementById('title')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!  
        img.src = 'modelo/manha.png'
        //     document.body.style.background = '#dcccad'
        tit.innerText = 'Bom dia!'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'modelo/tarde.png'
        // document.body.style.background = '#e19b87'
        tit.innerHTML = 'Boa tarde!'
    } else {
        //BOA NOITE!
        img.src = 'modelo/noite.png'
        // document.body.style.background = '#2b1a20'
        tit.innerHTML = 'Boa noite!'
    }
}