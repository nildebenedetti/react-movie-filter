import movies from "./data/movies";
import { useState } from "react";
import { useEffect } from "react";



function App() {
  {/* variabile di stato per settare il valore della select, dove il default
  sara'il valore che vediamo preselezionato */}
  const [selectOptionValue, setSelectOptionValue] = useState("Scegli il genere");
  // sposto la map in una funzione
  const renderPlainList = (movieArray) =>
    movieArray.map((movie) => {
      return <li key={movie.id}>
        {movie.title}
      </li>
    });

  // adesso devo mettere la funzione useEffect, 
  // e far si che quando cambia la select option value 
  // CAMBI LA FUNZIONE NELLA MAP
  useEffect(
    () => { // primo parametro una callback che non prende parameretri e restituisce una clean-up callback

      console.log('sono la funzione!');
      
      return () => { //callback di pulizia o clean-up callback vierne eseguita PRIMA dellésecuzione della callback successiva

      };
    },
    [selectOptionValue] // Array delle dipendenze - possiamo inserire variabili di stato e props, quando cambia valore dipendenza, si esegue la callback
  );

  // AL CAMBIAMENTO DI STATO deve attivarsi quanto segue




  // aggiungere una validazione (magari con terna logica)
  // SE value === selectOptionValue 
  // ALLORA mostriamo funzione con map originaria
  // SE value !== 
  // ALLORA la funzione con filtro movie.genre
  // filter per genere su lista oggetti in const. filteredList
  // POI map

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
      {renderPlainList(movies)}
    </ul>
  </div>
}
export default App;
