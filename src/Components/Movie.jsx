



function Movie({data,dataItem}){

    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w400";

    return (
        <>
            {data && data.map((e, i) => (
                    <article key={i}>
                        <img src={`${BASE_IMG_URL}${e.poster_path}`} alt={e.title}></img>
                        <h3>{e.title}</h3>
                        <p>Nombre de votes : {e.vote_count}</p>
                        <p>Note moyenne : {e.vote_average}</p>
                        <p>Date de sortie : {new Date(e.release_date).toLocaleDateString()}</p>
                        <p>Résumé : {e.overview}</p>
                    </article>
                ))
            }

            {dataItem && dataItem.map((e, i) => (
                <article key={i}>
                    <img src={`${BASE_IMG_URL}${e.poster_path}`} alt={e.title}></img>
                    <h3>{e.title}</h3>
                    <p>Nombre de votes : {e.vote_count}</p>
                    <p>Note moyenne : {e.vote_average}</p>
                    <p>Date de sortie : {new Date(e.release_date).toLocaleDateString()}</p>
                    <p>Résumé : {e.overview}</p>
                </article>
            ))}
        </>
    );
}

export default Movie