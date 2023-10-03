import axios from "axios";

export const getStories = async () => {
  try {
    const response = await axios.get("https://shortstories-api.onrender.com/stories");
    return response.data;
  } catch (error) {
    console.error("Error fetching stories:", error);
    throw error; 
  }
};
