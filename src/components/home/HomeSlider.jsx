import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { slider } from "../../enums";
import { heroSliderProps } from "../../sliderProps";

const HomeSlider = () => {
  const { t } = useTranslation("common");
  return (
    <section id="hero-2" className="hero-section division">
      <div className="slider blue-nav">
        <Swiper {...heroSliderProps} className="slides">
          {slider.map(({ id, href, idClass }) => {
            return (
              <SwiperSlide className="li" key={id}>
                <div
                  className="img"
                  id={idClass}
                  style={{
                    backgroundImage: `url(${href})`,
                  }}
                ></div>
              </SwiperSlide>
            );
          })}
          <div className="indicators"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
