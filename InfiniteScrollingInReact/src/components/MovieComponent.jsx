import MovieCard from "./MovieCard"

const MovieComponent = ({movieInfo}) => {
    return (
        <div className="wrapper">
            <div className="container">
                <h1>List of Cards</h1>
                <div className="grid grid-three-column">
                    {movieInfo.map((curVal, id) => {
                        return <MovieCard key={id} myData={curVal}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieComponent