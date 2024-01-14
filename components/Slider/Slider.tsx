import React from "react";
import styles from "../../styles/Slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import data from "@/data/mockData";
import { ISlide } from "@/types/type";

const Slider = () => {
  return (
    <div className={styles.slider_container}>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
      >
        {data.map((elem: ISlide) => {
          if (elem.title.length > 35) {
            return (
              <SwiperSlide key={elem.id}>
                <div className={styles.slide_double}>
                  <img src={elem.img} className={styles.slide__icon_double} />
                  <div className={styles.container__text_double}>
                    <h4 className={styles.title}>{elem.title}</h4>
                    <label className={styles.description}>{elem.date}</label>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
          if (elem.id % 2 === 0) {
            return (
              <SwiperSlide key={elem.id}>
                <div className={styles.slide}>
                  <img src={elem.img} className={styles.slide__icon} />
                  <div className={styles.container__text}>
                    <h4 className={styles.title}>{elem.title}</h4>
                    <label className={styles.description}>{elem.date}</label>
                  </div>
                </div>
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={elem.id}>
                <div className={styles.slide_petal}>
                  <img src={elem.img} className={styles.slide__icon_petal} />
                  <div className={styles.container__text}>
                    <h4 className={styles.title}>{elem.title}</h4>
                    <label className={styles.description}>{elem.date}</label>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
