<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header();
$url = $_SERVER["REQUEST_URI"];
$page = pathinfo($url);
$filename = $page['filename'];
?>

<section class="left_navigation_area">
      <ul>
      <li id="lidesign" class = "design animated bounceInLeft active"> <a href="#" onclick="aclick('lidesign');">Creative design</a>
		</li>
         <li id="licolor" class = "color animated bounceInLeft">
		<a href="#" onclick="aclick('licolor');">Color</a>
		</li> 
		
        <li id="licustomise" class = "customise animated bounceInLeft "> <a href="#" onclick="aclick('licustomise');">Customise</a></li>
        <li id="lipreview" class = "priview animated bounceInLeft "><a href="#" onclick="aclick('lipreview');">Show Preview</a></li>
        <li id="lishare" class = "share animated bounceInLeft"><a href="#" onclick="aclick('lishare');">Save & Share</a></li>
      </ul>
    </section>

    <section class="item_area">
   <section id="designfront" class="front item_shadow"  "style= display:block"; >
        <div class="front_mask"> <img src="<?php bloginfo('template_directory'); ?>/images/front_mask.png"/> </div> 
    <div class="layer_1"><img src="<?php bloginfo('template_directory'); ?>/images/pattern_1/color_yellow/color_1.png" /></div>
        <div class="layer_2"><img src="<?php bloginfo('template_directory'); ?>/images/pattern_1/color_red/color_2.png" /></div>
        <div class="layer_3"><img src="http://localhost:7777/KIT/wp-content/uploads/2014/10/pattern_1/color_red/color_3.png" /></div>
        <div class="layer_4"><img src="<?php bloginfo('template_directory'); ?>/images/pattern_1/color_red/color_4.png" /></div>
      </section>
      <section id="designback" class="back item_shadow" "style=display:none";>
        <div class="front_mask"><img src="<?php bloginfo('template_directory'); ?>/images/back_mask.png" /></div>
        <div class="layer_1"><img src="<?php bloginfo('template_directory'); ?>/images/pattern_1/back/section_1/yellow/pat_1_back_sec_1_yellow.png" /></div>
        <div class="layer_2"><img src="<?php bloginfo('template_directory'); ?>/images/pattern_1/back/section_2/red/pat_1_back_sec_2_red.png" /></div>
        <div class="layer_3"><img src="<?php bloginfo('template_directory'); ?>/images/pattern_1/back/section_3/red/pat_1_back_sec_3_red.png" /></div>
        <div class="layer_4"><img src="<?php bloginfo('template_directory'); ?>/images/pattern_1/back/section_4/red/pat_1_back_sec_4_red.png" /></div>
      </section>
      <section class="color">

        </section>
      <section id="custom"></section>
      <section class="short"></section>
      <section class="socks"></section>
    </section>
<?php get_footer(); ?>