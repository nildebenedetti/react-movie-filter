import movies from "./data/movies";

function App() {
  return <div className="card mx-auto py-3">
    <select className="form-select" aria-label="Default select">
      <option selected>Scegli il genere</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
    </select>
  </div>;
}
export default App;
