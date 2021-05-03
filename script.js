
const search = document.getElementById('autocomplete-input');
const buttonlist = document.getElementById('buttonlist');
const but = document.getElementById('btn')
const allpokis = []

for(let i = 1;i<=150;i++){
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`
    allpokis.push(fetch(url)
    .then((res) => res.json()
    ))
}
colours  = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',



};


 Promise.all(allpokis).then((sol)=>{
    const  pokimon = sol.map((data) => ({
      name : data.name,
        id : data.id, 
        image :data.sprites.other.dream_world['front_default'],
        weight : data.weight,
        height :data.height,
        types:data.types.map(ele => ele.type.name).join(','),
        moves:data.moves.map(ele =>ele.move.name).join(', '),
        abilities:data.abilities.map(ele =>ele.ability.name).join(', '),
        

         
     }));
    
     displaystuff(pokimon);
     filterstuff(pokimon)

    buttonf();
    //buttonfill(pokimon)
     //newf(pokimon)
 });
 
const playcolor= (val) =>{
  console.log(val)

}
 const buttonf = () =>{
  let buttonstr = ''
  let c = 0;
    for(let key in colours){
      if(colours.hasOwnProperty(key)){
        buttonstr +=`<li class="col s4 " id="btn${c}">
        <button class="waves-effect btn buttarr" style="background-color:${colours[key]};" onclick="playcolor(${key})" >${key}</button>
        <li>`
        c = c + 1;
      }
      
     
    }
    // alert(c)
  // console.log(buttonstr)
  buttonlist.innerHTML = buttonstr
  

}

const filterstuff = (poki)=>{
  search.addEventListener('keyup',ele=>{
    // console.log(ele.target.value);
    const enterele = ele.target.value;
    const filterchar = poki.filter(poki=>{
     
       return poki.abilities.includes(enterele.toLowerCase())||poki.name.includes(enterele.toLowerCase())||poki.types.includes(enterele.toLowerCase())
    });
    console.table(filterchar)
    console.log(filterchar.length)
    len = filterchar.length
    displaystuff(filterchar,len)
  });
   
}








 
const  displaystuff = (poki,len = 1) =>{
    const pokilist = document.getElementById('pokilist');
   
  
      
  if(len === 0 )  {
    pokistr = `
    <h1> No pokimon with this name </h1>
    
    `
    pokilist.innerHTML = pokistr
  }
    
    else{
      
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
    <p>Types:${poki.types}</p>
    <p>Ablities:${poki.abilities}</p>
    <p>Height:${poki.height}</p>
    <p>Weight:${poki.weight}</p>
  </div>
</div>
        
       
     </li>
        `
        
    ).join(' ');
    
    pokilist.innerHTML = pokistr;
    }

} 

