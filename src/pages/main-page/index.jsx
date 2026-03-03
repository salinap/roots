import 'swiper/css';

import { AnimatePresence, motion } from 'framer-motion';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useModalStore } from 'shared/store';

import HowImg1 from '../../assets/icons/how1.svg';
import HowImg2 from '../../assets/icons/how2.svg';
import HowImg3 from '../../assets/icons/how3.svg';
import HowImg4 from '../../assets/icons/how4.svg';
import Mouse from '../../assets/icons/mouse.svg';
import SlideArrow from '../../assets/icons/slide-back.svg';
import Video from '../../assets/icons/video.svg';
import WhyImg1 from '../../assets/icons/why1.svg';
import WhyImg2 from '../../assets/icons/why2.svg';
import WhyImg3 from '../../assets/icons/why3.svg';
import WhyImg4 from '../../assets/icons/why4.svg';
import WorkIcon1 from '../../assets/icons/work1.svg';
import WorkIcon2 from '../../assets/icons/work2.svg';
import WorkIcon3 from '../../assets/icons/work3.svg';
import WorkIcon4 from '../../assets/icons/work4.svg';
import BannerBg from '../../assets/images/banner-bg.png';
import BannerImg1 from '../../assets/images/banner-img1.svg';
import EquipImg1 from '../../assets/images/equip1.png';
import EquipImg2 from '../../assets/images/equip2.png';
import EquipImg3 from '../../assets/images/equip3.png';
import EquipImg4 from '../../assets/images/equip4.png';
import EquipImg5 from '../../assets/images/equip5.png';
import FuncBg from '../../assets/images/func-bg.png';
import FuncImg2 from '../../assets/images/func-img-2.png';
import FuncImgMobile from '../../assets/images/func-img-mobile.png';
import FuncImg from '../../assets/images/func-img.png';
import MainImg from '../../assets/images/main.jpg';
import StartBg from '../../assets/images/start.jpg';
import VideoPreview from '../../assets/images/video-preview1.jpg';
import WorkImg1 from '../../assets/images/work-img-1.jpg';
import WorkImg2 from '../../assets/images/work-img-2.jpg';
import WorkImg3 from '../../assets/images/work-img-3.jpg';
import WorkImg4 from '../../assets/images/work-img-4.jpg';
import ContactUsModal from '../../components/modals/contact-us';
import VideoCard from '../../components/video-card';

const WORK_LIST = [
  {
    icon: WorkIcon1,
    img: WorkImg1,
    title: <>Тепличные культуры</>,
    list: [
      'Помидоры',
      'Огурцы',
      'Перец',
      'Салаты и листовая зелень',
      'Базилик, укроп, петрушка',
    ],
  },
  {
    icon: WorkIcon2,
    img: WorkImg2,
    title: <>Цветочные культуры</>,
    list: ['Розы', 'Тюльпаны', 'Хризантемы', 'Сезонные декоративные растения'],
  },
  {
    icon: WorkIcon3,
    img: WorkImg3,
    title: <>Открытый грунт</>,
    list: ['Картофель', 'Кукуруза', 'Подсолнечник', 'Пшеница', 'Ячмень'],
  },
  {
    icon: WorkIcon4,
    img: WorkImg4,
    title: <>Ягодные&nbsp;и плодовые</>,
    list: ['Клубника', 'Малина', 'Виноград'],
  },
];

const FILTER = [
  {
    title: 'Собственное оборудование',
    type: 1,
  },
  {
    title: 'Устройства других брендов',
    type: 2,
  },
];

const EQUIP_LIST = [
  {
    img: EquipImg1,
    title: <>Головной модуль</>,
    count: '4 позиции',
  },
  {
    img: EquipImg2,
    title: <>Полевой модуль</>,
    count: '8 позиций',
  },
  {
    img: EquipImg3,
    title: <>Метеостанции</>,
    count: '16 позиций',
  },
  {
    img: EquipImg4,
    title: <>Земляные сенсоры</>,
    count: '12 позиций',
  },
  {
    img: EquipImg5,
    title: <>Грунтовые воды</>,
    count: '7 позиций',
  },
];

