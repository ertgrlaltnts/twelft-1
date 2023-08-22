import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        //TOAST
        success1: 'Successfully logged in',
        success2: 'Successfully purchased',
        success3: 'Purchase successfuly',
        //------------
        error1: 'Login failed',
        error2: 'Login in progress',
        error3: 'Google services not found',
        error4: 'Something went wrong',
        error5: 'Email cannot be left blank',
        error6: 'Invalid e-mail address',
        error7: 'Password cannot be left blank',
        error8: 'User information is incorrect',
        error9: 'Name & Surname cannot be blank',
        error10: 'Password is too short',
        error11: 'Passwords do not match',
        error12: 'Email address already registered',
        error13: 'Insufficient balance',
        error14: 'Purchase failed',
        //LOGIN
        email: 'Your e-mail address',
        sifre: 'Your password',
        google: 'Sign in with google',
        signin: 'Sign up with e-mail',
        login: 'LOGIN',
        or: 'or register & login',
        //SIGNUP
        pname: 'Name & Surname',
        againPassword: 'Your password (again)',
        signbutton: 'SIGN UP',
        //HOME
        played: 'Played',
        unplayed: 'Unplayed',
        //BET
        coupons: 'Predictions',
        winners: 'Winners',
        ready: 'Ready Prediction',
        paid: 'Paid',
        purchased: 'Purchased',
        preview: 'Preview',
        buy: 'Buy',
        earlyDate: 'Early date',
        earlyTime: 'Early time',
        totalRatio: 'Total ratio',
        seeBet: 'See Prediction',
        notFount: 'Prediction not found..',
        winnerCoupon: 'Winner Prediction',
        must: 'Firstly you must be VIP',
        //USER
        userInfo: 'User Information',
        ad: 'Name',
        packageEnd: 'Package End',
        store: 'STORE',
        aylik: '1 Month',
        aylik3: '3 Month',
        aylik6: '6 Month',
        yillik: 'Year',
        //DRAWER
        contact: 'CONTACT',
        logout: 'LOGOUT',
        //INFO
        info1: 'Access exclusive matches and coupons with vip subscription',
        info2:
          'Packages you purchase while your vip subscription continues extend your subscription period',
      },
    },
    tr: {
      translation: {
        //TOAST
        success1: 'Başarıyla giriş yapıldı',
        success2: 'Başarıyla satın alındı',
        success3: 'Satın alma başarılı',
        //------------
        error1: 'Giriş başarısız oldu',
        error2: 'Giriş işlemi devam ediyor',
        error3: 'Google servisleri bulunamadı',
        error4: 'Bir hata oluştu',
        error5: 'E-mail boş bırakılamaz',
        error6: 'Geçersiz e-mail adresi',
        error7: 'Şifre boş bırakılamaz',
        error8: 'Kullanıcı bilgileri hatalı',
        error9: 'Ad & Soyad boş bırakılamaz',
        error10: 'Şifre çok kısa',
        error11: 'Şifreler uyuşmuyor',
        error12: 'E-mail adresi zaten kayıtlı',
        error13: 'Bakiyeniz yetersiz',
        error14: 'Satın alma başarısız',
        //LOGIN
        email: 'E-mail adresiniz',
        sifre: 'Şifreniz',
        google: 'Google ile devam et',
        signin: 'E-mail ile kayıt ol',
        login: 'GİRİŞ YAP',
        or: 'veya kayıt ol & giriş yap',
        //SIGNUP
        pname: 'İsim & Soyisim',
        againPassword: 'Şifreniz (Tekrar)',
        signbutton: 'KAYIT OL',
        //HOME
        played: 'Oynanmış',
        unplayed: 'Oynanmamış',
        //BET
        coupons: 'Kuponlar',
        winners: 'Kazananlar',
        ready: 'Hazır Kupon',
        paid: 'Ücretli',
        purchased: 'Satın Alındı',
        preview: 'Ön izleme',
        buy: 'Satın Al',
        earlyDate: 'Erken tarih',
        earlyTime: 'Erken saat',
        totalRatio: 'Toplam oran',
        seeBet: 'Kuponu Gör',
        notFount: 'Kupon bulunamadı..',
        winnerCoupon: 'Kazanan Kupon',
        //VIP
        must: 'Öncelikle VIP olmalısınız',
        //USER
        userInfo: 'Kullanıcı Bilgileri',
        ad: 'Ad',
        packageEnd: 'Paket Bitiş',
        store: 'MAĞAZA',
        aylik: 'Aylık',
        aylik3: '3 Aylık',
        aylik6: '6 Aylık',
        yillik: 'Yıllık',
        //DRAWER
        contact: 'İLETİŞİM',
        logout: 'ÇIKIŞ YAP',
        //INFO
        info1: 'Vip abonelik ile özel maçlara ve kuponlara erişin',
        info2:
          'Vip aboneliğiniz devam ederken satın aldığınız paketler, abonelik sürenizi uzatır',
      },
    },
  },
});
export default i18n;
