var Game_Over = {
    
    preload: function(){
        juego.stage.backgroundColor = '#FFF';
        juego.load.image('btn', 'img/btn.png');
    },

    create: function(){
        var boton =  this.add.button(juego.width/2,
            juego.height/2, 'btn', this.iniciarJuego, this);
            boton.anchor.setTo(0.5);

        var txtIniciar = juego.add.text(juego.width/2 -50, juego.height/2 -85, 
            "Puntos", {font: "bold 24px sans-serif", fill:"black",
        align: "center"});
        txtIniciar.anchor.setTo(0.5);

        if(puntos == -1 ){
            puntos = 0;
        }

        var txtPuntosEtiqueta = juego.add.text(juego.width/2 +50, juego.height/2 -85, 
            puntos.toString(), {font: "bold 20px sans-serif", fill:"black",
        align: "center"});
        txtPuntosEtiqueta.anchor.setTo(0.5);

        var titulo = juego.add.text(juego.width/2, juego.height/2 -125, 
            "Mas suerte para la proxima compa :v", {font: "bold 19px sans-serif", fill:"black",
        align: "center"});
        titulo.anchor.setTo(0.5);

    },

    iniciarJuego: function(){
        this.state.start("Juego");

    }

};