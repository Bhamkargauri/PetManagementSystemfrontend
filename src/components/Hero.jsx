import { useState } from "react";
import { toast } from "react-toastify";
import dogImg from "../assets/dog.png";
import Api from "../services/Api";

const Hero = () => {
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imagePath, setImagePath] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("petName", petName);
    formData.append("breed", breed);
    formData.append("age", age);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("file", imagePath);

    try {
      await Api.post("/pets/create", formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Pet added successfully!");
      console.log("Pet added successfully!");
      setPetName("");
      setBreed("");
      setAge("");
      setQuantity("");
      setPrice("");
    } catch {
      toast.error("Error adding Pet");
    }
  };
  // px-6 py-12
  return (
    <section className="font-['Comic_Sans_MS'] relative max-w-7xl mx-auto px-20 py-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-orange-400 rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
          Add Your <br /> Lovely Pet
        </h1>

        <p className="text-white/90 font-medium mb-10 text-lg">
          Please provide basic pet information
        </p>

        <div className="space-y-5">
          {/* Pet Name + Breed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Pet Name"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              className="w-full bg-white/20 border border-white/10 rounded-2xl py-2 px-4 placeholder-white/70 text-white focus:ring-2 focus:ring-white/40 outline-none transition-all"
            />

            <input
              type="text"
              placeholder="Breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full bg-white/20 border border-white/10 rounded-2xl py-2 px-4 placeholder-white/70 text-white focus:ring-2 focus:ring-white/40 outline-none transition-all"
            />
          </div>

          {/* Age + Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full bg-white/20 border border-white/10 rounded-2xl py-2 px-4 placeholder-white/70 text-white focus:ring-2 focus:ring-white/40 outline-none transition-all"
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-white/20 border border-white/10 rounded-2xl py-2 px-4 placeholder-white/70 text-white focus:ring-2 focus:ring-white/40 outline-none transition-all"
            />
          </div>

          {/* Quantity */}
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full bg-white/20 border border-white/10 rounded-2xl py-2 px-4 placeholder-white/70 text-white focus:ring-2 focus:ring-white/40 outline-none transition-all"
          />

          {/* Image Upload */}
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImagePath(e.target.files[0])}
              className="w-full bg-white/20 border border-white/10 rounded-2xl py-2 px-4 text-white file:bg-white file:text-orange-500 file:border-0 file:px-4 file:py-2 file:rounded-xl file:font-bold cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-orange-500 font-black py-3 rounded-2xl hover:bg-orange-50 transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl active:scale-[0.98] cursor-pointer"
          >
            Add Pet
          </button>
        </div>
      </form>

      <div className="w-full md:w-1/2 relative flex justify-center items-center">
        <div className="relative z-10 w-full max-w-md">
          <div className="absolute -top-6 -right-2 md:-top-12 md:-right-8 bg-white border-4 border-orange-400 text-orange-400 font-black px-8 py-5 rounded-[35px] rounded-bl-none shadow-2xl transform rotate-12 z-20 animate-bounce">
            <span className="text-2xl md:text-3xl leading-none block">
              Say
              <br />
              Woof!
            </span>
          </div>

          <img
            src={dogImg}
            alt="Happy Beagle Dog"
            className="w-full h-auto object-cover drop-shadow-2xl"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.03] pointer-events-none scale-300">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#F97316"
              d="M45.7,-78.2C58.9,-71.4,69.2,-58.5,77.5,-44.7C85.7,-30.9,91.8,-16.2,90.9,-1.9C90,12.5,82.1,26.5,73.5,39.6C64.9,52.7,55.5,64.9,43.5,73.1C31.4,81.4,16.7,85.6,1.4,83.1C-13.8,80.7,-29.6,71.5,-42.6,62C-55.5,52.5,-65.7,42.7,-73.4,30.8C-81.1,18.8,-86.3,4.7,-84.4,-8.4C-82.5,-21.5,-73.4,-33.5,-63.4,-44.1C-53.4,-54.7,-42.5,-63.9,-30.5,-71.4C-18.4,-78.9,-5.3,-84.7,9.3,-81.4C23.9,-78.1,32.6,-85.1,45.7,-78.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
