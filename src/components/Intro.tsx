import { IonButton, IonText } from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import IntroSvg1 from "../assets/intro/login-svgrepo-com.svg";
import IntroSvg2 from "../assets/intro/samples-svgrepo-com.svg";
import IntroSvg3 from "../assets/intro/strawberry-svgrepo-com.svg";
import './Intro.css'
interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({children}: any) => {
    const swiper = useSwiper();
    return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>
}

const Intro: React.FC<ContainerProps> = ({onFinish}) => {
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <img src={IntroSvg1} alt="intro-swiper-img-1" />
          <IonText>Build New</IonText>
          <SwiperButtonNext>Next</SwiperButtonNext>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IntroSvg2} alt="intro-swiper-img-2" />
          <IonText>Awesome</IonText>
          <SwiperButtonNext>Next</SwiperButtonNext>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IntroSvg3} alt="intro-swiper-img-3" />
          <IonText>Slider</IonText>
            <IonButton onClick={() => onFinish()}>Finish</IonButton>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Intro;
