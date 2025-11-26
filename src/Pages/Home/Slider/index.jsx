import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const [slide,setSlide]=useState();
  useEffect(() => {
    (async () => {
        const url =
          "https://sephora.p.rapidapi.com/products/v2/list?number=1&size=4&country=SG&language=en-SG&sort=sales";
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "793e61b096msh0180bc0bcfc492bp1a3463jsna5f724afc1c4",
            "x-rapidapi-host": "sephora.p.rapidapi.com",
          }
        };
  
        try {
          const res = await fetch(url, options);
          const data = await res.json(); 
          let images=[]; 
           data.data?.map(
                    e=>{images.push(e.attributes?.["image-urls"][0])
                        images.push(e.attributes?.["image-urls"][1])
                   });
        setSlide(images);
        } catch (error) {
          console.error(error);
        }
      })()
  },[]);
  const items=slide?.map((e,index)=><SwiperSlide key={index}><img src={e} alt="" /></SwiperSlide>)
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={"mySwiper"}
      >
       {items}
      </Swiper>
    </>
  );
}
