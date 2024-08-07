const MovieCard = ({ myData}) => {
    const { title, body, id } = myData
    return (
        <div className="card">
            <div className="card-info">
                <p className="card-id">{id}</p>
                <p className="card-body">{body.substr(0, 150)}</p>
                <h2 className="card-title">{title.substr(0,15)}</h2>
            </div>
        </div>
    )
}

export default MovieCard