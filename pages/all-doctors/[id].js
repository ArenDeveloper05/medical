import { useRouter } from 'next/router'
import React from 'react'
import Doctor1Details from '../../src/components/Doctor-1/Doctor1Details'
import Layouts from '../../src/layout/Layouts'

const SingleDoctor = () => {
    const router = useRouter();
    const { name } = router.query;
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
                                <h2 className="h2-xs">Dr. {name}</h2>
                                <h5 className="h5-md">
                                    Neurologist / Epilepsy Specialist / Cardiologist
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Doctor1Details />
        </Layouts>
    )
}

export default SingleDoctor