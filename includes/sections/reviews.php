<section class="reviews section" id="reviews">
    <div class="container">
        <h2 class="section__title">Отзывы</h2>
        <div class="reviews__grid">
            <?php foreach ($reviews as $review): ?>
            <div class="reviews__card">
                <p class="reviews__text"><?= htmlspecialchars($review['text']) ?></p>
                <div class="reviews__author">
                    <span class="reviews__name"><?= htmlspecialchars($review['name']) ?></span>
                    <span class="reviews__date"><?= htmlspecialchars($review['date']) ?></span>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
