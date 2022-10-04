import React from "react";
import useTranslation from "next-translate/useTranslation";

const Banner5 = () => {
    const { t } = useTranslation('common');
    return (
        <section id="banner-5" className="pt-100 banner-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color">
                        {t("departments.experienced-doctors.title")}
                        </h3>
                        {/* Text */}
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum
                            neque dolor primis libero at tempus, blandit posuere
                            ligula varius congue cursus porta feugiat
                        </p>
                    </div>
                </div>
                {/* BANNER IMAGE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div
                            className="banner-5-img wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <img
                                className="img-fluid"
                                src="images/image-07.png"
                                alt="banner-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* End container */}
        </section>
    );
};

export default Banner5;
