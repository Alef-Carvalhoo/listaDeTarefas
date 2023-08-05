$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa').val();
        const novaLinha = $('<li></li>');
        

        $(`<p>${novaTarefa}<button id="btn-concluir">Feito</button><button id="btn-remover">remover</button></p>`).appendTo(novaLinha);

        $(novaLinha).appendTo('ol');
        $('#nome-tarefa').val('');

    });

        $('#btn-concluir').click(function() {
        $('p').css({"text-decoration": "line-through"});

        });

        $('#btn-remover').click(function () {
        $('p').remove();
        $('li').remove();

        })
        
        
});
