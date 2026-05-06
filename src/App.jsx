import movies from "./data/movies";
import { useState } from "react";


function App() {
  return <div className="card m-5 px-5 py-3">
    <h5 className="card-title my-4">Cosa guardiamo stasera?</h5>
    <select name="pickMovie" className="form-select" aria-label="Default select">
      <option value="Scegli il genere">Scegli il genere</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
    </select>
    <ul className="py-3">
      {movies.map((movie) => {
        return <li key={movie.id}>
          {movie.title}
        </li>
      })}
    </ul>
  </div>
}
export default App;
