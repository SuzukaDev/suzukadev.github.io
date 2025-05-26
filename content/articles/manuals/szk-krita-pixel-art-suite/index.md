+++
title = 'SZK Krita Pixel Art Suite'
date = '2025-05-22T22:57:12+02:00'
description = "Krita plugin that adds lots of features for making Pixel Art!"
lastmod = '2025-05-22T22:57:12+02:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
tags = ["krita","pixel art","k-sprite"]
# main_classes = 'pixel-font' # classes for <main> element. Allows customization of each page. Example of use: add a class from `fonts.scss` to change the page font. (consolas-font, handwritten-font, etc).
# # -------- DISPLAY OPTIONS --------
# accent_color = "#ff168a" # customize the color for links, etc in the page
accent_color = "#ff950a" # customize the color for links, etc in the page
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
# article_cover = 'szk-krita-pixel-art-suite.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'article_cover' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'Szk Krita Pixel Art Suite' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags
# related_pages = [""] # If set, these pages (up to 3) will be displayed in the related section for this page. Useful when you want to be sure that a page appears as related
+++

<!-- > Plugin for Krita that makes doing pixel  -->

<!-- > Plugin that makes doing **Pixel Art** in *Krita* **much better**! -->

> Plugin for ***{{< text_handwritten text="Krita" font= 3 >}}*** that adds **{{< text_wavy2 "lots of features" 0.5 0.03 >}}** for making **{{< text_shimmer text="Pixel Art" font=2 >}}**!


{{< link_card 
  url="https://orb91.gumroad.com/l/szk-krita-pixel-art-suite"
  cover="images/cover_logo-animated-512px.webp"
  title="SZK Pixel Art Suite"
  subtitle="Improves making Pixel Art in *Krita*!"
  url_text="orb91.gumroad.com"
  color="#cd5b06"
  hover_color="#ff83f1"
  text_color="#f0f0f0"
  cover_position="50% 53%"
>}}



<!-- # Test table of contents -->

{{< table_of_content 
start=1 
end=1 
ordered=false 
closed=false 
>}}

# Installation

<!-- {{< details summary="Click here if you don't know how to install a plugin" color="rgba(23, 112, 201, 1.0)" open=true >}} -->

<!-- # **Installation** -->

1. Download the `.zip`.
2. In Krita, go to ***Tools ‣ Scripts ‣ Import Python Plugin…***, find the `.zip` file and press OK.
3. Restart Krita.
4. Go to ***Settings ➡ Dockers ➡ SZK Pixel Art Suite***

A new **docker** with the plugin will appear:

{{< img_caption img="images/docker-combined.png" caption="Different tabs of the docker" class="no-box-shadow" >}}

<!-- <figure><img src="https://public-files.gumroad.com/5ykubgrigi6frwtkd8vyz9bgv85d"><p class="figcaption">&nbsp;<em>Different tabs of the docker</em></p></figure> -->

<!-- {{< /details >}} -->

## Tabs
{{< row >}}

{{< img_caption img="tabs-legend.png" caption="Tabs of the plugin" class="no-box-shadow" >}}

<div>
{{< cell "1" >}} - Color shading <br><br>

{{< cell "2" >}} - Color replace <br><br>

{{< cell "3" >}} - Index Painting<br><br>

{{< cell "4" >}} - Export <br><br>

{{< cell "5" >}} - K-Sprite <br><br>

{{< cell "6" >}} - Settings <br><br>
</div>

{{< /row >}}


# Color Shading

