import React from 'react'
import './Testimonials.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import { getImageUrl } from '../../utils'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
      text: "Super expérience de travail avec Guillaume, très pro et à l'écoute ! Grâce à son site, nous avons une image beaucoup plus professionnel auprès des organisateurs d'évènement.",
      author: "Solal Piquand",
      description: "Batteur Pouf Pouf Pantoufle",
      avatar: "testimonials/solal.jpg", 
    },
    {
      text: "Guillaume a su comprendre mes besoins et livrer un super projet qui a grandemant augmenté ma visibilité sur le web.",
      author: "Jeanne Gross",
      description: "Artiste de Metz",
      avatar: "testimonials/jeanne.jpeg", 
    },
  ];

export const Testimonials = () => {
    return(
      <div className="testimonial">
        <h2>Ce que disent mes clients</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="mySwiper"
          style={{ width: "100%", height: "auto" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <blockquote>"{testimonial.text}"</blockquote>
                <div className="author">
                  <img className="author-avatar" src={getImageUrl(testimonial.avatar)} alt="avatar" />
                  <div className="author-description">
                    <h3>{testimonial.author}</h3>
                    <cite>— {testimonial.description}</cite>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
}