import '../Components/Card.css';

function Pokedex({pokemons, win, total}){

    return(
        <>
            <div className='container-card'>

                {<h1>{total}</h1>}
                {win ? <h1 className='title'> Vencedor</h1>  :  <h1 className='title2'> Perdedor</h1> }
                {

                pokemons.map(pokemon => {
                    
                        return (
                            <>
                                <div className='item-card' key={pokemon.id}>

                                    <div className='name-p'>
                                        <h3>{pokemon.name}</h3>
                                    </div>
                                    <div className='img-p'>
                                        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(pokemon.id).padStart(3, '0')}.png`} alt='Pokemon'/>
                                    </div>
                                    <div className='dados-p'>
                                        <div className='info-p'>
                                            Type : {pokemon.type}
                                        </div>
                                        <div className='info-p'>
                                        EXP : {pokemon.base_experience}
                                        </div>
                                    </div>
                                </div>
                            </>
                            
                        )
                    })
                }

            </div>
        </>
    )
}


export default Pokedex;