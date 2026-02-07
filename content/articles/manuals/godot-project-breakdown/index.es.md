+++
title = 'Godot Project Breakdown'
date = '2020-03-20T12:09:34+01:00'
description = "VSCode extension for managing Godot projects"
lastmod = '2026-02-07T12:09:34+01:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
keywords = ["SZK", "Suzuka", "Suzuka Ka", "SuzukaKDev", "Godot Project Breakdown", "Godot", "VSCode", "Extension"] # custom keywords for the page
tags = ["Godot", "VSCode", "Gamedev", "Programación"]
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

<!-- {{< box_warning >}} -->
<!-- Página no traducida (de momento). Para leer el artículo, [visita la página en inglés 🇬🇧]({{% relref path="godot-project-breakdown" lang="en" %}}). -->
<!-- {{< /box_warning >}} -->

## Godot Project Breakdown 🤖
<!-- <p align="center">
	<img width="256" height="256" src="https://github.com/SuzukaDev/vscode-godot-project-breakdown/blob/master/images/icon.png?raw=true">
</p> -->

{{< img_caption img="icon.png" class="no-box-shadow" >}}


<!-- ### Overview -->
<!-- Extensión para [VSCode](https://code.visualstudio.com/) que analiza todos los archivos **.gd** de tu proyecto de Godot (**works only with .gd**), los analiza y crea un un único archivo de resumen. analyze them and gives a overview of all of them in a single file. -->

Extensión de [**VSCode**](https://code.visualstudio.com/) que obtiene todos los archivos **.gd** de tu proyecto de [**Godot**](https://godotengine.org/es/), los analiza y proporciona una vista general de todos ellos en un único archivo.

Para cada archivo `.gd`, muestra sus variables y métodos privados o públicos*, señales definidas, referencias a nodos y enums.


> **\*** Los campos privados y públicos **no existen** (al menos por ahora) en GDScript, pero si utilizas el prefijo "\_" para diferenciar campos privados (con "\_") de públicos (sin "\_"), lo tendrá en cuenta.*


{{< box_info >}}
Hice esta extensión hace muchos años, cuando Godot todavía **no contaba con soporte para `C#`**, por lo cual, al menos de momento, **solo funciona con archivos gdscript** (`.gd`)
{{< /box_info >}}



### Razones y Motivación

Hice esta extensión para mí mismo, para poder rastrear y actualizar fácilmente cada cambio en mi proyecto, de modo que pudiera gestionar/actualizar fácilmente la documentación de mi proyecto (en mi caso, un diagrama UML para mi juego).  
En lugar de llevar el seguimiento de cada cambio manualmente, simplemente genero un nuevo archivo, lo comparo con la versión anterior (usando control de versiones) y actualizo efectivamente mi documentación.

Publiqué la extensión por si resulta útil para alguien más.

## Uso 🔧

{{< box_warning >}}
**Requisitos previos**: esta extensión requiere [Godot tools](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools)
{{< /box_warning >}}

1. [Descarga la última versión](https://github.com/SuzukaDev/vscode-godot-project-breakdown/releases) e instálala

{{< box_info >}}
Si estás usando una versión de Godot Tools inferior a 1.X.X, [descarga la versión 1.0.1](https://github.com/SuzukaDev/vscode-godot-project-breakdown/releases/tag/v1.0.1)<br>

Si estás usando Godot 3.2 o superior y una versión de Godot Tools igual o superior a 1.X.X [descarga la última versión](https://github.com/SuzukaDev/vscode-godot-project-breakdown/releases)
{{< /box_info >}}

2. Para instalar los archivos **.vsix**, ve a `extensions -> ... -> "Install from vsix"`

	{{< img_caption "how_to_install_vsix.gif" >}}<br>

3. Abre la paleta de comandos (<kbd>F1</kbd>)  
4. Escribe `Generate breakdown file`  
5. Ejecuta el comando

{{< img_caption img="demo.gif" >}}

6. ¡Listo! 🥳

## Opciones de la extensión ⚙
El archivo de resultado es **altamente personalizable** para adaptarse a tus necesidades.  
Puedes especificar qué datos mostrar, en qué orden y cómo.

La mayoría de las opciones se explican por sí mismas en la descripción de sus ajustes. Pero **algunas** de ellas:

- `godotProjectBreakdown.file.order`  
Esta es una de las configuraciones más importantes. Es un `string` que especifica los datos a mostrar y el orden. Su valor por defecto es `f# p ne svm`

{{< box_info >}}

Cada carácter representa un dato en el archivo:  
`n` - Referencias a nodos<br>  
`s` - Señales<br>  
`v` - Variables<br>  
`m` - Métodos<br>  
`p` - Ruta del archivo<br>  
`f` - Nombre del archivo<br>  
`e` - Enums<br>  
`#` - Comentarios de clase. En cualquier GDScript, puedes poner el texto que quieras mostrar en el archivo si lo incluyes entre `###\` y `/###`. Por ejemplo:  
`###\ (Tu comentario aquí) /###`

`(Espacio vacío)` - Separación de línea (equivale a \\n)

{{< /box_info >}}

- `godotProjectBreakdown.file.sortScriptsBy`  
Permite ordenar los scripts por su ruta, nombre o nodo/script extendido.

- `godotProjectBreakdown.separator.{...}`  
Un `string` que te permite añadir un encabezado personalizado para cada propiedad.

- `godotProjectBreakdown.prefix.{...}`  
Permite añadir un prefijo personalizado para cada propiedad.

- `godotProjectBreakdown.file.ignoreFolders`  
Un [Glob Pattern](https://code.visualstudio.com/api/references/vscode-api#GlobPattern) para ignorar carpetas/archivos que no quieras mostrar en el archivo de resumen.

Su valor por defecto es `"**/addons/**"`, lo que significa que ignorará archivos dentro de cualquier carpeta llamada "addons".

{{< box_info >}}
Si los [Glob Patterns](https://code.visualstudio.com/api/references/vscode-api#GlobPattern) son nuevos para ti, [esta herramienta](https://globster.xyz) es muy útil para asegurarte de que tu patrón glob es correcto.
{{< /box_info >}}

- `godotProjectBreakdown.file.showEnumValues`  
Un `bool` para mostrar (`true`) o no (`false`) los valores de cada enum.

## Posibles mejoras futuras
- Analizar todos los archivos `.tscn` del proyecto para obtener más información, como por ejemplo señales conectadas mediante el editor.

- Quizá suba la extensión al marketplace de VSCode en el futuro.

## FAQ
{{< header "¿Por qué el nombre de la extensión es tan malo?" 4 "left" >}}

Porque no pude pensar en un nombre mejor :D

## Licencia del logo ©
El logo de la extensión utiliza y modifica el logo original de Godot de Andrea Calabró.

Su licencia:  
Godot Logo (C) Andrea Calabró  
Distribuido bajo los términos de la licencia Creative Commons Attribution  
versión 3.0 (CC-BY 3.0) <https://creativecommons.org/licenses/by/3.0/legalcode>.

## Contacto
{{< get_social "email" >}}

{{< get_social "twitter" >}}





