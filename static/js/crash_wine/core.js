
$(function() {

    $('#start_game h4').on('click tap',function(){
        $('#start_game').addClass('hidden');
        add_red_wine();
        $('#game_board').removeClass('hidden');

        setTimeout(function(){
            var score = $('#score').data('score');
            $('#final_score').text(score);
            $('#game_board').addClass('hidden');
            $('#game_over').removeClass('hidden');
        }, 8000);
    });
    
});