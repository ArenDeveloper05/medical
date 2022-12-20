import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../src/layout/Layout'
import EmployerDetails from '../../src/components/employer/EmployerDetails';

const SingleEmployer = () => {
    const router = useRouter();
    const { fullName } = router.query;
    const { position } = router.query;
    return (
        <Layout>
            <section
                id="doctor-breadcrumbs"
                className="bg-fixed doctor-details-section division"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 offset-md-5">
                            <div className="doctor-data white-color">
                                <h2 className="h2-xs">Dr. {fullName}</h2>
                                <h5 className="h5-md">
                                    {position}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <EmployerDetails />
        </Layout>
    )
}

export default SingleEmployer