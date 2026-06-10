//O JavaScript é uma linguagem WEB

//Variaveis - Valores armazenados na memória do computador

//Funções - Blocos de código

function carregar(){
    //alert("Bem Vindo!")
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date() 
    var hora = data.getHours()
    var minutos = data.getMinutes()

    

    msg.innerHTML = `Agora são ${hora}:${minutos}`
}
