<?php 
		define('quiz_theme_root', get_template_directory_uri());
		define('quiz_css_root', quiz_theme_root . '/css');
		define('quiz_js_root', quiz_theme_root . '/js');
		define('quiz_img_root', quiz_theme_root . '/images');
		define('quiz_fonts_root', quiz_theme_root . '/fonts');
		define('quiz_js_root', quiz_theme_root . '/js');



		add_action('wp_enqueue_scripts',function(){
			wp_enqueue_style('theme', get_stylesheet_uri());
			wp_enqueue_style('fonts',  quiz_fonts_root . '/stylesheet.css');
			wp_enqueue_style('ico-moon',  quiz_fonts_root . '/icomoon/style.css');
			wp_enqueue_style('animate',  quiz_css_root . '/animate.min.css');
			wp_enqueue_style('style',  quiz_css_root . '/style.css');

			wp_enqueue_script('jquery',  quiz_js_root . '/jquery-3.3.1.min.js');
			wp_enqueue_script('wow',  quiz_js_root . '/wow.min.js');
			wp_enqueue_script('script',  quiz_js_root . '/script.js');
		});








 ?>