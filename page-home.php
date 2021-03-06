<!DOCTYPE html>
<html lang="ru">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <?php wp_head(); ?>
</head>
<body>
<div class="hell_peace_wrapper">
    <div class="peace">
        <div class="cloud">
            <div class="cloud_img">
                    <div class="peace_logo"><img src="images/logo_peace.png" alt="">
                    <h2>Накликай отдых для себя<br>
                        и своей компании</h2></div>

                    <img class="cloud_left" src="images/сloud.png" alt="">
                </div>
        </div>
        <div class="background"></div>
        <div class="hover_peace"></div>
    </div>
    <div class="hell">
        <div class="cloud">
            <div class="cloud_img">
                <div class="hell_logo"><img src="images/iqra_black.png" alt="">
                    <h2>Накликай отдых для себя<br>
                        и своей компании</h2></div>
                <img class="cloud_left" src="images/cloud_2.png" alt="">
            </div>
        </div>
        <div class="background black"></div>
        <div class="hover_hell"></div>

    </div>
    <div class="flip_effect_horizontal">
        <div class="front"><img src="images/peace.png" alt=""></div>
        <div class="back"><img src="images/hell.png" alt=""></div>
    </div>

</div>
<?php wp_footer(); ?>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFxeIgVHP_kp9PXbIN9cCqFRZ63lks24U&callback=initMap"
        defer></script>
</body>
</html>