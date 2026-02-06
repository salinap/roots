import BannerImg from '../../assets/images/banner-img-1.png';
import ReviewsMainImg from '../../assets/images/reviews-main.jpg';
import VideoPreview from '../../assets/images/video-preview1.jpg';
import Banner from '../../components/banner';
import VideoCard from '../../components/video-card';

export const ReviewsPage = () => {
  return (
    <>
      <div className="mx-auto max-w-[1440px] lg:p-[16px]">
        <div
          className="rounded-b-brand-32 bg-cover bg-center lg:rounded-brand-32"
          style={{ backgroundImage: `url(${ReviewsMainImg})` }}
        >
          <div className="container">
            <div className="max-w-[580px] pb-[136px] pt-[200px] lg:pb-[112px] lg:pt-[228px]">
              <h1 className="mb-[16px] !font-semibold lg:mb-[24px]">Отзывы</h1>
              <div className="text-[20px] font-medium leading-[28px] text-white lg:text-[24px] lg:leading-[40px]">
                Что говорят компании, работающие с нашим программным
                обеспечением и оборудованием
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[48px] lg:py-[96px]">
        <div className="container">
          <div className="flex flex-wrap gap-[16px]">
            {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
              <div
                className="flex flex-col rounded-[40px] bg-white p-[8px] sm:max-w-[calc(50%-8px)] lg:p-[16px]"
                key={i}
              >
                <div className="overflow flex size-full rounded-brand-32">
                  <VideoCard
                    preview={VideoPreview}
                    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  />
                </div>
                <div className="p-[16px]">
                  <div className="mb-[12px] mt-[24px] text-[24px] font-medium leading-[32px] text-[#212333] lg:mt-[32px] lg:text-[28px] lg:leading-[36px]">
                    Имя Фамилия
                  </div>
                  <div className="text-[16px] leading-[24px] text-[#717386]">
                    Название компании
                  </div>
                  <div className="text-[16px] leading-[24px] text-[#717386]">
                    Должность
                  </div>
                </div>
              </div>
            ))}
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
