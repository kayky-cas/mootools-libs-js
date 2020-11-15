



    


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












    