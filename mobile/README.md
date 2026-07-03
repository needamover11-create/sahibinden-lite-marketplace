# Sahibinden Lite — Mobil Uygulama

Repodaki statik web vitrinin (`index.html`) mobil karşılığı: Expo (React
Native + TypeScript) ile yazılmış, iOS ve Android'de çalışan bir ilan
platformu uygulaması.

## Özellikler

- Ana sayfa: öne çıkan ilanlar, kategori grid'i, arama kutusu
- Kategoriye göre ilan listeleme (Emlak, Vasıta, Elektronik, Ev & Bahçe,
  Giyim, İş İlanları)
- İlan detay sayfası (satıcı bilgisi, açıklama, "Mesaj Gönder" / "Ara"
  aksiyonları)
- Anlık arama
- İlan Ver formu (kategori seçimi, doğrulama)
- Favoriler (kalp ikonuyla ekle/çıkar)
- Profil ekranı
- Alt sekme navigasyonu + yığın (stack) navigasyon

## Çalıştırma

```bash
cd mobile
npm install
npx expo start
```

Açılan QR kodu Expo Go uygulamasıyla (iOS/Android) okutarak veya
`npx expo start --ios` / `--android` ile simülatörde çalıştırabilirsiniz.

## Mağazalara yayınlama

Bkz. [`STORE_SUBMISSION.md`](./STORE_SUBMISSION.md) — Apple App Store ve
Google Play'e yayınlamak için geliştirici hesabı gerektiren adımlar orada
anlatılıyor.

## Proje yapısı

```
mobile/
├── App.tsx                  # Navigasyon + provider kökü
├── app.json                 # Expo/mağaza yapılandırması
├── eas.json                 # EAS build profilleri
├── assets/                  # İkon ve splash görselleri
└── src/
    ├── components/          # ListingCard, CategoryCard
    ├── context/             # FavoritesContext
    ├── data/                # Mock kategori/ilan verisi
    ├── navigation/           # Tab + Stack navigatörleri
    ├── screens/              # Home, Search, PostAd, Favorites, Profile, ...
    ├── theme/                # Renk paleti
    └── types/                # Paylaşılan TypeScript tipleri
```
