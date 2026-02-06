import classNames from 'classnames';

import React from 'react';
import { NavLink } from 'react-router-dom';

import BannerBg from '../../assets/images/banner-bg.png';

const Banner = ({ dark, title, descl, btnText, btnLink, img }) => {
  return (
    <div className="py-[48px] lg:py-[96px]">
      <div className="container">
        <div
          className={classNames(
            'flex flex-col lg:flex-row relative overflow-hidden rounded-[40px] justify-between',
            {
              ['bg-[#3C7BF01A]']: !dark,
            },
          )}
          style={{
            backgroundImage: dark ? `url(${BannerBg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="order-2 p-[32px] lg:order-1 lg:max-w-[735px] lg:p-[48px]">
            <div
              className={classNames(
                'text-[28px] lg:text-[40px] leading-[40px] lg:leading-[56px] mb-[8px] lg:mb-[16px] font-unbounded font-medium',
                {
                  ['text-white']: dark,
                  ['text-[#212333]']: !dark,
                },
              )}
            >
              {title}
            </div>
            <div
              className={classNames(
                'text-[18px] leading-[28px] lg:text-[20px] lg:leading-[32px] mb-[32px]',
                {
                  ['opacity-[0.6]']: dark,
                  ['text-white']: dark,
                  ['text-[#717386]']: !dark,
                },
              )}
            >
              {descl}
            </div>
            <NavLink
              to={btnLink}
              className="button-small flex w-full justify-center lg:inline-flex lg:w-auto"
            >
              {btnText}
            </NavLink>
          </div>
          <div className="order-1 flex min-h-[276px] w-full p-[8px] lg:order-2 lg:max-w-[467px] lg:p-[16px]">
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="w-full rounded-brand-32 bg-cover bg-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
