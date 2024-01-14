import React from "react";
import styles from "@/styles/Content.module.css";
import Slider from "@/components/Slider/Slider";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        <div className={styles.title}>
          <p>Полезные материалы</p>
        </div>
        <div className={styles.description}>
          <p>
            Собрали для вас полезные исследования схемы кормления и другие материалы, которые
            пригодятся для лучших результатов на вашем хозяйстве
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Content;
