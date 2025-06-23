+++
title = 'Simple Texture Merger'
date = '2025-06-17T21:19:43+02:00'
description = "Programa para **comprimir** hasta **4 fotos** en una única imágen."
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



> Herramienta para comprimir fácilmente 4 texturas en una sola. Muy útil para shaders y vfx.

{{< link_card title="Simple Texture Merger" 
subtitle="Programa para comprimir 4 texturas en 1!" 
url="https://orb91.gumroad.com/l/simple-texture-merger" 
cover="stm-gumroad-cover.png" 
c=#DE6766 
url_text="www.orb91.gumroad.com" 
position="50% 30%" >}}

Siempre comprimo mis texturas en diferentes canales, pero hacerlo manualmente en *gimp/krita/photoshop* siempre es un poco tedioso (por no mencionar que solo puedes comprimir 3 texturas (RGB), y no 4), así que hice esta herramienta para generar texturas comprimidas más rápidamente y que usara los 4 canales RGBA.

<!-- It offers the option to <u>compress up to **4 textures** into a **single image**</u>, one for each RGBA channel. -->
Ofrece la opción de <u>comprimir hasta **4 texturas** en una **sola imagen**</u>, (una para cada canal RGBA).



# Instalación


No requiere instalación, solo descomprime el archivo.`.zip`



# User Interface

{{< box_info >}}
Puedes pasar el cursor sobre el 🛈 para mostrar una pequeña guía.

{{< img_caption "stm-tutorial-i.webp" "Puedes pasar el cursor sobre el ícono del ojo 👁️ en cada canal para previsualizarlo." >}}
{{< /box_info >}}

<!-- - {{< cell text="Select the image size" color="#1f7aff" >}}
- {{< cell text="Click to save the image" color="#ea0627" >}}
- {{< cell text="Drop/load your textures here" color="#1fff84" >}}
- {{< cell text="⚙️" color="#ff9e1f" >}} Click to show the [options](#options) -->

- {{< cell text="Image size" color="#1f7aff" >}} - Selecciona el tamaño de la imagen final.
- {{< cell text="Save" color="#ea0627" >}} - Pulsa para guardar la imagen.
- {{< cell text="Channels" color="#1fff84" >}} - Arrastra/carga tus texturas aquí.
{{< box_info >}}
Puedes arrastrar y soltar imágenes de un canal a otro para intercambiar los canales.
{{< /box_info >}}
- {{< cell text="⚙️" color="#ff9e1f" >}} Pulsa para ver las [opciones](#opciones).



## Visualizador


En la parte superior, hay un pequeño visualizador que se distorsiona según las texturas introducidas.

{{< img_caption "ezgif-stm-tutorial-visualizer.webp" "Puedes pasar el cursor sobre el icono del ojo 👁️ en cada canal para previsualizar solo ese canal." >}}

{{< box_green >}}
Esto es para tener una idea del tipo de distorsión que obtendrás con cada textura, y para tener una idea de cómo "evoluciona" a lo largo del tiempo (útil para ver qué tan suave/dura es, etc).
{{< /box_green >}}

## Opciones

{{< img_caption "stm-options-panel-2.png" "Panel de opciones" >}}

- {{< cell "1" >}} - El algoritmo utilizado para interpolar la textura final (útil si se va a redimensionar).
- {{< cell "2" >}} - Opciones de guardado. Puedes elegir una carpeta predeterminada para guardar o elegir que te pregunten cada vez que guardes.
- {{< cell "3" >}} - *Skins*/temas de la interfaz

<!-- {{< img_caption "stm-skins-grid-riot.jpg" "4 temas distintos" >}} -->
{{< img_caption "stm-skins-blue.webp" "4 temas distintos" >}}

# Atajos de teclado

Atajo | Función
:-- | :-:
{{< shortcut "CTRL+S" >}} | **Guarda** la imagen comprimida
{{< shortcut "F1" >}} | Muestra el **panel de opciones**

# Contacto


Twitter: {{< get_social "twitter" >}}

Mail: {{< get_social "email" >}}


{{< link_card title="Simple Texture Merger" 
subtitle="Programa para comprimir 4 texturas en 1!" 
url="https://orb91.gumroad.com/l/simple-texture-merger" 
cover="stm-gumroad-cover.png" 
c=#DE6766 
url_text="www.orb91.gumroad.com" 
position="50% 30%" >}}