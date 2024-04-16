import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SliderLayoutStyled from './styled/SliderLayoutStyled';

const MAIN_VISUAL = [
  {
    id: '1',
    img: 'https://lzd-img-global.slatic.net/us/domino/47daab6d24714007823af896fecb1d4a.jpg_2200x2200q80.jpg_.webp',
    alt: 'text',
    link: '#',
  },
  {
    id: '2',
    img: 'https://lzd-img-global.slatic.net/us/domino/ddeb82a04e01ef1f5cfdfba4964a6463.jpg_2200x2200q80.jpg_.webp',
    alt: 'text',
    link: '#',
  },
  {
    id: '3',
    img: 'https://lzd-img-global.slatic.net/us/domino/a689f176f72353df5b13c53d66b7d821.jpg_2200x2200q80.jpg_.webp',
    alt: 'text',
    link: '#',
  },
  {
    id: '4',
    img: 'https://lzd-img-global.slatic.net/us/domino/d6b994f902208b8a4e58ddc938fe96f2.jpg_2200x2200q80.jpg_.webp',
    alt: 'text',
    link: '#',
  },
  {
    id: '5',
    img: 'https://lzd-img-global.slatic.net/us/domino/c67478c27f616c49ea17f826bf696301.jpg_2200x2200q80.jpg_.webp',
    alt: 'text',
    link: '#',
  },
];

function SliderLayout({ slider }) {
  return (
    <SliderLayoutStyled>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {MAIN_VISUAL.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={`/product/a-b-c`}>
              <img src={slide.img} alt={slide.alt} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderLayoutStyled>
  );
}

export default SliderLayout;
