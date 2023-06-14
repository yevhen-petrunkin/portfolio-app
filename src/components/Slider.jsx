import SliderMenu from './SliderMenu';
import IconWidg from './iconWidg';
import TechWidg from './TechWidg';
import swiperBreakpoints from '../sources/swiperBreakpoints';
import projects from '../sources/projects';
import information from '../sources/information';
import { useState, useEffect, useRef } from 'react';
import { BsGearWide } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Mousewheel,
  Navigation,
  Keyboard,
  Scrollbar,
  Parallax,
  Pagination,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([
  Mousewheel,
  Navigation,
  Keyboard,
  Scrollbar,
  Parallax,
  Pagination,
]);

const part = 1 / projects.length;

function Slider({ collection }) {
  const swiper1 = useRef(null);
  const swiper2 = useRef(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    const swiper = swiper1.current.swiper;
    swiper.slideTo(activeSlideIndex);
  }, [activeSlideIndex]);

  useEffect(() => {
    setActiveSlideIndex(0);
    const swiper = swiper2.current.swiper;
    swiper.slideTo(0);
  }, [collection]);

  const handleSlideChange = swiper => {
    setActiveSlideIndex(swiper.activeIndex);
    setTurn(part * (swiper.activeIndex + 1));
  };

  const array = getNeededArray();

  function getNeededArray() {
    return collection === 'portfolio' ? projects : information;
  }

  return (
    <div className="slider-container">
      <Swiper
        ref={swiper1}
        className="swiper-img"
        // modules={[Navigation]}
        parallax={true}
        speed={1200}
        // navigation={true}
        keyboard={{ enabled: true }}
        mousewheel={{
          sensitivity: 20,
          thresholdDelta: 100,
          thresholdTime: 120,
        }}
        breakpoints={swiperBreakpoints}
      >
        {array.map(({ id, image }) => {
          return (
            <SwiperSlide key={id} className="slide-frame">
              <div
                className="slide-frame__image"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        ref={swiper2}
        className="swiper-text"
        modules={[Navigation, Pagination]}
        parallax={true}
        speed={1600}
        navigation={{
          prevEl: '.nav-button--prev',
          nextEl: '.nav-button--next',
        }}
        keyboard={{ enabled: true }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        mousewheel={{
          sensitivity: 20,
          thresholdDelta: 100,
          thresholdTime: 120,
        }}
        breakpoints={swiperBreakpoints}
        onSlideChange={handleSlideChange}
      >
        {collection === 'portfolio' &&
          projects.map(
            ({ id, title, dates, description, technologies, techImg }) => {
              const techString = technologies.join(', ');
              return (
                <SwiperSlide key={id} className="slide-frame">
                  <article className="projectbox">
                    <div
                      data-swiper-parallax="10%"
                      className="projectbox__wrapper"
                    >
                      <h1
                        data-swiper-parallax="25%"
                        className="projectbox__item projectbox__item--title"
                      >
                        {title}
                      </h1>
                      <p
                        data-swiper-parallax="15%"
                        className="projectbox__item projectbox__item--dates"
                      >
                        {dates}
                      </p>
                      <p
                        data-swiper-parallax="20%"
                        className="projectbox__item projectbox__item--description"
                      >
                        {description}
                      </p>
                      <p
                        data-swiper-parallax="15%"
                        className="projectbox__item projectbox__item--technologies"
                      >
                        <span className="projectbox__item--category">
                          Technologies:{' '}
                        </span>
                        {techString}
                      </p>
                    </div>
                    <TechWidg data-swiper-parallax="5%" icons={techImg} />
                  </article>
                </SwiperSlide>
              );
            }
          )}
        {collection === 'information' &&
          information.map(({ id, title, description, list, icons }) => {
            const listString = list.join(', ');
            return (
              <SwiperSlide key={id} className="slide-frame">
                <article className="infobox">
                  <div data-swiper-parallax="4%" className="infobox__wrapper">
                    <h1
                      data-swiper-parallax="7%"
                      className="infobox__item infobox__item--title"
                    >
                      {title}
                    </h1>
                    <p
                      data-swiper-parallax="5%"
                      className="infobox__item infobox__item--description"
                    >
                      {description}
                    </p>
                    {listString && (
                      <p
                        data-swiper-parallax="7%"
                        className="infobox__item infobox__item--technologies"
                      >
                        <span className="infobox__item--category">
                          Technologies:{' '}
                        </span>
                        {listString}
                      </p>
                    )}
                  </div>
                  {icons.length !== 0 && (
                    <IconWidg data-swiper-parallax="5%" icons={icons} />
                  )}
                </article>
              </SwiperSlide>
            );
          })}
        <div className="nav-button__set">
          <button className="nav-button nav-button--prev">
            <IoIosArrowBack className="nav-button__icon" />
          </button>
          <button className="nav-button nav-button--next">
            <IoIosArrowForward className="nav-button__icon" />
          </button>
        </div>
      </Swiper>

      <div className="slider-gear">
        <div
          className="slider-gear--wrapper"
          style={{ transform: `rotate(${turn}turn)` }}
        >
          <BsGearWide className="slider-gear--icon" />
        </div>
      </div>

      {collection === 'portfolio' && <SliderMenu index={activeSlideIndex} />}
    </div>
  );
}

export default Slider;
