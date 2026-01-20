+++
title = 'Gracias Dexter'
date = '2026-01-20T13:01:18+01:00'
description = ""
lastmod = '2026-01-20T13:01:18+01:00'
draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["illustration", "process", "pixel art", "godot", "gamedev", "krita", "szk pixel art suite"]
tags = ["illustration", "process", "pixel art"]
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
custom_pfp = "dex-y-yo-mar-full.jpg" # if set the article will use a custom image (NOT: You can also add the word 'pfp' to an image to automatically use it as the article's profile picture (pfp))
# pfp_css_classes = "half-border-radius" # Custom css class for the pfp image
# custom_profile_description = "Custom profile description" # Adds a custom profile description (below the pfp) for the page.
# show_next_and_previous_arrows = false # If false (or not set), will hide the left/right arrows next to the articles' title for navigating between articles
# show_related_articles = false # If false, it wont show the related articles at the bottom. If true (or non set), they will show.
# featured_image = 'gracias-dexter.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# emoji = "🍀"

# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'Gracias Dexter' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
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
Page not translated (at the moment). For reading the article, [visit the spanish version 🇪🇸]({{% relref path="gracias-dexter" lang="es" %}}).
{{< /box_warning >}} -->



## Inspiration & Motivation

I wanted to capture the feeling I had every time I sat with my best friend, Dexter. The feeling of just existing by his side. We used to go on long walks, and we always had time to sit and contemplate the scenery, the colors of the mountains, the sky, etc. It's a feeling I miss, and I wanted to portray it in a drawing. Also as a way to thank him for being literally the best companion I could have asked for half of my life.

The place was inspired *Cala del Xarco*, in Villajoyosa, Spain. It was the last place I went with him before he passing, so the place holds an special value for me:
{{< img_caption "https://upload.wikimedia.org/wikipedia/commons/a/ab/Cala_el_Charco.jpg" >}}

Another motivation was to continue using and improving/developing my {{< text_rotate "*awesome*" >}} [SZK Pixel Art Suite for Krita](https://orb91.gumroad.com/l/szk-krita-pixel-art-suite). I added some {{< text_wavy "cool features" >}} (that I will talk about later on) that were very useful while making this!



<!-- ## The Lesson; What's the important thing? -->
## What's the most important thing?

I think I use these blog entries to reflect about what I'm doing. Each project (no matter its subject/topic/field) has its own challenges, and at the same time, they all share "universal pieces of advice" that could be applied over and over, no matter the thing we are working on. And I think is nice to step back and meditate a bit.

This illustration helped me to remember **how important is to have a goal and your priorities sorted**.

I've become very analytical with things, I do ask myself a lot why I'm doing whatever I'm currently doing. 
This mindset doesn't help with art, since in my humble opinion, art needs a playful, curious and experimental mindset, not a judgamental one.

I was being very judgamental at the start, but as soon as I drew some pixels and I could absolutely see my dog in the drawing, my dog started living on it.

{{< img_caption "seeing-dexter.png" >}}

I went from "why am I drawing...?" to "I can see him. This is important, I need to finish this".


The most important thing for me was to recognize my dog. As soon as a I saw him, I knew at 100% that the drawing was going to be good. Probably because I was motivated at 200% to make it good.

So, whenever you feel lost or unmotivated, having a clear vision of the "core", of what's important for you (or for the project), helps a lot to simplify things and helps to continue motivated.


## Cool tools

I did all the drawing with [Krita](https://krita.org/), as I always do, combined with my [SZK Pixel Art Suite plugin](https://orb91.gumroad.com/l/szk-krita-pixel-art-suite) that makes making pixel art in Krita better, and then I animated everything, do some shader magic, etc. in [Godot](https://godotengine.org/).

Despite its simplicity, the illustration had lots of layers (mostly grass/vegetation that I wanted to animate later with shaders), and I refused to place each sprite by hand directly on Godot, since it would have taken a lot of time.

I saw a cool addon for importing `.kra` files into Godot that was very handy, but I wanted to have access to the original textures for some shader effects I had in mind, so I decided to make my own solution.


### SZK SpritePacker

I added my own Sprite Packer to the [SZK Pixel Art Suite](https://orb91.gumroad.com/l/szk-krita-pixel-art-suite):
{{< img_caption "szk-spritepacker.png" >}}

I decided to add it because I wasn't able to find any sprite packer that fitted in my workflow. Also, by having full control of my own spritesheet packer, I was able to do other cool things! Like exporting a `.json` with all the necessary information for then building a scene inside Godot with just a click!

Here is a little tutorial I did showcasing it:
{{< video "szk-spritepacker-tutorial.mp4" >}}

Basically:
1. Select all the layers you want to include in your spritesheet.
2. Export the spritesheet with the `Export .json` checked.
3. In Godot, load the script (TODO!❗❗❗❗❗❗‼‼‼‼ Upload it to github and paste the link here❗❗❗❗ (O sube el archivo también aquí)) and set the .json/.png.
{{< box_info >}}
Dragging the `.json` or the `.png` automatically fills the rest if it finds a .json/.png with the same name in the same directory.
{{< /box_info >}}
4. Click {{< shortcut "Generate" >}} to generate the whole scene!


### Gamedev tools

I started working on the illustration using only values:

{{< img_caption "values.png" >}}

The `.kra` basically has all my assets separated, and at some point, I knew I wanted to "encode" some information in the RGB(A) channels, for then using that info in my shaders.

The problem ❌: Krita makes it difficult to edit different layers at the same time.

It offers filter layers that are handy and affect all layers below them, but makes it hard to commit those changes into the actual layers.

For solving that, I made the {{< text_wavy "Shader/Gamedev Tools" >}} (~I haven't decided its name yet~):

{{< img_caption "gamedev-tools.png" >}}

It basically offers the possibility replace channels and to make mathematical operations on them very easily!

This may be a very nieche thing, but is handful for those interested in making game art and VFX. It personally helped me a lot to adjust all my assets and to tweak and adjust easily the effects I was going for with the illustration!

{{< details "For those curious, the final assets looked like this" >}}
{{< img_caption "shader-tones.png" >}}
{{< /details >}}

## Speedpainting

<!-- {{< img_caption img="dex-speedpainting.webp" class="pixel-art no-box-shadow" css_image="width:55vh;height:auto;" >}} -->
{{< img_caption img="dex-speedpainting.webp" class="pixel-art" css_image="width:55vh;height:auto;" >}}

## Final Result
### Static
<!-- {{< video video="dex-x5-v2-day-cycle.mp4" class="pixel-art" css="width:55vh;height:auto;" >}} -->
{{< img_caption img="gracias-dexter-v16.png" class="pixel-art" css_image="width:55vh;height:auto;" >}}

{{< video v="dex-x5-v1-olive.mp4" class="pixel-art no-box-shadow" c=false css="width:55vh;height:auto;" autoplay=true loop=true >}}

### Day-Night Cycle
{{< video v="dex-x5-v2-day-cycle.mp4" class="pixel-art no-box-shadow" c=false css="width:55vh;height:auto;" autoplay=true loop=true >}}


{{< header t="Gracias Dexter 🖤" h=6 >}}