# Привилегии Газпромбанка

Адаптивная промостраница привилегий Газпромбанка. В проекте — разметка страницы, SCSS-стили, JavaScript-файл переключателя подключения и графические материалы.

<!-- Скриншот: ./docs/screenshot.png (добавить файл) -->

## Быстрый старт

Сборка и `package.json` в проекте не указаны. Откройте `privileges.html` в браузере или запустите его через расширение Live Server в VS Code.

## Стек

- HTML — `privileges.html`.
- SCSS — исходные стили в `scss/`; собранная таблица стилей — `style.css`.
- Vanilla JavaScript — `scripts/connect-switcher.js`.
- SVG, PNG, JPEG и локальные шрифты WOFF/WOFF2 — ресурсы в `images/` и `fonts/`.

## Возможности

- Адаптивная страница с вариантами изображений для мобильных, планшетных и desktop-размеров; в доработке отдельно отмечены размеры 360, 768, 1024 и 1536.
- Блоки страницы для преимуществ, бонусов, подписок, подключения и FAQ.
- JavaScript-файл `connect-switcher.js` для переключателя подключения.
- Обновлённая семантика и доступность, включая `main` с `tabindex="-1"` и стили `visually-hidden`.

## Структура проекта

- `privileges.html` — HTML-разметка страницы.
- `scss/` — SCSS: точка входа `style.scss`, глобальные стили и стили блоков.
- `style.css`, `style.css.map` — таблица стилей и карта исходников.
- `scripts/` — JavaScript.
- `images/` — изображения и SVG-иконки.
- `fonts/` — локальные начертания Noto Sans.
- `LICENSE` — файл лицензии.

## О доработке

Исходник находится в ветке [`base/original`](https://github.com/romiusricco/gazprom-privileges/tree/base/original), отмеченной тегом `original-source`.
Краткое описание изменений — в [CHANGES.md](./CHANGES.md).
Актуальный дифф: [base/original...main](https://github.com/romiusricco/gazprom-privileges/compare/base/original...main).

## Лицензия

См. файл [LICENSE](./LICENSE).
