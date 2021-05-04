const model = document.getElementById('needed')
const modelplay = document.getElementsByClassName('modal-trigger')
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
  steel: '#B7B7CE',
  fairy: '#D685AD',



};

var pokimon ;
 Promise.all(allpokis).then((sol)=>{
    pokimon = sol.map((data) => ({
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
    
  
 });

 
 const playcolor = (val)=>{
  const filterchar = pokimon.filter(pokimon=>{
     
    return pokimon.types.includes(val.toLowerCase())
 });
 displaystuff(filterchar);
  
}
 


const buttonf = () => {
  
  let c = 0;
  for (let key in colours) {
    if (colours.hasOwnProperty(key)) {
      const li = document.createElement("li");
      li.className = "col s2";
      li.id = `btn${c}`;
      const filterButton = document.createElement("a");
      filterButton.className = "waves-effect btn buttarr";
      filterButton.style = `background-color:${colours[key]}`;
      filterButton.innerHTML = key;
      filterButton.addEventListener("click", () => playcolor(key));
      li.appendChild(filterButton);
      buttonlist.appendChild(filterButton);
      c = c + 1;
    }
  }
};

const filterstuff = (poki)=>{
  search.addEventListener('keyup',ele=>{
   
    const enterele = ele.target.value;
    const filterchar = poki.filter(poki=>{
     
       return poki.abilities.includes(enterele.toLowerCase())||poki.name.includes(enterele.toLowerCase())||poki.types.includes(enterele.toLowerCase())
    });
    // console.table(filterchar)
    // console.log(filterchar.length)
    
    displaystuff(filterchar)
  });
   
}

const  displaystuff = (poki) =>{
    
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
      `).join(' ')
      pokilist.innerHTML = pokistr;
    
    
}