const FUNC_IMAGES = [FuncImg, FuncImg2];

export const MainPage = () => {
  const workSwiperRef = useRef(null);
  const funcSwiperRef = useRef(null);
  const equipSwiperRef = useRef(null);
  const [funcSlideIndex, setFuncSlideIndex] = useState(0);
  const [funcTotalSlides, setFuncTotalSlides] = useState(0);
  const [worksIndex, setWorksIndex] = useState(0);
  const [worksAutoplayResetKey, setWorksAutoplayResetKey] = useState(0);
  const [type, setType] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWorksIndex((prev) => (prev + 1) % WORK_LIST.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [worksIndex, worksAutoplayResetKey]);

  const handleWorkItemClick = (index) => {
    setWorksIndex(index);
    setWorksAutoplayResetKey((prev) => prev + 1);
  };

  const { openModal } = useModalStore();
  const currentFuncImage = FUNC_IMAGES[funcSlideIndex - 1] || FuncImg;

  const handleFeedbackClick = () => {
    openModal(<ContactUsModal />);
  };

  const handleFuncSwiperSlideChange = () => {
    if (funcSwiperRef.current) {
      setFuncSlideIndex(funcSwiperRef.current.activeIndex + 1);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-[1440px] lg:p-[16px]">
        <div
          className="rounded-b-brand-32 bg-cover bg-center lg:rounded-brand-32"
          style={{ backgroundImage: `url(${MainImg})` }}
        >
          <div className="container">
            <div className="mb-[32px] max-w-[950px] lg:mb-[48px]">
              <h1 className="pt-[296px] lg:pt-[300px]">
                Система автоматизации, которая{' '}
                <span className="font-semibold text-white">
                  помогает выращивать больше
                </span>{' '}
                и<>&nbsp;</>
                <span className="font-semibold text-white">тратить меньше</span>
              </h1>
            </div>
            <a
              href="http://83.147.246.15:5173/"
              className="button w-full lg:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              Начать работать
            </a>
            <div className="mt-[40px] flex items-center justify-center pb-[48px] lg:mt-[148px] lg:justify-between">
              <img src={Mouse} alt="" className="hidden lg:block" />
              <a
                href="#"
                className="gradient-border flex items-center gap-[20px] rounded-[24px] p-[16px] lg:rounded-brand-32 lg:p-[24px]"
              >
                <img src={Video} alt="" />
                <div className="text-[20px] leading-[32px] text-[white] lg:text-[24px]">
                  Видео-обзор
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] py-[16px] lg:p-[16px]">
        <div className="rounded-brand-32 bg-white bg-cover bg-center pb-[16px] pt-[48px] lg:py-[96px]">
          <div className="container">
            <h3>Зачем нужна</h3>
            <div className="subtitle">система автоматизации</div>
            <div className="flex flex-wrap gap-[16px]">
              <div className="flex w-full flex-col items-start gap-[16px] rounded-[24px] bg-[#F5F7FC] p-[20px] lg:w-[calc(50%-8px)] lg:flex-row lg:gap-[32px] lg:rounded-brand-32 lg:p-[40px]">
                <img className="max-w-[56px]" src={WhyImg1} alt="" />
                <div>
                  <div className="mb-[2px] text-[18px] leading-[28px] text-[#717386] lg:text-[20px] lg:leading-[32px]">
                    Точность прогноза болезней
                  </div>
                  <div className="text-[20px] font-medium leading-[28px] text-[#212333] lg:text-[24px] lg:leading-[32px]">
                    94% (виноград) - 96% (теплицы)
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[16px] rounded-[24px] bg-[#F5F7FC] p-[20px] lg:w-[calc(50%-8px)] lg:flex-row lg:gap-[32px] lg:rounded-brand-32 lg:p-[40px]">
                <img className="max-w-[56px]" src={WhyImg2} alt="" />
                <div>
                  <div className="mb-[2px] text-[18px] leading-[28px] text-[#717386] lg:text-[20px] lg:leading-[32px]">
                    Предсказание фенологических фаз
                  </div>
                  <div className="text-[20px] font-medium leading-[28px] text-[#212333] lg:text-[24px] lg:leading-[32px]">
                    погрешность ≤ 2 дня
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[16px] rounded-[24px] bg-[#F5F7FC] p-[20px] lg:w-[calc(50%-8px)] lg:flex-row lg:gap-[32px] lg:rounded-brand-32 lg:p-[40px]">
                <img className="max-w-[56px]" src={WhyImg3} alt="" />
                <div>
                  <div className="mb-[2px] text-[18px] leading-[28px] text-[#717386] lg:text-[20px] lg:leading-[32px]">
                    Энергоэффективность в теплицах
                  </div>
                  <div className="text-[20px] font-medium leading-[28px] text-[#212333] lg:text-[24px] lg:leading-[32px]">
                    снижение затрат на 35%
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[16px] rounded-[24px] bg-[#F5F7FC] p-[20px] lg:w-[calc(50%-8px)] lg:flex-row lg:gap-[32px] lg:rounded-brand-32 lg:p-[40px]">
                <img className="max-w-[56px]" src={WhyImg4} alt="" />
                <div>
                  <div className="mb-[2px] text-[18px] leading-[28px] text-[#717386] lg:text-[20px] lg:leading-[32px]">
                    Калибровка сенсоров
                  </div>
                  <div className="text-[20px] font-medium leading-[28px] text-[#212333] lg:text-[24px] lg:leading-[32px]">
                    отклонение ≤ 1.8%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[48px] lg:py-[96px]">
        <div className="container">
          <div className="mb-[40px] flex flex-col items-start gap-[8px] lg:mb-[72px] lg:flex-row lg:gap-0">
            <div className="lg:max-w-[50%]">
              <h3 className="mb-0 text-left">Работа с разными культурами</h3>
            </div>
            <div className="text-[18px] leading-[28px] text-[#717386] lg:mt-[7px] lg:max-w-[50%] lg:pl-[16px] lg:text-[20px] lg:leading-[32px]">
              Выбирайте культуру — и управляйте полным циклом: от мониторинга
              состояния до точечного полива, питания и прогноза урожайности.
              Система адаптируется под потребности конкретного растения.
            </div>
          </div>
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
              {WORK_LIST.map(({ icon, title, list }) => (
                <SwiperSlide
                  className="h-full max-w-[calc(100%-16px)] sm:max-w-[calc(70%-16px)]"
                  key={title}
                >
                  <WorksItem
                    key={title}
                    icon={icon}
                    title={title}
                    list={list}
                  />
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
          <div className="hidden flex-col lg:flex lg:flex-row">
            <div className="flex w-full flex-wrap gap-[8px] lg:max-w-[50%]">
              {WORK_LIST.map(({ icon, title, list }, index) => (
                <WorksItem
                  key={title}
                  icon={icon}
                  title={title}
                  list={list}
                  isActive={worksIndex === index}
                  handleClick={() => handleWorkItemClick(index)}
                />
              ))}
            </div>
            <div className="hidden w-full pl-[16px] lg:flex lg:max-w-[50%]">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  key={worksIndex}
                  className="size-full"
                >
                  <div
                    className="size-full rounded-brand-32 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${WORK_LIST[worksIndex].img})`,
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[48px] lg:py-[96px]">
        <div className="container">
          <div
            className="overflow flex flex-col rounded-brand-32 bg-cover bg-center lg:flex-row lg:flex-nowrap lg:rounded-[40px]"
            style={{ backgroundImage: `url(${BannerBg})` }}
          >
            <div className="order-3 flex flex-1 flex-col items-start p-[32px] lg:order-1 lg:p-[48px] ">
              <div className="mb-[8px] font-unbounded text-[28px] font-medium leading-[40px] text-white lg:mb-[16px] lg:text-[40px] lg:leading-[56px]">
                Цифровой инструмент <br />
                для роста
              </div>
              <div className="mb-[32px] text-[18px] leading-[28px] text-white lg:pr-[16px] lg:text-[20px] lg:leading-[32px]">
                Помогает управлять хозяйством, экономить ресурсы, налаживать
                процессы, ускоряет развитие и контролировать урожай без лишних
                усилий
              </div>
              <button
                onClick={handleFeedbackClick}
                className="button-small w-full lg:w-auto"
              >
                Открыть демо
              </button>
            </div>
            <div
              className="bg-size-contain order-2 mt-[26px] h-[260px] w-full bg-[length:405px] bg-[left_calc(50%+15px)_center] bg-no-repeat sm:mt-[20px] sm:h-[50vw] sm:bg-[length:80%] lg:mt-0 lg:h-auto lg:w-[525px] lg:bg-cover lg:bg-[left_center]"
              style={{ backgroundImage: `url(${BannerImg1})` }}
            />
          </div>
        </div>
      </div>
      <div className="pb-[48px] pt-[16px] lg:pb-[96px] lg:pt-[32px]">
        <div className="container">
          <div className="flex flex-col rounded-[40px] bg-white p-[16px] lg:flex-row lg:flex-nowrap">
            <div className="flex w-full lg:w-1/2 lg:pr-[16px]">
              <div className="overflow flex size-full rounded-brand-32">
                <VideoCard
                  preview={VideoPreview}
                  url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                />
              </div>
            </div>
            <div className="mt-[16px] flex w-full flex-col p-[24px] lg:mt-0 lg:w-1/2 lg:p-[48px]">
              <div className="mb-[12px] text-[24px] font-medium leading-[32px] text-[#212333] lg:text-[28px] lg:leading-[36px]">
                Иван Корнеплодов
              </div>
              <div className="mb-[16px] text-[16px] leading-[24px] text-[#717386] lg:mb-[24px]">
                Название компании <br />
                Должность
              </div>
              <div className="mb-[16px] text-[16px] leading-[24px] text-[#212333] lg:mb-[24px]">
                После посещения ресторана &quot;Созвездие Вкуса&ldquo; я
                осталась поражена! Атмосфера в этом заведении просто волшебная.
                Обстановка настолько уютная, что создается впечатление, будто я
                попала в сказку. Обслуживание на высшем уровне — официанты
                внимательны и дружелюбны. А теперь о главном — кухня. Вот где
                настоящее волшебство! Блюда подаются с любовью и изыском.
                Реальное созвездие вкусов! Рекомендую всем, кто ценит
                качественный сервис и великолепную кухню.
              </div>
              <div className="text-[16px] leading-[24px] text-[#212333]">
                Покупка автомобиля в салоне &quot;Престижные Авто&ldquo; стала
                приятным опытом для меня. Профессиональные менеджеры подобрали
                авто идеально под мои потребности. Честность и прозрачность в
                сделке — это то, что отличает этот салон от других.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] py-[16px] lg:p-[16px]">
        <div className="rounded-brand-32 bg-white bg-cover bg-center pb-[16px] pt-[48px] lg:py-[96px]">
          <div className="container">
            <h3>Основные функциональные возможности</h3>
            <div
              className="flex flex-col rounded-brand-32 bg-[#F5F7FC] bg-cover bg-center lg:min-h-[688px] lg:flex-row lg:flex-nowrap"
              style={{ backgroundImage: `url(${FuncBg})` }}
            >
              <div className="flex w-full flex-col p-[24px] lg:w-1/2 lg:p-[60px]">
                <Swiper
                  className="flex max-w-full overflow-hidden"
                  modules={[Navigation, Autoplay]}
                  onSwiper={(swiper) => {
                    funcSwiperRef.current = swiper;
                    setFuncTotalSlides(swiper.slides.length);
                    setFuncSlideIndex(swiper.activeIndex + 1);
                  }}
                  onSlideChange={handleFuncSwiperSlideChange}
                  spaceBetween={16}
                  slidesPerGroup={1}
                  breakpoints={{
                    1024: {
                      allowTouchMove: false,
                    },
                  }}
                  autoHeight={false}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                >
                  <SwiperSlide className="h-full">
                    <div className="!w-auto lg:pr-[12px]">
                      <div className="mb-[8px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[12px] lg:text-[28px] lg:leading-[36px]">
                        Мониторинг состояния растений
                      </div>
                      <div className="mb-[24px] text-[16px] leading-[24px] text-[#717386] lg:mb-[32px]">
                        Получайте данные о влажности, температуре, освещённости
                        и других параметрах с датчиков в режиме реального
                        времени.
                      </div>
                      <div className="mb-[8px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[12px] lg:text-[28px] lg:leading-[36px]">
                        Управление задачами и&nbsp;технологическими картами
                      </div>
                      <div className="mb-[24px] text-[16px] leading-[24px] text-[#717386] lg:mb-[32px]">
                        Создаёте планы-техкарты по выращиванию культур,
                        назначаете сотрудников, отслеживаете выполнение.
                      </div>
                      <div className="mb-[8px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[12px] lg:text-[28px] lg:leading-[36px]">
                        Подключение агрономов и&nbsp;экспертов удалённо
                      </div>
                      <div className="mb-[24px] text-[16px] leading-[24px] text-[#717386] lg:mb-[32px]">
                        Можно пригласить консультантов-агрономов, чтобы они
                        смотрели данные, корректировали техкарты, помогали с
                        аналитикой.
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="h-full">
                    <div className="!w-auto lg:pr-[12px]">
                      <div className="mb-[8px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[12px] lg:text-[28px] lg:leading-[36px]">
                        AI-рекомендации по уходу
                      </div>
                      <div className="mb-[24px] text-[16px] leading-[24px] text-[#717386] lg:mb-[32px]">
                        Автоматизированные рекомендации по поливу, обработкам и
                        агрооперациям на основе данных сенсоров, истории участка
                        и текущих условий.
                      </div>
                      <div className="mb-[8px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[12px] lg:text-[28px] lg:leading-[36px]">
                        Удалённая работа агрономов и экспертов
                      </div>
                      <div className="mb-[24px] text-[16px] leading-[24px] text-[#717386] lg:mb-[32px]">
                        Подключайте консультантов к системе для анализа данных,
                        корректировки технологических карт и принятия решений на
                        основе реальной ситуации в поле.
                      </div>
                      <div className="mb-[8px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[12px] lg:text-[28px] lg:leading-[36px]">
                        Управление агрооперациями и технологическими картами
                      </div>
                      <div className="mb-[24px] text-[16px] leading-[24px] text-[#717386] lg:mb-[32px]">
                        Создавайте и настраивайте технологические карты,
                        назначайте задачи сотрудникам и контролируйте выполнение
                        работ в единой системе.
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="mt-[16px] flex">
                  <div className="flex items-center gap-[16px]">
                    <button
                      onClick={() => funcSwiperRef.current?.slidePrev()}
                      className="flex size-[48px] items-center justify-center rounded-[48px] bg-[#F8FAFF] transition-colors hover:bg-[#F0F2F7] disabled:opacity-50"
                    >
                      <img src={SlideArrow} alt="" />
                    </button>
                    <div className="flex items-center gap-[12px] text-[20px] text-[#212333]">
                      <span className="text-[#212333]">{funcSlideIndex}</span>
                      <span className="text-[#AFB1B8]">/</span>
                      <span className="text-[#AFB1B8]">{funcTotalSlides}</span>
                    </div>
                    <button
                      onClick={() => funcSwiperRef.current?.slideNext()}
                      className="flex size-[48px] items-center justify-center rounded-[48px] bg-[#F8FAFF] transition-colors hover:bg-[#F0F2F7] disabled:opacity-50"
                    >
                      <img src={SlideArrow} alt="" className="rotate-180" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative hidden w-full overflow-hidden rounded-r-brand-32 lg:flex lg:w-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFuncImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-[right_bottom] bg-no-repeat"
                    style={{
                      backgroundImage: `url(${currentFuncImage})`,
                      backgroundSize: funcSlideIndex === 1 ? '100%' : '90%',
                    }}
                  />
                </AnimatePresence>
              </div>
              <img
                src={FuncImgMobile}
                className="block w-full lg:hidden"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] py-[16px] lg:p-[16px]">
        <div
          className="rounded-brand-32 bg-cover bg-center pb-[16px] pt-[48px] lg:pb-[48px] xl:pt-[419px]"
          style={{ backgroundImage: `url(${StartBg})` }}
        >
          <div className="container">
            <h3 className="mb-[40px] text-left text-white lg:text-center">
              Как начать работать
            </h3>
            <div className="flex flex-col gap-[16px] xl:flex-row xl:flex-nowrap">
              <div className="flex flex-1 flex-col rounded-[24px] bg-[#FFFFFF1F] p-[20px] backdrop-blur-[7px] lg:rounded-brand-32 lg:p-[32px]">
                <img
                  src={HowImg1}
                  className="mb-[16px] max-w-[64px] lg:mb-[40px]"
                  alt=""
                />
                <div className="mb-[8px] text-[28px] font-medium leading-[38px] text-white lg:mb-[12px]">
                  Регистрируетесь в системе
                </div>
                <div className="text-[16px] font-medium leading-[24px] text-white">
                  Простая регистрация с понятным интерфейсом и поддержкой — вы
                  создаёте аккаунт и получаете доступ к панели управления.
                </div>
              </div>
              <div className="flex flex-1 flex-col rounded-[24px] bg-[#FFFFFF1F] p-[20px] backdrop-blur-[7px] lg:rounded-brand-32 lg:p-[32px]">
                <img
                  src={HowImg2}
                  className="mb-[16px] max-w-[64px] lg:mb-[40px]"
                  alt=""
                />
                <div className="mb-[8px] text-[28px] font-medium leading-[38px] text-white lg:mb-[12px]">
                  Покупаете оборудование на нашем сайте
                </div>
                <div className="text-[16px] font-medium leading-[24px] text-white">
                  Выбираете устройства из нашего рекомендованного списка. Если
                  сомневаетесь — мы подскажем, какое оборудование подойдёт
                  именно для вас.
                </div>
              </div>
              <div className="flex flex-1 flex-col rounded-[24px] bg-[#FFFFFF1F] p-[20px] backdrop-blur-[7px] lg:rounded-brand-32 lg:p-[32px]">
                <img
                  src={HowImg3}
                  className="mb-[16px] max-w-[64px] lg:mb-[40px]"
                  alt=""
                />
                <div className="mb-[8px] text-[28px] font-medium leading-[38px] text-white lg:mb-[12px]">
                  Устанавливаете оборудование
                </div>
                <div className="text-[16px] font-medium leading-[24px] text-white">
                  Подключаете устройства согласно интерактивной инструкции. При
                  необходимости — мы помогаем на каждом шаге.
                </div>
              </div>
              <div className="flex flex-1 flex-col rounded-[24px] bg-[#FFFFFF1F] p-[20px] backdrop-blur-[7px] lg:rounded-brand-32 lg:p-[32px]">
                <img
                  src={HowImg4}
                  className="mb-[16px] max-w-[64px] lg:mb-[40px]"
                  alt=""
                />
                <div className="mb-[8px] text-[28px] font-medium leading-[38px] text-white lg:mb-[12px]">
                  Начинаете работу
                </div>
                <a
                  href="http://83.147.246.15:5173/"
                  target="_blank"
                  className="button-small mt-[8px] !rounded-brand-100 !bg-white text-center !text-[#212333] hover:!bg-white/90 lg:mt-[24px]"
                  rel="noreferrer"
                >
                  Начать работу
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[60px] pt-[48px] lg:py-[96px]">
        <div className="container">
          <h3>Оборудование</h3>
          <div className="mx-auto mb-[32px] mt-[-24px] max-w-[639px] text-center text-[20px] leading-[32px] text-[#717386] lg:mb-[44px] lg:mt-[-56px]">
            Поддерживаем оборудование собственного производства
            и&nbsp;устройства популярных агротех-брендов
          </div>
          <div className="mx-[-24px] mb-[96px] overflow-auto whitespace-nowrap text-center lg:mx-0">
            <div className="inline-flex flex-nowrap justify-center rounded-brand-100 bg-white pl-[24px] lg:flex-wrap lg:pl-0">
              {FILTER.map((item) => (
                <div
                  className={`${item.type === type ? 'pointer-events-none bg-[#212333] text-white' : 'cursor-pointer bg-white text-[#717386]'} text-nowrap rounded-full px-[24px] py-[12px] text-[16px] leading-[24px] lg:text-[20px] lg:leading-[32px]`}
                  key={item.type}
                  onClick={() => setType(item.type)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="inline-flex px-[12px] sm:hidden" />
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => {
              equipSwiperRef.current = swiper;
            }}
            spaceBetween={28}
            slidesPerGroup={1}
            centeredSlides={true}
            autoHeight={false}
            loop
            slidesPerView="auto"
            breakpoints={{
              1024: {
                allowTouchMove: false,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {[...EQUIP_LIST, ...EQUIP_LIST, ...EQUIP_LIST, ...EQUIP_LIST].map(
              ({ img, title, count }, index) => (
                <SwiperSlide className="h-full max-w-[288px]" key={title}>
                  <EquipItem
                    key={title + index}
                    img={img}
                    title={title}
                    count={count}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          <div className="flex justify-center">
            <div className="flex gap-[16px] rounded-brand-100 bg-white p-[4px]">
              <button
                onClick={() => equipSwiperRef.current?.slidePrev()}
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
                onClick={() => equipSwiperRef.current?.slideNext()}
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
      </div>
    </>
  );
};

const WorksItem = ({ icon, title, list, isActive, handleClick = () => {} }) => (
  <div
    className={`works-item rounded-brand-32 border-4 border-[#F5F7FC] bg-white p-[32px] lg:w-[calc(50%-8px)] lg:hover:border-[#3C7BF01A]${isActive ? ' border-[#3C7BF01A]' : ''}`}
    key={title}
    onClick={handleClick}
  >
    <img className="mb-[24px] max-w-[32px]" src={icon} alt="" />
    <div className="mb-[12px] text-[20px] font-medium leading-[28px] text-[#9195b3] lg:max-w-[120px] lg:text-[24px] lg:leading-[32px]">
      {title}
    </div>
    <ul className="flex flex-col">
      {list.map((item) => (
        <li key={item} className="relative pl-[22px] lg:pr-[5px]">
          <span className="fz-[16px] leading-[24px] text-[#717386] before:absolute before:left-[9px] before:top-[10px] before:size-[5px] before:rounded-full before:bg-[#717386] before:content-['']">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const EquipItem = ({ img, title, count }) => (
  <div
    className="equip-item rounded-brand-32 border-4 border-[#F5F7FC] bg-white p-[16px] lg:w-[calc(50%-8px)]"
    key={title}
  >
    <div className="mb-[16px] flex h-[264px] w-[256px] items-center justify-center p-[16px]">
      <img className="block max-h-full max-w-full" src={img} alt="" />
    </div>
    <div className="p-[16px]">
      <div className="text-center text-[20px] font-medium leading-[32px] text-[#212333]">
        {title}
      </div>
      <div className="text-center text-[16px] leading-[24px] text-[#717386]">
        {count}
      </div>
    </div>
  </div>
);
