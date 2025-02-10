import axios from "axios";

const createNote = async (formData: FormData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/note`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const getNotes = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/note`);
  return response.data;
};

const getNotesByUser = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/note-by-user`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const noteService = {
  createNote,
  getNotes,
  getNotesByUser,
};

export default noteService;
