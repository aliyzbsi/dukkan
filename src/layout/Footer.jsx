const Footer = () => {
  return (
    <footer className="mt-auto py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kurumsal Bilgiler */}
          <div>
            <h3 className="font-bold mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              <li>Hakkımızda</li>
              <li>İletişim</li>
              <li>Kariyer</li>
            </ul>
          </div>

          {/* Müşteri Hizmetleri */}
          <div>
            <h3 className="font-bold mb-4">Müşteri Hizmetleri</h3>
            <ul className="space-y-2">
              <li>Sipariş Takibi</li>
              <li>İade ve Değişim</li>
              <li>Yardım</li>
            </ul>
          </div>

          {/* Kategoriler */}
          <div>
            <h3 className="font-bold mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li>Erkek</li>
              <li>Kadın</li>
              <li>Aksesuar</li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="font-bold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li>info@dukkan.com</li>
              <li>321 412 442 121</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center text-sm text-gray-600">
          © 2024 Dükkan. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
