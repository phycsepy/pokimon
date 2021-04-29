
const fetchPokemon = () =>{
    
    let url = `https://pokeapi.co/api/v2/pokemon/1`
    fetch(url)
        .then((res) =>{
            return res.json();
        })
        .then((data) =>{
            const pokemon = {
                name : data.name,
                id : data.id,
                image :data.sprites.other.dream_world['front_default'],
                weight : data.weight,
                height :data.height,
                types:data.types.map(ele => ele.type.name).join(', '),
                moves:data.moves.map(ele =>ele.move.name).join(', '),
                abilities:data.abilities.map(ele =>ele.ability.name).join(', ')


                
            };
        
            

            console.table(pokemon);


        });

};

fetchPokemon();