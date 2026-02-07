+++
title = 'SZK Print to Blender Console'
date = '2025-05-21T15:49:53+02:00'
description = "Blender *addon* for sending the `print()` function to the console"
lastmod = '2025-05-21T15:49:53+02:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["SZK", "Suzuka", "Suzuka Ka", "SuzukaKDev", "SZK Print to Blender Console", "Blender", "Addon"] # custom keywords for the page
tags = ["Blender addon", "Programming", "Python"]
main_classes = 'consolas-font' # classes for <main> element. Allows customization of each page. Example of use: add a class from `fonts.scss` to change the page font. (consolas-font, handwritten-font, etc).
# # -------- DISPLAY OPTIONS --------
accent_color = "#fdcc41" # customize the color for links, etc in the page
# show_breadcrumbs = false
show_description = false
# show_author = false
# show_date = false
# show_reading_time = false
# show_tags = false
show_table_of_contents = true
show_right_bar = true
# show_next_and_previous_arrows = false # If false (or not set), will hide the left/right arrows next to the articles' title for navigating between articles
# show_related_articles = false # If false, it wont show the related articles at the bottom. If true (or non set), they will show.
# featured_image = 'images/print-to-python-console-(Gif5).gif' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
featured_image = 'images/ezgif-4-d56598319b.gif' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'Print to Blender Console' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags

+++


> This Blender Addon sends the `print()` output to the Blender's built-in Python console.

{{< link_card title="Print Blender Console" 
subtitle="Blender Addon making addon development a bit easier" 
url="https://orb91.gumroad.com/l/szk_console_print" 
cover="images/ezgif-4-d56598319b.gif" 
c=#316b9a 
url_text="www.orb91.gumroad.com" 
position="50% 80%" >}}

The `print()` function will keep sending the output to the system console, but in addition, it will also show it in the Python console **for a faster and easier scripting/development** 🐧.

<!-- <figure><img src="https://public-files.gumroad.com/4j14rfreveqes67fx2l3rqzco5l4"><p class="figcaption"></p></figure> -->

<!-- ![](/images/print-to-python-console-(Gif5).gif) -->

{{< img_caption img="/images/print-to-python-console-(Gif5).gif" url="https://orb91.gumroad.com/l/szk_console_print" >}}


## Installation 💻

1. Download the *.zip* file with the addon and place it wherever you like.
2. In Blender, go to `Edit → Preferences`. Once there, press the `Add-ons` tab and press `Install` button on the top-right corner:
<!-- <figure><img src="https://public-files.gumroad.com/j9tfev4r7qymoi0p86fllmzrjqph"><p class="figcaption"></p></figure> -->

{{< img_caption "/images/installation.webp" >}}

3. Select the *.zip* file.
4. Once installed, search for “`SZK Console Print`” in the search bar, and enable the addon.
5. Now every `print()` call will be shown in the Blender's Python REPL Console. 🐍

## Contact 🐺✉
<!-- 
Twitter: [@SuzukaKDev](https://twitter.com/SuzukaKDev)

Mail: [suzukakadev@gmail.com](mailto:suzukakadev@gmail.com) -->

Twitter: {{< get_social "twitter" >}}

Mail: {{< get_social "email" >}}

{{< link_card title="Print Blender Console" 
subtitle="Blender Addon making addon development a bit easier" 
url="https://orb91.gumroad.com/l/szk_console_print" 
cover="images/ezgif-4-d56598319b.gif" 
c=#316b9a 
url_text="www.orb91.gumroad.com" 
position="50% 80%" >}}