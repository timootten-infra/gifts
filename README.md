# 🎁 Snacks & Drinks (Gifts)

Eine minimalistische und performante Wunschliste, entwickelt mit [Astro](https://astro.build) und [Tailwind CSS v4](https://tailwindcss.com).

## 🚀 Features

- ⚡ **Astro & Tailwind CSS v4**: Schnell, leichtgewichtig und mit optimalem Lighthouse-Score optimiert.
- 🌙 **Dark Mode**: Modernes und augenschonendes dunkles Theme.
- 🖼️ **Optimierte Assets**: Automatisch komprimierte WebP-Bilder mit Prioritäts-Loading.
- 🐳 **Docker-ready**: Nginx-basierter Container für das Deployment via Dokploy & Traefik.

## 🛠️ Entwicklung

```sh
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build

# Build lokal testen
npm run preview
```

## 📦 Deployment

Die Anwendung wird als statische Seite gebaut und über Nginx im Docker-Container bereitgestellt (`compose.yml`).
