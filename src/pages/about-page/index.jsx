import 'swiper/css';

import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useModalStore } from 'shared/store';

import Icon1 from '../../assets/icons/about-icon1.svg';
import Icon2 from '../../assets/icons/about-icon2.svg';
import Icon3 from '../../assets/icons/about-icon3.svg';
import Icon4 from '../../assets/icons/about-icon4.svg';
import Icon5 from '../../assets/icons/about-icon5.svg';
import Icon6 from '../../assets/icons/about-icon6.svg';
import AboutMainIcon1 from '../../assets/icons/about-main-1.svg';
import AboutMainIcon2 from '../../assets/icons/about-main-2.svg';
import AboutMainIcon3 from '../../assets/icons/about-main-3.svg';
import NextIcon from '../../assets/icons/next-icon.svg';
import AboutMainImg from '../../assets/images/about-main.jpg';
import AboutTechImg from '../../assets/images/about-tech-img.jpg';
import ContactUsModal from '../../components/modals/contact-us';

const LIST = [
  {
    icon: Icon1,
    title: <>Технологические карты</>,
    text: 'Гибкие, настраиваемые карты под разные культуры и типы грунта. Можно использовать готовые или создавать свои.',
  },
  {
    icon: Icon2,
    title: <>Управление процессами</>,
    text: 'Календарь задач, напоминания и статусы обеспечивают прозрачный контроль и бесперебойный ход процессов.',
  },
  {
    icon: Icon3,
    title: <>Единая картина хозяйства</>,
    text: 'Все участки и процессы интегрированы в единый интерфейс, который показывает состояние хозяйства в реальном времени.',
  },
  {
    icon: Icon4,
    title: <>Аналитика и динамика показателей</>,
    text: 'Инструменты, которые помогают отслеживать изменения, выявлять закономерности и принимать взвешенные решения.',
  },
  {
    icon: Icon5,
    title: (
      <>
        Совместная работа <br className="hidden lg:block" />с экспертами{' '}
        <br className="hidden lg:block" />и сотрудниками
      </>
    ),
    text: 'Возможность подключать агрономов, консультантов и членов команды для координированной работы.',
  },
  {
    icon: Icon6,
    title: (
      <>
        AI-рекомендации <br className="hidden lg:block" />и прогнозирование
      </>
    ),
    text: 'Искусственный интеллект помогает выявлять риски, подсвечивать важные моменты и оптимизировать процессы.',
  },
];

