+++
title = 'SZK Thumbnailer (Krita)'
date = '2025-06-27T22:36:18+02:00'
description = "Fast Thumbnail Painting Assistant for Krita"
lastmod = '2025-06-27T22:36:18+02:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["SZK", "SZK Thumbnailer", "Krita Thumbnailer", "krita","art","concept art", "thumbnails"]
tags = ["krita","art","concept art"]
main_classes = 'sans-font' # classes for <main> element. Allows customization of each page. Example of use: add a class from `fonts.scss` to change the page font. (consolas-font, handwritten-font, etc).
# # -------- DISPLAY OPTIONS --------
accent_color = " #CB6BFEFF" # customize the color for links, etc in the page
# feature_image_background_color = "#ff168a" # If the featured_image has transparency, change this color for customizing the background color (default: transparent)
# show_breadcrumbs = false
# show_description = false
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
# featured_image = 'szk-krita-thumbnailer.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'SZK Krita Thumbnailer' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags
# related_pages = [""] # If set, these pages (up to 3) will be displayed in the related section for this page. Useful when you want to be sure that a page appears as related
+++

<!-- > Thumbnailer: Fast Thumbnail Painting Assistant for Krita -->

{{< link_card title="SZK Thumbnailer (Krita)" 
subtitle="Fast Thumbnail Painting Assistant for Krita" 
url="https://orb91.gumroad.com/l/szk-krita-thumbnailer" 
cover="FEATURE-cover-from-header-v2.png" 
c="rgb(52, 53, 58)"
url_text="www.orb91.gumroad.com" 
position="50% 50%" >}}

> Thumbnailer is a Krita plugin designed to streamline and accelerate thumbnail creation for coming up with new ideas.



It automatically divides the canvas into multiple thumbnail areas and cycles through selections manually or automatically (at user-defined intervals), allowing for rapid, uninterrupted sketching and ideation.

{{< img_caption "header-full.png" >}}

This is heavily inspired by the French Concept Artist & Illustrator Stephane Richard (Wootha).


# Installation

1. Download the `.zip`.
2. In Krita, go to ***Tools ‣ Scripts ‣ Import Python Plugin…***, find the `.zip` file and press OK.
3. Restart Krita.
4. Go to ***Settings ➡ Dockers ➡ SZK Thumbnailer***

A new **docker** with the plugin will appear.



# Usage
{{< img_caption "tab1.png" >}}

{{< cell "1" >}} <u>**Select Previous/Next:**</u> Selects the previous/next thumbnail.

{{< cell "2" >}} <u>**Pick a random brush:**</u> Selects a random brush preset. Useful for coming up with new textures, shapes, etc.

{{< img_caption "thumbnails-favs.png" >}}

{{< cell "3" >}} <u>**Play/Pause and Stop buttons:**</u> Starts/pauses the timer defined in [options](#options). Pressing stop finishes the thumbnailing session.


# Options

{{< img_caption "tab2.png" >}}

{{< cell "1" >}} **Presets**: Select, save and delete presets.

{{< cell "2" >}} **Layout**: Choose the layout algorithm (Uniform Grid, Custom Grid, Random Grid).

{{< cell "3" >}} **Layout settings**: Custom settings for the selected layout algorithm.

{{< cell "4" >}} **Options**:
- <u>**Time**</u>: Seconds for each thumbnail
<!-- - <u>**Subdivisions**</u>: Times the canvas is split (vertically and horizontally) for each thumbnail. -->
- <u>**Padding**</u>: Margin/separation for each thumbnail. The distance/pixels are calculated using a ‰ of the shortest side of the canvas.
- <u>**Use a new layer for each thumbnail**</u>: If true, it will create a new layer for every thumbnail. Useful if you want to keep each drawing in a separate layer.
- <u>**Randomize Brush**</u>: If checked, when a thumbnail's time has finished, it will randomize the active brush presset.
{{< box_info >}}
This is for helping achieving a different result/"brushwork" (texture, shapes, etc) for the next thumbnail and experiment
{{< /box_info >}}
	- <u>**Twice**</u>: If checked, the brush will be randomized twice.
{{< box_info >}}
This is useful for having **2 different presets for each thumbnai**l (and alter them with *'Switch to Previous Preset'* shortcut).
{{< /box_info >}}
- <u>**Show progress bar**</u>: Shows a bar below that shows the time remaining for the current thumbnail.

{{< img_caption "tab3.png" >}}

{{< cell "1" >}} <u>**Link for the online manual**</u>

{{< cell "2" >}} <u>**Gumroad page**</u>

- <u>**Info Label**</u>: Displays the total thumbnails and the total time it will take according your settings. Useful for managing drawing sesions.

{{< img_caption img="Ari-comic-thumbnails.jpg" caption="Awesome comic thumbnails made by Ari (Random Layout)" resize="433x" >}}

# Shortcuts

Available shortcuts:

Function | Shortcut
:--|:-:
Select Previous Thumbnail | (*Not assigned*)
Select Next Thumbnail | (*Not assigned*)
Select Random Brush | (*Not assigned*)


<!-- # Download 💾

{{< download_file file="download/1.0.0/szk_thumbnailer.zip" type="krita" text="Download Plugin" >}} -->

# Changelog

Version | Changes
:-- | :--
2.0.1 | - Resets timer when manually selecting the previous/next thumbnail.
2.0.0 | - Added different layout algorithms (Custom Grid, Random) <br> - Optimizations when changing the thumbnail <br> - Padding/margin relative to the document's size (for achieving similar margins between different canvas' sizes) <br> - Added option for saving/loading presets.
1.1.0 | - Adde different options for randomizing the brushes. <br> - Added tooltips to the UI.
1.0.0 | *Release*


# Support 🍀

If you wish to support the plugin, you can do it via {{< get_social social=gumroad icon=false text="Gumroad" >}}:




# Contact

Email: {{<get_social "email" >}}

Twitter: {{<get_social twitter true >}}


{{< link_card title="SZK Thumbnailer (Krita)" 
subtitle="Fast Thumbnail Painting Assistant for Krita" 
url="https://orb91.gumroad.com/l/szk-krita-thumbnailer" 
cover="FEATURE-cover-from-header-v2.png" 
c="rgb(52, 53, 58)"
url_text="www.orb91.gumroad.com" 
position="50% 50%" >}}