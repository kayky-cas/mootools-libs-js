window.addEvent('domready', function() {

    $$('#btn-deixar-vermelho')
        .addEvent('click', function() {

            $$('.deixar-vermelho').setStyle('color', 'red');

        }
    );



    $$('#btn-event-exemplo')
        .addEvent('click', function() {
            alert('O botão foi clickado!');
        });

    $$('#btn-event-exemplo')
        .addEvent('mouseover', function() {

            if (this.getStyle('background-color') !== 'red') {

                this.setStyle('background-color', 'red')
            }
            else {

                this.setStyle('background-color', 'blue')
            }

        });





    var Animal = new Class({

        initialize: function(tipo) {
            this.tipo = tipo;
        }
    });

    var Gato = new Class({

        Extends: Animal,
        initialize: function(nome, cor) {
            this.parent('gato');
            this.nome = nome;
            this.cor = cor;
        }
    })

    var meuGato = new Gato('Luke', 'branco');



    $$('#p-gato')
        .set('text', `Meu ${meuGato.tipo} se chama ${meuGato.nome} e ele é ${meuGato.cor}`);









        
});