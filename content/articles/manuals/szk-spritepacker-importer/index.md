+++
title = 'SZK SpritePacker Importer'
date = '2026-01-21T17:52:25+01:00'
description = "Godot addon for building scenes very fast"
lastmod = '2026-01-21T17:52:25+01:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["SZK", "Suzuka", "Suzuka Ka", "SuzukaKDev","Godot", "Gamedev","Krita", "SZK Pixel Art Suite"] # custom keywords for the page
tags = ["Godot", "Gamedev","Krita"]
# main_classes = 'pixel-font' # classes for <main> element. Allows customization of each page. Example of use: add a class from `fonts.scss` to change the page font. (consolas-font, handwritten-font, etc).

# # -------- DISPLAY OPTIONS --------
accent_color = "rgb(18, 200, 255)" # customize the color for links, etc in the page
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
# featured_image = 'szk-spritepacker-importer.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
emoji = "⭕"

# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'Szk Spritepacker Importer' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
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
Page not translated (at the moment). For reading the article, [visit the spanish version 🇪🇸]({{% relref path="szk-spritepacker-importer" lang="es" %}}).
{{< /box_warning >}} -->


<!-- <img width="3924" height="660" alt="icon" src="https://github.com/user-attachments/assets/d646e859-4c6b-45c5-8f90-2321dee84b1f" /> -->

{{< img_caption img="szk-spritepacker-importer-logo.png" class="no-box-shadow" >}}


SZK SpritePacker Importer is a Godot addon that converts a spritesheet and JSON exported by SZK SpritePacker into a ready-to-use Godot scene.

The generated scene reproduces the original Krita (.kra) document’s hierarchy and positioning, allowing artists and developers to move from Krita to Godot without manually rebuilding scenes. Each sprite is placed and structured to match the source document, preserving layout and organization.



## How to install
- Download the [latest version](https://github.com/SuzukaDev/SZK-SpritePacker-Importer/releases)
- Unzip the `szk_spritepacker_importer.zip` and copy it inside the folder `addons`, inside your Godot project.
- In Godot, go to `Project -> Project Settings` and select the `plugins` tab.
- Enable `SZKSpritePackerImporter`


## How to use it
1. Create a node of the type `SZKSpritePackerImporter`
{{< img_caption "tuto1.png" >}}
2. Fill the spritesheet/json variables
{{< img_caption "tuto2.png" >}}
3. Click {{< shortcut "Generate" >}}


<!-- <video src="szk-spritepacker-tutorial-no-audio.mp4" width="320" height="240" controls></video> -->

{{< video "szk-spritepacker-tutorial.mp4" >}}



<!-- https://github.com/user-attachments/assets/73919716-9a83-486d-9ec2-73005e96e8b1 -->
