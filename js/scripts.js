/**
  * @file
  * A JavaScript file for the theme. 
  * For all your Javascript needs. For coding standards see: 
  * https://www.drupal.org/docs/develop/standards/javascript/javascript-coding-standards
  * and don't forget your Behaviors: 
  * https://sqndr.github.io/d8-theming-guide/javascript/behaviors.html
  * https://drupal.org/node/756722#behaviors
*/

(function (Drupal, $) {

  'use strict';

  Drupal.behaviors.your_behavior_name = {
    attach: function (context, settings) {
  
    }
  }

  // We pass the parameters of this anonymous function are the global variables
  // that this script depend on. For example, if the above script requires
  // jQuery, you should change (Drupal) to (Drupal, jQuery) in the line below
  // and, in this file's first line of JS, change function (Drupal) to
  // (Drupal, $)
}(Drupal, jQuery));