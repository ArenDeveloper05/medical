import axios from 'axios'

const APIUrl = "http://165.227.98.199:3000";

let token;

if (process.browser) {
    token = window.localStorage.getItem('token');
}

const api = axios.create({
    baseURL: APIUrl,
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2ODg4MDUwLCJleHAiOjE2NjY4OTE2NTB9.KsQqCI6bbPdLFpdwZquOnPYr1GKAQL5aDe7BTHN96r4"}`,
    }
})
//Stex petq a back-y ta tokeny normal tesqov, aranc Authorization=....
//dzerov tokeny 15rd toxum dneluc ashxatum a 

export const getAllDoctors = async () => {
    return await api.get("/doctors")
};

export const login = async (loginData) => {
    return await api.post('/login', loginData)
};

export const addDoctor = async (doctorData) => {
    return await api.post('/doctors', doctorData)
};

export const deleteDoctor = async (doctorData, id) => {
    console.log(doctorData, "console");
    return await api.delete(`/doctors/${id}`, doctorData)
};

export const changeDoctor = async (changedData, id) => {
    return await api.put(`/doctors/${id}`, changedData)
};

