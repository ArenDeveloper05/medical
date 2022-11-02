import Ambulance from "../pages/services/ambulance/Ambulance";
import Pharmacy from "../pages/services/pharmacy/Pharmacy";
import Bloodbank from "../pages/services/bloodbank/Bloodbank";
import Pathological from "../pages/services/pathological/Pathological";
import Disinfection from "../pages/services/disinfection/Disinfection";

//Ambulatory
import Therapeutic from "../pages/services/ambulatory/therapeutic/Therapeutic";
import Surgical from "../pages/services/ambulatory/surgical/Surgical";
import Diagnostic from "../pages/services/ambulatory/diagnostic/Diagnostic";
import Pediatric from "../pages/services/ambulatory/pediatric/Pediatric";
import Womens from "../pages/services/ambulatory/womens/Womens";

//Stationary
import Reception from "../pages/services/stationary/reception/Reception";
import Resuscitation from "../pages/services/stationary/resuscitation/Resuscitation";
import Anesthesiology from "../pages/services/stationary/anesthesiology/Anesthesiology";
import Birthplace from "../pages/services/stationary/obstetric/Birthplace";

// Stationary Diagnostic
import Clinical from "../pages/services/stationary/diagnostic/clinical/Clinical";
import Biochemical from "../pages/services/stationary/diagnostic/biochemical/Biochemical";
import Computational from "../pages/services/stationary/diagnostic/computational/Computational";
import Roentgen from "../pages/services/stationary/diagnostic/roentgen/Roentgen";
import Serological from "../pages/services/stationary/diagnostic/serological/Serological";
import Ultrasound from "../pages/services/stationary/diagnostic/ultrasound/Ultrasound";

//Stationary Surgical
import SurgicalStationary from "../pages/services/stationary/surgical/surgical/Surgical";
import Traumatology from "../pages/services/stationary/surgical/traumatology/Traumatology";
import Urology from "../pages/services/stationary/surgical/urology/Urology";
import Otorhinolaryngology from "../pages/services/stationary/surgical/otorhinolaryngology/Otorhinolaryngology";

//Stationary Childrens
import PediatricStationary from "../pages/services/stationary/childrens/pediatric/Pediatric";
import Neonatal from "../pages/services/stationary/childrens/neonatal/Neonatal";

//Stationary Infectious
import Adult from "../pages/services/stationary/infectious/adult/Adult";
import Childrens from "../pages/services/stationary/infectious/childrens/Childrens";

//Stationary Therapeutic
import Internal from "../pages/services/stationary/therapeutic/internal/Internal";
import Endocrinology from "../pages/services/stationary/therapeutic/endocrinology/Endocrinology";
import Rheumatology from "../pages/services/stationary/therapeutic/rheumatology/Rheumatology";
//Admin Panel

import NewsAdmin from "./components/adminPanel/NewsAdmin";
import DoctorsAdmin from "./components/adminPanel/DoctorsAdmin";
import GalleryAdmin from "./components/adminPanel/GalleryAdmin";

