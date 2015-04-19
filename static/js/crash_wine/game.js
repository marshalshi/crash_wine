/* game main functions */

var number = 2;
var red_wine_width = 64;
var red_wine_height = 85;

function random_position(holder, member){
    var width = holder.width();
    var height = holder.height();

    var _width = member.width();
    var _height = member.height();

    var left = Math.floor(Math.random() * (width - _width));
    var top = Math.floor(Math.random() * (height - _height));
    
    return [top, left];
}


function click_wine(score_holder){
    var score = parseInt(score_holder.data('score'));
    score += 1;
    score_holder.data('score', score);
    score_holder.text(score);
}

function create_red_wine(){
    var red_wine = $("<div>", {class: "red_wine"});
    red_wine.css({
        width: red_wine_width + 'px', height: red_wine_height + 'px'
    });

    red_wine.on('click tap', function(e) {
        click_wine($('#score'));
        // remove red_wine;
        red_wine.animate({
            opacity: 0.20
        }, 200, function(){
            $('.red_wine').remove();
            add_red_wine();
        });
    });
    return red_wine;
}

function wine_position(game_board, red_wine){
    var position = random_position(game_board, red_wine);

    red_wine.css({
        top: position[0] + 'px', left: position[1] + 'px'
    });
    
}

function append_red_wine(){
    var red_wine = create_red_wine();
    var game_board = $('#game_board');
    game_board.append(red_wine);
    wine_position(game_board, red_wine);
    window.setInterval(function(){
        wine_position(game_board, red_wine)
    }, 1200);
}

function add_red_wine(){
    for (var i=0; i<number; i++){
        append_red_wine();
    }
}