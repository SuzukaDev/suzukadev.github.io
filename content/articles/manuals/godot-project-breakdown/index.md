+++
title = 'Godot Project Breakdown'
date = '2020-03-20T12:09:34+01:00'
description = "VSCode extension for managing Godot projects"
lastmod = '2026-02-07T12:09:34+01:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["SZK", "Suzuka", "Suzuka Ka", "SuzukaKDev", "Godot Project Breakdown", "Godot", "VSCode", "Extension"] # custom keywords for the page
tags = ["Godot", "VSCode", "Gamedev", "Programming"]
# main_classes = 'pixel-font' # classes for <main> element. Allows customization of each page. Example of use: add a class from `fonts.scss` to change the page font. (consolas-font, handwritten-font, etc).

# # -------- DISPLAY OPTIONS --------
# accent_color ="rgb(22, 201, 255)" # customize the color for links, etc in the page
# accent_color ="rgb(22, 123, 255)" # customize the color for links, etc in the page
accent_color ="rgb(66, 148, 255)" # customize the color for links, etc in the page
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
featured_image = '/icon.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
emoji = "🤖"

# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'Godot Project Breakdown' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
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
Page not translated (at the moment). For reading the article, [visit the spanish version 🇪🇸]({{% relref path="godot-project-breakdown" lang="es" %}}).
{{< /box_warning >}} -->


## Godot Project Breakdown 🤖
<!-- <p align="center">
	<img width="256" height="256" src="https://github.com/SuzukaDev/vscode-godot-project-breakdown/blob/master/images/icon.png?raw=true">
</p> -->

{{< img_caption img="icon.png" class="no-box-shadow" >}}


<!-- ### Overview -->
This is an [**VSCode**](https://code.visualstudio.com/) **extension** that gets all **.gd** files in your [**Godot**](https://godotengine.org/es/) project , analyze them and gives a overview of all of them in a single file.

For each `.gd` file, it shows its private or public* variables and methods, defined signals, node references and enums.

<!-- >\* *Private and public fields do not exist (at least at the moment) in gd script, but if you use the prefix "\_" to differentiate private fields (using "\_") from public (without "\_"), it will take it into account.* -->

> **\*** Private and public fields do not exist (at least at the moment) in gdscript, but if you use the prefix "\_" to differentiate private fields (using "\_") from public (without "\_"), it will take it into account.*


{{< box_info >}}
I made this extension long time ago, **when Godot didn't even support `C#`**. So, at least for the moment, **it only works with gdscript (`.gd`) files.**

{{< /box_info >}}

### Reasons & Motivation

I made this extension for myself, to easily track and update every change in my project, so I could easily manage/update my project documentation (in my case, an UML diagram for my game).
Instead of keeping track of every change manually, I just generate a new file, compare it to the previous version (using version control), and effectively update my documentation.

I released the extension just in case is helpful for somebody else.

## Usage 🔧
<!-- >**Prerequisites**: this extension requires [Godot tools](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools) -->

{{< box_warning >}}
**Prerequisites**: this extension requires [Godot tools](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools)
{{< /box_warning >}}

1. [Download latest version](https://github.com/SuzukaDev/vscode-godot-project-breakdown/releases) and install it

<!-- >:bangbang:If you are using a Godot Tools version below 1.X.X, [download version 1.0.1](https://github.com/SuzukaDev/vscode-godot-project-breakdown/releases/tag/v1.0.1)<br>
If you are using Godot 3.2 or above and a Godot tools version equal or above 1.X.X [download latest version](https://github.com/SuzukaDev/vscode-godot-project-breakdown/releases) -->

{{< box_info >}}
If you are using a Godot Tools version below 1.X.X, [download version 1.0.1](https://github.com/SuzukaDev/vscode-godot-project-breakdown/releases/tag/v1.0.1)<br>

If you are using Godot 3.2 or above and a Godot tools version equal or above 1.X.X [download latest version](https://github.com/SuzukaDev/vscode-godot-project-breakdown/releases)
{{< /box_info >}}

2. To install the **.vsix** files, go to `extensions -> ... -> "Install from vsix"`
	<!-- <img align="center" width="614" height="485" src="https://github.com/SuzukaDev/vscode-godot-project-breakdown/blob/master/images/how_to_install_vsix.gif?raw=true"> -->

	{{< img_caption "how_to_install_vsix.gif" >}}<br>

3. Open command palette (<kbd>F1</kbd>)
4. Type `Generate breakdown file`
5. Execute command
<!-- 6. Enjoy :dancer: (optional)<br> -->
<!-- <p align="center">
	<img width="715" height="588" src="https://github.com/SuzukaDev/vscode-godot-project-breakdown/blob/master/images/demo.gif?raw=true">
</p> -->

{{< img_caption img="demo.gif" >}}

6. Done! 🥳

## Extension options ⚙
The result file is **highly customizable** to suit your needs.
You can specify wich data to show, in wich order, and how.

Most options are self explanatory with its setting's description. But **some** of them:

- `godotProjectBreakdown.file.order`
This is one of the most important settings. Is a `string` that specifies the data to show and the order. Its default value is `f# p ne svm`


{{< box_info >}}

Each character stands for a data in file:
`n` - Node references<br>
`s` - Signals<br>
`v` - Variables<br>
`m` - Methods<br>
`p` - Path of the file<br>
`f` - File Name<br>
`e` - Enums<br>
`#` - Class Comments. On any gdscript, you can put the text you want to show in the file if you include it between `###\` and `/###`. For example:
`###\ (Yor comment here) /###`

`(Empty space)` - Line separation (equals to \\n)

{{< /box_info >}}

- `godotProjectBreakdown.file.sortScriptsBy`
Allows you to sort the scripts by their path, name or extended node/script.
- `godotProjectBreakdown.separator.{...}`
A `string` that allows you to add a custom header for each property.
- `godotProjectBreakdown.prefix.{...}`
Allows you to add a custom prefix for each property.
- `godotProjectBreakdown.file.ignoreFolders`
A [Glob Pattern](https://code.visualstudio.com/api/references/vscode-api#GlobPattern) for ignoring folders/files that you don't want to show in the breakdown file.

Its default value is `"**/addons/**"`, wich means that will ignore files on anny "addons" folder.

<!-- > If [Glob Patterns](https://code.visualstudio.com/api/references/vscode-api#GlobPattern) are new to you, [this tool](https://globster.xyz) is very useful to ensure your glob pattern is  :dog: -->

{{< box_info >}}
If [Glob Patterns](https://code.visualstudio.com/api/references/vscode-api#GlobPattern) are new to you, [this tool](https://globster.xyz) is very useful to ensure your glob pattern is 
{{< /box_info >}}

- `godotProjectBreakdown.file.showEnumValues`
A `bool` for showing (true) or not (false) the enum values for each enum.


## Possible future improvements
- Analyze all the .tscn files in the project for getting more information, like... signals connected via editor.

- Maybe I'll upload the extension into the vscode marketplace in the future.

## FAQ
<!-- ### Why the name of the extension is that bad? -->
{{< header "Why the name of the extension is that bad?" 4 "left" >}}

Because I couldn't think of a better name :D

## Logo license ©
The extension logo uses and modifies the original Godot logo by Andrea Calabró.

Its License:
Godot Logo (C) Andrea Calabró
Distributed under the terms of the Creative Commons Attribution License
version 3.0 (CC-BY 3.0) <https://creativecommons.org/licenses/by/3.0/legalcode>.

## Contact 
{{< get_social "email" >}}

{{< get_social "twitter" >}}



