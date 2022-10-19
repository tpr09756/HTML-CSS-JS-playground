define([
    `views/film-view`,
    `services/film-service`
], function(filmView, filmService) {
    
    var internals = {};
    var externals = {};

    externals.start = function(){
        internals.bindEventHandlers();
        filmView.render();
    };

    internals.bindEventHandlers = function () {
        filmView.bind('button', internals.buttonHandler);
        
    };

    internals.buttonHandler = function () {
        var filmIndex = Math.floor(Math.random() * 6);
        filmService.getFilm(filmIndex, function(film) {
            console.log('renderfilmView');
            filmView.render(film);
        })
    }

    return externals;
    
});