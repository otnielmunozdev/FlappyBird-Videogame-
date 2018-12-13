var Menu = {

    preload: function(){
        juego.stage.backgroundColor = '#FFF';
        juego.load.image('btn', 'img/btn.png');
    },

    create: function(){
        var boton =  this.add.button(juego.width/2,
            juego.height/2, 'btn', this.iniciarJuego, this);
            boton.anchor.setTo(0.5);
        var txtIniciar = juego.add.text(juego.width/2, juego.height/2 -85, 
            "Iniciar Juego", {font: "bold 24px sans-serif", fill:"black",
        align: "center"});
        txtIniciar.anchor.setTo(0.5);

        var titulo = juego.add.text(juego.width/2, juego.height/2 -125, 
            "Mi jueguito alv! :v", {font: "bold 30px sans-serif", fill:"black",
        align: "center"});
        titulo.anchor.setTo(0.5);

    },

    iniciarJuego: function(){
        this.state.start("Juego");

    }
    

};