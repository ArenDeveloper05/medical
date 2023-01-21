//Admin Panel
import NewsAdmin from "./components/adminPanel/newsAdmin/NewsAdmin";
import DoctorsAdmin from "./components/adminPanel/doctorsAdmin/DoctorsAdmin";
import ServicesAdmin from "./components/adminPanel/servicesAdmin/ServicesAdmin";
import GalleryAdmin from "./components/adminPanel/GalleryAdmin";


export const CONFIG = {
    headerConfig: [
        // {
        //     name: "header-home",
        //     link: " "
        // },
        {
            name: "header-aboutus",
            link: "about-us"
        },
        {
            name: "header-news",
            link: "blog-listing"
        },
        {
            name: "header-doctors",
            link: "doctors"
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
            component: <GalleryAdmin />
        },
        {
            name: "Ծառայություններ",
            component: <ServicesAdmin />
        }

    ]
}