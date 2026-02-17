import 'overlayscrollbars/overlayscrollbars.css';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useEffect, useRef, useState } from 'react';

import CarretDownIcon from '../../assets/icons/caret-down-icon.svg';
import MinusIcon from '../../assets/icons/minus-icon.svg';
import PlusIcon from '../../assets/icons/plus-icon.svg';
import CheckActiveIcon from '../../assets/icons/radio-check-active.svg';
import CheckIcon from '../../assets/icons/radio-check.svg';
import TarrifsIcon1 from '../../assets/icons/tarrifs-icon-1.svg';
import TarrifsIcon2 from '../../assets/icons/tarrifs-icon-2.svg';
import TarrifsIcon3 from '../../assets/icons/tarrifs-icon-3.svg';
import BannerImg from '../../assets/images/banner-img-1.png';
import BannerImg2 from '../../assets/images/banner-img-2.jpg';
import EquipImg from '../../assets/images/equip1.png';
import TarrifsMainImg from '../../assets/images/tarrifs-main.jpg';
import Banner from '../../components/banner';

const EQUIPMENTS = [
  { id: 1, name: 'Земляной сенсор TR-16897' },
  { id: 2, name: 'Земляной сенсор TR-345' },
  { id: 3, name: 'Метеостанция TR-16897' },
  { id: 4, name: 'Полевой модуль TYN-JHG' },
  { id: 5, name: 'Земляной сенсор TR-16897' },
  { id: 11, name: 'Земляной сенсор TR-16897' },
  { id: 21, name: 'Земляной сенсор TR-345' },
  { id: 31, name: 'Метеостанция TR-16897' },
  { id: 41, name: 'Полевой модуль TYN-JHG' },
  { id: 51, name: 'Земляной сенсор TR-16897' },
];

