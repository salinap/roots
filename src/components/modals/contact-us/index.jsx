import * as yup from 'yup';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useModalStore } from 'shared/store/modal';

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

const phoneRegex = /^\d{3}\s\d{3}\s\d{2}\s\d{2}$/;

const validationSchema = yup.object().shape({
  name: yup.string().required('Имя обязательно для заполнения'),
  phone: yup
    .string()
    .required('Телефон обязателен для заполнения')
    .matches(phoneRegex, 'Введите корректный номер телефона'),
  email: yup
    .string()
    .required('Email обязателен для заполнения')
    .email('Введите корректный email'),
  comment: yup.string(),
});

const ContactUsModal = () => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });
  const { isOpen, closeModal } = useModalStore();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        closeModal();
      }
    };
  }, [isOpen]);

  const validateField = async (field, value) => {
    try {
      await validationSchema.validateAt(field, { ...formData, [field]: value });
      setErrors({ ...errors, [field]: '' });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors({ ...errors, [field]: error.message });
      }
    }
  };

  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: formatPhoneValue(onlyDigits) }));
    // Очищаем ошибку при вводе
    if (errors.phone) {
      setErrors({ ...errors, phone: '' });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    // Очищаем ошибку при вводе
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const escapeTelegramMarkdown = (value) => {
    // Telegram "Markdown" mode: escape basic control chars
    return value.replace(/([_*[\]()`])/g, '\\$1');
  };

  const sendFeedback = async (data) => {
    const BOT_TOKEN = '8390171403:AAFcXXh8YgMs4LRrrMTfnpi2vD6Fi05KheY';
    const CHAT_ID = '-5052517547';

    if (!BOT_TOKEN || !CHAT_ID) {
      return {
        success: false,
        error: 'Telegram credentials not configured',
      };
    }

    const pageTitle =
      document.title || `${window.location.pathname}${window.location.search}`;

    const message =
      `🔵🔵🔵🔵🔵🔵🔵🔵/n` +
      `*Новая заявка с сайта*\n\n` +
      `Имя: ${escapeTelegramMarkdown(data.name)}\n` +
      `Телефон: +7 ${escapeTelegramMarkdown(data.phone)}\n` +
      `Email: ${escapeTelegramMarkdown(data.email)}\n` +
      `Комментарий: ${escapeTelegramMarkdown(data.comment || 'Не указан')}\n\n` +
      `Страница: ${escapeTelegramMarkdown(pageTitle)}\n` +
      `Время: ${escapeTelegramMarkdown(new Date().toLocaleString('ru-RU'))}\n` +
      `🔵🔵🔵🔵🔵🔵🔵🔵`;

    // eslint-disable-next-line no-undef
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      },
    );

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const result = await response.json();
    if (result?.ok) {
      return {
        success: true,
        message: 'Сообщение успешно отправлено',
      };
    }

    return {
      success: false,
      error: result?.description || 'Ошибка отправки',
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setIsSubmitting(true);

      const pageTitle =
        document.title ||
        `${window.location.pathname}${window.location.search}`;

      const result = await sendFeedback({ ...formData, pageTitle });

      if (result.success) {
        toast.success(result.message ?? 'Заявка отправлена');
        setFormData({
          name: '',
          phone: '',
          email: '',
          comment: '',
        });
        setErrors({});
        closeModal();
      } else {
        toast.error(result.error || 'Не удалось отправить заявку');
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast.error('Не удалось отправить заявку');
      }
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="mx-[-24px] bg-[#FFFFFF] p-[24px] lg:mx-0 lg:rounded-[24px] lg:p-[48px]">
              <form
                className="flex flex-col gap-[24px]"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={() => {
                    validateField('name', formData.name);
                  }}
                  className="rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386] focus:shadow-[0_0_0_2px_#3C7BF0] focus:outline-none"
                />
                {errors.name && (
                  <div className="mt-[-20px] text-sm text-red-500 [font-family:'Inter',Helvetica]">
                    {errors.name}
                  </div>
                )}
                <div className="flex items-center rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] focus-within:shadow-[0_0_0_2px_#3C7BF0]">
                  <label
                    className="mr-[12px] cursor-text text-[20px] leading-none text-[#212333]"
                    htmlFor="phone"
                  >
                    +7
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="999 999 99 99"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => {
                      validateField('phone', formData.phone);
                    }}
                    inputMode="numeric"
                    className="w-full border-none bg-transparent text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386]"
                  />
                </div>
                {errors.phone && (
                  <div className="mt-[-20px] text-sm text-red-500 [font-family:'Inter',Helvetica]">
                    {errors.phone}
                  </div>
                )}

                <input
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => {
                    validateField('email', formData.email);
                  }}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386] focus:shadow-[0_0_0_2px_#3C7BF0] focus:outline-none"
                />
                {errors.email && (
                  <div className="mt-[-20px] text-sm text-red-500 [font-family:'Inter',Helvetica]">
                    {errors.email}
                  </div>
                )}
                <textarea
                  name="comment"
                  onChange={(e) => handleInputChange('comment', e.target.value)}
                  placeholder="Комментарий"
                  className="rounded-[12px] border border-[#D6DCEB] bg-white px-[24px] py-[15px] text-[20px] leading-[32px] text-[#212333] placeholder:text-[#717386] focus:shadow-[0_0_0_2px_#3C7BF0] focus:outline-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary mt-[16px] w-full !rounded-[12px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Отправляем…' : 'Отправить'}
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
