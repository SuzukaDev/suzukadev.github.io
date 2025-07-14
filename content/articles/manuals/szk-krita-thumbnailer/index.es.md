+++
title = 'SZK Thumbnailer (Krita)'
date = '2025-06-27T22:36:18+02:00'
description = "Plugin de Krita para dibujar miniaturas (*thumbnails*) más rápido!"
lastmod = '2025-06-27T22:36:18+02:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["SZK Thumbnailer", "Krita Thumbnailer", "krita","art","concept art", "thumbnails"]
tags = ["krita","art","concept art"]
main_classes = 'sans-font' # classes for <main> element. Allows customization of each page. Example of use: add a class from `fonts.scss` to change the page font. (consolas-font, handwritten-font, etc).
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
# featured_image = 'szk-krita-thumbnailer.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'SZK Krita Thumbnailer' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags
# related_pages = [""] # If set, these pages (up to 3) will be displayed in the related section for this page. Useful when you want to be sure that a page appears as related
+++









<!-- > Thumbnailer: Plugin de Krita para dibujar miniaturas (*thumbnails*) más rápido! -->

{{< link_card title="SZK Thumbnailer (Krita)" 
subtitle="Plugin de Krita para dibujar miniaturas (*thumbnails*) más rápido!" 
url="https://orb91.gumroad.com/l/szk-krita-thumbnailer" 
cover="FEATURE-cover-from-header-v2.png" 
c="rgb(52, 53, 58)"
url_text="www.orb91.gumroad.com" 
position="50% 50%" >}}

> Thumbnailer es un *plugin* de Krita diseñado para agilizar y acelerar la creación de miniaturas y generar nuevas ideas más fácilmente.



<!-- Divide automáticamente el lienzo en múltiples regiones/miniaturas y alterna entre las selecciones manualmente o automáticamente (en intervalos definidos por el usuario), lo que permite un esbozo e ideación rápidos y sin interrupciones. -->

Divide automáticamente el lienzo en múltiples regiones/miniaturas y selecciona automáticamente (o manualmente) cada región, para que solo tengas que preocuparte en dibujar y en generar ideas.

{{< img_caption "header-full.png" >}}

Está inspirado por el artista conceptual y ilustrador francés Stephane Richard (Wootha).


# Instalación

1. Descarga el `.zip`.
2. En Krita, ve a ***Herramientas (Tools) ‣ Guiones (Scripts) ‣ Importar complemento de Python desde archivo***, selecciona el archivo `.zip` y presiona `OK`.
3. Reinicia Krita.
4. Ve a ***Preferenciasl ➡ Paneles ➡ SZK Thumbnailer***

Aparecerá un nuevo ***panel*** con el *plugin*.



# Uso
{{< img_caption "tab1" >}}

{{< cell "1" >}} <u>**Seleccionar la siguiente/anterior miniatura**</u> Selecciona la anterior/siguiente miniatura.

{{< cell "2" >}} <u>**Selecciona un pincel aleatorio:**</u> Útil para dar con nuevas texturas, formas, etc.

{{< img_caption "thumbnails-favs.png" >}}

{{< cell "3" >}} <u>**Play/Pausa y Stop:**</u> Inicia/pausa el temporizador definido en las [opciones](#opciones). Presionar detener finaliza la sesión actual.


# Opciones

{{< img_caption "tab2" >}}

{{< cell "1" >}} **Presets**: Carga, graba y borra presets.

{{< cell "2" >}} ***Layout***: Selecciona el algoritmo usado a la hora de crear los thumbnails (Uniform Grid, Custom Grid, Random Grid).

{{< cell "3" >}} **Opciones del *Layout***: Opciones específicas del *layout* seleccionado.

{{< cell "4" >}} **Opciones**

- <u>**Tiempo**</u>: Tiempo de duración para cada *thumbnail*.
- <u>**Subdivisiones**</u>: Número total de divisiones en el que se divide el lienzo.
- <u>***Padding***</u>: Margen de separación para cada *thumbnail*. Usa un ‰ del lado más pequeño del documento, para obtener márgenes similares entre distintos tamaños del documento.
- <u>**Use a new layer for each thumbnail**</u>: Si está seleccionado, se creará una nueva capa para cada miniatura.
- <u>**Randomize Brush**</u>: Si está activa, al acabar cada *thumbnail* se seleccionará un pincel aleatorio.
{{< box_info >}}
Esto viene bien para ayudar a lograr un resultado diferente (textura, formas, etc.) en la próxima miniatura y experimentar.
{{< /box_info >}}
	- <u>**Dos veces (Twice)**</u>: Si está seleccionada, el pincel se *randomizará* 2 veces.
{{< box_info >}}
Esto es útil para tener **2 presets diferentes para cada miniatura** (y alterarlas con el atajo *'Switch to Previous Preset'*).
{{< /box_info >}}
- <u>**Show progress bar**</u>: Muestra una barra con el tiempo que queda para acabar la miniatura actual.

{{< img_caption "tab3.png" >}}

{{< cell "1" >}} <u>**Abre el Manual Online**</u>

{{< cell "2" >}} <u>**Abre la página de Gumroad**</u>

- <u>**Texto con información**</u>: Muestra el total de miniaturas y el tiempo total.


# Atajos de teclado

El *plugin* incluye los siguientes atajos:

Function | Shortcut
:--|:-:
Select Previous Thumbnail | (*Sin asignar*)
Select Next Thumbnail | (*Sin asignar*)
Select Random Brush | (*Sin asignar*)


<!-- # Descarga 💾

{{< download_file file="download/1.0.0/szk_thumbnailer.zip" type="krita" text="Download Plugin" >}} -->

# Changelog

Versión | Cambios
:-- | :--
2.0.0 | - Añadidos nuevos layouts (Custom Grid, Random) <br> - Optimización al cambiar de thumbnail <br> - Padding/margen relativo al tamaño del documento (para obtener márgenes consistentes entre distintos tamaños de lienzo) <br> - Opción para guardar presets
1.1.0 | - Opción para randomizar los pinceles <br> - Añadidos algunos *tooltips* a la IU.
1.0.0 | *Release*


# Apoyar 🍀

Si deseas apoyar el plugin, puedes hacerlo a través de {{< get_social social=gumroad icon=false text="Gumroad" >}}:




# Contacto

Email: {{<get_social "email" >}}

Twitter: {{<get_social twitter true >}}


{{< link_card title="SZK Thumbnailer (Krita)" 
subtitle="Plugin de Krita para dibujar miniaturas (*thumbnails*) más rápido!" 
url="https://orb91.gumroad.com/l/szk-krita-thumbnailer" 
cover="FEATURE-cover-from-header-v2.png" 
c="rgb(52, 53, 58)"
url_text="www.orb91.gumroad.com" 
position="50% 50%" >}}