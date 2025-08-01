+++
title = 'SZK Krita Random Brush'
date = '2025-06-24T00:50:21+02:00'
description = "Krita plugin for choosing a random brush."
lastmod = '2025-06-24T00:50:21+02:00'
draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["krita", "SZK", "Krita Random Brush", "SZK Krita Random Brush"] # custom keywords for the page
tags = ["krita","drawing"]
# main_classes = 'pixel-font' # classes for <main> element. Allows customization of each page. Example of use: add a class from `fonts.scss` to change the page font. (consolas-font, handwritten-font, etc).
# # -------- DISPLAY OPTIONS --------
# accent_color = "#ff168a" # customize the color for links, etc in the page
feature_image_background_color = "#222" # If the featured_image has transparency, change this color for customizing the background color (default: transparent)
# show_breadcrumbs = false
show_description = false
# show_author = false
# show_date = false
# show_reading_time = false
# show_tags = false
show_table_of_contents = true
show_right_bar = true
# custom_pfp = "my-custom-pfp.png" # if set the article will use a custom image (NOT: You can also add the word 'pfp' to an image to automatically use it as the article's profile picture (pfp))
# pfp_css_classes = "half-border-radius" # Custom css class for the pfp image
# custom_profile_description = "Custom profile description" # Adds a custom profile description (below the pfp) for the page.
# show_next_and_previous_arrows = false # If false (or not set), will hide the left/right arrows next to the articles' title for navigating between articles
# show_related_articles = false # If false, it wont show the related articles at the bottom. If true (or non set), they will show.
# featured_image = 'szk-krita-random-brush.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'SZK Krita Random Brush' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags
# related_pages = [""] # If set, these pages (up to 3) will be displayed in the related section for this page. Useful when you want to be sure that a page appears as related
+++

> This Krita plugin that adds an action for selecting a random brush presset.

<!-- I personally find this very useful and use it all the time when I'm **making thumbnail**s. I like to \**{{< text_handwritten "roll" >}} the dice*\* a few times until I got 1 or 2 random brushes that inspires me/generates contrast between them.  -->
I personally find this very useful and use it all the time when I'm **making thumbnail**s. I like to \**roll the dice*\* a few times until I got 1 or 2 random brushes that inspires me/generates contrast between them. 

<!-- TODO imagen thumbnails -->
<!-- {{< img_caption "feature-super-selection.png" >}} -->
{{< img_caption "thumbnails-favs.png" "Some thumbnails I made with the plugin" >}}

At the end is some kind of way to *embrace serendipity* and to help you to "discover"/choose brushes you are not used to, or have forget about, and to achieve new results.


# Installation

1. [Download](#download-) the `.zip`.
2. In *Krita*, go to ***Tools ‣ Scripts ‣ Import Python Plugin…***, find the `.zip` file and press OK.
3. Restart *Krita*.
4. Check if the plugin is activated:
	- Go to `Settings -> Configure Krita -> Python Plugin Manager`, look for `SZK Random Brush` and enable it if is not already enabled.


Now you can assign a shortcut (recommended) or find it in `Tools -> Scripts -> SZK Random Brush`.

<!-- {{< img_caption img="images/docker-combined.png" caption="Different tabs of the docker" class="no-box-shadow" >}} -->

# Download 💾

{{< download_file file="szk_random_brush.zip" type="krita" text="Download Plugin" >}}


# Support 🍀

If you wish to support the plugin, you can do it via {{< get_social social=gumroad icon=false text="Gumroad" >}}:


{{< link_card title="SZK Random Brush (Krita)" 
subtitle="Krita plugin for choosing a random brush." 
url="https://orb91.gumroad.com/l/szk-krita-random-brush" 
cover="fav-selection.png" 
c= "#353b58"
url_text="www.orb91.gumroad.com" 
position="50% 80%" >}}

# Contact

Email: {{<get_social "email" >}}

Twitter: {{<get_social twitter true >}}

<!-- {{<get_social github true "https://github.com/SuzukaDev/szk-krita-random-brush/" "Github Respository" >}} -->