<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner" id="banner">
        <div class="logo">
            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
        </div>
        <div class="video">
            <video autoplay muted loop>
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/video-header.mp4' ?>" type="video/mp4">
            </video>
        </div>
    </section>

    <section id="story" class="story">
        <h2 id="storyTitle" class="titleFadeInUp fadeInUp">
            <p class="fadeOne">L'</p>
            <p class="fadeTwo">histoire</p>
        </h2>
        <article id="" class="story__article speed">
            <p class="stay"><?php echo get_theme_mod('story'); ?></p>
        </article>

        <article id="characters" class="fadeInUp">
            <?php get_template_part('template-parts/content-characters') ?>
        </article>
        <article id="place" class="place_article fadeInUp stay animation-background">
            <div>
                <h3 class="titleFadeInUp">
                    <p class="fadeOne">Le</p>
                    <p class="fadeTwo">Lieu</p>
                </h3>
                <p class="stay"><?php echo get_theme_mod('place'); ?></p>
            </div>
            <div class="clouds">
                <div class="cloud big-cloud">
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/img/big_cloud.png'; ?> " alt="big cloud">
                </div>
                <div class="cloud little-cloud">
                    <img src="<?php echo get_stylesheet_directory_uri() . '/assets/img/little_cloud.png'; ?> " alt="big cloud">
                </div>
            </div>
        </article>

    </section>

    <section id="studio" class="">
        <h2 class="titleFadeInUp fadeInUp">
            <p class="fadeOne">Studio</p>
            <p class="fadeTwo">Koukaki</p>
        </h2>
        <div>
            <p class="stay">Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p class="stay">Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>
    <section id="nomination" class="fadeInUp">
        <?php get_template_part('template-parts/content-nomination') ?>
    </section>
</main><!-- #main -->
<?php
get_footer();
