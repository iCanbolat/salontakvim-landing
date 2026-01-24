import { StackingFeatures } from "./components/stacking-features";

export default function Home() {
  const clientBaseUrl =
    process.env.NEXT_PUBLIC_CLIENT_URL || "http://localhost:3000";
  const loginUrl = `${clientBaseUrl}/login`;
  const registerUrl = `${clientBaseUrl}/register`;

  return (
    <div className="min-h-screen bg-(--background) text-(--foreground)">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--primary) text-(--primary-foreground) font-semibold">
            ST
          </div>
          <div>
            <p className="text-lg font-semibold">SalonTakvim</p>
            <p className="text-xs text-(--muted-foreground)">
              Randevu ve işletme yönetimi
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-(--muted-foreground) md:flex">
          <a className="transition hover:text-(--foreground)" href="#features">
            Özellikler
          </a>
          <a className="transition hover:text-(--foreground)" href="#workflow">
            Nasıl çalışır
          </a>
          <a className="transition hover:text-(--foreground)" href="#pricing">
            Paketler
          </a>
          <a className="transition hover:text-(--foreground)" href="#cta">
            Demo
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-(--border) px-4 py-2 text-sm font-semibold text-(--foreground) transition hover:bg-(--accent) sm:inline-flex"
            href={loginUrl}
          >
            Giriş yap
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full bg-(--primary) px-5 py-2 text-sm font-semibold text-(--primary-foreground) shadow-md transition hover:opacity-90"
            href={registerUrl}
          >
            Ücretsiz dene
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
        <section className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2 text-sm text-(--muted-foreground) shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-(--primary)" />
            Salonlar ve randevu ile çalışan işletmeler için tek panel
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl lg:text-6xl">
              Randevular, ekip ve müşteri yönetimi tek platformda.
            </h1>
            <p className="text-lg leading-8 text-(--muted-foreground) sm:text-xl">
              SalonTakvim; randevu planlama, personel uygunluğu, müşteri
              bildirimleri ve gelir takibini tek bir akıcı panelde birleştirir.
              İşinizi büyütürken operasyonu sadeleştirin.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-(--primary-foreground) shadow-md transition hover:opacity-90"
              href={registerUrl}
            >
              Ücretsiz demoya başla
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-(--border) bg-(--card) px-6 py-3 text-sm font-semibold text-(--foreground) shadow-sm transition hover:bg-(--accent)"
              href={loginUrl}
            >
              Canlı örnekleri gör
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-(--border) bg-(--card)/70 p-4 shadow-sm">
              <p className="text-sm text-(--muted-foreground)">
                Randevu Doluluk
              </p>
              <p className="text-2xl font-semibold">%92</p>
            </div>
            <div className="rounded-2xl border border-(--border) bg-(--card)/70 p-4 shadow-sm">
              <p className="text-sm text-(--muted-foreground)">
                Otomatik Hatırlatma
              </p>
              <p className="text-2xl font-semibold">24s & 1s</p>
            </div>
            <div className="rounded-2xl border border-(--border) bg-(--card)/70 p-4 shadow-sm">
              <p className="text-sm text-(--muted-foreground)">
                İptal Azalması
              </p>
              <p className="text-2xl font-semibold">-38%</p>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-140">
          <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-(--primary)/35 blur-3xl animate-[blob_18s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[oklch(0.6231_0.188_259.8145/0.25)] blur-3xl animate-[blob_20s_ease-in-out_infinite]" />
          <div className="absolute -bottom-16 -left-6 h-52 w-52 rounded-full bg-[oklch(0.7686_0.1647_70.0804/0.22)] blur-3xl animate-[blob_22s_ease-in-out_infinite]" />

          <div className="relative rounded-[28px] border border-(--border) bg-(--card)/80 p-6 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-(--muted-foreground)">
                  Bugünün Randevuları
                </p>
                <p className="text-2xl font-semibold">12 randevu</p>
              </div>
              <div className="rounded-full bg-(--primary)/15 px-3 py-1 text-xs font-semibold text-(--primary)">
                Canlı
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  name: "Selin A.",
                  service: "Saç Kesimi + Fön",
                  time: "10:30",
                  status: "Onaylandı",
                },
                {
                  name: "Mehmet K.",
                  service: "Sakal Bakımı",
                  time: "11:15",
                  status: "Hatırlatma gönderildi",
                },
                {
                  name: "Derya T.",
                  service: "Cilt Bakımı",
                  time: "12:00",
                  status: "Ödeme alındı",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-(--border) bg-(--background)/80 px-4 py-3 shadow-sm"
                >
                  <div>
                    <p className="font-medium text-(--foreground)">
                      {item.name}
                    </p>
                    <p className="text-sm text-(--muted-foreground)">
                      {item.service}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-(--foreground)">
                      {item.time}
                    </p>
                    <p className="text-xs text-(--muted-foreground)">
                      {item.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -left-10 top-10 w-48 rounded-2xl border border-(--border) bg-(--background)/80 p-4 shadow-lg backdrop-blur animate-[float_6s_ease-in-out_infinite]">
            <p className="text-xs uppercase text-(--muted-foreground)">
              Hatırlatma
            </p>
            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              24 saat önce SMS gönderildi
            </p>
          </div>

          <div className="absolute -right-8 top-24 w-52 rounded-2xl border border-(--border) bg-(--background)/80 p-4 shadow-lg backdrop-blur animate-[float_7s_ease-in-out_infinite]">
            <p className="text-xs uppercase text-(--muted-foreground)">Gelir</p>
            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Bugün ₺14.200
            </p>
          </div>

          <div className="absolute right-4 -bottom-10 w-56 rounded-2xl border border-(--border) bg-(--background)/80 p-4 shadow-lg backdrop-blur animate-[float_8s_ease-in-out_infinite]">
            <p className="text-xs uppercase text-(--muted-foreground)">
              Personel
            </p>
            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              5 aktif uzman, %96 doluluk
            </p>
          </div>
        </section>
      </main>

      <section id="features" className="mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-(--muted-foreground)">
            Özellikler
          </p>
          <h2 className="text-3xl font-semibold">
            Randevu ve operasyon yönetimini tek akışta birleştirin
          </h2>
          <p className="max-w-2xl text-sm text-(--muted-foreground)">
            Müşteri bildirimlerinden personel planlamasına kadar tüm süreçleri
            veriye dayalı yönetin. İşletme operasyonu zahmetsiz hale gelsin.
          </p>
        </div>
      </section>

      <StackingFeatures
        features={[
          {
            key: "planning",
            title: "Akıllı randevu planlama",
            description:
              "Uygunluk takvimi, otomatik çakışma kontrolü ve hızlı onay akışıyla randevu yoğunluğunu sorunsuz yönetin.",
            highlight: "Zaman kazandırır",
            accent: "primary",
          },
          {
            key: "team",
            title: "Personel ve hizmet yönetimi",
            description:
              "Ekip yetkinlikleri, hizmet paketleri ve çalışma saatlerini tek panelden düzenleyin, kapasiteyi optimize edin.",
            highlight: "Ekip performansı",
            accent: "indigo",
          },
          {
            key: "communication",
            title: "Müşteri iletişimi",
            description:
              "SMS/E-posta hatırlatmaları, iptalleri azaltır ve müşteri bağlılığını güçlendirir.",
            highlight: "Memnuniyet artışı",
            accent: "amber",
          },
        ]}
      />

      <section id="workflow" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="text-sm uppercase tracking-widest text-(--muted-foreground)">
                Nasıl çalışır
              </p>
              <h2 className="text-3xl font-semibold">
                3 adımda randevu yönetimini dijitalleştirin
              </h2>
              <p className="text-sm text-(--muted-foreground)">
                Kurulumdan sonra ekiplerinizi, hizmetlerinizi ve
                lokasyonlarınızı ekleyin. Online randevuları otomatik alın,
                hatırlatmaları yönetin ve günlük operasyonu tek panelden
                yönetin.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Hizmet & ekip tanımı",
                "Online randevu akışı",
                "Hatırlatma ve raporlama",
              ].map((step, idx) => (
                <div
                  key={step}
                  className="rounded-2xl border border-(--border) bg-(--background) p-4 text-sm"
                >
                  <p className="text-xs text-(--muted-foreground)">
                    Adım {idx + 1}
                  </p>
                  <p className="mt-2 font-semibold text-(--foreground)">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              name: "Başlangıç",
              price: "₺0",
              desc: "Yeni büyüyen küçük işletmeler için",
              features: [
                "Haftada 50 randevu",
                "Online takvim",
                "Online rezervasyon",
                "Müşteri yönetimi",
                "2 personel",
                "Temel raporlar",
              ],
            },
            {
              name: "Pro",
              price: "₺990",
              desc: "Ek özellikler ile büyüyen işletmeler için",
              features: [
                "Sınırsız randevu",
                "2 lokasyon",
                "Özelleştirilebilir widget",
                "Müşteri geri bildirimi",
                "E-posta & SMS hatırlatma",
                "Mini web sitesi",
                "Detaylı raporlama",
              ],
              highlight: true,
            },
            {
              name: "Kurumsal",
              price: "Özel",
              desc: "Çoklu lokasyonlu ve kurumsal ihtiyaçlar için",
              features: [
                "Çoklu şube yönetimi",
                "Öncelikli destek",
                "Widget üzerinden ödeme alma",
                "Özel entegrasyonlar",
                "Kurumsal raporlama",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col h-full rounded-3xl border border-(--border) p-6 shadow-sm ${
                plan.highlight
                  ? "bg-(--primary) text-(--primary-foreground)"
                  : "bg-(--card)"
              }`}
            >
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest opacity-80">
                  {plan.name}
                </p>
                <p className="text-3xl font-semibold">{plan.price}</p>
                <p className="text-sm opacity-80">{plan.desc}</p>
              </div>
              <ul className="my-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-(--accent)" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto w-full rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition ${
                  plan.highlight
                    ? "bg-(--background) text-(--foreground)"
                    : "bg-(--primary) text-(--primary-foreground)"
                }`}
              >
                Paketi seç
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-(--muted-foreground)">
              SSS
            </p>
            <h2 className="text-3xl font-semibold">Sık sorulan sorular</h2>
            <p className="text-sm text-(--muted-foreground)">
              SalonTakvim ile ilgili merak edilen konuların kısa cevapları.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              {
                q: "Kurulum ne kadar sürer?",
                a: "İşletme bilgilerinizi ve hizmetlerinizi ekledikten sonra 10 dakika içinde randevu almaya başlayabilirsiniz.",
              },
              {
                q: "SMS ve e-posta hatırlatmalarını özelleştirebilir miyim?",
                a: "Evet. Şablonlar ve gönderim zamanları yönetim panelinden düzenlenebilir.",
              },
              {
                q: "Çoklu şube yönetimi var mı?",
                a: "Kurumsal pakette çoklu lokasyon, rol bazlı yetkilendirme ve raporlama sunulur.",
              },
              {
                q: "Mevcut müşteri verilerimi taşıyabilir miyim?",
                a: "CSV ile içe aktarma ve ekip desteği ile hızlı veri taşıma sağlayabiliriz.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-(--border) bg-(--background) p-5"
              >
                <h3 className="text-base font-semibold text-(--foreground)">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm text-(--muted-foreground)">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-(--border) bg-(--card) p-8 text-center shadow-sm">
          <h2 className="text-3xl font-semibold">
            İşletmenizi bugünden büyütmeye başlayın
          </h2>
          <p className="mt-3 text-sm text-(--muted-foreground)">
            Ücretsiz demo ile randevu akışınızı 10 dakikada dijitale taşıyın.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-(--primary-foreground) shadow-md transition hover:opacity-90">
              Demo planla
            </button>
            <button className="rounded-full border border-(--border) px-6 py-3 text-sm font-semibold text-(--foreground) transition hover:bg-(--accent)">
              Satış ekibiyle görüş
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-(--border) bg-(--background)">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--primary) text-(--primary-foreground) font-semibold">
                ST
              </div>
              <div>
                <p className="text-lg font-semibold">SalonTakvim</p>
                <p className="text-xs text-(--muted-foreground)">
                  Randevu ve işletme yönetimi
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-(--muted-foreground)">
              İşletmenizi randevu, ekip ve müşteri yönetiminde hızlandıran
              modern çözüm.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-(--foreground)">Ürün</p>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#features"
              >
                Özellikler
              </a>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#workflow"
              >
                Nasıl çalışır
              </a>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#pricing"
              >
                Paketler
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-(--foreground)">Destek</p>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#faq"
              >
                SSS
              </a>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="#cta"
              >
                Demo
              </a>
              <a
                className="block text-(--muted-foreground) hover:text-(--foreground)"
                href="mailto:destek@salontakvim.com"
              >
                destek@salontakvim.com
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-(--foreground)">Yasal</p>
              <span className="block text-(--muted-foreground)">
                KVKK & Gizlilik
              </span>
              <span className="block text-(--muted-foreground)">
                Kullanım Koşulları
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-(--border)">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-(--muted-foreground) md:flex-row md:items-center md:justify-between">
            <span>© 2026 SalonTakvim. Tüm hakları saklıdır.</span>
            <span>İstanbul, Türkiye</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
