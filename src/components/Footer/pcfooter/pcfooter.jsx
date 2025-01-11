import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const PcFooter = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: 'grey.800', color: 'white', pt: 12, pb: 4 , fontFamily:'gandom'}}>
      {/* بخش سمت چپ */}
      <Box sx={{ mt: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRight: 1, borderColor: 'grey.700' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', textAlign: 'center' }}>
          <Box>
            <Typography sx={{fontFamily:'gandom'}}>ما را در شبکه‌های اجتماعی دنبال کنید!</Typography>
            <Typography sx={{fontFamily:'gandom'}}>هفت روز هفته، از ساعت ۸ الی ۲۴ پاسخگوی سوالات شما هستیم.</Typography>
            <Typography sx={{fontFamily:'gandom'}}>تلفن: 0211111111</Typography>
          </Box>
        </Box>
      </Box>

      {/* بخش سمت راست */}
      <Box sx={{ flex: 1, display: 'flex', p: 4 }}>
        {/* نیمه اول لیست */}
        <Box sx={{ flex: 1, textAlign: 'right' }} >
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold', fontFamily:'gandom'}}>خدمات مشتریان</Typography>
          <ul style={{listStyleType:'none'}}>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>پرسش‌های متداول</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>راهنمای خرید و پرداخت</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>رویه‌های ارسال</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>شرایط مرجوعی</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>خرید کالای شانس</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>ارتباط با پشتیبانی</Link></li>
          </ul>
        </Box>

        {/* نیمه دوم لیست */}
        <Box sx={{ flex: 1, textAlign: 'right' }}>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold', fontFamily:'gandom' }}>شرکت نی نی</Typography>
          <ul style={{listStyle:'none'}}>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>تماس با ما</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>درباره ما</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>فرصت‌های شغلی</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>حریم خصوصی</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>مجله نی نی</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>نی نی بیزینس</Link></li>
            <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>نی نی TV</Link></li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default PcFooter;
