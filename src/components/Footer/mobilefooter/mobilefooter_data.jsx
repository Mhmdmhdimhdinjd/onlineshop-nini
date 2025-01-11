import React from 'react';
import CollapsibleSection from './CollapsibleSection'; // فرض می‌کنیم CollapsibleSection در فایل دیگری است

const Mobilefooter__wrapper = () => {
  return (

    <>
      <CollapsibleSection
        title="خدمات مشتریان"
        items={[
          "پرسش‌های متداول",
          "راهنمای خرید و پرداخت",
          "رویه‌های ارسال",
          "شرایط مرجوعی",
          "خرید کالای شانس",
          "ارتباط با پشتیبانی",
        ]}
      />
      <CollapsibleSection
        title="شرکت نی نی"
        items={[
          "تماس با ما",
          "درباره ما",
          "فرصت‌های شغلی",
          "حریم خصوصی",
          "مجله نی نی",
          "نی نی بیزینس",
          "نی نی TV",
        ]}
      />
      <CollapsibleSection
        title="محصولات"
        items={[
          "محصول ۱",
          "محصول ۲",
          "محصول ۳",
          "محصول ۴",
          "محصول ۵",
        ]}
      />
      <CollapsibleSection
        title="اطلاعات تماس"
        items={[
          "تلفن: 024",
          "ایمیل: info@example.com",
          "آدرس: خیابان شریعتی , شهر بابل",
        ]}
      />
    </>
  );
};

export default Mobilefooter__wrapper;
