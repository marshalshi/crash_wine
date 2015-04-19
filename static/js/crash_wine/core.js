
$(function() {

    $('#start_game #start').on('click tap',function(){
        $('#start_game').addClass('hidden');
        add_red_wine();
        $('#game_board').removeClass('hidden');

        game_over();
    });

    $('#restart').on('click tap', function(){
        $('#game_over').addClass('hidden');
        $('#score').data('score', 0).text(0);
        $('#game_board').removeClass('hidden');

        game_over();
    });
    
});