import { useState } from "react";
import { perros } from "../data/pets";
import PetCard from "../components/PetCard";

function Perros() {
  const [maxPrice, setMaxPrice] = useState(600);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPets = perros.filter(
    (p) =>
      p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
      p.precio <= maxPrice
  );

  return (
    <div className="page">
      <h1>🐶 Nuestros Perros</h1>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar perro..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filtro por precio */}
      <div style={{ margin: "20px 0" }}>
        <label>
          Precio máximo: ${maxPrice}
        </label>

        <input
          type="range"
          min="200"
          max="600"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      {/* Tarjetas */}
      <div className="pets-grid">
        {filteredPets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
          />
        ))}
      </div>
    </div>
  );
}

export default Perros;