
const allpokis = []
for(let i = 1;i<=150;i++){
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`
    allpokis.push(fetch(url)
    .then((res) => res.json()
    ))
}

const search = document.getElementById('SearchBox');



 Promise.all(allpokis).then((sol)=>{
     const pokimon = sol.map((data) => ({
        
        id : data.id, 
        image :data.sprites.other.dream_world['front_default'],
        
        name : data.name,
        weight : data.weight,
        height :data.height,
        types:data.types.map(ele => ele.type.name).join(','),
        moves:data.moves.map(ele =>ele.move.name).join(', '),
        abilities:data.abilities.map(ele =>ele.ability.name).join(', '),
       
      
    
         
     }));
    displaystuff(pokimon);
    
 });  
 
const help= []
const  displaystuff = (poki) =>{
    const pokilist = document.getElementById('pokilist');
    const Names = poki.map((poki)=>poki.name)
    
    // console.table(Names)
    //  console.table(poki.map((poki)=>poki.name));

    
   
    const pokistr = poki.map((poki)=>`
    <li class = "col s4">
      
  <div class="card charactersList ">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator  pad" src="${poki.image}">
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">${poki.name}<i class="material-icons right material-icons-outlined">catching_pokemon</i></span>
   
   
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">${poki.name}<i class="material-icons right">close</i></span>
    <p>${poki.types}</p>
  </div>
</div>
        
       
     </li>
        `
        
    ).join(' ');

    pokilist.innerHTML = pokistr;
  

} 
// const some = () =>{
//     `<div class="pokemon-stats-info ">
//             <h3>Stats</h3>
    
//             <ul>
//               <li class="first">
//                 <ul class="gauge">
//                   <li data-value="5" class="meter" style="top: 66.6667%;"></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                 </ul>
//                 <span>HP</span>
//               </li>

//               <li>
//                 <ul class="gauge">
//                   <li data-value="5" class="meter" style="top: 66.6667%;"></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                 </ul>
//                 <span>Attack</span>
//               </li>

//               <li>
//                 <ul class="gauge">
//                   <li data-value="5" class="meter" style="top: 66.6667%;"></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                 </ul>
//                 <span>Defense</span>
//               </li>

//               <li>
//                 <ul class="gauge">
//                   <li data-value="6" class="meter" style="top: 60%;"></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                 </ul>
//                 <span>Special Attack</span>
//               </li>

//               <li>
//                 <ul class="gauge">
//                   <li data-value="6" class="meter" style="top: 60%;"></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                 </ul>
//                 <span>Special Defense</span>
//               </li>

//               <li>
//                 <ul class="gauge">
//                   <li data-value="5" class="meter" style="top: 66.6667%;"></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                   <li></li>
//                 </ul>
//                 <span>Speed</span>
//               </li>
//             </ul>
    
//       </div>'
// }


        
