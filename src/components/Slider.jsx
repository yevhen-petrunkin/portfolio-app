import swiperBreakpoints from '../sources/swiperBreakpoints';
import swiperArray from '../sources/swiperArray';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Mousewheel,
  Navigation,
  Keyboard,
  Scrollbar,
  Parallax,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

SwiperCore.use([Mousewheel, Navigation, Keyboard, Scrollbar, Parallax]);

function Slider() {
  return (
    <Swiper
      modules={[Navigation]}
      //   parallax={true}
      speed={600}
      navigation={true}
      keyboard={{ enabled: true }}
      scrollbar={{ draggable: true }}
      mousewheel={{
        sensitivity: 1,
        thresholdDelta: 2,
        thresholdTime: 1,
      }}
      breakpoints={swiperBreakpoints}
      // onSlideChange={handleSlideChange}
    >
      {swiperArray.map(project => {
        return (
          <SwiperSlide key={project} className="slide-frame">
            <img src={project} alt="project" width="100%" height="100%" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
