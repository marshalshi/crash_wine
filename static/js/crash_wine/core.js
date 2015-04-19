
$(function() {
            window.fbAsyncInit = function() {
            FB.init({
                    appId      : '801367206608067',
                    xfbml      : true,
                    version    : 'v2.3'
                });
            

            // ADD ADDITIONAL FACEBOOK CODE HERE
        };
        
        var canvas = $("#canvas");

        initGame(canvas);
        
});