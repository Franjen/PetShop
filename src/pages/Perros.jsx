import { perros } from '../data/pets';
import PetCard from '../components/PetCard';

function Perros() {
  return (
    <div className="page">
      <h1>🐶 Nuestros Perros</h1>

      <div className="pets-grid">
        {perros.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
          />
        ))}
      </div>
    </div>
  );
} export default Perros;