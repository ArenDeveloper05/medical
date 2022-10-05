import Link from "next/link";
import React from "react";
const servicesPrices = [{
    id:1,
    name:"Bronchoscopy",
    price:"$1340.00"
},
{
    id:1,
    name:"Bronchoscopy",
    price:"$1340.00"
},
{
    id:1,
    name:"Bronchoscopy",
    price:"$1340.00"
},
{
    id:1,
    name:"Bronchoscopy",
    price:"$1340.00"
},
{
    id:1,
    name:"Bronchoscopy",
    price:"$1340.00"
},
{
    id:1,
    name:"Bronchoscopy",
    price:"$1340.00"
}
];

const Service2Page = () => {
    return (
        <div
            id="service-page"
            className="wide-60 service-page-section division"
        >
            <div className="container">
                <div className="row">
                    {/* SERVICE CONTENT */}
                    <div className="service-content">
                        <div className="s2-page pr-30 mb-40">
                            {/* Title */}
                            <h3 className="h3-md blue-color">
                                Magnetic Resonance Imaging
                            </h3>
                            <h4 className="h4-sm blue-color">
                                Maecenas gravida porttitor nunc, magna luctus
                                tempor viverra cubilia laoreet augue
                            </h4>
                            {/* Text */}
                            <p>
                                Primis cubilia laoreet augue vitae laoreet augue
                                in cubilia risus auctor tempus dolor feugiat,
                                felis lacinia risus auctor id viverra dolor
                                congue ipsum mauris iaculis luctus placerat
                                massa magna cursus amet quisque an aliquet.
                                Feugiat primis in ultrice ligula risus auctor
                            </p>
                            {/* Text */}
                            <p>
                                Ligula risus auctor tempus dolor feugiat, felis
                                lacinia risus interdum auctor id viverra dolor
                                iaculis luctus bibendum luctus neque rhoncus
                                ipsum tempor varius iaculis at luctus neque
                                rhoncus ipsum tempor varius cubilia laoreet
                                augue vitae laoreet augue undo cubilia feugiat
                                suscipit emper lacus
                            </p>
                            {/* Image */}
                            <div className="content-block-img text-center">
                                <img
                                    className="img-fluid"
                                    src="images/mri_1000x500.jpg"
                                    alt="content-image"
                                />
                            </div>
                            {/* Text */}
                            <p>
                                Ligula risus auctor tempus dolor feugiat, felis
                                lacinia risus interdum auctor id viverra dolor
                                iaculis luctus bibendum luctus neque rhoncus
                                ipsum tempor varius iaculis at luctus neque
                                rhoncus ipsum tempor varius cubilia laoreet
                                augue vitae laoreet augue undo cubilia feugiat
                                suscipit emper lacus
                            </p>
                            {/* Options List */}
                            <div className="row">
                                <div className="col-xl-6">
                                    {/* Option #1 */}
                                    <div className="box-list m-top-15">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            Nemo ipsam egestas volute turpis
                                            dolores quaerat massa suscipit,
                                            luctus neque
                                        </p>
                                    </div>
                                    {/* Option #2 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            Magna massa suscipit, luctus neque
                                            purus and ipsum neque dolor primis
                                        </p>
                                    </div>
                                    {/* Option #3 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            An enim nullam tempor at pretium
                                            blandit
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    {/* Option #4 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            Magna massa suscipit, luctus neque
                                            purus and ipsum neque dolor primis
                                            luctus
                                        </p>
                                    </div>
                                    {/* Option #5 */}
                                    <div className="box-list m-top-15">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            An enim nullam tempor at pretium
                                            blandit
                                        </p>
                                    </div>
                                    {/* Option #6 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            Magna massa suscipit, luctus neque
                                            purus and ipsum neque dolor at
                                            tempor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Options List */}
                            {/* Small Title */}
                            <h5 className="h5-md blue-color">
                                Rhoncus ipsum tempor varius iaculis
                            </h5>
                            {/* CONTENT BOX #1 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Fringilla risus nec, luctus mauris orci
                                    auctor purus euismod pretium purus pretium
                                    ligula rutrum tempor sapien at pretium
                                    luctus ligula rutrum luctus risus ultrice
                                    lacinia risus auctor id viverra dolor congue
                                    ipsum mauris iaculis luctus placerat massa
                                    magna cursus amet
                                </p>
                            </div>
                            {/* CONTENT BOX #2 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Quaerat sodales sapien undo euismod purus a
                                    blandit pretium
                                </p>
                            </div>
                            {/* CONTENT BOX #3 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Nemo ipsam egestas volute turpis dolores ut
                                    aliquam quaerat sodales sapien undo pretium
                                    purus feugiat dolor impedit magna purus
                                    pretium gravida donec quisque an aliquet
                                </p>
                            </div>
                            {/* Picing Table */}
                            <div className="pricing-table">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {servicesPrices && servicesPrices.map(({id,name,price})=>{
                                            return(
                                                <tr key={id}>
                                            <th scope="row">{id}</th>
                                            <td>{name}</td>
                                            <td>
                                                From <span>{price}</span>
                                            </td>
                                        </tr>
                                            )
                                        })}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </div>
    );
};

export default Service2Page;
