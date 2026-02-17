import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';

import { useModalStore } from 'shared/store';

import EmptyImgIcon from '../../assets/icons/empty-image-icon.svg';
import SearchIcon from '../../assets/icons/search.svg';
import BannerImg from '../../assets/images/banner-img-1.png';
import EquipImg1 from '../../assets/images/equip1.png';
import EquipImg2 from '../../assets/images/equip2.png';
import EquipImg3 from '../../assets/images/equip3.png';
import EquipImg4 from '../../assets/images/equip4.png';
import EquipImg5 from '../../assets/images/equip5.png';
import EquipMainImg from '../../assets/images/equipment-main.jpg';
import Banner from '../../components/banner';
import ContactUsModal from '../../components/modals/contact-us';
import { useIsDesktop } from '../../hooks';

const FILTER = [
  {
    title: 'Датчики Root’s',
    type: 1,
  },
  {
    title: 'Другие производители',
    type: 2,
  },
];

const EQUIPMENTS = [
  {
    img: EquipImg1,
    title: 'Название датчика',
    desc: 'Краткая характеристика, краткая характеристика, краткая характеристика, краткая характеристика',
    price: '12 345 ₽',
  },
  {
    img: EquipImg2,
    title: 'Название датчика',
    desc: 'Краткая характеристика, краткая характеристика, краткая характеристика, краткая характеристика',
    price: '12 345 ₽',
  },
  {
    img: EquipImg3,
    title: 'Название датчика',
    desc: 'Краткая характеристика, краткая характеристика, краткая характеристика, краткая характеристика',
    price: '12 345 ₽',
  },
  {
    img: EquipImg4,
    title: 'Название датчика',
    desc: 'Краткая характеристика, краткая характеристика, краткая характеристика, краткая характеристика',
    price: '12 345 ₽',
  },
  {
    img: EquipImg5,
    title: 'Название датчика',
    desc: 'Краткая характеристика, краткая характеристика, краткая характеристика, краткая характеристика',
    price: '12 345 ₽',
  },
  {
    img: null,
    title: 'Название датчика',
    desc: 'Краткая характеристика, краткая характеристика, краткая характеристика, краткая характеристика',
    price: '12 345 ₽',
  },
  {
    img: null,
    title: 'Название датчика',
    desc: 'Краткая характеристика, краткая характеристика, краткая характеристика, краткая характеристика',
    price: '12 345 ₽',
  },
  {
    img: EquipImg3,
    title: 'Название датчика',
    desc: 'Краткая характеристика, краткая характеристика, краткая характеристика, краткая характеристика',
    price: '12 345 ₽',
  },
  {
    img: EquipImg1,
    title: 'Название датчика',
    desc: 'Краткая характеристика, краткая характеристика, краткая характеристика, краткая характеристика',
    price: '12 345 ₽',
  },
];

export const EquipmentPage = () => {
  const [type, setType] = useState(1);
  const isDesktop = useIsDesktop();
  const [value, setValue] = useState('');

  const { openModal } = useModalStore();
  const handleFeedbackClick = () => {
    openModal(<ContactUsModal />);
  };

  return (
    <>
      <div className="mx-auto max-w-[1440px] lg:p-[16px]">
        <div
          className="rounded-b-brand-32 bg-cover bg-center lg:rounded-brand-32"
          style={{ backgroundImage: `url(${EquipMainImg})` }}
        >
          <div className="container">
            <div className="max-w-[880px] pb-[136px] pt-[200px] lg:pb-[112px] lg:pt-[228px]">
              <h1 className="mb-[16px] !font-semibold lg:mb-[24px]">
                Оборудование
              </h1>
              <div className="text-[20px] font-medium leading-[28px] text-white lg:text-[24px] lg:leading-[40px]">
                Ниже представлен перечень оборудования, доступного для покупки
                на&nbsp;нашем сайте. Вы можете выбрать как оборудование
                сторонних производителей, так и решения нашего собственного
                производства.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[48px] lg:py-[96px]">
        <div className="container">
          <div className="block lg:flex lg:flex-row lg:flex-nowrap lg:items-center lg:gap-[24px]">
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-brand-100">
                <input
                  type="text"
                  name="search"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Поиск по названию"
                  // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
                  className="mb-[16px] w-full bg-white py-[16px] pl-[24px] pr-[58px] text-[20px] leading-[32px] text-[#4b4b51] placeholder-[#717386] lg:mb-0"
                />
                <img
                  src={SearchIcon}
                  alt="search"
                  className="absolute right-[16px] top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="mx-[-24px] overflow-auto whitespace-nowrap text-center lg:mx-0">
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
          </div>
          <div className="my-[40px] flex flex-wrap gap-[16px] lg:mb-[72px] lg:mt-[48px]">
            {EQUIPMENTS.map((item, index) => (
              <EquipItem key={index} {...item} />
            ))}
          </div>
          <div className="flex justify-center">
            <ReactPaginate
              className="pagination"
              breakLabel="..."
              previousLabel={
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 1.06067L0.75 8.56067L8.25 16.0607"
                    stroke="#696777"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              onPageChange={console.log}
              pageCount={20}
              pageRangeDisplayed={isDesktop ? 2 : 2}
              marginPagesDisplayed={isDesktop ? 3 : 0}
              nextLabel={
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    d="M8.25 1.06067L0.75 8.56067L8.25 16.0607"
                    stroke="#696777"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
      <Banner
        title="Цифровой инструмент для роста"
        descl="Помогает управлять хозяйством, экономить ресурсы, налаживать процессы, ускоряет развитие и контролировать урожай без лишних усилий"
        btnText="Открыть демо"
        btnClick={handleFeedbackClick}
        img={BannerImg}
      />
    </>
  );
};

const EquipItem = ({ img, title, desc, price }) => (
  <div className="w-full rounded-brand-32 bg-white p-[8px] sm:w-[calc(50%-8px)] lg:w-[calc(33.333366666%-11px)] lg:p-[16px]">
    <div className="mb-[32px] flex h-[300px] w-full items-center justify-center rounded-brand-32 bg-[#F5F7FC] p-[16px]">
      {img ? (
        <img src={img} alt={title} className="block max-h-full max-w-full" />
      ) : (
        <img src={EmptyImgIcon} alt={title} className="max-w-[80px]" />
      )}
    </div>
    <div className="mb-[8px] text-[20px] font-medium leading-[28px] text-[#212333] lg:text-[24px] lg:leading-[32px]">
      {title}
    </div>
    <div className="mb-[24px] text-[16px] leading-[24px] text-[#717386]">
      {desc}
    </div>
    <NavLink
      to="/"
      className="block w-full rounded-brand-16 bg-[#F5F7FC] p-[12px] text-center text-[16px] font-medium leading-[24px] text-[#212333] opacity-100 hover:opacity-[0.64]"
    >
      Купить за{' ' + price}
    </NavLink>
  </div>
);
