# kristokrol.github.io
Personal CV Portfolio

## Технології
- Vue 3
- Vite
- GitHub Pages

## Розробка

### Встановлення залежностей
```bash
npm install
```

### Запуск локального сервера розробки
```bash
npm run dev
```

### Збірка для продакшн
```bash
npm run build
```

### Попередній перегляд збірки
```bash
npm run preview
```

## Деплой на GitHub Pages

Проєкт налаштований для автоматичного деплою на GitHub Pages через GitHub Actions. Після push в гілку `main`, автоматично запускається збірка та деплой.

### Ручний деплой

1. Зберіть проєкт:
   ```bash
   npm run build
   ```

2. Зміст папки `dist` потрібно задеплоїти в гілку `gh-pages` або налаштувати GitHub Pages для використання папки `dist`.

## Структура проєкту

```
├── public/          # Статичні файли (зображення)
├── src/
│   ├── App.vue      # Головний компонент
│   └── main.js      # Точка входу Vue
├── index.html       # HTML шаблон для Vite
├── vite.config.js   # Конфігурація Vite
└── package.json     # Залежності проєкту
```

## Примітки

- Весь існуючий HTML та CSS збережено без змін у компоненті `App.vue`
- Зображення знаходяться в папці `public/` та доступні з кореня сайту
- Проєкт налаштований для роботи з базовим шляхом `/kristokrol.github.io/` для GitHub Pages
