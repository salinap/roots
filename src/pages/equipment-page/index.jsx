import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useModalStore } from 'shared/store';

import EmptyImgIcon from '../../assets/icons/empty-image-icon.svg';
import MinusIcon from '../../assets/icons/minus-icon.svg';
import PlusIcon from '../../assets/icons/plus-icon.svg';
import RadioCheckActiveIcon from '../../assets/icons/radio-check-active.svg';
import SearchIcon from '../../assets/icons/search.svg';
import TrashIcon from '../../assets/icons/trash-icon.svg';
import BannerImg from '../../assets/images/banner-img-1.png';
import EquipImg1 from '../../assets/images/equip1.png';
import EquipImg2 from '../../assets/images/equip2.png';
import EquipImg3 from '../../assets/images/equip3.png';
import EquipImg4 from '../../assets/images/equip4.png';
import EquipImg5 from '../../assets/images/equip5.png';
import EquipMainImg from '../../assets/images/equipment-main.jpg';
import Banner from '../../components/banner';
import ContactUsModal, {
  formatPhoneValue,
} from '../../components/modals/contact-us';
import { useIsDesktop } from '../../hooks';

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
  const [selectedItems, setSelectedItems] = useState({});
  const stepsRef = useRef(null);
  const isFirstStepRender = useRef(true);
  const isDesktop = useIsDesktop();
  const [value, setValue] = useState('');
  const [phone, setPhone] = useState('');

  const { openModal } = useModalStore();
  const handleFeedbackClick = () => {
    openModal(<ContactUsModal />);
  };

  const selectedEquipmentIndexes = Object.keys(selectedItems).map(Number);
  const selectedEquipments = selectedEquipmentIndexes.map((index) => ({
    ...EQUIPMENTS[index],
    index,
  }));

  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(formatPhoneValue(onlyDigits));
  };

  const handleEquipmentSelect = (index) => {
    setSelectedItems((prev) => {
      if (prev[index]) {
        const next = { ...prev };
        delete next[index];
        return next;
      }

      return {
        ...prev,
        [index]: 1,
      };
    });
  };

  const handleQuantityChange = (index, value) => {
    setSelectedItems((prev) => {
      if (value <= 0) {
        const next = { ...prev };
        delete next[index];
        return next;
      }

      return {
        ...prev,
        [index]: value,
      };
    });
  };

  const handleRemoveItem = (index) => handleQuantityChange(index, 0);

  const hasSelectedItems = selectedEquipmentIndexes.length > 0;

  useEffect(() => {
    if (isFirstStepRender.current) {
      isFirstStepRender.current = false;
      return;
    }

    stepsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  useEffect(() => {
    if (step === 3 && !hasSelectedItems) {
      setStep(1);
    }
  }, [hasSelectedItems, step]);

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
          <div
            ref={stepsRef}
            className="mx-[-24px] mb-[48px] overflow-auto whitespace-nowrap lg:mx-0"
          >
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
                className={classNames(
                  `flex flex-1 items-center gap-[24px] border-b-[3px] py-[17px]${step == 3 ? ' border-[#26B862]' : ' border-transparent'}`,
                  {
                    'cursor-pointer': hasSelectedItems,
                    'cursor-not-allowed opacity-50': !hasSelectedItems,
                  },
                )}
                onClick={() => hasSelectedItems && setStep(3)}
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
          {step < 3 && (
            <>
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
                    <div
                      className="pointer-events-none text-nowrap rounded-full bg-[#212333] px-[24px] py-[12px] text-[16px] leading-[24px] text-white lg:text-[20px] lg:leading-[32px]"
                      onClick={() => setType(1)}
                    >
                      Датчики Root’s
                    </div>
                    <div className="flex items-center gap-[10px] text-nowrap rounded-full bg-white px-[24px] py-[12px] text-[16px] leading-[24px] text-[#717386] lg:text-[20px] lg:leading-[32px]">
                      Другие производители
                      <span className="rounded-brand-100 bg-[#27BD6514] px-[8px] py-[2px] text-[16px] leading-[24px] text-[#26B862]">
                        Скоро
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex px-[12px] sm:hidden" />
                </div>
              </div>
              <div className="my-[40px] flex flex-wrap gap-[16px] lg:mb-[72px] lg:mt-[48px]">
                {EQUIPMENTS.map((item, index) => (
                  <EquipItem
                    key={index}
                    {...item}
                    isSelected={selectedEquipmentIndexes.includes(index)}
                    onSelect={() => handleEquipmentSelect(index)}
                  />
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
            </>
          )}
          {step === 3 && (
            <div className="mx-[-16px] flex flex-col gap-[16px] lg:mx-0 lg:flex-row lg:gap-[32px]">
              <div className="flex flex-1 flex-col rounded-[24px] bg-white p-[20px] lg:rounded-brand-32 lg:p-[40px]">
                <>
                  <div className="mb-[20px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[24px] lg:text-[28px] lg:leading-[36px]">
                    Вы выбрали
                  </div>
                  <div className="relative mb-[24px]">
                    <div className="space-y-[2px] pr-[18px]">
                      {selectedEquipments.map((item) => (
                        <div
                          key={item.index}
                          className="flex min-h-[64px] items-center gap-[16px] rounded-brand-16 p-[8px]"
                        >
                          <div className="size-48px flex max-h-[48px] max-w-[48px] items-center justify-center rounded-brand-16 bg-[#F5F7FC] p-[8px]">
                            {item.img ? (
                              <img
                                src={item.img}
                                className="block max-h-full max-w-full"
                                alt={item.title}
                              />
                            ) : (
                              <img
                                src={EmptyImgIcon}
                                className="block max-h-full max-w-full"
                                alt={item.title}
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="pr-[16px] text-[16px] font-medium leading-[24px] text-[#212333]">
                              {item.title}
                            </p>
                          </div>
                          <div className="flex items-center gap-[2px]">
                            <button
                              type="button"
                              onClick={() =>
                                handleQuantityChange(
                                  item.index,
                                  selectedItems[item.index] - 1,
                                )
                              }
                              className="flex size-[24px] items-center justify-center"
                            >
                              <img
                                src={MinusIcon}
                                alt="Уменьшить количество"
                                className="size-[24px]"
                              />
                            </button>
                            <span className="min-w-[24px] text-center text-[14px] font-medium text-[#212333]">
                              {selectedItems[item.index]}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                handleQuantityChange(
                                  item.index,
                                  selectedItems[item.index] + 1,
                                )
                              }
                              className="flex size-[24px] items-center justify-center"
                            >
                              <img
                                src={PlusIcon}
                                alt="Увеличить количество"
                                className="size-[24px]"
                              />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.index)}
                            className="relative flex size-[36px] items-center justify-center"
                          >
                            <img
                              src={TrashIcon}
                              alt="Удалить товар"
                              className="size-[36px]"
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              </div>

              <div className="flex flex-1 flex-col rounded-[24px] bg-white p-[20px] lg:rounded-brand-32 lg:p-[40px]">
                <div className="mb-auto">
                  <div className="mb-[20px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[24px] lg:text-[28px] lg:leading-[36px]">
                    Расчет
                  </div>
                  <div className="flex flex-col gap-[32px]">
                    <div>
                      <div className="mb-[8px] text-[16px] font-medium leading-[24px] text-[#212333]">
                        Оборудование
                      </div>
                      <div className="flex items-start justify-between gap-[16px] border-b border-[#E4EAFA] py-[16px]">
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          Всего единиц оборудования
                        </span>
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          46
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-[16px] border-b border-[#E4EAFA] py-[16px]">
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          Стоимость за одну единицу
                        </span>
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          150 ₽
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-[16px] border-b border-[#E4EAFA] py-[16px]">
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          Стоимость за все оборудование
                        </span>
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          6 900 ₽
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="mb-[8px] text-[16px] font-medium leading-[24px] text-[#212333]">
                        Программное обеспечение
                      </div>
                      <div className="flex items-start justify-between gap-[16px] border-b border-[#E4EAFA] py-[16px]">
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          Стоимость программного обеспечения / месяц
                        </span>
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          10 200 ₽
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-[16px] border-b border-[#E4EAFA] py-[16px]">
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          Стоимость настройки и установки
                        </span>
                        <span className="text-[16px] leading-[24px] text-[#717386]">
                          Бесплатно
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[20px] mt-[40px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[24px] lg:text-[28px] lg:leading-[36px]">
                    Оформление заявки
                  </div>
                  <form className="flex flex-col gap-[24px]">
                    <input
                      type="text"
                      name="name"
                      placeholder="Имя"
                      className="rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386] focus:shadow-[0_0_0_2px_#3C7BF0] focus:outline-none"
                    />
                    <div className="flex items-center rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] focus-within:shadow-[0_0_0_2px_#3C7BF0]">
                      <label
                        className="mr-[12px] cursor-text text-[20px] leading-none text-[#212333]"
                        htmlFor="phone"
                      >
                        +7
                      </label>
                      <input
                        value={phone}
                        onChange={handlePhoneChange}
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="999 999 99 99"
                        inputMode="numeric"
                        className="w-full border-none bg-transparent text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386]"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386] focus:shadow-[0_0_0_2px_#3C7BF0] focus:outline-none"
                    />
                    <textarea
                      name="comment"
                      placeholder="Комментарий"
                      className="rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386] focus:shadow-[0_0_0_2px_#3C7BF0] focus:outline-none"
                    />
                  </form>
                </div>
                <button className="button-small mt-[40px] flex w-full justify-center lg:inline-flex lg:w-auto">
                  Оформить заказ на 17 100 ₽
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Banner
        title="Цифровой инструмент для роста"
        descl="Помогает управлять хозяйством, экономить ресурсы, налаживать процессы, ускоряет развитие и контролировать урожай без лишних усилий"
        btnText="Открыть демо"
        btnClick={handleFeedbackClick}
        img={BannerImg}
      />

      <AnimatePresence>
        {hasSelectedItems && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 bottom-0 z-30"
          >
            <div className="mx-auto w-full bg-white p-[16px] shadow-[0_-6px_20px_rgba(33,35,51,0.08)] lg:p-[20px_24px]">
              <div className="container flex flex-col gap-[16px] lg:flex-row lg:items-center lg:justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItems({});
                    setStep(1);
                  }}
                  className="rounded-brand-16 bg-[#F5F7FC] px-[32px] py-[12px] text-[16px] font-medium leading-[24px] text-[#212333] opacity-100 hover:opacity-[0.64]"
                >
                  Отмена
                </button>
                <div className="flex w-full flex-col gap-[12px] lg:w-auto lg:flex-row lg:items-center">
                  <button
                    type="button"
                    disabled={step <= 1}
                    onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
                    className={classNames(
                      'rounded-[16px] bg-[#F5F7FC] px-[32px] py-[12px] text-[16px] font-medium leading-[24px] text-[#212333]',
                      {
                        'opacity-50': step <= 1,
                        'opacity-100 hover:opacity-[0.64]': step > 1,
                      },
                    )}
                  >
                    Назад
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep((prev) => Math.min(prev + 1, 3))}
                    disabled={!hasSelectedItems}
                    className={classNames(
                      'rounded-brand-16 px-[32px] py-[12px] text-[16px] font-medium leading-[24px] text-white opacity-100',
                      {
                        'bg-[#212333] hover:opacity-80': step < 3,
                        'bg-[#2BB663] hover:opacity-90': step === 3,
                        'opacity-50': !hasSelectedItems,
                      },
                    )}
                  >
                    {step === 3 ? 'Оформить заказ на 17 100 ₽' : 'Далее'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const EquipItem = ({ img, title, desc, price, isSelected, onSelect }) => (
  <div
    className={classNames(
      'relative w-full rounded-brand-32 bg-white p-[8px] transition-shadow sm:w-[calc(50%-8px)] lg:w-[calc(33.333366666%-11px)] lg:p-[16px]',
      {
        'shadow-[0_0_0_2px_#C5EBD5]': isSelected,
      },
    )}
    onClick={onSelect}
  >
    {isSelected && (
      <img
        src={RadioCheckActiveIcon}
        alt="selected"
        className="absolute right-[32px] top-[32px] z-[1]"
      />
    )}
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
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className="block w-full rounded-brand-16 bg-[#F5F7FC] p-[12px] text-center text-[16px] font-medium leading-[24px] text-[#212333] opacity-100 hover:opacity-[0.64]"
    >
      Купить за{' ' + price}
    </button>
  </div>
);
