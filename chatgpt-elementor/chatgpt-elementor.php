<?php
/*
Plugin Name: ChatGPT Elementor Integration
Description: Integrate ChatGPT into Elementor to add chatbots to your pages.
Version: 1.0.0
Author: SATYAM YADAV
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Enqueue scripts and styles for Elementor
function chatgpt_elementor_enqueue_scripts()
{
    // Enqueue the JavaScript file for the chatbot functionality
<<<<<<< HEAD
    wp_enqueue_script('chatgpt-script', plugin_dir_url(__FILE__) . '/assets/js/chatgpt.js', array('jquery'), '1.0', true);

    // Enqueue the CSS file for the chatbot styles
    wp_enqueue_style('chatgpt-style', plugin_dir_url(__FILE__) . '/assets/css/chatgpt.css', array(), '1.0');
=======
    wp_enqueue_script('chatgpt-script', plugins_url('assets/js/chatgpt.js', __FILE__), array('jquery'), '1.0', true);

    // Enqueue the CSS file for the chatbot styles
    wp_enqueue_style('chatgpt-style', plugins_url('assets/css/chatgpt.css', __FILE__), array(), '1.0');
>>>>>>> bae9f0b6bb1b8c5cce536210553d8d42b66e2ed7
}
add_action('wp_enqueue_scripts', 'chatgpt_elementor_enqueue_scripts');


<<<<<<< HEAD
=======


>>>>>>> bae9f0b6bb1b8c5cce536210553d8d42b66e2ed7
// Register the custom Elementor widget
function chatgpt_elementor_widgets()
{
    if (!class_exists('Elementor\Widget_Base')) {
        return;
    }

    // Load the widget class file
    require_once plugin_dir_path(__FILE__) . 'includes/chatgpt-widget.php';

    // Register the widget
<<<<<<< HEAD
    add_action('elementor/widgets/widgets_registered', function () {
        \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new \Elementor\ChatGPT_Widget());
    });
}
add_action('elementor/init', 'chatgpt_elementor_widgets');

=======
    \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new ChatGPT_Widget());
}
>>>>>>> bae9f0b6bb1b8c5cce536210553d8d42b66e2ed7
add_action('elementor/widgets/widgets_registered', 'chatgpt_elementor_widgets');
