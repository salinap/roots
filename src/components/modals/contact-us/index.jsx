import React from 'react';

import Logo from '../../../assets/images/logo.svg';

const formatPhoneValue = (digits) => {
  const parts = [];

  if (digits.length > 0) {
    parts.push(digits.slice(0, 3));
  }

  if (digits.length > 3) {
    parts.push(digits.slice(3, 6));
  }

  if (digits.length > 6) {
    parts.push(digits.slice(6, 8));
  }

  if (digits.length > 8) {
    parts.push(digits.slice(8, 10));
  }

  return parts.join(' ');
};

const ContactUsModal = () => {
  const [phone, setPhone] = React.useState('');

  const handlePhoneChange = (event) => {
    const onlyDigits = event.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(formatPhoneValue(onlyDigits));
  };

  return (
    <div className="relative flex h-full min-h-dvh min-w-[100dvw] flex-col bg-[#F5F7FC]">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mx-[16px] border-b border-[#efefef] lg:mx-[48px]">
          <div className="py-[24px] lg:pt-[48px]">
            <img src={Logo} className="max-h-[34px] lg:max-h-max" alt="" />
          </div>
        </div>
      </div>
      <div className="container flex flex-1 flex-col justify-center">
        <div className="flex flex-col gap-[24px] py-[24px] lg:flex-row lg:gap-[96px] lg:py-[96px]">
          <div className="flex flex-1 flex-col">
            <h3 className="!text-left">Расчет стоимости</h3>
            <div className="subtitle !text-left">
              выберите оборудование и его количество и{' '}
              <br className="hidden lg:block" />
              мы рассчитаем примерную стоимость заказа
            </div>
            <div className="mt-auto">
              <div className="mb-[8px] text-[20px] leading-[32px] text-[#717386]">
                Горячая линия
              </div>
              <div className="mb-[32px] text-[32px] font-medium leading-[40px] text-[#191C25]">
                +7 495 006 21 57
              </div>
              <div className="mb-[8px] text-[20px] leading-[32px] text-[#717386]">
                По всем вопросам
              </div>
              <div className="text-[32px] font-medium leading-[40px] text-[#191C25]">
                info@roots.ru
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="lg:rounded-[24px] bg-[#FFFFFF] p-[24px] lg:p-[48px] mx-[-24px] lg:mx-0">
              <form className="flex flex-col gap-[24px]">
                <input
                  type="text"
                  name="name"
                  required
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
                    required
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="999 999 99 99"
                    value={phone}
                    onChange={handlePhoneChange}
                    inputMode="numeric"
                    className="w-full border-none bg-transparent text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386]"
                  />
                </div>

                <input
                  type="email"
                  required
                  name="email"
                  placeholder="E-mail"
                  className="rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386] focus:shadow-[0_0_0_2px_#3C7BF0] focus:outline-none"
                />

                <textarea
                  name="comment"
                  placeholder="Комментарий"
                  className="rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386] focus:shadow-[0_0_0_2px_#3C7BF0] focus:outline-none"
                />

                <button type="submit" className="button-small mt-[16px] w-full">
                  Отправить
                </button>

                <p className="mt-[8px] text-[16px] leading-[24px] text-[#717386]">
                  Нажимая на кнопку “Отправить” я соглашаюсь с{' '}
                  <a
                    href="#"
                    className="text-[#26B862] underline-offset-2 hover:underline"
                  >
                    политикой конфиденциальности
                  </a>{' '}
                  и{' '}
                  <a
                    href="#"
                    className="text-[#26B862] underline-offset-2 hover:underline"
                  >
                    обработкой персональных данных
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
