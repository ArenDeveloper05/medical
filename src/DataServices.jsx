import axios from "axios";

export const APIUrl = "http://165.227.98.199:8880";

export let token;
if (process.browser) {
  token = window.localStorage.getItem("token");
}
const api = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const apiImage = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
});

//GET
export const getAllDoctors = async (lang) => {
  return await api.get(`/doctors/${lang}`);
};

export const getPaginateDoctors = async (lang, itemsPerPage, page) => {
  return await api.get(`/doctors/${lang}/${itemsPerPage}/${page}`);
};

export const getDoctorsLength = async () => {
  return await api.get("/doctors/length");
};

export const getSingleDoctor = async (lang, id) => {
  return await api.get(`/doctors/${lang}/${id}`);
};

export const searchDoctor = async (lang, { fName, lName }) => {
  return await api.get(`/doctors/${lang}/search?fName=${fName}&lName=${lName}`);
};

export const getCategories = async (lang) => {
  return await api.get(`/categories/${lang}`);
};

export const getServices = async (lang) => {
  return await api.get(`/services/${lang}`);
};

export const getSingleService = async (lang, id) => {
  return await api.get(`/services/${lang}/${id}`);
};
//POST
export const login = async (loginData) => {
  return await api.post("/login", loginData);
};

export const addDoctor = async (doctorData) => {
  return await api.post("/doctors", doctorData);
};

export const addService = async (serviceData) => {
  return await api.post("/categories", serviceData);
};

export const addClickableService = async (serviceData) => {
  return await api.post(`/services`, serviceData);
};

// export const addDoctorPicture = async (image, id) => {
//   return await apiImage.post(`/file`, image);
// };

//Delete
export const deleteSingleDoctor = async (doctorData, id) => {
  return await api.delete(`/doctors/${id}`, doctorData);
};

export const deleteCategory = async (id) => {
  return await api.delete(`/categories/${id}`);
};

export const deleteClickableService = async (id) => {
  return await api.delete(`/services/${id}`);
};

//PUT
export const changeDoctor = async (changedData, id, lang) => {
  return await api.put(`/doctors/${lang}/${id}`, changedData);
};

export const changeService = async (changedData, lang, id) => {
  return await api.put(`/categories/${lang}/${id}`, changedData);
};

export const changeClickableService = async (changedData, lang, id) => {
  return await api.put(`/services/${lang}/${id}`, changedData);
};
