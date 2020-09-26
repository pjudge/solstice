# Welcome to Solstice! - last updated: September 27, 2019

Solstice is fully componentized Drupal 8 sub-theme, created to make your life as a themer easier while employing the theories used in Atomic Design and PatternLab.  

## Overview

**What is happening here?**

Solstice was created as a way to improve the efficiency and performance of the SCSS within the theme. Solstice takes a lot of the annoying base configuration things and has done them for you -- for instance:

1. The libraries.yml and info.yml exist and are set up with some basics
2. The SCSS directory-structure already exists as a skeleton, and is based on both ITCSS and Atomic Design, creating an efficient compiling order and streamlining the way CSS is written. 

Reading the following may help you become oriented more quickly:

+ [Inverted Triangle CSS (ITCSS)](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
+ [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
+ [BEM](http://getbem.com/) (kinda -- you'll have to add a lot of that in yourself as you write your code)

## Dependencies

This sub-theme requires the [Component Libraries](https://www.drupal.org/project/components) module is installed and enabled. Do that before turning this theme on in your site.

## Usage

Download Solstice from the [git repo](https://github.com/IQ-Solutions/solstice). Solstice is set up to extend Equinox. If you are reading this, Equinox was probably already installed in your Drupal project via Composer. If not, you will need to add Equinox to your Drupal project first. Contact a team member for info or check out the [Equinox repo](https://github.com/pjudge/equinox). 

Once you have Equinox installed and Solstice downloaded, place the unzipped Solstice directory in `themes/custom`. You can choose Solstice as your theme in your Drupal UI. 

## Structure

Yeah it may look like a lot of directories but hear me out.
 
### The Settings Directory

This directory is mainly for variables. Add your fonts, colors, and other variables you may need.  Being at the top of the inverted triangle, these variables are available to everything below. This layer does not output CSS.

### The Tools Directory

This directory is a place for your mixins and functions to live. As of this writing, there are two mixins included: Respond-to and Transition. See the _mixins.scss partial for details. Respond-to is a wonderful mixin available for handling responsive styles. It is a mobile-first (ie it compiles as a `min-width` declaration) media query mixin. Custom breakpoints can be added/subtracted from the breakpoints map as needed but keeping your breakpoints to a minimum is good for your theme. Use respond-to for all media queries to keep things clean and consistent. Usage is described in the mixins partial. This layer does not output CSS.

### The Generic Directory

This is the first layer of code that outputs CSS. This directory is for reset styles and/or normalizing. This directory is empty in Solstice because all the reset and normalizing is done in Equinox. Feel free to place additional resets here. 

### The Atoms Directory

This directory is where you'll style the smallest elements of your site. This includes things like `p`, `a`, `h1`. It will also include site-specific elements, for instance if your site needs thumbnails for your blog post teasers, their styles can go here. Don't forget about individual form and list elements... and buttons too! 

### The Molecules Directory

This directory is where you'll style your medium-sized design components. Molecules are comprised of Atoms, but are not as complex as Organisms. A good example of a Molecule would be a form -- a text input + a dropdown select + a submit button. Styling for those individual pieces should go in Atoms! The styles for the `form` Molecule are specific to the grouping of these elements into a form. (In other words, your `form` styles found here will likely be more about the form's padding/margins, layout/placement and responsiveness vs its aesthetic.)

### The Organisms Directory

This directory is where you'll style your largest, most complex page elements. Organisms are groups of Molecules that come together to create large page elements and even entire pages. A good example of an Organism would be the header comprised of a search form, social media icons, a menu, a logo. Also included is a Views partial for Views-specific styling. Paragraphs styles can be found in the Molecules Directory however, depending on the project, it may make more sense to move it to Organisms.

As with Molecules, you'll likely have very little aesthetic CSS here, and more layout-related CSS.

### The Utilities Directory

This directory is mainly for Helper classes. This is the last layer of the inverted triangle and thus this code is meant to override previously defined styles. The hope is that with using this architecture, you will end up with a theme that is componentized, easily portable, flexible (ie not brittle), and shouldn't require much, if at all, usage of the `!important` tag.

## Compiling SCSS

This theme's SCSS is currently meant to be compiled using [Prepros](https://prepros.io/). Prepros config is included here but just fyi: you will want to make sure the Autoprefixer option is turned ON. You will want to make sure the Autocompiler option is turned OFF. The best way to compile this theme with Prepros is to select `components/scss/styles.scss` in Prepros and click "Process file" when you're ready to compile. You can change any partial you'd like, you only need to compile ONE file and that is `components/scss/styles.scss`. It will output to `components/css/styles.css`.

## Notes

### Syntax and keeping things clean

This theme is meant to (mostly) follow Drupal's CSS coding standards found here: https://www.drupal.org/docs/develop/standards/css/css-formatting-guidelines. Here are some things to keep in mind:

+ Indentation should be 2 spaces! Easiest way to ensure this remains consistent is to set up your IDE so that 1 tab = 2 spaces.

+ There should be no empty spaces at ends of lines and no characters/spaces on empty lines. Keep one empty line at the end of each file.

+ Single line comments should use two forward slashes, a space, be capitalized at the start, and end with a period. You may use the /**/ syntax instead, especially for multi-line comments.

+ There is an 80 character limit per line. 

+ Use double quotes, no single quotes (except where necessary for SASS syntax).
 
+ Do not attach a unit to a zero value (ie, use `padding: 0 0 10em 3em` instead of `padding: 0em 0em 10em 3em`).

+ Use shorthand for padding and margin whenever possible.

+ Pseudo-element definitions should use two colons (`::before`, `::after`) .

+ Pseudo-classes should use one colon (`:focus`, `:hover`) .

### Theme dependencies...

It is expected that the themers will need some additional third-party code while fleshing out their theme. For instance, things like a grid system (ie Bootstrap) or an icon library (ie FontAwesome). These libraries should be added to the larger Drupal project via Composer and/or Bower/NPM. You'll need to update `solstice.libraries.yml` and `solstice.info.yml` so that your project knows where to find that code and run `npm install` (or whatever) appropriately.

### This theme is alive.

This theme is a living entity. It should be updated, maintained, pruned, improved, etc. over time, by the people who use it in the real world. 

## What's in The Future for Solstice?

### Gulp

There is now a gulpfile included in this theme however NPM installs would need to be run in order to use it, namely: gulp, gulp-sass, sourcemaps, and autoprefixer. [This article](https://css-tricks.com/gulp-for-beginners/) walks you through how to ensure you have node.js and NPM installed on your machine so that you can use these commands. Then the following commands would need to be run within the theme directory:

+ `npm install gulp --save-dev`
+ `npm install gulp-sass --save-dev`
+ `npm install sourcemaps --save-dev`
+ `npm install autoprefixer --save-dev`

As of this writing however, the company this theme was built for is using Prepros for all our compiling needs and as such, this theme is not NPM-enabled. The gulpfile is provided for potential future use. Node_modules directory has been added to `.gitignore`.

### Parker

Parker is a tool that analyzes your CSS. It prints out various types of data, such as number of times !important is used, specificity of classes, number of media queries and variables, etc. This data can be saved into your theme (preferably in a `data` directory) and tracked over time. This can be a useful way to make sure your CSS doesn't get out of hand and stays flexible. As of this writing, Parker has not been applied to this theme. [Get Parker](https://github.com/katiefenn/parker).
