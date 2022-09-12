function carregar_script(){

    
    var mensagem = window.document.getElementById('AppearsHoras')
    var imagem = document.getElementById("imagem")
    var Introducao = document.getElementById('mensagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    

    //Mostra o horário
    mensagem.innerHTML = ( `${hora}:`+`${minuto}:`+`${segundo}`)


    //Atualiza a página constantemente
    

	        /*Alterar o horário
        	 hora = ( Para vizualizar outros estilos, coloque aqui o horário)
    		*/





    if( hora >= 6 && hora <= 10){
        //Insere imagem
        imagem.src="imagens/amanhecer.jpeg"
        
        //Adiciona cores mescladas
        document.body.style.background = 'linear-gradient(#F3C7C6,#A89D9D )'

        //Não permite a função de scroll para a imagem ao fundo
        document.body.style.backgroundAttachment = "fixed";

        //Muda a cor da tag mensagem
        Introducao.style.backgroundColor = '#4F4351';

    }




    //Metade do dia
    else if( hora >= 11 && hora <= 16){

        //Insere imagem
        imagem.src="imagens/meio_dia.jpg"
        
        //Adiciona cores mescladas
        document.body.style.background = 'radial-gradient(white,#5085BB )'

        //Não permite a função de scroll para a imagem ao fundo
        document.body.style.backgroundAttachment = "fixed";         
    }






    //Mais a Tarde
    else if( hora >= 17 && hora <= 18){

        //Insere imagem
        imagem.src="imagens/mais_tarde.jpg"

        //Adiciona cores mescladas
        document.body.style.background = 'linear-gradient(#88BAD5,#FDA89A )'

        //Não permite a função de scroll para a imagem ao fundo
        document.body.style.backgroundAttachment = "fixed";
        
    }


    //Noite
    else{

        //Insere imagem
        imagem.src="imagens/noite.jpeg"

        document.body.style.background = 'radial-gradient(#464650,black )'
        
        //Muda a cor da tag mensagem
        Introducao.style.backgroundColor = '#4F4351';

        //Não permite a função de scroll para a imagem ao fundo
        document.body.style.backgroundAttachment = "fixed";
    }    
}