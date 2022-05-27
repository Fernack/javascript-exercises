const listActors = (movies) => {
    const moviesName = Object.keys(movies);
    let actors = [];
    
    moviesName.map(name => {
        actors = [ ...movies[name].actors, ...actors]
    });

    appendActorListToBody(Object.keys(actors.reduce((a, v) =>  ( { ...a, [v]: v} ), {} )).sort());
};

const appendActorListToBody = (actorList) => {
    let ul = document.createElement("ul");

    actorList.map(a => { 
        let li = document.createElement("li");
        li.textContent = a;

        ul.append(li); 
    });

    document.body.appendChild(ul);
};

listActors(movies);