export const CONFIG = {
    headerConfig: [
        {
            name: "header-home",
            link: " "
        },
        {
            name: "header-aboutus",
            link: "about-us"
        },
        {
            name: "header-services.title",
            nesteds: [
                {
                    title: "header-services.ambulatory.title",
                    nesteds: [
                        {
                            title: "header-services.ambulatory.therapeutic",
                            link: "services/ambulatory/therapeutic"
                        },
                        {
                            title: "header-services.ambulatory.surgical",
                            link: "services/ambulatory/surgical"
                        },
                        {
                            title: "header-services.ambulatory.diagnostic",
                            link: "services/ambulatory/diagnostic"
                        },
                        {
                            title: "header-services.ambulatory.pediatric-consultation",
                            link: "services/ambulatory/pediatric-consultation"
                        },
                        {
                            title: "header-services.ambulatory.womens-consultation",
                            link: "services/ambulatory/womens-consultation"
                        }
                    ]
                },
                {
                    title: "header-services.stationary.title",
                    nesteds: [
                        {
                            title: "header-services.stationary.reception",
                            link: "services/stationary/reception"
                        },
                        {
                            title: "header-services.stationary.resuscitation",
                            link: "services/stationary/resuscitation"
                        },
                        {
                            title: "header-services.stationary.diagnostic.title",
                            link: "services/stationary/diagnostic"
                        },
                        {
                            title: "header-services.stationary.surgical.title",
                            link: "services/stationary/surgical"
                        },
                        {
                            title: "header-services.stationary.anesthesiology",
                            link: "services/stationary/anesthesiology"
                        },
                        {
                            title: "header-services.stationary.childrens.title",
                            link: "services/stationary/childrens"
                        },
                        {
                            title: "header-services.stationary.infectious.title",
                            link: "services/stationary/infectious"
                        },
                        {
                            title: "header-services.stationary.therapeutic.title",
                            link: "services/stationary/therapeutic"
                        },
                        {
                            title: "header-services.stationary.obstetric-gynecological.title",
                            link: "services/stationary/obstetric-gynecological"
                        }
                    ]
                },
                {
                    title: "header-services.ambulance",
                    link: "services/ambulance"
                },
                {
                    title: "header-services.pharmacy",
                    link: "services/pharmacy"
                },
                {
                    title: "header-services.bloodbank",
                    link: "services/bloodbank"
                },
                {
                    title: "header-services.pathological-anatomical",
                    link: "services/pathological-anatomical"
                },
                {
                    title: "header-services.disinfection-station",
                    link: "services/disinfection-station"
                },
            ]
        },
        {
            name: "header-news",
            link: "blog-listing"
        },
        {
            name: "header-doctors",
            link: "all-doctors"
        },
        {
            name: "header-gallery",
            link: "gallery"
        },
        {
            name: "header-contactus",
            link: "contact-us"
        }
    ],
    //Services Config
    servicesConfig: {

        "services/ambulatory/therapeutic": {
            nesteds: [{
                title: "header-services.ambulatory.therapeutic",
                component: <Therapeutic />
            }]
        },
        "services/ambulatory/surgical": {
            nesteds: [{
                title: "header-services.ambulatory.surgical",
                component: <Surgical />
            }]
        },
        "services/ambulatory/diagnostic": {
            nesteds: [{
                title: "header-services.ambulatory.diagnostic",
                component: <Diagnostic />
            }]
        },
        "services/ambulatory/pediatric-consultation": {
            nesteds: [{
                title: "header-services.ambulatory.pediatric-consultation",
                component: <Pediatric />
            }]
        },
        "services/ambulatory/womens-consultation": {
            nesteds: [{
                title: "header-services.ambulatory.womens-consultation",
                component: <Womens />
            }]
        },

        //Stationary
        "services/stationary/reception": {
            nesteds: [{
                title: "header-services.stationary.reception",
                component: <Reception />
            }]
        },
        "services/stationary/resuscitation": {
            nesteds: [{
                title: "header-services.stationary.resuscitation",
                component: <Resuscitation />
            }]
        },
        "services/stationary/diagnostic": {
            nesteds: [
                {
                    title: "header-services.stationary.diagnostic.clinical",
                    component: <Clinical />,
                },
                {
                    title: "header-services.stationary.diagnostic.biochemical",
                    component: <Biochemical />,
                },
                {
                    title: "header-services.stationary.diagnostic.serological",
                    component: <Serological />,
                },
                {
                    title: "header-services.stationary.diagnostic.computational-stratigraphy",
                    component: <Computational />,
                },
                {
                    title: "header-services.stationary.diagnostic.ultrasound",
                    component: <Ultrasound />,
                },
                {
                    title: "header-services.stationary.diagnostic.roentgen",
                    component: <Roentgen />,
                }
            ]
        },
        "services/stationary/surgical": {
            nesteds: [{
                title: "header-services.stationary.surgical.surgical-department",
                component: <SurgicalStationary />,
            },
            {
                title: "header-services.stationary.surgical.traumatology-department",
                component: <Traumatology />,
            },
            {
                title: "header-services.stationary.surgical.urology-andrology-department",
                component: <Urology />,
            },
            {
                title: "header-services.stationary.surgical.otorhinolaryngology-service",
                component: <Otorhinolaryngology />,
            }
            ]
        },
        "services/stationary/anesthesiology": {
            nesteds: [{
                title: "header-services.stationary.anesthesiology",
                component: <Anesthesiology />,
            }
            ]
        },
        "services/stationary/childrens": {
            nesteds: [{
                title: "header-services.stationary.childrens.pediatric-department",
                component: <PediatricStationary />,
            },
            {
                title: "header-services.stationary.childrens.neonatal-service",
                component: <Neonatal />,
            },
            ]
        },
        "services/stationary/infectious": {
            nesteds: [
                {
                    title: "header-services.stationary.infectious.adult-service",
                    component: <Adult />,
                },
                {
                    title: "header-services.stationary.infectious.childrens-service",
                    component: <Childrens />,
                }
            ]
        },
        "services/stationary/therapeutic": {
            nesteds: [{
                title: "header-services.stationary.therapeutic.internal-diseases",
                component: <Internal />,
            },
            {
                title: "header-services.stationary.therapeutic.rheumatology",
                component: <Rheumatology />,
            },
            {
                title: "header-services.stationary.therapeutic.endocrinology",
                component: <Endocrinology />,
            }]
        },
        "services/stationary/obstetric-gynecological": {
            nesteds: [
                {
                    title: "header-services.stationary.obstetric-gynecological.birthplace",
                    component: <Birthplace />
                },
            ]
        },
        "services/ambulance": {
            nesteds: [
                {
                    title: "header-services.ambulance",
                    component: <Ambulance />
                }
            ]
        },
        "services/pharmacy": {
            nesteds: [
                {
                    title: "header-services.pharmacy",
                    component: <Pharmacy />
                }
            ]
        },
        "services/bloodbank": {
            nesteds: [
                {
                    title: "header-services.bloodbank",
                    component: <Bloodbank />
                }
            ]
        },
        "services/pathological-anatomical": {
            nesteds: [
                {
                    title: "header-services.pathological-anatomical",
                    component: <Pathological />
                }
            ]
        },
        "services/disinfection-station": {
            nesteds: [
                {
                    title: "header-services.disinfection-station",
                    component: <Disinfection />
                }
            ]
        }

    },
    adminPanelConfig: [
        {
            name: "Նորություններ",
            component: <NewsAdmin />
        },
        {
            name: "Բժիշկներ",
            component: <DoctorsAdmin />
        },
        {
            name: "Տեսադարան",
            component: <GalleryAdmin/>
        },

    ]
}