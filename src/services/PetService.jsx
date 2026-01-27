import Api from "./Api";

export const signUpUser = async (userData) => {
  const res = await Api.post("/auth/signup", userData); //userData=name,email,password
  return res.data; //return LoginResponseDTO from backend
};

export const loginUser = async (loginData) => {
  const res = await Api.post("/auth/login", loginData); //userData=email,password
  return res.data; //return LoginResponseDTO from backend
};

// Pet
export const addPet = async (petData) => {
  const res = await Api.post("/pets", petData);
  return res.data;
};

export const getAllPets = async () => {
  const res = await Api.get("/pets");
  return res.data;
};
