/**
 * Ритуальные услуги - Основные скрипты с анимациями
 */

document.addEventListener('DOMContentLoaded', function() {
    // Элементы
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.header__link');

    // ==========================================================================
    // Бургер-меню
    // ==========================================================================
    if (burger && nav) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Закрытие меню при клике на ссылку
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (burger && nav) {
                burger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // ==========================================================================
    // Плавный скролл к секциям
    // ==========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================================================
    // Подсветка активного пункта меню при скролле + эффект хедера
    // ==========================================================================
    const sections = document.querySelectorAll('section[id]');

    function handleScroll() {
        const scrollPosition = window.scrollY;
        const headerHeight = header ? header.offsetHeight : 0;

        // Эффект хедера при скролле
        if (header) {
            if (scrollPosition > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Подсветка активного пункта меню
        const checkPosition = scrollPosition + headerHeight + 100;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (checkPosition >= sectionTop && checkPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ==========================================================================
    // Анимации при скролле (Intersection Observer)
    // ==========================================================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    // Анимация заголовков секций
    const sectionTitles = document.querySelectorAll('.section__title');
    const titleObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    sectionTitles.forEach(function(title) {
        titleObserver.observe(title);
    });

    // Анимация карточек услуг
    const serviceCards = document.querySelectorAll('.services__card');
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.classList.add('animate');
                }, index * 150);
            }
        });
    }, { ...observerOptions, threshold: 0.1 });

    serviceCards.forEach(function(card, index) {
        card.style.transitionDelay = (index * 0.1) + 's';
        cardObserver.observe(card);
    });

    // Анимация карточек отзывов
    const reviewCards = document.querySelectorAll('.reviews__card');
    const reviewObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    reviewCards.forEach(function(card, index) {
        card.style.transitionDelay = (index * 0.15) + 's';
        reviewObserver.observe(card);
    });

    // Анимация контактных блоков
    const contactItems = document.querySelectorAll('.contacts__item');
    const contactMap = document.querySelector('.contacts__map');

    const contactItemsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                contactItemsObserver.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    contactItems.forEach(function(item, index) {
        item.style.transitionDelay = (index * 0.15) + 's';
        contactItemsObserver.observe(item);
    });

    // Отдельный observer для карты с меньшим threshold
    if (contactMap) {
        const mapObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Небольшая задержка для плавности
                    setTimeout(function() {
                        entry.target.classList.add('animate');
                    }, 200);
                    mapObserver.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '50px', threshold: 0.05 });

        mapObserver.observe(contactMap);
    }

    // Анимация параграфов в секции "О нас"
    const aboutParagraphs = document.querySelectorAll('.about__content p');
    const aboutObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    aboutParagraphs.forEach(function(p, index) {
        p.style.transitionDelay = (index * 0.2) + 's';
        aboutObserver.observe(p);
    });

    // ==========================================================================
    // Эффект параллакса для hero секции
    // ==========================================================================
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = hero.querySelector('.hero__content');
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
                heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
            }
        });
    }

    // ==========================================================================
    // Анимация курсора на кнопках (эффект свечения)
    // ==========================================================================
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
        btn.addEventListener('mousemove', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        });
    });

    // ==========================================================================
    // Плавное появление элементов при загрузке страницы
    // ==========================================================================
    document.body.classList.add('loaded');

    // ==========================================================================
    // Анимация чисел (если понадобится)
    // ==========================================================================
    function animateNumber(element, target, duration) {
        let start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }

    // ==========================================================================
    // Ripple эффект для кнопок
    // ==========================================================================
    document.querySelectorAll('.btn').forEach(function(button) {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            button.appendChild(ripple);

            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });

    // ==========================================================================
    // Magnetic effect для интерактивных элементов
    // ==========================================================================
    const magneticElements = document.querySelectorAll('.header__logo, .btn');

    magneticElements.forEach(function(el) {
        el.addEventListener('mousemove', function(e) {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) * 0.1;
            const deltaY = (e.clientY - centerY) * 0.1;

            el.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px)';
        });

        el.addEventListener('mouseleave', function() {
            el.style.transform = '';
        });
    });

    // ==========================================================================
    // Preloader (скрытие после загрузки)
    // ==========================================================================
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('hidden');
            setTimeout(function() {
                preloader.remove();
            }, 500);
        }
    });
});

// ==========================================================================
// Дополнительные CSS стили для ripple эффекта (добавляются динамически)
// ==========================================================================
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(rippleStyles);
