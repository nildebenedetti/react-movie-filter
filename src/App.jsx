import movies from "./data/movies";
import { useState } from "react";
import { useEffect } from "react";



function App() {
  {/* variabile di stato per settare il valore della select, dove il default
  sara'il valore che vediamo preselezionato */}
  const [selectOptionValue, setSelectOptionValue] = useState("Scegli il genere");
  // variabile per lista filtrata
 const [ moviesFiltered, setMoviesFiltered ] = useState(movies);
  // sposto la map in una funzione
  const renderPlainList = (movieArray) =>
    movieArray.map((movie) => {
      return <li key={movie.id}>
        {movie.title}
      </li>
    });

  // La mia useEffect collegata al valore di option value dovra'fare questo:
  // SE value di selectOptionValue === scegli...
  // ALLORA moviesFiltered = movies
  // SE value !== 
  // ALLORA la funzione con filter movie.genre
  // filter per genere su lista oggetti in const. filteredMovies
  // POI passo la list a map
  useEffect(
    () => { // primo parametro una callback che non prende parameretri e restituisce una clean-up callback

      console.log('sono la funzione!');
    
      if (selectOptionValue !== 'Scegli il genere') {
        // filtra la lista da qui e crea copia della lista originaria
        const filteredByGenre = movies.filter((movie) =>
          movie.genre === selectOptionValue
        );
        setMoviesFiltered(filteredByGenre) 
      } else {
        setMoviesFiltered(movies);
      }

    },
    [selectOptionValue] // Array delle dipendenze - possiamo inserire variabili di stato e props, quando cambia valore dipendenza, si esegue la callback
  );

  return <div className="card m-5 px-5 py-3">
    <h5 className="card-title my-4">Cosa guardiamo stasera?</h5>
    {/** quando cambia settami lo state su 1 e dai come value quello di elem che ha triggerato evento */}
    <select
      name="pickMovie"
      defaultValue={selectOptionValue}
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
      {renderPlainList(moviesFiltered)} {/** Ti passero' filteredMovies */}
    </ul>
  </div>
}
export default App;
