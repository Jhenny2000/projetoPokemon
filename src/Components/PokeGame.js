import React from "react";
import './Card.css';
import Pokedex from "../Pokedex/pokedex";
function PokeGame(){

    const pokemons = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        // {id: 95, name: 'None', type: 'poison', base_experience: 225},
        // {id: 96, name: 'None', type: 'poison', base_experience: 225},
        // {id: 97, name: 'None', type: 'poison', base_experience: 225},
        // {id: 98, name: 'None', type: 'poison', base_experience: 225},
        // {id: 99, name: 'None', type: 'poison', base_experience: 225},
        // {id: 100, name: 'None', type: 'poison', base_experience: 225},
        // {id: 101, name: 'None', type: 'poison', base_experience: 225},
        // {id: 102, name: 'None', type: 'poison', base_experience: 225},
        // {id: 103, name: 'None', type: 'poison', base_experience: 225},
        // {id: 104, name: 'None', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ];

      
      // const carcter = pokemons[6].id;

      // console.log(carcter.padStart(3, carcter));

      

      // console.log(carcter.padStart(4, '0'));

      // console.log(str1.padStart(4, '0'));

      const hand1 = [];
      const hand2 = [...pokemons];

      while (hand1.length < hand2.length) {
        const randomPoke = Math.floor(Math.random() * hand2.length);
        const newPokemon = hand2.splice(randomPoke, 1)[0];

        hand1.push(newPokemon);

      }

      const totalhand1 = hand1.reduce((resultado, quantidade) => {
        return (resultado + quantidade.base_experience)
      
      }, 0);

      const totalhand2 = hand2.reduce((resultado, quantidade) => {
        return (resultado + quantidade.base_experience)
      
      }, 0);

     
      
    

    return (
        <>
            <div id='body'>


              <Pokedex pokemons={hand1} win={totalhand1 > totalhand2} total={totalhand1}/>


              <Pokedex pokemons={hand2} win={totalhand2 > totalhand1} total={totalhand2} />

            </div>
        </>
    )

}

export default PokeGame;

{/* <>
            <div className='resultado'>

              <div>
                {totalhand1 < totalhand2 ? (
                    <h1>Mão 1 Perdedor</h1>
                    
                ) : <h1>mão 2 Vencedor</h1>}
              </div>

            </div>
            <Pokedex pokemons={hand1} />

            <div className='resultado'>
                <h1>{totalhand2}</h1>
            </div>
            <Pokedex pokemons={hand2} />
        </> */}