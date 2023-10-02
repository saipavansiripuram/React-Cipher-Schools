import "../css/Movie.css"
const Movie = () =>{
    return(
        <div className="back">
        <div className="movies">
            
            <img className="photo" src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg" alt=""/>
            <h1 className="h1">Avengers Infinity War </h1>
            <h3 className="h3">Action,Adventure,Drama</h3>
            <p>Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.</p>
                
        </div>
        <div className="data">
            <h1 className="rate">8.4/10</h1>
            <h1 className="cast">Cast</h1>
        </div>
        </div>
        

    )
}
export default Movie;