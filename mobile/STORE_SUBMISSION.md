# Uygulama Mağazalarına Yayınlama Rehberi

Bu Expo/React Native uygulaması mağaza yayınına hazır şekilde yapılandırıldı
(`app.json`, `eas.json`, ikonlar). Ancak Apple App Store ve Google Play'e
yayınlama, geliştirici hesabı, ödeme ve kimlik doğrulaması gerektirdiğinden
bu adımları **sizin kendi hesaplarınızla** tamamlamanız gerekiyor — bu bir
otomasyon aracının erişemeyeceği bilgilerdir.

## Gereken hesaplar

| Mağaza | Hesap | Ücret |
|---|---|---|
| Apple App Store | [Apple Developer Program](https://developer.apple.com/programs/) | $99/yıl |
| Google Play | [Google Play Console](https://play.google.com/console/) | $25 (tek seferlik) |

## 1. EAS CLI kurulumu

```bash
cd mobile
npm install -g eas-cli
eas login
eas init          # projeyi Expo hesabınıza bağlar, app.json'daki
                   # "extra.eas.projectId" alanını otomatik doldurur
```

## 2. Bundle identifier / package adını güncelleyin

`app.json` içinde `com.sahibindenlite.app` yer tutucudur. Kendi ters-domain
adınızla değiştirin (örn. `com.sirketiniz.sahibindenlite`) — hem
`ios.bundleIdentifier` hem `android.package` alanlarında.

## 3. Production build alın

```bash
eas build --platform ios --profile production
eas build --platform android --profile production
```

İlk iOS derlemesinde EAS sizden Apple hesabınıza giriş yapmanızı ve
imzalama sertifikalarını otomatik oluşturmasına izin vermenizi ister.

## 4. Mağazalara gönderin

```bash
eas submit --platform ios
eas submit --platform android
```

`eas submit`, App Store Connect / Google Play Console'a otomatik yükleme
yapar; ilk seferde API anahtarı / service account bilgilerinizi girmeniz
istenecektir (EAS bu adımda sizi yönlendirir).

## 5. Mağaza listeleme bilgileri (elle hazırlanmalı)

Her iki mağaza da inceleme öncesi şunları ister — bunlar da hesap/marka
kararları olduğundan sizin tarafınızdan hazırlanmalı:

- Uygulama açıklaması, anahtar kelimeler (Türkçe)
- Ekran görüntüleri (en az 1 cihaz boyutu için, `npx expo start` ile
  simülatör/telefon üzerinden alınabilir)
- Gizlilik politikası URL'si
- Destek e-postası / URL'si
- İçerik derecelendirme anketi (Play Console) / Age rating (App Store)

## Özet

Kod tabanı ve build yapılandırması hazır; kalan adımlar geliştirici hesabı
açma, ödeme yapma ve mağaza incelemesine gönderme gibi yalnızca hesap
sahibinin yapabileceği işlemlerdir.
