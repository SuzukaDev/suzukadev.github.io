+++
title = 'SZK Timelapse Tool'
date = '2025-09-02T16:12:21+02:00'
description = "Tool for creating *.gif* or *.webp* timelapses from pictures."
lastmod = '2025-09-02T16:12:21+02:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["SZK Timelapse Tool", "Suzuka Ka", "SZK", "Tool", "Python", "Art", "Timelapse", "Krita"] # custom keywords for the page
tags = ["tool"]
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
# featured_image = 'szk-timelapse-tool.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).

# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'SZK Timelapse Tool' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags
# related_pages = [""] # If set, these pages (up to 3) will be displayed in the related section for this page. Useful when you want to be sure that a page appears as related

# # ------- SORT OPTIONS --------
# weight = 1
# NOTE: sort_by and sort_order is for "branch bundles" (or 'Directories' (folders with an _index.md containing other articles)), to determine how it sorts its articles
# sort_by = "Params.weight" # Options: "Params.weight", "Date" (Default), "Title", "Lastmod"
# sort_order = "asc" # Options: "desc", "asc" (descendant, ascendant (Default: "desc"))
+++

<!-- {{< box_warning >}}
Page not translated (at the moment). For reading the article, [visit the spanish version 🇪🇸]({{% relref path="szk-timelapse-tool" lang="es" %}}).
{{< /box_warning >}} -->


<!-- {{< img_caption img="TRoM Timelapse [x1.0 (128 frames - 13.56s)].webp" css="height:100vh;" >}} -->
<!-- {{< img_caption img="TRoM Timelapse" css="height:100vh;" >}} -->
{{< img_caption img="TRoM Timelapse x1.0 (128 frames - 13.56s).webp" css_image="height:85vh; width:auto;" class="pixel-art" caption="128 frames, 13.56 seconds, **859kB**, <u>made in **0.56 seconds**</u>" >}}

# Motivation & Intention

After finishing a Krita illustration, I had 50.776 frames (holy moly) capturing the whole process. I wanted to make a little gif with a timelapse, but I obviously couldn't add all the images.

And I didn't want to scroll through the 50k images and manually cherry-pick X frames after some interval/step, for then making the gif, because that is tedious.

There are other tools that converts a series of images into .gif, but the ones I tried lack of that step/interval option I was looking for. There are video editors where you can achieve that step-motion kind of effect. But they require a boring setup. Also, they usually do not support exporting to .webp (and converting (even) a raw video to .webp normally adds artifacts)

> I wanted something **fast and easy to use**, with all the requirements I was looking for, so that's why I made this.

# Download
You can download it here:

{{< download_file file="app/SZK Timelapse Tool (1.0.6).zip" type="windows" >}}

# How to use it

{{< img_caption "ui2-steps.png" >}}

{{< cell "1" >}} Input folder: Select the folder containing all the images and their format.

{{< cell "2" >}} Select the last frame mode.

{{< cell "3" >}} Manually selection for the last frame, when the mode in (2) is set to 'Selected image'.

{{< cell "4" >}} The duration of the last frame. If the checkbox is enabled, it will have a different frame duration than the other frames. 

{{< box_info >}}
This is useful if you are showing a drawing process, and want the end frame to last more (for showing the final result).
{{< /box_info >}}

{{< cell "5" >}} Interval configuration. Picks a frame every X, and set the duration of each frame.

{{< cell "6" >}} Info label: Displays the total frames, duration, and frames per second (fps).

{{< cell "7" >}} Scales the original images by a factor, and choose the filter for the scale.

{{< box_info >}}
Depending of your needs (to scale up, scale down, mantain crips edges or not, etc) you would preffer one filter or another. For example, for scaling up pixel art, you normally would use **Box** or **Nearest**.
{{< /box_info >}}

{{< cell "8" >}} Output folder where the timelapse is saved.

{{< cell "9" >}} Name file and format.

{{< cell "10" >}} If checked, it appends some custom data to the saved file.

|Code|Output|
|:-|:-|
%R | Resolution
%F | Total frames
%fps | Frames per second
%Ts | Total Time (in seconds (s))
%Tms | Total Time (in milliseconds (ms))
%st | Frame step/frequency
%s | Scale factor
%t | Frame duration (ms)
%t2 | Last frame duration (ms)

E.g:
` [x%s (%F frames - %fps)]` Will append " [x1 (100 frames - 10fps)]"**\*** to the file name.

**\*** The values are according the selected settings.

{{< cell "11" >}} If checked, opens the output folder after saving the timelapse.

{{< cell "12" >}} Create Timelapse: Press to \*\**drum roll* 🥁🥁🥁\*\* create the timelapse.

# Timelapse examples
{{< row >}}

<!-- {{< img_caption img="TRoM Timelapse x1.0 (128 frames - 13.56s).webp" css_image="height:85vh; width:auto;" class="pixel-art" caption="128 frames, 13.56 seconds, **859kB**, <u>made in **0.56 seconds**</u>" >}} -->

<!-- {{< img_caption img="TRoM - Youtube Thumbnail [x0.3 (5.88fps 108 frames - 20.69s)].webp" css_image="height:85vh; width:auto;" class="pixel-art" caption="128 frames, 13.56 seconds, **859kB**, <u>made in **0.56 seconds**</u>" >}} -->
<!-- {{< img_caption img="joer.webp" css_image="height:85vh; width:auto;" class="pixel-art" caption="128 frames, 13.56 seconds, **859kB**, <u>made in **0.56 seconds**</u>" >}} -->


<!-- {{< img_caption img="TRoM - Youtube Thumbnail x0.3 (5.88fps 108 frames - 20.69s).webp" css_image="height:85vh; width:auto;" class="pixel-art" caption="128 frames, 13.56 seconds, **859kB**, <u>made in **0.56 seconds**</u>" >}} -->
<!-- {{< img_caption img="TRoM - Youtube Thumbnail x0.3 (5.88fps 108 frames - 20.69s).webp" css_image="height:85vh; width:auto;" >}} -->
<!-- {{< img_caption img="TRoM - Youtube Thumbnail x0.3 (5.88fps 108 frames - 20.69s).webp" css_image="height:40vh; width:auto;" >}} -->
{{< img_caption img="TRoM - Youtube Thumbnail x0.3 (5.88fps 108 frames - 20.69s).webp" >}}
{{< img_caption img="Thumbnailer x1.0 (8.33fps 29 frames - 5.86s).webp" >}}

{{< /row >}}
{{< row >}}
{{< img_caption img="Suzuka Ka - Pixel Art Logo x1.0 (10.00fps 141 frames - 16.5s).webp" css_image="height:50vh; width:auto;" class="pixel-art" >}}
{{< img_caption img="TRoM - Paleta x1.0 (10.00fps 168 frames - 19.2s).webp" css_image="height:50vh; width:auto;" class="pixel-art" >}}
{{< /row >}}

{{< img_caption img="TRoM - Timelapse x1.0 (10.00fps 1017 frames - 103.6s).webp"
	caption="1017 frames, **104 seconds** (3.5mb)"
	css_image="height:92vh; width:auto;" 
	class="pixel-art" 
>}}

# Contact 

You can reach me via:

Email: {{< get_social "email" >}}

Twitter: {{< get_social "twitter" >}}