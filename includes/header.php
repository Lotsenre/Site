<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title><?= htmlspecialchars($config['site_title']) ?></title>
    <meta name="description" content="<?= htmlspecialchars($config['site_description']) ?>">
    <meta name="keywords" content="<?= htmlspecialchars($config['site_keywords']) ?>">
    <meta name="robots" content="index, follow">
    <meta name="author" content="<?= htmlspecialchars($config['site_name']) ?>">

    <!-- Open Graph -->
    <meta property="og:title" content="<?= htmlspecialchars($config['site_name']) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($config['site_description']) ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?= htmlspecialchars($config['site_url']) ?>">
    <meta property="og:image" content="<?= htmlspecialchars($config['site_url']) ?>/assets/img/og-image.jpg">
    <meta property="og:locale" content="ru_RU">

    <!-- Шрифты -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=PT+Serif:wght@400;700&display=swap" rel="stylesheet">

    <!-- Стили -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/img/logo.png">

    <!-- Микроразметка Schema.org -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "<?= htmlspecialchars($config['site_name']) ?>",
        "image": "<?= htmlspecialchars($config['site_url']) ?>/assets/img/logo.png",
        "telephone": "<?= htmlspecialchars($config['phone']) ?>",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Ленина, д. 1",
            "addressLocality": "<?= htmlspecialchars($config['city']) ?>",
            "addressRegion": "<?= htmlspecialchars($config['region']) ?>",
            "postalCode": "<?= htmlspecialchars($config['postal_code']) ?>",
            "addressCountry": "RU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "<?= htmlspecialchars($config['coordinates']['lat']) ?>",
            "longitude": "<?= htmlspecialchars($config['coordinates']['lng']) ?>"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "priceRange": "$$"
    }
    </script>
</head>
<body>
    <header class="header" id="header">
        <div class="container">
            <div class="header__inner">
                <a href="#" class="header__logo">
                    <img src="assets/img/logo.png" alt="<?= htmlspecialchars($config['site_name']) ?>">
                </a>

                <nav class="header__nav" id="nav">
                    <ul class="header__menu">
                        <li><a href="#about" class="header__link">О нас</a></li>
                        <li><a href="#services" class="header__link">Услуги</a></li>
                        <li><a href="#reviews" class="header__link">Отзывы</a></li>
                        <li><a href="#contacts" class="header__link">Контакты</a></li>
                    </ul>
                </nav>

                <a href="tel:<?= htmlspecialchars($config['phone_link']) ?>" class="header__phone">
                    <?= htmlspecialchars($config['phone']) ?>
                </a>

                <button class="header__burger" id="burger" aria-label="Открыть меню">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <main>
