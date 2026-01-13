<section class="services section section--alt" id="services">
    <div class="container">
        <h2 class="section__title">Наши услуги</h2>
        <div class="services__grid">
            <?php foreach ($services as $service): ?>
            <div class="services__card">
                <div class="services__icon">
                    <?= $service['icon'] ?>
                </div>
                <h3 class="services__name"><?= htmlspecialchars($service['title']) ?></h3>
                <p class="services__desc"><?= htmlspecialchars($service['description']) ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
