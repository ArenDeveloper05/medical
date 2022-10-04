import Link from "next/link";
import React from "react";
import { departmentsData } from "../../enums";

const AllDepartmentServices7 = () => {
    return (
        <section
            id="services-7"
            className="bg-lightgrey wide-70 servicess-section division"
        >
            <div className="container">
                <div className="row">
                    <div >
                        <div className="row">
                            {departmentsData && departmentsData.map(({id, className, title,desc})=>{
                                return(       
                                <div key={id} className="col-md-6 department-box">
                                <div
                                    className="sbox-7 icon-xs wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <Link href={`/service-2/${title.toLowerCase()}?name=${title}`}>
                                        <a>
                                            <span className={className}/>
                                            <div className="sbox-7-txt">
                                                <h5 className="h5-sm steelblue-color">
                                                    {title}
                                                </h5>
                                                <p className="p-sm">
                                                    {desc}
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllDepartmentServices7;
