import movies from "./data/movies";
import { useState } from "react";
import { useEffect } from "react";



function App() {
  {/* variabile di stato per settare il valore della select, dove il default
  sara'il valore che vediamo preselezionato */}
  const [selectOptionValue, setSelectOptionValue] = useState("Scegli il genere");

  
  return <div className="card m-5 px-5 py-3">
    <h5 className="card-title my-4">Cosa guardiamo stasera?</h5>
    {/** quando cambia settami lo state su 1 e dai come value quello di elem che ha triggerato evento */}
    <select 
    name="pickMovie" 
    onChange={(e) => setSelectOptionValue(e.target.value)}  
    className="form-select" 
    aria-label="Default select">
      {/** questa option sara'da collegare allo state di partenza */}
      <option value={selectOptionValue}>Scegli il genere</option>
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
