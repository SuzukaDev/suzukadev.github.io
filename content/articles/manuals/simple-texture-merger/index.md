+++
title = 'Simple Texture Merger'
date = '2025-06-17T21:19:43+02:00'
description = "Tool for **compressing** up to **4 images** into a single image."
lastmod = '2025-06-17T21:19:43+02:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["STM", "Simple Texture Merger", "SZK", "Suzuka", "Suzuka Ka", "tool", "gamedev"]
tags = ["vfx", "gamedev"]
# main_classes = 'pixel-font' # classes for <main> element. Allows customization of each page. Example of use: add a class from `fonts.scss` to change the page font. (consolas-font, handwritten-font, etc).
# # -------- DISPLAY OPTIONS --------
# accent_color = "#ff168a" # customize the color for links, etc in the page
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
# featured_image = 'simple-texture-merger.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'Simple Texture Merger' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags
# related_pages = [""] # If set, these pages (up to 3) will be displayed in the related section for this page. Useful when you want to be sure that a page appears as related
+++


> This is a tool for easily compressing 4 textures into a single one. Very useful for shaders and such.

{{< link_card title="Simple Texture Merger" 
subtitle="Software for compressing 4 textures into one!" 
url="https://orb91.gumroad.com/l/simple-texture-merger" 
cover="simple-texture-merger-icon.png" 
c=#191820 
url_text="www.orb91.gumroad.com" 
position="50% 30%" >}}

I always compress my textures into different channels, but doing it manually in gimp/krita/photoshop was always a bit tedious (not to mention that they can only compress 3 textures (RGB), not 4) so I made this tool for quickly generate compressed textures and to use all 4 RGBA channels.

It offers the option to <u>compress up to **4 textures** into a **single image**</u>, one for each RGBA channel.

# Installation

It doesn't require installation, just unzip the `.zip` file.




# User Interface

{{< box_info >}}
You can hover the 🛈 to show a little guide.

{{< img_caption "stm-tutorial-i.webp" "You can hover the eye 👁️ icon on each channel to preview only that channel" >}}

{{< /box_info >}}

<!-- - {{< cell text="Select the image size" color="#1f7aff" >}}
- {{< cell text="Click to save the image" color="#ea0627" >}}
- {{< cell text="Drop/load your textures here" color="#1fff84" >}}
- {{< cell text="⚙️" color="#ff9e1f" >}} Click to show the [options](#options) -->
- {{< cell text="Image size" color="#1f7aff" >}} - Selects the result image's size.
- {{< cell text="Save" color="#ea0627" >}} - Click to save the image.
- {{< cell text="Channels" color="#1fff84" >}} - Drop/load your textures here.
{{< box_info >}}
You can drag and drop images from one channel to another to swap channels.
{{< /box_info >}}
- {{< cell text="⚙️" color="#ff9e1f" >}} Click to show the [options](#options).



## Visualizer

On the top, there is a little visualizer that is distorted depending on the introduced textures.

{{< img_caption "ezgif-stm-tutorial-visualizer.webp" "You can hover the eye 👁️ icon on each channel to preview only that channel" >}}

{{< box_green >}}
This is to get an idea the kind of distortion you will get from each texture, and for getting an idea about how it "evolves" over time (how soft/hard it is, etc).
{{< /box_green >}}

## Options

{{< img_caption "stm-options-panel-2.png" "Options panel" >}}

- {{< cell "1" >}} - The algorithm used for interpolating the final texture (useful if is being resized).
- {{< cell "2" >}} - Saving options. You can choose a default folder for saving or choose for being asked every time you save.
- {{< cell "3" >}} - Theme skins.

<!-- {{< img_caption "stm-skins-grid-riot.jpg" "4 different skins" >}} -->
{{< img_caption "stm-skins-blue.webp" "4 different skins" >}}

# Shortcuts

Shortcut | Function
:-- | :-:
{{< shortcut "CTRL+S" >}} | **Save** the compressed image
{{< shortcut "F1" >}} | Show **options panel**

# Contact


Twitter: {{< get_social "twitter" >}}

Mail: {{< get_social "email" >}}


{{< link_card title="Simple Texture Merger" 
subtitle="Software for compressing 4 textures into one!" 
url="https://orb91.gumroad.com/l/simple-texture-merger" 
cover="simple-texture-merger-icon.png" 
c=#191820 
url_text="www.orb91.gumroad.com" 
position="50% 30%" >}}


<!-- Supported image formats:
.bmp, .hdr, .jpeg, .jpg, .png, .tga, .webp -->