export const AboutPage = () => {
  const workSwiperRef = useRef(null);
  const { openModal } = useModalStore();
  const handleFeedbackClick = () => {
    openModal(<ContactUsModal />);
  };
  return (
    <>
      <div className="mx-auto max-w-[1440px] lg:p-[16px]">
        <div
          className="rounded-b-brand-32 bg-cover bg-center lg:rounded-brand-32"
          style={{ backgroundImage: `url(${AboutMainImg})` }}
        >
          <div className="container">
            <div className="mb-[40px] max-w-[1050px] lg:mb-[155px]">
              <h1 className="pt-[200px] lg:pt-[228px]">
                Программная платформа{' '}
                <span className="font-semibold text-white">
                  для современного сельского хозяйства
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-[16px] pb-[16px] lg:flex-row lg:pb-[49px]">
              <div className="flex flex-1 flex-col rounded-[24px] bg-[#FFFFFF1F] p-[20px] backdrop-blur-[7px] lg:rounded-brand-32 lg:p-[32px]">
                <img
                  src={AboutMainIcon1}
                  className="mb-[60px] hidden max-w-[64px] lg:block"
                  alt=""
                />
                <div className="mb-[12px] font-unbounded text-[32px] font-semibold leading-[40px] text-white lg:mb-[16px] lg:text-[48px] lg:leading-[60px]">
                  12 лет
                </div>
                <div className="text-[24px] leading-[32px] text-white lg:text-[20px] lg:leading-[28px]">
                  создаем цифровые продукты для вашего бизнеса
                </div>
              </div>
              <div className="flex flex-1 flex-col rounded-[24px] bg-[#FFFFFF1F] p-[20px] backdrop-blur-[7px] lg:rounded-brand-32 lg:p-[32px]">
                <img
                  src={AboutMainIcon2}
                  className="mb-[60px] hidden max-w-[64px] lg:block"
                  alt=""
                />
                <div className="mb-[12px] font-unbounded text-[32px] font-semibold leading-[40px] text-white lg:mb-[16px] lg:text-[48px] lg:leading-[60px]">
                  30+
                </div>
                <div className="text-[24px] leading-[32px] text-white lg:text-[20px] lg:leading-[28px]">
                  сотрудников, глубоко погруженных в процессы
                </div>
              </div>
              <div className="flex flex-1 flex-col rounded-[24px] bg-[#FFFFFF1F] p-[20px] backdrop-blur-[7px] lg:rounded-brand-32 lg:p-[32px]">
                <img
                  src={AboutMainIcon3}
                  className="mb-[60px] hidden max-w-[64px] lg:block"
                  alt=""
                />
                <div className="mb-[12px] font-unbounded text-[32px] font-semibold leading-[40px] text-white lg:mb-[16px] lg:text-[48px] lg:leading-[60px]">
                  3 рынка
                </div>
                <div className="text-[24px] leading-[32px] text-white lg:text-[20px] lg:leading-[28px]">
                  работаем в России и странах СНГ, развивая решения для региона
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[48px] lg:py-[96px]">
        <div className="container">
          <div className="flex flex-col gap-[16px] lg:flex-row lg:gap-[32px]">
            <div className="flex-1 rounded-[24px] bg-white p-[20px] lg:rounded-brand-32 lg:p-[60px]">
              <div className="mb-[24px] font-unbounded text-[28px] font-medium leading-[36px] text-[#212333] lg:text-[32px] lg:leading-[40px]">
                Технологии, которые делают агробизнес понятнее
              </div>
              <div className="text-[18px] leading-[28px] text-[#717386] lg:text-[20px] lg:leading-[32px]">
                Root’s создан как платформа, объединяющая экспертизу в IT и
                агробизнесе. Мы понимаем процессы на земле так же глубоко, как и
                цифровые инструменты, поэтому создаём решения, которые
                действительно помогают в работе.
                <div className="mb-[16px]" />
                Мы уже успешно применяем нашу платформу как на небольших
                фермерских хозяйствах, так и на крупных агроугодьях.
                Пользователь получает инструменты для планирования, контроля и
                анализа процессов в открытом и закрытом грунте — всё в единой
                цифровой среде.
                <div className="mb-[16px]" />
                Мы делаем технологии доступными, понятными и полезными для всех,
                кто работает с землёй и растениями.
              </div>
            </div>
            <div
              className="min-h-[400px] flex-1 rounded-[24px] bg-cover bg-center lg:rounded-brand-32"
              style={{ backgroundImage: `url(${AboutTechImg})` }}
            />
          </div>
        </div>
      </div>
      <div className="py-[48px] lg:py-[96px]">
        <div className="container">
          <h3>
            Что делает Root’s <br className="hidden lg:block" />
            ценным инструментом
          </h3>
          <div className="subtitle">и сокращаем издержки</div>
          <div className="lg:hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => {
                workSwiperRef.current = swiper;
              }}
              spaceBetween={16}
              slidesPerGroup={1}
              autoHeight={false}
              slidesPerView="auto"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {LIST.map(({ icon, title, text }) => (
                <SwiperSlide
                  className="h-full max-w-[calc(100%-16px)] sm:max-w-[calc(70%-16px)]"
                  key={title}
                >
                  <Item key={title} icon={icon} title={title} text={text} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-[40px] flex justify-center">
              <div className="flex gap-[16px] rounded-brand-100 bg-white p-[4px]">
                <button
                  onClick={() => workSwiperRef.current?.slidePrev()}
                  className="flex size-[48px] items-center justify-center rounded-[48px] bg-[#F8FAFF] transition-colors disabled:opacity-50"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#AFB1B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => workSwiperRef.current?.slideNext()}
                  className="flex size-[48px] items-center justify-center rounded-[48px] bg-[#F8FAFF] transition-colors disabled:opacity-50"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#AFB1B8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden flex-row lg:flex">
            <div className="flex w-full flex-wrap gap-[16px]">
              {LIST.map(({ icon, title, text }) => (
                <Item key={title} icon={icon} title={title} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] py-[16px] lg:p-[16px]">
        <div className="rounded-brand-32 bg-white bg-cover bg-center pb-[16px] pt-[48px] lg:py-[96px]">
          <div className="container">
            <h3>Готовы к сотрудничеству</h3>
            <div className="flex flex-col gap-[16px] lg:flex-row">
              <button
                onClick={handleFeedbackClick}
                className="flex-1 cursor-pointer rounded-[24px] bg-[#27BD6514] p-[20px] text-start lg:rounded-brand-32 lg:p-[40px]"
              >
                <div className="mb-[20px] inline-flex rounded-brand-100 bg-[#26B862] px-[16px] py-[6px] text-[16px] leading-[24px] text-white lg:mb-[24px]">
                  Контакты
                </div>
                <div className="mb-[20px] flex text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[24px] lg:text-[28px] lg:leading-[36px]">
                  Готовы ответить на все <br className="hidden lg:block" />{' '}
                  интересующие вас вопросы
                </div>
                <img src={NextIcon} alt="" />
              </button>
              <NavLink
                to="/"
                className="flex-1 rounded-[24px] bg-[#3C7BF01A] p-[20px] lg:rounded-brand-32 lg:p-[40px]"
              >
                <div className="mb-[20px] inline-flex rounded-brand-100 bg-[#3C7BF0] px-[16px] py-[6px] text-[16px] leading-[24px] text-white lg:mb-[24px]">
                  Инвесторам
                </div>
                <div className="mb-[20px] flex text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[24px] lg:text-[28px] lg:leading-[36px]">
                  Презентация и&nbsp;контактные{' '}
                  <br className="hidden lg:block" />
                  данные для инвесторов
                </div>
                <img src={NextIcon} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Item = ({ icon, title, text }) => (
  <div
    className="rounded-brand-32 bg-white p-[32px] lg:w-[calc(33.333366666%-11px)] lg:p-[40px]"
    key={title}
  >
    <img className="mb-[24px] max-w-[32px]" src={icon} alt="" />
    <div className="mb-[12px] text-[20px] font-medium leading-[28px] text-[#212333] lg:text-[24px] lg:leading-[32px]">
      {title}
    </div>
    <div className="text-[16px] leading-[24px] text-[#717386]">{text}</div>
  </div>
);
