import Link from "next/link";
import React from "react";

const departmentsData = [{
    id:1,
    title:"Neurology",
    className:"flaticon-047-head blue-color",
    desc:" Porta semper lacus at cursus primis ultrice in ligularisus an auctor tempus feugiat dolor"
},
{
    id:2,
    title:"Neurology",
    className:"flaticon-047-head blue-color",
    desc:" Porta semper lacus at cursus primis ultrice in ligularisus an auctor tempus feugiat dolor"
},
{
    id:3,
    title:"Neurology",
    className:"flaticon-047-head blue-color",
    desc:" Porta semper lacus at cursus primis ultrice in ligularisus an auctor tempus feugiat dolor"
},
{
    id:4,
    title:"Neurology",
    className:"flaticon-047-head blue-color",
    desc:" Porta semper lacus at cursus primis ultrice in ligularisus an auctor tempus feugiat dolor"
},
{
    id:5,
    title:"Neurology",
    className:"flaticon-047-head blue-color",
    desc:" Porta semper lacus at cursus primis ultrice in ligularisus an auctor tempus feugiat dolor"
},
{
    id:6,
    title:"Neurology",
    className:"flaticon-047-head blue-color",
    desc:" Porta semper lacus at cursus primis ultrice in ligularisus an auctor tempus feugiat dolor"
},
{
    id:7,
    title:"Neurology",
    className:"flaticon-047-head blue-color",
    desc:" Porta semper lacus at cursus primis ultrice in ligularisus an auctor tempus feugiat dolor"
}
];
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
