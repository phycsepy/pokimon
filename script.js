
const allpokis = []
for(let i = 1;i<=150;i++){
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`
    allpokis.push(fetch(url)
    .then((res) =>{
        return res.json();
    }))
}



 Promise.all(allpokis).then((sol)=>{
     const pokimon = sol.map((data) => ({
        
        id : data.id,
        image :data.sprites.other.dream_world['front_default'],
        
        name : data.name,
        weight : data.weight,
        height :data.height,
        types:data.types.map(ele => ele.type.name).join(', '),
        moves:data.moves.map(ele =>ele.move.name).join(', '),
        abilities:data.abilities.map(ele =>ele.ability.name).join(', '),
    
         
     }));
    displaystuff(pokimon);
    
 });  

const  displaystuff = (poki) =>{
    const pokilist = document.getElementById('pokilist')
    console.table(poki);
   
    const pokistr = poki.map((poki)=>`
    <li>
        <h1>${poki.name}</h1>
        <img src = ${poki.image}>
        <p>weight:${poki.weight}</p>
        <p>height:${poki.height}</p>
        <p>type:${poki.types}</p>
        <p>moves:${poki.moves}</p>
        <p>abilities:${poki.abilities}</p>
     </li>
        `
        
    ).join(' ');

    pokilist.innerHTML = pokistr;
  

} 
        
