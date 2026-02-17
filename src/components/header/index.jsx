import { AnimatePresence, motion } from 'framer-motion';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { RoutesPath } from 'shared/routes-path';

import Logo from '../../assets/images/logo.svg';

const NAV = [
  {
    title: 'Главная',
    to: RoutesPath.MAIN,
  },
  {
    title: 'Оборудование',
    to: RoutesPath.EQUIPMENT,
  },
  {
    title: 'Тарифы',
    to: RoutesPath.TARIFFS,
  },
  {
    title: 'О компании',
    to: RoutesPath.ABOUT,
  },
  {
    title: 'Отзывы',
    to: RoutesPath.REVIEWS,
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (open) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [open]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            className="fixed inset-x-[16px] top-[60px] z-50 max-h-[calc(100vh-76px)] overflow-auto rounded-b-brand-16 bg-white"
            style={{ overflow: 'hidden' }}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.2 }}
            exit={{ height: 0 }}
          >
            <div className="flex h-full flex-col">
              <nav className="my-auto flex flex-col">
                {NAV.map(({ title, to }) => (
                  <NavLink
                    to={to}
                    key={to}
                    className={({ isActive }) =>
                      isActive
                        ? 'header__link header__link--active'
                        : 'header__link'
                    }
                  >
                    {title}
                  </NavLink>
                ))}
              </nav>
              <div className="container">
                <a
                  href="http://83.147.246.15:5173/"
                  target="_blank"
                  className="header__button mb-[24px] mt-[46px] w-full"
                  rel="noreferrer"
                >
                  Войти
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mx-[16px] lg:mx-[48px]">
          <div className="absolute inset-x-0 top-[16px] flex items-center rounded-brand-16 bg-white py-[12px] pl-[24px] pr-[12px] transition lg:top-[48px] lg:py-0">
            <NavLink to={NAV[0].to}>
              <img src={Logo} className="max-h-[34px] lg:max-h-max" alt="" />
            </NavLink>
            <nav className="mx-auto hidden gap-[32px] lg:flex xl:gap-[48px]">
              {NAV.map(({ title, to }) => (
                <NavLink
                  to={to}
                  key={to}
                  className={({ isActive }) =>
                    isActive
                      ? 'header__link header__link--active'
                      : 'header__link'
                  }
                >
                  {title}
                </NavLink>
              ))}
            </nav>
            <a
              href="http://83.147.246.15:5173/"
              target="_blank"
              className="header__button hidden lg:block"
              rel="noreferrer"
            >
              Войти
            </a>
            <div
              className="relative ml-auto flex size-[40px] cursor-pointer items-center justify-center lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7157 29.2822L29.2773 10.7207"
                    stroke="#151519"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                  <path
                    d="M29.2772 29.2822L10.7157 10.7207"
                    stroke="#151519"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                </svg>
              ) : (
                <svg
                  width="29"
                  height="19"
                  viewBox="0 0 29 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 1.25H27.5M1.25 9.375H27.5M1.25 17.5H27.5"
                    stroke="#151519"
                    strokeWidth="2.5"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
