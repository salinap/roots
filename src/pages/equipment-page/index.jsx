import classNames from 'classnames';

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
  const [step, setStep] = useState(1);
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
          <div className="mx-[-24px] mb-[48px] overflow-auto whitespace-nowrap lg:mx-0">
            <div className="flex gap-[32px] border-b border-[#E4EAFA]">
              <div
                className={`flex flex-1 cursor-pointer items-center gap-[24px] border-b-[3px] py-[17px]${step == 1 ? ' border-[#26B862]' : ' border-transparent'}`}
                onClick={() => setStep(1)}
              >
                <div
                  className={classNames(
                    'size-[60px] flex items-center justify-center rounded-full',
                    {
                      'bg-[#26B862]': step === 1,
                      'bg-[#e5f2f0]': step > 1,
                      'bg-[#E4EAFA]': step < 1,
                    },
                  )}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15C22.1046 15 23 14.1046 23 13C23 11.8954 22.1046 11 21 11C19.8954 11 19 11.8954 19 13C19 14.1046 19.8954 15 21 15Z"
                      stroke={classNames({
                        '#ffffff': step == 1,
                        '#26B862': step > 1,
                        '#a9aebe': step < 1,
                      })}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 23C12.1046 23 13 22.1046 13 21C13 19.8954 12.1046 19 11 19C9.89543 19 9 19.8954 9 21C9 22.1046 9.89543 23 11 23Z"
                      stroke={classNames({
                        '#ffffff': step == 1,
                        '#26B862': step > 1,
                        '#a9aebe': step < 1,
                      })}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 27V20L11 12V5"
                      stroke={classNames({
                        '#ffffff': step == 1,
                        '#26B862': step > 1,
                        '#a9aebe': step < 1,
                      })}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 19V12"
                      stroke={classNames({
                        '#ffffff': step == 1,
                        '#26B862': step > 1,
                        '#a9aebe': step < 1,
                      })}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z"
                      stroke={classNames({
                        '#ffffff': step == 1,
                        '#26B862': step > 1,
                        '#a9aebe': step < 1,
                      })}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 5V9L19.5863 11.5863"
                      stroke={classNames({
                        '#ffffff': step == 1,
                        '#26B862': step > 1,
                        '#a9aebe': step < 1,
                      })}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[24px] font-medium leading-[32px] text-[#212333]">
                    Шаг 1
                  </div>
                  <div className="text-[20px] leading-[24px] text-[#717386]">
                    Выбор модуля
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-1 cursor-pointer items-center gap-[24px] border-b-[3px] py-[17px]${step == 2 ? ' border-[#26B862]' : ' border-transparent'}`}
                onClick={() => setStep(2)}
              >
                <div
                  className={classNames(
                    'size-[60px] flex items-center justify-center rounded-full',
                    {
                      'bg-[#26B862]': step === 2,
                      'bg-[#e5f2f0]': step > 2,
                      'bg-[#E4EAFA]': step < 2,
                    },
                  )}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M2 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22V8C30 7.73478 29.8946 7.48043 29.7071 7.29289C29.5196 7.10536 29.2652 7 29 7H2V26"
                        stroke={classNames({
                          '#ffffff': step == 2,
                          '#26B862': step > 2,
                          '#a9aebe': step < 2,
                        })}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 19C24.2091 19 26 17.2091 26 15C26 12.7909 24.2091 11 22 11C19.7909 11 18 12.7909 18 15C18 17.2091 19.7909 19 22 19Z"
                        stroke={classNames({
                          '#ffffff': step == 2,
                          '#26B862': step > 2,
                          '#a9aebe': step < 2,
                        })}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 26V23"
                        stroke={classNames({
                          '#ffffff': step == 2,
                          '#26B862': step > 2,
                          '#a9aebe': step < 2,
                        })}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 23V26"
                        stroke={classNames({
                          '#ffffff': step == 2,
                          '#26B862': step > 2,
                          '#a9aebe': step < 2,
                        })}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 26V23"
                        stroke={classNames({
                          '#ffffff': step == 2,
                          '#26B862': step > 2,
                          '#a9aebe': step < 2,
                        })}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.1709 12.1713L24.8284 17.8288"
                        stroke={classNames({
                          '#ffffff': step == 2,
                          '#26B862': step > 2,
                          '#a9aebe': step < 2,
                        })}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 19C12.2091 19 14 17.2091 14 15C14 12.7909 12.2091 11 10 11C7.79086 11 6 12.7909 6 15C6 17.2091 7.79086 19 10 19Z"
                        stroke={classNames({
                          '#ffffff': step == 2,
                          '#26B862': step > 2,
                          '#a9aebe': step < 2,
                        })}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.1709 12.1713L12.8284 17.8288"
                        stroke={classNames({
                          '#ffffff': step == 2,
                          '#26B862': step > 2,
                          '#a9aebe': step < 2,
                        })}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <div className="text-[24px] font-medium leading-[32px] text-[#212333]">
                    Шаг 2
                  </div>
                  <div className="text-[20px] leading-[24px] text-[#717386]">
                    Выбор датчиков
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-1 cursor-pointer items-center gap-[24px] border-b-[3px] py-[17px]${step == 3 ? ' border-[#26B862]' : ' border-transparent'}`}
                onClick={() => setStep(3)}
              >
                <div
                  className={classNames(
                    'size-[60px] flex items-center justify-center rounded-full',
                    {
                      'bg-[#26B862]': step === 3,
                      'bg-[#e5f2f0]': step > 3,
                      'bg-[#E4EAFA]': step < 3,
                    },
                  )}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13H20"
                      stroke={classNames({
                        '#ffffff': step === 3,
                        '#26B862': step > 3,
                        '#a9aebe': step < 3,
                      })}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17H20"
                      stroke={classNames({
                        '#ffffff': step === 3,
                        '#26B862': step > 3,
                        '#a9aebe': step < 3,
                      })}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1337 24L15.1337 27.5C15.2211 27.6533 15.3475 27.7808 15.5001 27.8694C15.6527 27.9581 15.826 28.0047 16.0025 28.0047C16.179 28.0047 16.3523 27.9581 16.5049 27.8694C16.6575 27.7808 16.7839 27.6533 16.8713 27.5L18.8713 24H27C27.2652 24 27.5196 23.8946 27.7071 23.7071C27.8946 23.5196 28 23.2652 28 23V7C28 6.73478 27.8946 6.48043 27.7071 6.29289C27.5196 6.10536 27.2652 6 27 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7V23C4 23.2652 4.10536 23.5196 4.29289 23.7071C4.48043 23.8946 4.73478 24 5 24H13.1337Z"
                      stroke={classNames({
                        '#ffffff': step === 3,
                        '#26B862': step > 3,
                        '#a9aebe': step < 3,
                      })}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[24px] font-medium leading-[32px] text-[#212333]">
                    Шаг 3
                  </div>
                  <div className="text-[20px] leading-[24px] text-[#717386]">
                    Оформление заявки
                  </div>
                </div>
              </div>
            </div>
          </div>

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
