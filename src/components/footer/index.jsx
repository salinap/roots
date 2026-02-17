/* eslint-disable prettier/prettier */

import { NavLink } from 'react-router-dom';
import { useModalStore } from 'shared/store';
import FooterBg from '../../assets/images/footer-bg.jpg';
import FooterLogo from '../../assets/images/white-logo.svg';
import { RoutesPath } from 'shared/routes-path';
import ContactUsModal from '../../components/modals/contact-us';

export default function Footer() {
  const { openModal } = useModalStore();
  const handleFeedbackClick = () => {
    openModal(
      <ContactUsModal />
    );
  };
  return (
    <div className='mx-auto max-w-[1440px] lg:p-[16px]'>
      <footer
        style={{ backgroundImage: `url(${FooterBg})` }}
        className="flex flex-col justify-between gap-[24px] rounded-t-brand-32 bg-cover bg-center px-[24px] py-[48px] lg:flex-row lg:gap-0 lg:rounded-[40px] lg:p-[48px]"
      >
        <div className="flex w-[292px] max-w-[292px] flex-col">
          <img src={FooterLogo} alt="" className="max-w-[111px]" />
          <div className="mt-auto hidden text-[16px] leading-[24px] text-white opacity-[0.32] lg:block">© Root’s {new Date().getFullYear()}</div>
        </div>
        <div className="w-[292px] max-w-[292px] lg:pr-[16px]">
          <div className="mb-[24px] text-[16px] leading-[24px] text-white opacity-[0.32]">МЕНЮ</div>
          <nav className="flex flex-col gap-[12px]">
            <NavLink to="/" className="text-[16px] leading-[24px] text-white opacity-100 hover:opacity-[0.64]">
              Программное обеспечение
            </NavLink>
            <NavLink to={RoutesPath.EQUIPMENT} className="text-[16px] leading-[24px] text-white opacity-100 hover:opacity-[0.64]">
              Оборудование
            </NavLink>
            <NavLink to={RoutesPath.TARIFFS} className="text-[16px] leading-[24px] text-white opacity-100 hover:opacity-[0.64]">
              Тарифы
            </NavLink>
            <NavLink to={RoutesPath.ABOUT} className="text-[16px] leading-[24px] text-white opacity-100 hover:opacity-[0.64]">
              О компании
            </NavLink>
            <NavLink to="/" className="text-[16px] leading-[24px] text-white opacity-100 hover:opacity-[0.64]">
              Контакты
            </NavLink>
          </nav>
        </div>
        <div className="w-[292px] max-w-[292px] lg:pr-[16px]">
          <div className="mb-[24px] text-[16px] leading-[24px] text-white opacity-[0.32]">ДОКУМЕНТАЦИЯ</div>
          <nav className="flex flex-col gap-[12px]">
            <NavLink to="/" className="text-[16px] leading-[24px] text-white opacity-100 hover:opacity-[0.64]">
              Сертификаты
            </NavLink>
            <NavLink to="/" className="text-[16px] leading-[24px] text-white opacity-100 hover:opacity-[0.64]">
              Лицензии
            </NavLink>
            <NavLink to="/" className="text-[16px] leading-[24px] text-white opacity-100 hover:opacity-[0.64]">
              Политика конфиденциальности
            </NavLink>
            <NavLink to="/" className="text-[16px] leading-[24px] text-white opacity-100 hover:opacity-[0.64]">
              Правовая информация
            </NavLink>
          </nav>
        </div>
        <div className="w-[292px] max-w-[292px] lg:pr-[16px]">
          <div className="mb-[24px] text-[16px] leading-[24px] text-white opacity-[0.32]">КОНТАКТЫ</div>
          <div className="mb-[8px]">
            <a href="tel:+7 495 006 21 57" className="text-[24px] font-bold leading-[32px] text-white opacity-100 hover:opacity-[0.64]">+7 495 006 21 57</a>
          </div>
          <div className="mb-[20px]">
            <a href="mailto:info@roots.ru" className="text-[24px] font-bold leading-[32px] text-white opacity-100 hover:opacity-[0.64]">info@roots.ru</a>
          </div>
          <button className="button-footer" onClick={handleFeedbackClick}>Написать нам</button>
        </div>
      </footer>
    </div>
  );
}
