import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import Doctor1Details from '../../src/components/Doctor-1/Doctor1Details'
import { getSingleDoctor } from '../../src/DataServices'
import Layouts from '../../src/layout/Layouts'

const SingleDoctor = () => {
    const [data,SetData] = useState({});
    const router = useRouter();
    const {idx} = router.query;
    console.log(idx, "iddddddddddd");

    const getSingleDoctorData = useCallback( async (idx)=>{
        try{
            const {data: {data:{dataValues}}} = await getSingleDoctor(idx)
            SetData(dataValues)
        }
        catch (error){
            console.log(error ,"chekav")
        }
    },[])

    useEffect(()=>{
        getSingleDoctorData(idx)
        
    })

    return (
        <Layouts>
            <section
                id="doctor-breadcrumbs"
                className="bg-fixed doctor-details-section division"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 offset-md-5">
                            <div className="doctor-data white-color">
                                <h2 className="h2-xs">Dr. {data.lastName} {data.firstName} {data.patronymic} </h2>
                                <h5 className="h5-md">
                                    {data.position}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Doctor1Details 
            picture = {data.picture} 
            biography = {data.biography} 
            specialization = {data.specialization} 
            services = {data.services}
            />
        </Layouts>
    )
    
}
// export async function getSingleSideProps() {

//     const { data } = await getAllDoctors();
//     console.log(data, " dataaaaaaaaaaa");
//     return {
//       props: {
//         data
//       }
//     }
  
//   }
export default SingleDoctor
