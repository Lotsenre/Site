<?php
/**
 * Главный файл сайта ритуальных услуг
 */

// Загрузка конфигурации
$config = require_once __DIR__ . '/includes/config.php';

// Загрузка данных (услуги, отзывы)
require_once __DIR__ . '/includes/data.php';

// Шапка сайта
require_once __DIR__ . '/includes/header.php';

// Секции сайта
require_once __DIR__ . '/includes/sections/hero.php';
require_once __DIR__ . '/includes/sections/about.php';
require_once __DIR__ . '/includes/sections/services.php';
require_once __DIR__ . '/includes/sections/reviews.php';
require_once __DIR__ . '/includes/sections/contacts.php';

// Подвал сайта
require_once __DIR__ . '/includes/footer.php';
