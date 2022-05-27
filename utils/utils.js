const calculateSquareFunction = integers => integers.map( x => Math.pow(x, 2));

const sumCountersFunction = counterObjects => counterObjects.reduce((ac, c) => ac + c['count'], 0);

const actorInMoviesFunction = (movies, actor) => {
    const moviesName = Object.keys(movies);
    let moviesWithActor = {};

    moviesName.map(name => {
        let actors = movies[name].actors;

        moviesWithActor[name] = {
            actors : actors.includes(actor) ? actors : [...actors, actor] 
        };
    });

    return moviesWithActor;
}

const util = {
    calculateSquare : calculateSquareFunction,
    sumCounters : sumCountersFunction,
    actorInMovies: actorInMoviesFunction
};