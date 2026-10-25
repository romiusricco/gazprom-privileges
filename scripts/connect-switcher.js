document.querySelectorAll('.faq__element').forEach((element) => {
    const button = element.querySelector('.faq__button');
    const content = element.querySelector('.faq__content');

    button.addEventListener('click', () => {
        const wasOpen = element.classList.contains('is-active');

        document.querySelectorAll('.faq__element').forEach((el) => {
            el.classList.remove('is-active');
            el.querySelector('.faq__button').setAttribute('aria-expanded', 'false');
            el.querySelector('.faq__content').hidden = true;
        });

        if (!wasOpen) {
            element.classList.add('is-active');
            button.setAttribute('aria-expanded', 'true');
            content.hidden = false;
        }
    });
});