export const TariffsPage = () => {
  const [activeTab, setActiveTab] = useState('calculate');
  const [selectedCultureValue, setSelectedCultureValue] = useState('');
  const [selectedUnitsValue, setSelectedUnitsValue] = useState('');
  const [selectedItems, setSelectedItems] = useState({});
  const [size, setSize] = useState('');
  const [hasScroll, setHasScroll] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const instance = scrollRef.current.osInstance();
      if (instance) {
        const { viewport } = instance.elements();
        viewport.scrollTo({ top: 0 });
        const checkScroll = () => {
          const hasScrollContent =
            viewport.scrollHeight > viewport.clientHeight;
          const isAtBottom =
            viewport.scrollTop + viewport.clientHeight >=
            viewport.scrollHeight - 1;

          setHasScroll(hasScrollContent);
          setIsScrolledToBottom(isAtBottom);
        };

        checkScroll();
        instance.on('scroll', checkScroll);

        return () => {
          instance.off('scroll', checkScroll);
        };
      }
    }
  }, [activeTab]);

  const handleQuantityChange = (id, quantity) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: quantity > 0 ? quantity : 0,
    }));
  };

  const handleToggleItem = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: prev[id] ? 0 : 1,
    }));
  };

  return (
    <>
      <div className="mx-auto max-w-[1440px] lg:p-[16px]">
        <div
          className="rounded-b-brand-32 bg-cover bg-center lg:rounded-brand-32"
          style={{ backgroundImage: `url(${TarrifsMainImg})` }}
        >
          <div className="container">
            <div className="max-w-[880px] pb-[136px] pt-[200px] lg:pb-[112px] lg:pt-[228px]">
              <h1 className="mb-[16px] !font-semibold lg:mb-[24px]">
                <span className="font-semibold text-white">Платите</span> ровно
                за то, что{' '}
                <span className="font-semibold text-white">вам нужно</span>
              </h1>
              <div className="text-[20px] font-medium leading-[28px] text-white lg:text-[24px] lg:leading-[40px]">
                Плата взимается за каждый подключенный датчик в месяц,{' '}
                <br className="hidden lg:block" />а также за покупку и
                использование оборудования.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[48px] lg:py-[96px]">
        <div className="container">
          <div className="flex w-full flex-wrap gap-[16px]">
            <div className="w-full rounded-[24px] bg-white p-[24px] lg:w-[calc(33.333366666%-11px)] lg:rounded-brand-32 lg:p-[40px]">
              <img
                className="mb-[20px] max-w-[64px] lg:mb-[32px]"
                src={TarrifsIcon1}
                alt=""
              />
              <div className="mb-[12px] text-[20px] font-medium leading-[28px] text-[#212333] lg:text-[24px] lg:leading-[32px]">
                Бонус
              </div>
              <div className="text-[16px] leading-[24px] text-[#717386]">
                Подключитесь сейчас и получите 10 000 рублей
              </div>
            </div>
            <div className="w-full rounded-[24px] bg-white p-[24px] lg:w-[calc(33.333366666%-11px)] lg:rounded-brand-32 lg:p-[40px]">
              <img
                className="mb-[20px] max-w-[64px] lg:mb-[32px]"
                src={TarrifsIcon2}
                alt=""
              />
              <div className="mb-[12px] text-[20px] font-medium leading-[28px] text-[#212333] lg:text-[24px] lg:leading-[32px]">
                Пригласи друга
              </div>
              <div className="text-[16px] leading-[24px] text-[#717386]">
                Пригласите друга и получите 10 000 рублей на баланс
              </div>
            </div>
            <div className="w-full rounded-[24px] bg-white p-[24px] lg:w-[calc(33.333366666%-11px)] lg:rounded-brand-32 lg:p-[40px]">
              <img
                className="mb-[20px] max-w-[64px] lg:mb-[32px]"
                src={TarrifsIcon3}
                alt=""
              />
              <div className="mb-[12px] text-[20px] font-medium leading-[28px] text-[#212333] lg:text-[24px] lg:leading-[32px]">
                Оборудование
              </div>
              <div className="text-[16px] leading-[24px] text-[#717386]">
                При покупке 1 единицы оборудования Root’s вы получаете
                дополнительный бонус 500 рублей
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner
        dark
        title="Оборудование"
        descl="Разработано для совместной работы с платформой. Перейдите на страницу каталога, чтобы выбрать контроллеры, датчики и модули автоматизации."
        btnText="Посмотреть оборудование"
        btnLink="/equipment"
        img={BannerImg2}
      />

      <div className="py-[48px] lg:py-[96px]">
        <div className="container">
          <h3>Расчет стоимости</h3>
          <div className="subtitle">
            выберите оборудование и его количество и{' '}
            <br className="hidden lg:block" />
            мы рассчитаем примерную стоимость заказа
          </div>

          <div className="mx-[-16px] flex flex-col gap-[16px] lg:mx-0 lg:flex-row lg:gap-[32px]">
            <div className="flex flex-1 flex-col rounded-[24px] bg-white p-[20px] lg:rounded-brand-32 lg:p-[40px]">
              <div className="mb-[20px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mb-[24px] lg:text-[28px] lg:leading-[36px]">
                Оборудование
              </div>
              <div className="mx-[-24px] mb-[24px] overflow-auto whitespace-nowrap p-[24px] pb-0 text-center lg:mx-0 lg:p-0">
                <div className="inline-block flex-nowrap justify-center whitespace-nowrap rounded-brand-100 bg-[#F5F7FC] lg:inline-flex lg:flex-wrap">
                  <div
                    className={`${activeTab === 'calculate' ? 'pointer-events-none bg-[#212333] text-white' : 'cursor-pointer bg-[#F5F7FC] text-[#717386]'} inline-block flex-1 text-nowrap rounded-full p-[12px] text-[16px] leading-[24px] lg:flex`}
                    onClick={() => setActiveTab('calculate')}
                  >
                    Выбрать по участку
                  </div>
                  <div
                    className={`${activeTab === 'manual' ? 'pointer-events-none bg-[#212333] text-white' : 'cursor-pointer bg-[#F5F7FC] text-[#717386]'} inline-block flex-1 text-nowrap rounded-full p-[12px] text-[16px] leading-[24px] lg:flex`}
                    onClick={() => setActiveTab('manual')}
                  >
                    Выбрать вручную
                  </div>
                </div>
                <div className="inline-flex px-[12px] sm:hidden" />
              </div>

              <>
                {activeTab === 'calculate' && (
                  <>
                    <div className="mb-[16px] flex flex-col gap-[12px] lg:flex-row">
                      <input
                        values={size}
                        onChange={(e) => setSize(e.target.value)}
                        type="text"
                        placeholder="Размер участка"
                        className="w-full rounded-brand-16 border border-[#D6DCEB] px-[16px] py-[12px] text-[14px] leading-[20px] text-[#212333] placeholder:text-gray-400 "
                      />
                      <div className="relative w-full">
                        <img
                          src={CarretDownIcon}
                          className="z-1 absolute right-[16px] top-[12px]"
                          alt=""
                        />
                        <select
                          className="z-2 relative w-full appearance-none rounded-brand-16 border border-[#D6DCEB] bg-transparent px-[16px] py-[12px] text-[14px] text-[#212333]"
                          onChange={(e) =>
                            setSelectedUnitsValue(e.target.value)
                          }
                          value={selectedUnitsValue}
                        >
                          <option value="1">Гектары</option>
                          <option value="2">Сотка</option>
                          <option value="2">Кв. метр</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-[24px] flex gap-[12px]">
                      <div className="relative w-full">
                        <img
                          src={CarretDownIcon}
                          className="z-1 absolute right-[16px] top-[12px]"
                          alt=""
                        />
                        <select
                          className="z-2 relative w-full appearance-none rounded-brand-16 border border-[#D6DCEB] bg-transparent px-[16px] py-[12px] text-[14px] text-[#212333]"
                          onChange={(e) =>
                            setSelectedCultureValue(e.target.value)
                          }
                          value={selectedCultureValue}
                        >
                          <option value="1">Культура</option>
                          <option value="2">Культура 2</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}
                <div className="relative mb-[24px]">
                  <OverlayScrollbarsComponent
                    ref={scrollRef}
                    className={`${activeTab === 'calculate' ? 'h-[336px]' : 'h-[470px]'} flex-1`}
                  >
                    <div className="space-y-[2px] pr-[18px]">
                      {activeTab === 'calculate'
                        ? EQUIPMENTS.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-[16px] p-[8px]"
                            >
                              <div className="size-48px flex max-h-[48px] max-w-[48px] items-center justify-center rounded-brand-16 bg-[#F5F7FC] p-[8px]">
                                <img
                                  src={EquipImg}
                                  className="block max-h-full max-w-full"
                                  alt=""
                                />
                              </div>
                              <div className="flex-1">
                                <p className="pr-[16px] text-[16px] font-medium leading-[24px] text-[#212333]">
                                  {item.name}
                                </p>
                              </div>
                              <span className="text-[14px] text-[#999A9E]">
                                {Math.floor(Math.random() * 20) + 1}
                              </span>
                            </div>
                          ))
                        : EQUIPMENTS.map((item) => (
                            <div
                              key={item.id}
                              onClick={() => handleToggleItem(item.id)}
                              className={`flex min-h-[64px] cursor-pointer items-center gap-[16px] rounded-brand-16 p-[8px] transition-colors ${selectedItems[item.id] ? 'bg-[#F5F7FC]' : 'bg-white'}`}
                            >
                              <div className="size-48px flex max-h-[48px] max-w-[48px] items-center justify-center rounded-brand-16 bg-[#F5F7FC] p-[8px]">
                                <img
                                  src={EquipImg}
                                  className="block max-h-full max-w-full"
                                  alt=""
                                />
                              </div>
                              <div className="flex-1">
                                <p className="pr-[16px] text-[16px] font-medium leading-[24px] text-[#212333]">
                                  {item.name}
                                </p>
                              </div>
                              {selectedItems[item.id] > 0 && (
                                <div className="flex items-center gap-[2px]">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleQuantityChange(
                                        item.id,
                                        selectedItems[item.id] - 1,
                                      );
                                    }}
                                    className="flex size-[24px] items-center justify-center"
                                  >
                                    <img
                                      src={MinusIcon}
                                      alt=""
                                      className="size-[24px]"
                                    />
                                  </button>
                                  <span className="min-w-[24px] text-center text-[14px] font-medium text-[#212333]">
                                    {selectedItems[item.id]}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleQuantityChange(
                                        item.id,
                                        selectedItems[item.id] + 1,
                                      );
                                    }}
                                    className="flex size-[24px] items-center justify-center"
                                  >
                                    <img
                                      src={PlusIcon}
                                      alt=""
                                      className="size-[24px]"
                                    />
                                  </button>
                                </div>
                              )}
                              <div className="relative flex size-[20px] items-center justify-center">
                                <img
                                  src={
                                    selectedItems[item.id]
                                      ? CheckActiveIcon
                                      : CheckIcon
                                  }
                                  alt=""
                                  className="size-[20px]"
                                />
                              </div>
                            </div>
                          ))}
                    </div>
                  </OverlayScrollbarsComponent>
                  {hasScroll && !isScrolledToBottom && (
                    <div className="pointer-events-none absolute bottom-0 left-0 right-[14px] h-[60px] bg-gradient-to-t from-white to-transparent" />
                  )}
                </div>
                <button className="block w-full rounded-brand-16 bg-[#F5F7FC] p-[16px] text-center text-[20px] font-medium leading-[32px] text-[#212333] opacity-100 hover:opacity-[0.64]">
                  Рассчитать{' '}
                </button>
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
                      Датчики
                    </div>
                    <div className="flex items-start justify-between gap-[16px] border-b border-[#E4EAFA] py-[16px]">
                      <span className="text-[16px] leading-[24px] text-[#717386]">
                        Всего выбрано датчиков
                      </span>
                      <span className="text-[16px] leading-[24px] text-[#717386]">
                        46
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-[16px] border-b border-[#E4EAFA] py-[16px]">
                      <span className="text-[16px] leading-[24px] text-[#717386]">
                        Стоимость за 1 датчик
                      </span>
                      <span className="text-[16px] leading-[24px] text-[#717386]">
                        150 ₽
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-[16px] border-b border-[#E4EAFA] py-[16px]">
                      <span className="text-[16px] leading-[24px] text-[#717386]">
                        Стоимость за все датчики
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
                        Стоимость необходимого ПО / месяц
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
              </div>
              <button className="button-small flex w-full justify-center lg:inline-flex lg:w-auto mt-[40px]">
                Оформить заказ на 17 100 ₽
              </button>
            </div>
          </div>
        </div>
      </div>

      <Banner
        title="Цифровой инструмент для роста"
        descl="Помогает управлять хозяйством, экономить ресурсы, налаживать процессы, ускоряет развитие и контролировать урожай без лишних усилий"
        btnText="Открыть демо"
        btnLink="/"
        img={BannerImg}
      />
    </>
  );
};