This is inspired by the color shading panel from [*Pyxel Edit*](https://pyxeledit.com/), which provided interesting color shadings very easily. 

It brings its original functionality to *Krita* and expands on it by **adding a few more options**.

{{< img_caption img="color-tab-3.png" class="no-box-shadow" >}}

It works by generating **color variations based on a color**. This base color is always <u>at the center of a palette</u> (except for the "mix" (mixer) palette).

{{< details summary="Original Palettes Explained" color=#FF8526FF >}}

> This section is inspired by the original shading system from Pyxel Edit. 

The **main shading palette** (on top), works by shifting the value, saturation and hue to an specific blue tone for the dark tones (on the left). For the brighter colors (on the right), works the same but shifting the colors to a brighter yellow hue.

<br>

{{< cell "l" >}} - Shifts (only) the **value/light**.

<br>

{{< cell "s" >}} - Shifts (only) the **saturation**.

<br>

{{< cell "h" >}} - Shifts (only) the **hue**.

<br>



{{< box_green >}}
**l**, **s** and **h** are very useful for fine-tuning your colors using the {{< shortcut "Middle MB" >}} [(See 'Swatches' section)](#swatches)
{{< /box_green >}}

{{< /details >}}








{{< details summary="Extra Palettes Explained" color="#e400ff" open=false >}}

The shading palettes {{< cell "2" >}} and {{< cell "3" >}} are affected by the hues selected in the **sliders** above. The **left slider** controls the **hue** for the **shadows**, while the **right slider** controls the **hue** for the **bright colors**.

<br>

{{< box_green >}}

This **offers more control** for making cohesive color combinations under specific settings. 

> For example, lets say you are painting a sunset scene with an *orange* light source, and you want the shadows to gather around a pink. You can select both hues in the sliders and generate easily colors that look good in that setting.


{{< /box_green >}}


> {{< cell "2" >}} uses the **same algorithm** as the one inspired by ***Pyxel Edit***. 
> <br>
> <br>
> {{< cell "3" >}} Uses a **different algorithm** (it usually retrieves more muddy colors for the shadows and more coloured lights).

---
{{< header "Mixer (Mix)" 3 "left" >}}

Mixes 2 colors.

{{< box_info >}}
It uses an algorithm that **checks hor similar are both colors**, and reduces/adds more swatches depending how similar they are.

(The more different they are, the more steps/swatches it adds).

> You can still change the resolution/number of steps by changing the {{< cell "slider" >}} next to the {{< cell "2" >}}

{{< /box_info >}}

Press the {{< cell "1" >}} and {{< cell "2" >}} buttons to change the colors that are mixed.

Those buttons have the following shortcuts:

<br>

| Shortcut         | Action     
| :----------- | ------: | 
| {{< shortcut "Left MB" >}} | Triggers the **color selector**
| {{< shortcut "CTRL + Left MB" >}}| Triggers the **color picker** to grab any color
| {{< shortcut "ALT + Left MB" >}}| Picks the **Foreground color**
| {{< shortcut "Left MB" >}}| Picks the **background** color

<br>

{{< box_green >}}
I personally find the {{< shortcut "CTRL + Left MB" >}} very useful and fast, and is the main way I use the mixer.
{{< /box_green >}}

{{< /details >}}

**To generate a shading palette:**
- Press the {{< cell "FG" >}} / {{< cell "BG" >}} button to grab your current **foreground/background color** and build the shading palettes around it.
- Press the {{< shortcut "Middle MB" >}} on a swatch. [See 'Swatches' section below for more info](#swatches)

## Swatches

> A '*swatch*' is a single color sample of a gradient.

Mouse Button (MB) shortcuts/actions:
| Shortcut         | Action     
| :----------- | ------: | 
| {{< shortcut "Left MB" >}} | Pick **foreground** color
| {{< shortcut "Right MB" >}}| Pick **background** color 
| {{< shortcut "Middle MB" >}}| Pick **foreground** color <u>and **rebuild the palette**</u>



<!-- {{< box_info "💡" >}}
*\* MB = "Mouse Button"*
{{< /box_info >}} -->

{{< box_info "💡" >}}
I personally find {{< shortcut "Middle MB" >}} very useful for *fine tuning* your base color by shifting its value, hue, saturation, etc. until you got a shading that you like 👌.
{{< /box_info >}}

When you click a swatch, the color becomes active:

{{< img_caption "swatch-selected.png" "The white border indicates the color is selected" >}}

Once a color is selected, you can:

- Move easily forwards/backwards in the active shading palette with a shortcuts. ([See shortcuts section](#shortcuts))

- **Add** the whole shading to your **active palette**.

## Managing Palettes

The *Color Shading* tab is "connected" to the native Palette docker by ***Krita***.

{{< details summary="How to show the Palette docker" >}}

Go to `Settings -> Dockers -> Palette` 

{{< img_caption "show-palette-docker.png" >}}

<br>

A docker like this will appear:

<br>

{{< img_caption "native-palette-docker.png" "Native *Palette* docker" >}}

{{< /details >}}

<!-- {{< header "Add colors to palette" 4 "left" >}} -->

### Add colors to palette

When you have a gradient selected (by having selected a swatch), you can add all its colors to the active palette. For that, press this button:

{{< img_caption "add-colors-to-palette.png" "Adds the selected gradient to the active palette" >}}

<!-- --- -->

<!-- {{< header "Sort Palettes" 4 "left" >}} -->

### Sort Palettes



It includes actions for adding and **sorting** colors in Krita's default Palette docker **by different criteria** (hue, value, saturation, perceived lightness, color similarity, etc.), similar to other softwares. 

> This is something I personally find **very useful when working with limited color palettes**.

To sort your active Palette, press the {{< cell "..." >}} button:

{{< img_caption img="sort-palettes.png" class="no-box-shadow" >}}

Most are self explanatory. Even though, some ones worthy to explain:

- **Perceived lightness**: This sorts the colors according how human eye perceives lightness. Is not always the same as the "value" sort.

- **Cielab similarity**: Sorts the colors of your palette according by **how similar** they are to your **active** (foreground) **color**.


<!-- {{< box_info "💡" >}}
**TIP**: When choosing a color from a palette row, you can use shortcuts to quickly select darker or lighter variations within the selected row of colors.
{{< /box_info >}} -->



# Color Replace

Allows to precisely replace an specific color in the selected layers/groups or in the entire document.

This is useful when you want to change a palette or a certain color of an entire document or layer.

{{< box_info >}}
The color to be replaced has to match the **exact color** (there is no treshold margin).
{{< /box_info >}}

{{< img_caption "color-replace.png" >}}

{{< cell "1" >}} - **Color to be replaced** (left) and **new color** (right)

{{< details "Same shortcuts like in the Mixer apply here" >}}

| Shortcut         | Action     
| :----------- | ------: | 
| {{< shortcut "Left MB" >}} | Triggers the **color selector**
| {{< shortcut "CTRL + Left MB" >}}| Triggers the **color picker** to grab any color
| {{< shortcut "ALT + Left MB" >}}| Picks the **Foreground color**
| {{< shortcut "Left MB" >}}| Picks the **background** color

<br>

{{< box_info >}}
{{< text_wavy2 "You don't need to remember them!" 0.2 0.1 8 >}} Just **hover** the mouse under the colors **to see a tooltip** with these **shortcuts**:

{{< img_caption "color-replace-tooltip.png" "Tooltip when hovering the color buttons" >}}

{{< /box_info >}}

{{< /details >}}

{{< cell "2" >}} - **Swap** replaced and new color.

{{< box_warning >}}
**Note**: At the moment **undo/redo is not supported natively in Krita' scripts**, so if you want to **undo changes** you can **swap the colors** (with the swap button) and **re-execute the color replace**.
{{< /box_warning >}}

{{< cell "3" >}} - **Alpha** for the new color (in case you need to set a new one).

{{< cell "4" >}} - Replaces the color in the **selected layer(s)**.

{{< box_green >}}
You can select more than one layer.
{{< /box_green >}}

{{< cell "5" >}} -  **Replaces the color in every layer** of the active document.







# Index Painting

Sets up an index painting group for a layer (or group) with a single click.




{{< details summary="What is ***Index Painting***?" open=true >}}

***Index Painting*** is a technique that **automatically dithers and reduce colors on a non-pixel art artwork**. 

> This means that <strong>{{% text_wavy "you can use all your non-pixel art brushes in Krita" 0.03 10 %}}</strong> , gradients, etc. for painting and still obtaining a Pixel Art aesthetic. 👌

Cool example of the aesthetic that is achievable with index painting:

<div style="margin: auto; width: fit-content;">
{{< x user="roboticgeo" id="1917584059217187194" >}}
</div>


If you are curious, you can [**learn more about this technique here.**](http://danfessler.com/blog/hd-index-painting-in-photoshop)
{{< /details >}}


It comes with a pattern editor that allows to create, save and load different patterns-pressets for the dithering effect:

This is mostly to play, experiment and discover new and cool pixel gradient effects.

{{< img_caption "index-painting-example-city-sunset.png" "I made the sky in this piece using Index Painting" >}}



## Interface

{{< img_caption "index-painting-tab-steps.png" >}}

- {{< cell "1" >}} **Matrix Size**: Increase/decrease the rows/columns of the dither matrix.

<br>

- {{< cell "2" >}} **Rotate**: Rotates the dither matrix.
{{< img_caption "index-painting-rotate.webp" >}}

<br>


- {{< cell "3" >}} **Invert**: Inverts the color in the dither matrix.
{{< img_caption "index-painting-invert.webp" >}}

<br>

- {{< cell "4" >}} **Clear the matrix**: Resets all cells.

{{< box_info >}}
Press it **twice** to fill/clear all the cells.
{{< /box_info >}}

- {{< cell "5" >}} **Dither Presets**: Change the dither preset.

- {{< cell "6" >}} **Save Preset**: Save your own dither preset for using it later.

- {{< cell "7" >}} **Delete Preset**: Deletes the **selected preset**.

- {{< cell "8" >}} **Dither Matrix**: Here you can paint/modify each cell of the dither matrix. Each cell represents a pixel of the dither pattern.

There is some different ways for painting the matrix:
Shortcut | Action
:-- | --:
{{< shortcut "Left MB" >}} / {{< shortcut "Right MB" >}} | Activate/deactivate cell (full painting)
{{< shortcut "CTRL + Left/Right MB" >}} | Adds/Substracts a cell value in **quantized steps**.
{{< shortcut "ALT + Left/Right MB" >}} | **Smooth painting**.

{{< box_info >}}
**TIP**: Hover a cell (or any UI element) to see its tooltip with its information.
{{< /box_info >}}

- {{< cell "9" >}} **Create Index Painting**: Press to generate an Index Painting folder for the selected layer/group.

- {{< cell "10" >}} **Repaint the dithering layer**: Updates the dither pattern. Useful to call it after drawing on the matrix.
{{< box_warning >}}
The active layer must either be the "Dither" layer, or a sibling of the "Dither" layer.

Note: The dither layer must be named "Dither". This is due that after pressing it, it searches if there is an Index Painting group set up with a dither layer.
{{< /box_warning >}}


- {{< cell "11" >}} **Create dither pattern layer**: Sets up an Index Painting group around the selected layer.
{{< box_green >}}
This can be used as a **pattern generator** (useful for making **textures for brushes**, **gradients**, etc).
{{< /box_green >}}


## Setting an Index Painting group

Having a **black and white** drawing (or an empty layer if you want to draw from scratch): 

{{< img_caption "index-painting-tutorial-1.png" >}}

{{< box_info >}}
Note: It is preferable if the drawing already has crisp, hard edges, since Index Painting tends to generate smooth soft edges in the silhouettes (which is not desirable for Pixel Art).
{{< /box_info >}}

Press the button ***Index Painting***, in the Index Painting Tab:

{{< img_caption "index-painting-press-button.png" >}}

It will result in something like:


{{< img_caption "index-painting-tutorial-2.png" >}}

It makes a group with everything needed for Index Painting. 

Consists of:

- A **Gradient Map** / **Index Colors** filter layer, depending on your [*Index Painting Options*](#index-painting-options)
{{< box_info >}}
**Note**: {{< shortcut "Right Click" >}} on this layer to edit the colors used for the shading. 
{{< /box_info >}}
- **Dither**: This layer holds the dither pattern from the dither matrix.
{{< box_info >}}
Note: If you are using a Gradient Map, you can change its pattern in its settings (Right Click on the layer -> Properties). Having both patterns combines them and increases the dithering effect.
{{< /box_info >}}
<br>
  {{< box_green >}}
  TIP: **Increase/reduce** its **opacity** to **change** the **dithering** effect.
  {{< /box_green >}}

- **Gradient** (optional, depends on your [*Index Painting Options*](#index-painting-options)): It helps to visualize the effect and to sample colors.
{{< box_green >}}
Having the "*Gradient*" layer **selected**, you can **sample its black and white** colors with {{< shortcut "CTRL+ALT+LeftMButton" >}}, and have an idea of the dither amount that value will have.
{{< /box_green >}}

- [Your selected layer/group] (***B&W sphere*** in this example): {{< text_wavy2 "This is where you have fun and paint (in black and white)!" 0.5 0.014 >}}







# Export Tab


Allows exporting the document (or any selected layer(s)) scaled by a factor very easily and fast.

{{< img_caption img="images/export.png" caption="Left: Original scale. Right: Scaled" class="no-box-shadow" >}}

Useful when you want a higher resolution image of your Pixel Art drawing.

{{< img_caption img="export-tab-new.png" caption="Export tab" >}}

## Image settings

- **Scale**: Size multiplicator. 
- **Quality**: Image compression quality. The higher, the better quality (and the file size).
  > Since Pixel Art normally tends to have lots of contiguous pixels with the same value, a low value usually keeps enough quality.
- **Directory**: Suports both <u>**local** and **absolute** directories</u>.
  - **Local** example: Setting a value of, lets say, `Exports/Version 1` will make the exported images to be in a subdirectory relative the current path of the active document.
    - Eg: if your document is placed in `C:\Users\Dexter\Desktop\my-awesome-pixel-art.kra`, the exported images will be in `C:\Users\Dexter\Desktop\Exports\Version 1`
  - **Absolute** example: Setting an absolute path (like, lets say: `C:\Users\Mike\Pictures\My Pixel Art`) will place all exported images in that folder, and **ignore the document's path**.
- **File name**: Add a custom name for the exported image.
{{< box_green >}}
Leaving it **<u>empty</u>** will add the **document's name**. 
{{< /box_green >}}



- **Format**: Select your preferred image format. (Supports `.png`, `.jpg`, `.webp` and `.bmp`)

## Naming Options
- **Add scale**: If true (checked), it will add the scale factor to the file name.
- **Overwrite**: If false (unchecked), will add an unique time stamp for avoid overwriting files. 
{{< box_info >}}
This is useful if you want to manually save some "snapshots" of your drawing and don't want to overwrite the images.
{{< /box_info >}}
  - If true (checked) the files with the same name will be overwritten.

---
- **Selection only** - If true/checked, it will only export the region selected. Useful if you want to export only an specific area/region.
- 📁 - Click to open the folder with the exported images.
- **Export Scaled** - Exports the whole document.
- **Export Selected** - Exports only the selected layer/layers/group
  - **Trim** - If true/checked, the exported layers will be cropped to their bounds. If false, their size will be the document size.
{{< box_green >}}
<!-- {{< text_wavy2 "This is useful, for example, for exporting different sprites for a game easily." 0.5 0.03 4 >}} {{< text_wavy2 "🎮" 0.5 0.03 4 >}}  -->
This is useful, for example, for exporting different sprites for a game easily 🎮.
{{< /box_green >}}




# SZK K-Sprite


TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

TODO ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗





# Options 

## Index Painting Options

- **Add gradient**: Adds a gradient to preview the dither and to sample colors.

  {{< img_caption "index-painting-gradient.png" "Adding a gradient is useful to preview the aesthetic of the dithering pattern ✅" >}}
  <!-- <br> -->
  <!-- {{< box_green >}}
  Adding a gradient is useful to preview the dithering aesthetic if you don't have already a drawn layer.
  {{< /box_green >}} -->

    - **Position**: Changes the position of the gradient (*top, bottom, left, right*).
    - **Size**: The size of the gradient as a **percentage** of the document's size.
    - **Invert**: Inverts the gradient.
- **Method**
    - **Index colors**: Uses an index color filter
    - **Gradient map**: Uses a gradient map filter. You can configure its dither pattern in its properties.
  {{< box_info >}}
  I personally preffer the **Gradient Map** option. Since is easier to manage colors.
  {{< /box_info >}}
- **Dither live preview**: When selecting a new pattern preset or editing the dither matrix (by rotating, inverting it, etc), if there is a "Dither" layer selected (or a sibling) of the selected layer, **the Dither layer will be updated automatically**.
  {{< box_green >}}
  This is for being able to directly see how changes affect the shading dithering.

  {{< img_caption "index-painting-live-preview.webp" "Scrolling through the presets (with arrow keys) automatically updates the dithering pattern." >}}
  {{< /box_green >}}

## Shortcuts

{{< details summary="How to configure shortcuts in Krita" >}}
Go to `Settings -> Configure Krita`. There, click the `Keyboard Shortcuts` tab. 

Search for `SZK Pixel Art Suite` to see the available shortcuts.
{{< /details >}}

Shortcuts provided by the plugin:

### Palette

- When selecting a color from a palette in the Shading tab, you can move backward/forward the active palette color with the shortcuts:
|Command | Default Shortcut
|:---|---:
Previous Palette Color (SZK Pixel Art Suite) | {{< shortcut "Alt+1" >}}
Next Palette Color (SZK Pixel Art Suite) | {{< shortcut "Alt+2" >}}



### K-Sprite

- You can execute the editor with the shortcut:
|Command | Default Shortcut
|:---|---:
Open SZK K Pixel Art Editor (SZK Pixel Art Suite) | {{< shortcut "Alt+F3" >}}

{{< box_info >}}
I personally highly recommend to configure this to your choice. I personally like to trigger the editor as if I was changing of brush (for using one of its features, like the pixel perfect brush, or drawing a primitive, etc.)
{{< /box_info >}}

### Export Pixel Art

- You can bind to a shortcut the action to export your pixel art with your current settings with:
|Command | Default Shortcut
|:---|---:
Export Scaled Pixel Art (Full Document) (SZK Pixel Art Suite) | (Not set)
Export Scaled Pixel Art (Selected Layers) (SZK Pixel Art Suite) | (Not set)


# Credits

Fonts used:

- [Minimal4](https://saint11.org/blog/fonts/) by *[Pedro Medeiros](https://saint11.art/)* ([@saint11](https://x.com/saint11)) ({{< text_wavy "Thank you!" 0.04 6 1.2 >}})
- [Tiny5-Regular](https://fonts.google.com/specimen/Tiny5) by *[Stefan Schmidt](https://fonts.google.com/?query=Stefan%20Schmidt)* ({{< text_wavy "Thank you!" 0.01 6  1.4 >}})
