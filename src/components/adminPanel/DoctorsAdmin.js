import { useCallback, useState } from 'react'
import { addDoctor } from '../../DataServices'

const DoctorsAdmin = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [position, setPosition] = useState("");
    const [services, setServices] = useState("");
    const [biography, setBiography] = useState("");

    const postDoctor = useCallback(async () => {
        try {
            const doctorPostData = await addDoctor({
                firstName,
                lastName,
                patronymic,
                specialization,
                position,
                services,
                biography
            })
        } catch (error) {
            console.log(error, "chavelacav");
        }

    }, [firstName, lastName, patronymic, specialization, position, biography, services])

    return (
        <div className='doctors-admin-panel'>
            <section className='doctors-admin-panel-edit'>
                <div className='doctors-admin-panel-edit-row'>
                    <label htmlFor='firstname'>Անուն</label>
                    <input type="text" id='firstname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className='doctors-admin-panel-edit-row'>
                    <label htmlFor='lastname'>Ազգանուն</label>
                    <input type="text" id='lastname'
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)} />
                </div>
                <div className='doctors-admin-panel-edit-row'>
                    <label htmlFor='patronymic'>Հայրանուն</label>
                    <input type="text" id='patronymic'
                        value={patronymic}
                        onChange={(e) => setPatronymic(e.target.value)} />
                </div>
                <div className='doctors-admin-panel-edit-row'>
                    <label htmlFor='specialization'>Մասնագիտություն</label>
                    <input type="text" id='specialization'
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)} />
                </div>
                <div className='doctors-admin-panel-edit-row'>
                    <label htmlFor='position'>Պաշտոն</label>
                    <input type="text" id='position'
                        value={position}
                        onChange={(e) => setPosition(e.target.value)} />
                </div>
                <div className='doctors-admin-panel-edit-row'>
                    <label htmlFor='services'>Ծառայություն</label>
                    <input type="text" id='services'
                        value={services}
                        onChange={(e) => setServices(e.target.value)} />
                </div>
                <div className='doctors-admin-panel-edit-row'>
                    <label htmlFor='biography'>Կենսագրություն</label>
                    <input type="text" id='biography'
                        value={biography}
                        onChange={(e) => setBiography(e.target.value)} />
                </div>
                <div className='doctors-admin-panel-edit-row'>
                    <button
                        type='button'
                        className='ml-auto'
                        onClick={postDoctor}
                    >Ավելացնել</button>
                </div>
            </section>
            <section className='doctors-admin-panel-table'>

            </section>
        </div>
    )
}

export default DoctorsAdmin