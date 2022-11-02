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
        // "Authorization": `Bearer ${token}`,
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2NjA4NzE2LCJleHAiOjE2NjY2MTIzMTZ9.hmbQOCONKY7Rd5u7d-8wfPWaoMHClehuqc7S35M0-YU`,
        
    }
})
//Stex petq a back-y ta tokeny normal tesqov, aranc Authorization=....
//dzerov tokeny 15rd toxum dneluc ashxatum a 

export const getAllDoctors = async () => {
    return await api.get("/doctors")
};

export const login = async (loginData) => {
    return await api.post('/login', loginData)

}

export const addDoctor = async (doctorData) => {
    return api.post('/doctors', doctorData)

}
export const addPhoto = async (photoData) => {
    return api.post('/gallery', photoData)
}
export const getSingleDoctor = async (singleDoctorId) =>{
    return api.get(`/doctors/${singleDoctorId}`)
}

