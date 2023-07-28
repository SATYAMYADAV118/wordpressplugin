<?php
namespace Elementor;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class ChatGPT_Widget extends Widget_Base
{
    // Widget name and title
    public function get_name()
    {
        return 'chatgpt-widget';
    }

    public function get_title()
    {
        return __('ChatGPT Widget', 'chatgpt-elementor');
    }

    // Widget icon (optional)
    public function get_icon()
    {
        return 'eicon-editor-code';
    }

    // Widget categories (optional)
    public function get_categories()
    {
        return ['basic'];
    }

    // Widget controls and settings
    protected function _register_controls()
    {
        // Add widget controls and settings here
    }

    // Widget frontend render
    protected function render()
    {
        ?>
        <div id="chatbot">
            <div id="chat-output">
                <!-- Chatbot responses will be displayed here -->
            </div>
            <form id="chat-form">
                <input type="text" id="user-input" placeholder="Type your message here..." />
                <button type="submit">Send</button>
            </form>
        </div>
        <?php
    }

    // Widget frontend script (optional)
    public function _content_template()
    {
        ?>
        <#
        // JavaScript template for the widget frontend
        #>
        <div id="chatbot">
            <div id="chat-output">
                <!-- Chatbot responses will be displayed here -->
            </div>
            <form id="chat-form">
                <input type="text" id="user-input" placeholder="Type your message here..." />
                <button type="submit">Send</button>
            </form>
        </div>
        <?php
    }
}
