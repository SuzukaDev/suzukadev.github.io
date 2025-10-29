+++
title = 'SZK Timelapse Tool'
date = '2025-09-02T16:12:21+02:00'
description = "Herramienta para crear *timelapses* en formato .gif/.webp a partir de una serie de imágenes"
lastmod = '2025-09-02T16:12:21+02:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["SZK Timelapse Tool", "Suzuka Ka", "SZK", "Herramienta", "Python", "Arte", "Timelapse", "Krita"] # custom keywords for the page
tags = ["herramienta"]
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
emoji = "📹"

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
Página no traducida (de momento). Para leer el artículo, [visita la página en inglés 🇬🇧]({{% relref path="szk-timelapse-tool" lang="en" %}}).
{{< /box_warning >}} -->

{{< img_caption img="TRoM Timelapse x1.0 (128 frames - 13.56s).webp" css_image="height:85vh; width:auto;" class="pixel-art" caption="128 frames, 13.56 segundos, **859kB**, <u>realizado en **0.56 segundos**</u>" >}}

# Motivación e Intención

Quería hacer un .gif con el timelapse de una ilustración que había hecho con Krita. Tenía 50.776 capturas (😶) de todo el proceso, y obviamente no podía incluirlas todas en el gif.

Y no quería ir pasando por las 50 mil, seleccionando solo algunas para hacer el gif, porque es tedioso.

Hay muchos programas con los que convertir una serie de imágenes a *gif*, pero todos lo que probé no tenían la opción de tomar una foto cada X intervalo. Hay editores de vídeos con los que se puede conseguir ese efecto de stop-motion, pero el proceso es pesado de configurar y poco trivial. Además, no suelen soportar exportar en .webp, y aunque se podría convertir de vídeo a .webp, incluso usando videos sin compresión, a la hora de convertir a .webp se pierde bastante la calidad.

> Quería hacer algo **rápido y fácil de usar**, y que incluyera todas las opciones que quería. Por eso hice este programa.


# Descarga
Puedes descargarlo aquí:

{{< download_file file="app/SZK Timelapse Tool (1.0.6).zip" type="windows" >}}

# Cómo usarlo

{{< img_caption "ui2-steps.png" >}}

{{< cell "1" >}} Carpeta con las imágenes: Selecciona la carpeta que contiene todas las imágenes, y el formato de éstas.

{{< cell "2" >}} Elige el modo de selección de la última imagen del timelapse.

{{< cell "3" >}} Selecciona manualmente el último frame del timelapse, cuando el modo (2) está seleccionado 'Selected image' (Imagen seleccionada).

{{< cell "4" >}} La duración del frame final. Si la casilla está seleccionada, el último frame tendrá una duración diferente al resto de frames.

{{< box_info >}}
Esto es útil, por ejemplo, si estás mostrando un proceso de dibujo y quieres que la última imagen dure más (para mostrar el resultado final).{{< /box_info >}}

{{< cell "5" >}} Intervalo: Selecciona una imágen cada X imágenes, así como la duración de cada frame.

{{< cell "6" >}} Texto con información: Muestra los frames totales, la duración y los frames por segundo del timelapse.

{{< cell "7" >}} Opciones para escalar el timelapse, y el filtro usado en el escalado.

{{< box_info >}}
En función de tus necesidades (agrandar, disminuir, mantener los bordes definidos o no, etc), será conveniente usar uno u otro filtro para obtener un mejor resultado.

Por ejemplo, para escalar Pixel Art, normalmente querrás usar el filtro **Box** o **Nearest**, para conservar la estética Pixel Art.
{{< /box_info >}}

{{< cell "8" >}} Carpeta donde se guardará el timelapse.

{{< cell "9" >}} Nombre y formato en el que se guardará el timelapse.

{{< cell "10" >}} Si está marcada, añadirá un texto personalizable al nombre del archivo, con distinta información.

|Código|Resultado|
|:-|:-|
%R | Resolución
%F | Frames totales
%fps | Frames por segundo
%Ts | Tiempo total (en segundos (s))
%Tms | Tiempo total (en milisegundos (ms))
%st | Intervalo (step)
%s | Factor de escalado (scale)
%t | Duración del frame (en ms)
%t2 | Duración del frame final (ms)

Ejemplo:
` [x%s (%F frames - %fps)]` añadirá " [x1 (100 frames - 10fps)]"**\*** al nombre del fichero.

**\*** Los números cambiarán en función de los valores seleccionados en el proyecto.

{{< cell "11" >}} Si está marcada, al acabar de grabar el timelapse abre la carpeta donde ha sido guardado.

{{< cell "12" >}} Crea el timelapse.

# Ejemplos de Timelapses
{{< row >}}
{{< img_caption img="TRoM - Youtube Thumbnail x0.3 (5.88fps 108 frames - 20.69s).webp" >}}
{{< img_caption img="Thumbnailer x1.0 (8.33fps 29 frames - 5.86s).webp" >}}
{{< /row >}}

{{< row >}}
{{< img_caption img="Suzuka Ka - Pixel Art Logo x1.0 (10.00fps 141 frames - 16.5s).webp" css_image="height:50vh; width:auto;" class="pixel-art" >}}
{{< img_caption img="TRoM - Paleta x1.0 (10.00fps 168 frames - 19.2s).webp" css_image="height:50vh; width:auto;" class="pixel-art" >}}
{{< /row >}}
{{< img_caption img="TRoM - Timelapse x1.0 (10.00fps 1017 frames - 103.6s).webp"
	caption="1017 frames, **104 segundos** (3.5mb)"
	css_image="height:92vh; width:auto;" 
	class="pixel-art" 
>}}

# Contacto

Puedes contactar conmigo via:

Email: {{< get_social "email" >}}

Twitter: {{< get_social "twitter" >}}