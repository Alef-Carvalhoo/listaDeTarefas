$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa').val();
        const novaLinha = $('<li></li>');

        const tarefaElement = $(`<p>${novaTarefa}<button id="btn-concluir">Feito</button><button id="btn-remover">remover</button></p>`);
        
        tarefaElement.appendTo(novaLinha);
        novaLinha.appendTo('#listaTarefas');
        $('#nome-tarefa').val('');

    
    });

        $('#listaTarefas').on('click', '#btn-concluir', function() {
            $(this).parent().css({"text-decoration": "line-through"});
        });

        $('#listaTarefas').on('click', '#btn-remover', function() {
            $(this).parent().parent().remove();
        });
        
});
