# Doğruluk mu Cesaret mi? - Uzak Mesafe Oyunu

Sevgilinizle uzaktan oynayabileceğiniz +18 doğruluk cesaret oyunu. MongoDB ve Vercel ile çalışır.

## 🚀 Kurulum

### 1. MongoDB Atlas Hesabı Oluşturun

1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) sitesine gidin
2. Ücretsiz hesap oluşturun
3. Yeni bir cluster oluşturun (Free tier yeterli)
4. Database Access bölümünden bir kullanıcı oluşturun
5. Network Access bölümünden IP adresinizi ekleyin (veya 0.0.0.0/0 ile herkese açın)
6. Cluster'a tıklayıp "Connect" > "Connect your application" seçin
7. Connection string'i kopyalayın

### 2. Projeyi Klonlayın

```bash
# Dosyaları bilgisayarınıza indirin
git clone <repo-url>
cd dogruluk-cesaret-oyunu
```

### 3. Bağımlılıkları Yükleyin

```bash
npm install
```

### 4. Ortam Değişkenlerini Ayarlayın

`.env.local.example` dosyasını `.env.local` olarak kopyalayın:

```bash
cp .env.local.example .env.local
```

`.env.local` dosyasını düzenleyin ve MongoDB connection string'inizi ekleyin:

```
MONGODB_URI=mongodb+srv://kullanici:sifre@cluster0.xxxxx.mongodb.net/dogruluk_cesaret?retryWrites=true&w=majority
```

### 5. Yerel Olarak Çalıştırın

```bash
npm run dev
```

Tarayıcınızda http://localhost:3000 adresini açın.

## 📦 Vercel'e Deploy Etme

### 1. Vercel Hesabı Oluşturun

1. [Vercel](https://vercel.com) sitesine gidin
2. GitHub hesabınızla giriş yapın

### 2. Projeyi GitHub'a Yükleyin

```bash
git init
git add .
git commit -m "İlk commit"
git branch -M main
git remote add origin <github-repo-url>
git push -u origin main
```

### 3. Vercel'de Import Edin

1. Vercel dashboard'da "Add New" > "Project"
2. GitHub repo'nuzu seçin
3. Framework Preset olarak "Next.js" seçilecek
4. Environment Variables bölümüne gidin
5. `MONGODB_URI` değişkenini ekleyin ve MongoDB connection string'inizi yapıştırın
6. "Deploy" butonuna tıklayın

### 4. Deploy Tamamlandı! 🎉

Vercel size bir URL verecek (örn: your-app.vercel.app). Bu URL ile oyununuza erişebilirsiniz!

## 🎮 Nasıl Oynanır?

1. Oyunu açın
2. Her oyuncu kendi cihazından aynı oyun kodunu kullanarak bağlansın
3. İsminizi girin ve "Ekle" butonuna tıklayın
4. Sıra size geldiğinde "Doğruluk" veya "Cesaret" seçin
5. Soruyu yanıtlayın veya görevi tamamlayın
6. "Sonraki Oyuncu" ile devam edin
7. Sohbet bölümünden mesajlaşabilirsiniz

## 🛠️ Teknolojiler

- **Next.js 14** - React framework
- **MongoDB** - Veritabanı
- **Vercel** - Hosting platformu

## ⚙️ Özellikler

- ✅ Gerçek zamanlı senkronizasyon
- ✅ Çoklu oyuncu desteği
- ✅ Dahili sohbet sistemi
- ✅ Benzersiz oyun kodları
- ✅ Responsive tasarım
- ✅ +18 özel sorular

## 📝 Notlar

- Oyun kodları otomatik oluşturulur
- Her oyuncu aynı kodu kullanarak aynı oyuna katılabilir
- Veriler MongoDB'de güvenle saklanır
- Vercel ücretsiz planı ile kullanılabilir

## 🔒 Güvenlik

- Hassas bilgiler `.env.local` dosyasında saklanır
- Bu dosya `.gitignore`'da olduğu için GitHub'a yüklenmez
- MongoDB connection string'inizi kimseyle paylaşmayın

## 💡 İpuçları

- MongoDB Atlas free tier 512 MB'a kadar ücretsizdir
- Vercel free tier kişisel projeler için yeterlidir
- Oyun kodu ile arkadaşlarınız kolayca bağlanabilir

## 🆘 Sorun Giderme

**MongoDB bağlantı hatası alıyorsanız:**
- Connection string'in doğru olduğundan emin olun
- MongoDB Atlas'ta IP adresinizin eklendiğinden emin olun
- Kullanıcı adı ve şifrenin doğru olduğundan emin olun

**Vercel deploy hatası alıyorsanız:**
- Environment variable'ların doğru eklendiğinden emin olun
- Build log'larını kontrol edin
- `npm run build` komutunu yerel olarak deneyin

## 📧 İletişim

Sorularınız için issue açabilirsiniz.

---

**Uyarı:** Bu oyun +18 içerik içermektedir. Sorumlu kullanın! 🔞
