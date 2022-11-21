import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const MOVIE_URL =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year";

  async function getMovies() {
    const json = await (await fetch(MOVIE_URL)).json();

    setMovie(json.data.movies);
    setLoading(false); //Loading화면 false
  }

  useEffect(() => {
    //mount시, 한번만 작동
    getMovies();
  }, []);

  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movie.map((item) => (
          <Movie
            key={item.id} //key는 React에서만, map안에서 컴포넌트들을 render할때 사용하는거다.
            id={item.id}
            medium_cover_image={item.medium_cover_image}
            title={item.title}
            summary={item.summary}
            genres={item.genres}
          />
        ))
      )}
    </div>
  );
}

export default Home;
