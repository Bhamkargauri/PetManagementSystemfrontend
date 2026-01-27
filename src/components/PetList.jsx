import { useEffect, useState } from "react";
import { getAllPets } from "../services/PetService";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getAllPets();
        console.log("res=", response);
        setPets(response);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pets.map((pet, index) => {
            const isActive = activeId === index;

            return (
              <div
                key={index}
                className="relative h-[250px] rounded-[50px] overflow-hidden shadow-xl bg-white"
              >
                <img
                  src={`http://localhost:8080/uploads/${pet.imagePath}`}
                  alt={pet.petName}
                  className="w-full h-full object-cover"
                />

                <div className="absolute" />

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(isActive ? null : index);
                  }}
                  className={`absolute bottom-0 w-full bg-orange-400/90 p-6
          transition-all duration-500 cursor-pointer
          ${
            isActive
              ? "h-full translate-y-0 rounded-t-[30px]"
              : "h-[150px] translate-y-[65%] rounded-t-[50%]"
          }`}
                >
                  <h3 className="font-['Comic_Sans_MS'] text-xl font-bold text-center mb-8 text-white">
                    {pet.petName}
                  </h3>

                  {isActive && (
                    <div className="font-['Comic_Sans_MS'] mt-4 space-y-3 text-white">
                      <p className="m-0">Breed: {pet.breed}</p>
                      <p className="m-0">Age: {pet.age}</p>
                      <p className="m-0">Quantity: {pet.quantity}</p>
                      <p className="font-bold">₹ {pet.price}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PetList;
