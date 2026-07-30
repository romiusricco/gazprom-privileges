document.querySelectorAll('.connect__tabs').forEach((tabs) => {
    const buttons = [...tabs.querySelectorAll('.connect__tabs-control')];
    const panels = [...tabs.querySelectorAll('.connect__tabs-item')];

    const activate = (btn) => {
        buttons.forEach((b) => {
            const on = b === btn;
            b.classList.toggle('is-active', on);
            b.setAttribute('aria-selected', String(on));
            b.tabIndex = on ? 0 : -1;
        });
        panels.forEach((p) => {
            const on = p.id === btn.getAttribute('aria-controls');
            p.classList.toggle('is-active', on);
            p.hidden = !on;            // источник правды для скринридеров
        });
    };

    buttons.forEach((btn, i) => {
        btn.addEventListener('click', () => activate(btn));
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const next = buttons[(i + (e.key === 'ArrowRight' ? 1 : buttons.length - 1)) % buttons.length];
                activate(next);
                next.focus();
            }
        });
    });
});