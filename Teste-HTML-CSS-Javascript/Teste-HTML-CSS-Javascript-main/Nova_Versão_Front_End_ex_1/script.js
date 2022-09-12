function carregar_script(){

    var mensagem = window.document.getElementById('AppearsHoras')
    var imagem = window.document.getElementById('Imagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    
    mensagem.innerHTML = ( `${hora}:`+`${minuto}:`+`${segundo}`)

    hora = 17

    if( hora >= 6 && hora <= 12){
        //Manhã
        imagem.src="imagem_de_manha.jpg"
        document.body.style.background = '#ffe13860'
    }


    //Mais a Tarde
    else if( hora >= 17 && hora <= 18){
        //Adiciona cores mescladas
        document.body.style.background = 'linear-gradient(#ABC7D3, #FDB4A3)', 
        //Não permite a função de scroll para a imagem ao fundo
        document.body.style.backgroundAttachment = "fixed";
        
    }
    else{
        //Noite
        document.body.style.background = '#37323b'
        
    }
    

    
}