+++
title = 'SZK Krita Pixel Art Suite'
date = '2025-05-22T22:57:12+02:00'
description = "*Plugin* de Krita que añade muchas **mejoras** para dibujar ***Pixel Art***!"
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
# featured_image = 'szk-krita-pixel-art-suite.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'featured_image' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'Szk Krita Pixel Art Suite' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Nota: Tags must match the tag in .Params.tags
# related_pages = [""] # If set, these pages (up to 3) will be displayed in the related section for this page. Useful when you want to be sure that a page appears as related
+++



> Plugin de ***{{< text_handwritten text="Krita" font= 3 >}}*** que añade **{{< text_wavy2 "un MONTÓN de funcionalidades" 0.5 0.03 >}}** para hacer **{{< text_shimmer text="Pixel Art" font=2 >}}**!


{{< link_card 
  url="https://orb91.gumroad.com/l/szk-krita-pixel-art-suite"
  cover="images/feature_logo-animated-512px.webp"
  title="SZK Pixel Art Suite"
  subtitle="Añade muchas mejoras para hacer Pixel Art in *Krita*!"
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

{{< box_info >}}
La traducción se ha realizado con la traducción **Español de España** en **Krita**.
{{< /box_info >}}

# Instalación

1. Descarga el `.zip`.
2. En Krita, ve a ***Herramientas (Tools) ‣ Guiones (Scripts) ‣ Importar complemento de Python desde archivo***, selecciona el archivo `.zip` y presiona `OK`.
3. Reinicia Krita.
4. Ve a ***Preferenciasl ➡ Paneles ➡ SZK Pixel Art Suite***

Aparecerá un nuevo ***panel*** con el *plugin*:

{{< img_caption img="images/docker-combined.png" caption="Las distintas pestañas del panel del plugin" class="no-box-shadow" >}}



## Pestañas 
{{< row >}}

{{< img_caption img="tabs-legend.png" caption="Pestañas del plugin" class="no-box-shadow" >}}

<!-- <div> -->
<div style="flex: 0 auto; text-align:left;">
{{< cell "1" "#FF8526FF" "#gama-de-sombras-y-luces" >}} {{< link_color "#gama-de-sombras-y-luces" "**Gama de sombras y luces**" "#FF8526FF" >}} <br><br>

{{< cell "2" "#FF8526FF" "#remplazo-de-color" >}} {{< link_color "#remplazo-de-color" "**Remplazo de Color**" "#FF8526FF" >}} <br><br>

{{< cell "3" "#FF8526FF" "#pintura-indexada" >}} {{< link_color "#pintura-indexada" "**Pintura indexada**" "#FF8526FF" >}} <br><br>

{{< cell "4" "#FF8526FF" "#exportación" >}} {{< link_color "#exportación" "**Exportación**" "#FF8526FF" >}} <br><br>

{{< cell "5" "#FF8526FF" "#k-sprite" >}} {{< link_color "#k-sprite" "**K-Sprite**" "#FF8526FF" >}} <br><br>

{{< cell "6" "#FF8526FF" "#opciones" >}} {{< link_color "#opciones" "**Opciones**" "#FF8526FF" >}} <br><br>
</div>

{{< /row >}}


# Gama de sombras y luces

Está inspirado el panel de gama de sombras y luces que ofrecía [*Pyxel Edit*](https://pyxeledit.com/), el cual generaba tonos para las sombras y las luces muy interesantes de forma muy sencilla. 

Añade la funcionalidad original a *Krita* y lo expande **añadiendo nuevas opciones**.

{{< img_caption img="color-tab-3.png" class="no-box-shadow" >}}

Funciona generando **distintas variaciones de tono en torno a un color de base**. Este color de base <u>estará siepre en el centro del gradiente</u> (a excepción del gradiente "mix" (Mezcla/mixer)).

{{< details summary="Funcionalidad original (explicación)" color=#FF8526FF >}}


La **paleta principal de sombreado** (arriba del todo), funciona desplazando/acercando el valor, la saturación y el tono (hue) del color seleccionado a un tono azul específico para las sombras (a la izquierda). Para los colores brillantes (a la derecha), funciona igual, pero desplazando los colores a un tono amarillo.

<br>

{{< cell "l" >}} - Modifica -únicamente- el **valor (luz)**.

<br>

{{< cell "s" >}} - Modifica -únicmente- la **saturación**.

<br>

{{< cell "h" >}} - Modifica -únicmente- el **tono/hue**.

<br>



{{< box_green >}}
**l**, **s** y **h** son muy útiles para modificar precisamente el color actual, mediante el {{< shortcut "Botón Central del ratón" >}} [(Ve la sección de 'Muestras')](#muestras)
{{< /box_green >}}

{{< /details >}}







{{< details summary="Paletas adicionales (Explicación)" color="#e400ff" open=false >}}

Las paletas {{< cell "2" >}} y {{< cell "3" >}} están afectadas por el tono/hue de los **deslizadores** que están encima de ellas. El **deslizador de la izquierda** controla el **tono/hue** para las **sombras**, mientras que **el deslizador derecho** controla el **tono/hue** de los **tonos de luz**.

<br>

{{< box_green >}}

Esto **ofrece más control** a la hora de lograr combinaciones de colores cohesivas para pintar escenas con distintas iluminaciones.

> For example, lets say you are painting a sunset scene with an *orange* light source, and you want the shadows to gather around a pink. You can select both hues in the sliders and generate easily colors that look good in that setting.

> Por ejemplo, en el caso de que estuvieras pintando un atardecer con una luz naranja y en el que quieres que las sombras tiendan al color rosa, puedes seleccionar ambos tonos en los deslizadores. De esa forma, los colores que elijas siempre tendrán coherencia en dicha escena.

{{< /box_green >}}


> {{< cell "2" >}} Usa el **mismo algoritmo** que la paleta inspirada por ***Pyxel Edit***. 
> <br>
> <br>
> {{< cell "3" >}} Usa un **algoritmo distinto** (normalmente ofrece colores más apagados en las sombras, y luces más vivas/coloreadas).

---
{{< header "Mezclador (Mix)" 3 "left" >}}

Mezcla 2 colores.

{{< box_info >}}
Usa un algoritmo que **comprueba la similitud entre los dos colores**, y reduce o añade más muestras en función de lo similares que sean.

(Cuanto más distintos sean, más colores añade).

> Puedes cambiar la resolución (el número de colores) con el {{< cell "deslizador vertical" >}} que hay al lado del color {{< cell "2" >}}.

{{< /box_info >}}


Pulsa los botones/colores {{< cell "1" >}} y {{< cell "2" >}} para cambiar los colores de la mezcla.

Dichos botones tienen los siguientesatajos/*shortcuts*:

<br>

| Atajo         | Acción     
| :----------- | ------: | 
| {{< shortcut "Click Izquierdo" >}} | Invoca el panel de selección.
| {{< shortcut "CTRL + Click Izq." >}}| Invoca el *sampleador de color* para seleccionar cualquier color en pantalla.
| {{< shortcut "ALT + Click Izq." >}}| Selecciona el **color primario**
| {{< shortcut "Click Derecho" >}}| Selecciona el **color secundario**.

<br>

{{< box_green >}}
Personalmente, el atajo {{< shortcut "CTRL + Click Izq." >}} me parece lo más rápido y es la principal forma en la que uso el mixer.
{{< /box_green >}}

{{< /details >}}

**Para generar una paleta/gradiente**
- Presiona el botón {{< cell "FG" >}} / {{< cell "BG" >}} para seleccionar el color **primario/secundario** actual, y generar la paleta entorno a dicho color.
- Presiona el botón {{< shortcut "Botón Central del Ratón" >}} en una muestra de color. [Lee la sección 'Muestras' para más información.](#muestras)

## Muestras

> Una '*muestra*' es cada uno de los colores que conforman el gradiente.

Atajos de ratón:
| Atajo         | Acción     
| :----------- | ------: | 
| {{< shortcut "Click Izq." >}} | Selecciona el **color primario**
| {{< shortcut "Click Der." >}}| Selecciona el **color secundario** 
| {{< shortcut "Botón Central del Ratón" >}}| Selecciona el **color primariod** <u>y **regenera la paleta**</u>


{{< box_info "💡" >}}
Personalmente, el atajo del {{< shortcut "Botón Central" >}} me parece muy util para modificar los colores con precision, al modificar su valor, hue, saturación, etc., hasta que obtengas el tono que buscas.
{{< /box_info >}}

Cuando haces click en una muestra, el color seleccionado se vuelve activo:

{{< img_caption "swatch-selected.png" "El borde blanco indica que el color está seleccionado" >}}

Una vez seleccionado un color, puedes:

- Moverte fácilmente hacia delante/atrás en la paleta seleccionada mediante atajos de teclado. ([Échale un vistazo a la sección de atajos de teclado](#atajos-de-teclado))

- **Añadir** el gradiente a la **paleta que tengas activa**.

## Gestionando las paletas

La pestaña de *Gama de sombras y luces* está "conectada" al panel de **"Paleta"** de ***Krita***.

{{< details summary="Como mostrar el panel 'Paleta'" >}}

Ve a `Preferencias -> Paneles -> Paleta`.

{{< img_caption "show-palette-docker.png" >}}

<br>

Aparecerá un panel como este:

<br>

{{< img_caption "native-palette-docker.png" "Panel *Paleta*" >}}

{{< /details >}}


### Añadir colores a la paleta

Cuando tiene un gradiente seleccionado (tras haber seleccionado una muestra), puede añadir todos sus colores a la paleta activa. Para ello, pulsa este botón:

{{< img_caption "add-colors-to-palette.png" "Añade los colores del gradiente seleccionado a la paleta que tengas activa" >}}


### Ordenar los colores de la paleta

Se ha incluido opciones para **ordenar** los colores en el panel 'Paleta' según distintos criterios (hue, valor, saturación, luz percibida, similitud de colores, etc.), al igual que existen en otros programas de dibujo.


> Esto es algo que personalmente me parece  **muy útil cuando se trabaja con paletas de colores limitadas**.

Para ordenar la paleta activa, pulse el botón {{< cell "..." >}}:

{{< img_caption img="sort-palettes.png" class="no-box-shadow" >}}

La mayoría de las opciones se explican por sí msimas. Aunque algunas merecen ser explicadas:

- **Perceived lightness (luz percibida)**: Ordena los colores en función de cómo percibe la luz el ojo humano. No siempre coincide con la clasificación por «valor».

- **Cielab similarity (similitud Cielab)**: Ordena los colores de la paleta en función de su **semejanza** con el **color activo (primario)**.






# Remplazo de color

Permite reemplazar con precisión un color específico en las capas/grupos seleccionados o en todo el documento.

Resulta útil cuando se desea cambiar una paleta o un color determinado de todo un documento o capa.

{{< box_info >}}
El color a sustituir tiene que coincidir con el **color exacto** (no hay margen a la hora de comparar, el color ha de ser idéntico para ser remplazado).
{{< /box_info >}}

{{< img_caption "color-replace.png" >}}

{{< cell "1" >}} - **Color a reemplazar** (izquierda) y **el color nuevo** (derecha)

{{< details "Se aplican los mismos atajos que en el Mezclador" >}}

| Atajo         | Acción     
| :----------- | ------: | 
| {{< shortcut "Click Izquierdo" >}} | Invoca el panel de selección.
| {{< shortcut "CTRL + Click Izq." >}}| Invoca el *sampleador de color* para seleccionar cualquier color en pantalla.
| {{< shortcut "ALT + Click Izq." >}}| Selecciona el **color primario**
| {{< shortcut "Click Derecho" >}}| Selecciona el **color secundario**.

<br>

{{< box_info >}}
{{< text_wavy2 "No hace falta que los recuerdes!" 0.2 0.1 8 >}} Simplemente **manten el ratón encima (hover)** de los colores para mostrar **un panel informativo** con dichos **atajos**:

{{< img_caption "color-replace-tooltip.png" >}}

{{< /box_info >}}

{{< /details >}}

{{< cell "2" >}} - **Intercambia** ambos colores.

{{< box_warning >}}
**Nota**: Por el momento **rehacer/rehacer no está soportado de forma nativa en los scripts de Krita**, así que si quieres **rehacer los cambios** puedes **intercambiar los colores** (con el botón de intercambio) y **reejecutar el reemplazo de color**.
{{< /box_warning >}}

{{< cell "3" >}} - **Alfa** del nuevo color (en caso de que tengas que cambiarlo).

{{< cell "4" >}} - Remplaza el color en **la(s) capa(s) seleccionada(s)**.

{{< box_green >}}
Puedes seleccionar más de una capa.
{{< /box_green >}}

{{< cell "5" >}} -  **Reemplaza el color en todas las capas** del documento.







# Pintura indexada

Establece un grupo de pintura indexada para una capa (o grupo) con un solo clic.

{{< img_caption "index-painting-animation.webp" >}}


{{< details summary="Que es la ***Pintura Indexada (Index Painting)***?" open=true >}}

***Index Painting*** is a technique that **automatically dithers and reduce colors on a non-pixel art artwork**. 

> Esto significa que <strong>{{% text_wavy "puedes usar todos tus pinceles que no sean pixel art en Krita" 0.03 10 %}}</strong> , degradados, etc. para pintar y aún así obtener una estética Pixel Art. 👌

Ejemplo de la estética que se puede lograr con la pintura indexada:
<div style="margin: auto; width: fit-content;">
{{< x user="roboticgeo" id="1917584059217187194" >}}
</div>


Si tienes curiosidad, puedes [**aprender más sobre esta técnica aquí.**](http://danfessler.com/blog/hd-index-painting-in-photoshop){{< /details >}}


Viene con un editor de patrones que permite crear, guardar y cargar diferentes patrones/preajustes para el efecto de *dithering*.
Esto es principalmente para experimentar y descubrir nuevos efectos/resultados.
{{< img_caption "index-painting-example-city-sunset.png" "Hice el cielo en esta obra usando Pintura Indexada." >}}



## Interfaz

{{< img_caption "index-painting-tab-steps.png" >}}

- {{< cell "1" >}} **Tamaño de la Matriz**: Aumentar/disminuir las filas/columnas de la matriz de dithering.

<br>

- {{< cell "2" >}} **Rotar**: Rota la matriz de dithering.
{{< img_caption "index-painting-rotate.webp" >}}

<br>


- {{< cell "3" >}} **Invertir**: Invierte el color en la matriz de dithering.
{{< img_caption "index-painting-invert.webp" >}}

<br>

- {{< cell "4" >}} **Limpiar la matriz**: Restablece todas las celdas.

{{< box_info >}}
Presiónalo **dos veces** para pintar/borrar todas las celdas.
{{< /box_info >}}

- {{< cell "5" >}} **Preajustes de Dither**: Elije un preajuste para la matriz de *dithering*.

- {{< cell "6" >}} **Guardar preajuste**: Guarda la matriz de *dithering* actual para usarla más tarde.

- {{< cell "7" >}} **Eliminar preajuste**: Elimina el **preajuste seleccionado**.

- {{< cell "8" >}} **Matriz de Dither**: Aquí puedes pintar/modificar cada celda de la matriz de dither. Cada celda representa un píxel del patrón de dither.

{{< img_caption "index-painting-tab.webp" >}}

Hay varias maneras diferentes de pintar la matriz:
Atajo | Acción
:-- | --:
{{< shortcut "Click Izq." >}} / {{< shortcut "Click Der." >}} | Pintar/borrar celda.
{{< shortcut "CTRL + Left/Click Der." >}} | Añade/resta el valor de la celda.
{{< shortcut "ALT + Left/Click Der." >}} | Pinta de forma **gradual/más suave**.

{{< box_info >}}
**Consejo**: Mantén el ratón sobre una celda (**o cualquier elemento de la interfaz!**) para ver un cuadro de información con dichos shortcuts.
{{< /box_info >}}

- {{< cell "9" >}} **Crear grupo de Pintura Indexada**: Pulsa para generar un grupo de Pintura Indexada a partir de la capa/grupo seleccionada.

- {{< cell "10" >}} **Actualizar la capa de dithering**: Vuelve a pintar la capa con el patrón de *dithering*. Viene bien para ver los cambios despues de pintar la matriz.
{{< box_warning >}}

La capa activa debe ser la capa "Dither" o una "hermana" (estar al mismo nivel) que la capa "Dither".

Nota: La capa de dithering debe llamarse "Dither". Esto se debe a que después de presionar el botón, busca si hay un grupo de Pintura Indexada configurado con una capa de dithering.
{{< /box_warning >}}


- {{< cell "11" >}} **Crear capa de dithering**: Añade una capa con el patroón de *dithering* definido en la matriz.
{{< box_green >}}
Esto puede servir para **generar patrones de *dithering*** (y luego usarlos en pinceles, gradientes, etc).
{{< /box_green >}}



## Configurando un grupo de Pintura Indexada

Teniendo un dibujo en **blanco y negro** (o una capa vacia, si quieres dibujar desde cero):

{{< img_caption "index-painting-tutorial-1.png" >}}

{{< box_info >}}
Nota: Es preferible si el dibujo ya consta de una silueta con los **bordes bien definidos**, ya que la Pintura Indexada tiende a generar bordes suaves/poco definidos (lo cual no suele ser una estética que se busque al hacer Pixel Art).
{{< /box_info >}}

Pulsa el botón ***Index Painting***, en la pestaña de Pintura Indexada:

{{< img_caption "index-painting-press-button.png" >}}

Obrendrás algo parecido a:

{{< img_caption "index-painting-tutorial-2.png" >}}

Crea un grupo con todo lo necesario para la Pintura Indexada.

El **grupo** consiste de:

- Un filtro de **Gradient Map** / **Index Colors**, dependiendo de tus opciones en [*Opciones de Pintura Indexada*](#opciones-de-pintura-indexada)
{{< box_info >}}
**Nota**: Haz {{< shortcut "Click Derecho" >}} en esta capa para abrir las **Propiedades** del filtro y editar los colores de la Pintura Indexada.
{{< /box_info >}}
- **Dither**: Esta capa contiene el patrón de *dithering* de la matriz.
{{< box_info >}}
Nota: Si estás usando un *Gradient Map*, puedes cambiar su patrón en las propiedades (Click Derecho en la capa -> Propiedades). Tener ambos patrones intensifica el efecto de *dithering*.
{{< /box_info >}}
<br>
  {{< box_green >}}
  Consejo: **Incrementa/reduce** la opacidad **opacity** de la capa **cambiar** la fuerza del efecto de *dithering*.
  {{< /box_green >}}

- **Gradient** (opcional, depende de tus [*Opciones de Pintura Indexada*](#opciones-de-pintura-indexada)): Ayuda a visualizar el efecto y a samplear colores.
{{< box_green >}}
Teniendo la capa *"Gradient"* seleccionada, puedes **samplear su color en blanco y negro** con el atajo {{< shortcut "CTRL+ALT+LeftMButton" >}}. Esto sirve también para controlar/saber qué textura tendrá el *dither* con el valor seleccionado.
{{< /box_green >}}

- [La capa/grupo que tenías seleccionada] (***B&W sphere*** en este ejemplo): {{< text_wavy2 "Aquí es donde pintas! (en blanco y negro!)" 0.5 0.014 >}}







# Exportación

Permite exportar el documento (o la(s) capa(s) seleccionada(s)) multiplicada por un factor, con un solo click de forma muy fácil y rápida.


{{< img_caption img="images/export.png" caption="Left: Original scale. Right: Scaled" class="no-box-shadow" >}}

Esto es útil para cuando quieres exportar tu imágen pixel art con un tamaño aumentado (para que se note que es Pixel Art).

{{< img_caption img="export-tab-new.png" caption="Pestaña de Exportación" >}}

## Opciones de la imagen

- **Escala**: Factor por el que se multiplica el tamaño de la imagen. 
- **Calidad**: La calidad de compresión de la imagen. Cuanto más alta, mayor calidad.
- **Directorio**: Soporta directorios <u>**relativos** y **absolutos**</u>.
  - **Relativos**. Ejemplo: `Exports/Version 1` exportará las imágenes en un subdirectorio relativo al directorio en el que se encuentra tu documento actual.
    - Ejemplo: Si tu documento se encuentra en `C:\Users\Dexter\Desktop\my-awesome-pixel-art.kra`, las imágenes exportadas se guardarán en `C:\Users\Dexter\Desktop\Exports\Version 1`
  - **Absoluto**. Ejemplo: Establecer un directorio absoluto (como por ejemplo: `C:\Users\Mike\Pictures\My Pixel Art`) guardará todas las imágenes exportadas en dicho directorio (**y no tendrá en cuenta el directorio del documento**).
- **File name (Nombre del fichero)**: El nombre de la imagen exportada.
{{< box_green >}}
Si lo dejas **<u>vacío</u>** usará **el nombre del documento**. 
{{< /box_green >}}



- **Formato**: Selecciona el formato de la imagen. (Soporta los formatos `.png`, `.jpg`, `.webp` y `.bmp`)

## Opciones de nombrado
- **Add scale (Añadir escala)**: Si está activado, adjuntara el factor de escala al nombre de la imagen.
- **Overwrite (Sobrescribir**: Si está desactivado, añadira un sufijo único con la fecha actual, para evitar sobrescribir las imágenes que guardes.
{{< box_info >}}
Esto es útil si deseas guardar manualmente algunos "instantáneas" de tu dibujo y no quieres sobrescribir las imágenes.
{{< /box_info >}}
  - Si está activado, las imágenes con el mismo nombre serán sobrescritas.

---
- **Selection only (Solo la selección)** - Si está activado, solo exportara la region seleccionada. Util para cuando quieres exportar solo un área específica del documento.
- 📁 - Haz click para abrir la carpeta donde se exportan las imágenes.
- **Export Scaled (Exportar Escalado)** - Exporta todo el documento.
- **Export Selected (Exportar Seleccionados)** - Exporta solo la capa/capas/grupos seleccionado(s).
  - **Trim (Recortar)** - Si está activado, las layers exportadas serán recortadas automáticamente. Si está desactivado, su tamaño será el mismo del documento.
{{< box_green >}}
Esto es útil, por ejemplo, para exportar fácilmente diferentes sprites en un mismo documento para un videojuego 🎮.
{{< /box_green >}}






# K-Sprite

K-Sprite es un **editor de Pixel Art dentro de Krita** que está destinado a añadir todas las **características y funcionalidades** de Pixel Art que le faltan a Krita. Como un pincel pixel perfecto, mejores primitivas, líneas bezier, texto pixelado, etc.

{{< img_caption img="https://i.pinimg.com/originals/e7/95/d3/e795d3bfaa35b8843bf27b83e65a111d.gif" caption="Un 'editor de dibujo' dentro de otro editor de dibujo?" class="spoiler-blur" >}}


> No está pensado para reemplazar por completo el proceso de dibujar Pixel Art en Krita (¡porque Krita sigue siendo una gran herramienta para eso!). Está destinado a **agregar todas las herramientas que le faltan a Krita** y hacer que crear Pixel Art en Krita sea {{< text_wavy2 "¡una mejor experiencia! 🥳" 0.5 0.1 6 >}} 


## Tutorial

Para ejecutar **K-Sprite**, ve a la `Pestaña del Lápiz ✏️` del *docker*, o presiona el **atajo de teclado** `Open SZK K Pixel Art Editor (SZK Pixel Art Suite)` (Por defecto {{< shortcut "Alt+F3" >}}).

<!-- A new window will appear on top of Krita (`1`), and will grab the active layer (`2`): -->
Se abrirá una **nueva ventana**, siempre por encima de Krita {{< cell "1" >}}, y **capturará la capa activa** {{< cell "2" >}}:

>{{< cell "1" >}} - **La ventana siempre se mostrará siempre en la parte superior** para que puedas **seguir usando otros dockers/plugin de krita** mientras dibujas en *K-Sprite*.
>
>{{< cell "2" >}} - La capa activa **estará oculta temporalmente en la interfaz de Krita**. Esto se debe a que K-Sprite renderiza el documento, y tenerla visible hará que sea imposible ver los cambios en caso de que borres partes de la capa activa dentro de *K-Sprite*.

{{< box_info >}}
Podrás **dibujar** en la **capa que tenía seleccionada cuando ejecutaste K-Sprite**.

Esta capa **se mostrará en la parte superior (siempre visible)**, mientras que el resto del documento se renderizará al fondo.

{{< img_caption "k-sprite-layer-order.png" "La capa seleccionada (círculo rosa) aparece en la parte superior cuando se edita en K-Sprite." >}}

{{< box_green >}}
Una vez que efectues los cambios, aparecerá como de costumbre en Krita, en su posición de capa correcta.
{{< /box_green >}}

{{< /box_info >}}

## Interfaz

{{< img_caption "k-sprite.png">}}


- {{< cell text="**Active tool options / Opciones de la herramienta**" color="rgb(91, 91, 240)" url="#opciones-de-la-herramienta" >}}: Opciones de la herramienta seleccionada.
- {{< cell text="**Actions / Acciones**" color="rgb(91, 91, 240)" url="#acciones" >}}: Diferentes acciones, deshacer/rehacer, modo solo, etc.
- {{< cell text="**Tool Bar / Barra de Herramientas**" color="rgb(91, 91, 240)" url="#herramientas" >}}: Contiene todas las **herramientas** de dibujo.
- {{< cell text="**Canvas / Lienzo**" color="rgb(91, 91, 240)" url="#lienzo" >}}: Aquí es donde se dibuja.
- {{< cell text="**Export Buttons / Botones para exportar**" color="rgb(91, 91, 240)" url="#botones-de-exportacion" >}}: Guarda los cambios realizados.
- {{< cell text="**Info Bar / Barra de información**" color="rgb(91, 91, 240)" url="#barra-de-información" >}}: Ofrece información acerca de la herramienta seleccionada.


{{< header t="Opciones de la herramienta" h=3 align="left" class="underline" >}}
### Opciones de la herramienta {.no-display}

Opciones para las diferentes herramientas de dibujo.

{{< box_info >}}
Estas opciones varian en función de la herramienta seleccionada.
{{< /box_info >}}

{{< img_caption img="k-sprite-tool-options.png" class="no-box-shadow" >}}

Option | | Shortcut
:--|:--|--:
{{< cell "1" >}} Pixel Perfect | Hace trazos pixel art perfectos. | {{< shortcut "Q" >}}
{{< cell "2" >}} Modo Borrador |  | {{< shortcut "E" >}}
{{< cell "3" >}} Modo Dither | Usa {{< link_color url="#interfaz" text="**la matriz de la Pintura Indexada**" class="underline" >}} como patrón de dibujo.| {{< shortcut "D" >}}
{{< cell "4" >}} Modo de relleno| Rellena una primitiva con un color. | {{< shortcut "ALT+F" >}}
{{< cell "5" >}} Espejo X/Y |  | {{< shortcut "M" >}} / {{< shortcut "N" >}}



{{< header t="Acciones" h=3 align="left" class="underline" >}}
### Acciones {.no-display}

{{< img_caption img="k-sprite-action-buttons.png" class="no-box-shadow" >}}

Botón | | Atajo de teclado
:--|:--|--:
{{< cell "1" >}} Modo Solo | Muestra únicamente la capa que está siendo editada. | {{< shortcut "TAB" >}}
{{< cell "2" >}} Ajusta la vista del documento. |  | {{< shortcut "3" >}}
{{< cell "3" >}} Borrar todo | Borra todo el contenido de la capa que está siendo editada. | (No shortcut)
{{< cell "4" >}} Deshacer/Rehacer |  | {{< shortcut "CTRL+Z" >}} / {{< shortcut "CTRL+MAYUS+Z" >}}


{{< row >}}
{{< img_caption "k-sprite-solo-mode.webp" "(1) Modo Solo" >}}

{{< img_caption "k-sprite-delete-all.webp" "(3) Borrar todo" >}}
{{< /row >}}


{{< header t="Herramientas" color="#F23C3CFF" h=3 align="left" class="underline" >}}
### Herramientas {.no-display}
<!-- ### Tools {.no-display .underline} -->

{{< row >}}

{{< img_caption img="tools.png" caption="Herramientas de dibujo" class="no-box-shadow">}}


<div style="flex: 0 auto; text-align: left;">
{{< cell text="1" color="#F23C3CFF" url="#pincel" >}} {{< link_color "#pincel" "**Pincel de 1px**" "#F23C3CFF" >}} <br><br>

{{< cell text="2" color="#F23C3CFF" url="#pincel-antialiasing" >}} {{< link_color "#pincel-antialiasing" "**Pincel de Antialiasing**" "#F23C3CFF" >}} <br><br>

{{< cell text="3" color="#F23C3CFF" url="#lineas" >}} {{< link_color "#lineas" "**Lines**" "#F23C3CFF" >}} <br><br>


{{< cell text="4" color="#F23C3CFF" url="#curvas-de-bezier" >}} {{< link_color "#curvas-de-bezier" "**Curvas de Bezier**" "#F23C3CFF" >}} <br><br>

<!-- {{< cell text="5" color="#F23C3CFF" >}} - Squares <br><br>

{{< cell text="6" color="#F23C3CFF" >}} - Circles <br><br> -->

{{< cell text="5, 6" color="#F23C3CFF" url="#cuadrados-y-circulos" >}} {{< link_color "#cuadrados-y-circulos" "**Cuadrados & Círculos**" "#F23C3CFF" >}} <br><br>

{{< cell text="7" color="#F23C3CFF" url="#cubo-de-relleno" >}} {{< link_color "#cubo-de-relleno" "**Cubo de Relleno**" "#F23C3CFF" >}} <br><br>

{{< cell text="8" color="#F23C3CFF" url="#texto" >}} {{< link_color "#textoo" "**Texto**" "#F23C3CFF" >}} <br><br>

{{< cell text="9" color="#F23C3CFF" url="#herramienta-de-zoom" >}} {{< link_color "#herramienta-de-zoom" "**Herramienta de Zoom**" "#F23C3CFF" >}} <br><br>


</div>

{{< /row >}}




{{< header t="Pincel" color="#F23C3CFF" h=4 align="left" >}}

**Pincel de 1px** con opcion <u>**pixel perfect**</u> para hacer **trazos perfectos**.
**Atajo de teclado**: {{< shortcut "B" >}}

<!-- ![asdf](images/k-sprite/pixel-perfect-[x8].png) -->

{{< img_caption img="pixel-perfect-x8.png" class="no-box-shadow" caption="Trazados de 1px perfectos" >}}



Atajos de dibujo | Action
:--|--:
{{< shortcut "Click Izq. (Mouse Button)" >}} | Dibuja con el color principal.
{{< shortcut "Click Der." >}} | Dibuja con el color secundario.
{{< shortcut "MAYUS" >}} (Mantener) | Dibuja una linea.
{{< shortcut "CTRL+ Click Izq./Click Der." >}} (Mantener) | Selecciona el color primario/secundario.



{{< header t="Pincel de Antialiasing" color="#F23C3CFF" h=4 align="left" >}}

Ayuda a hacer el antialiasing manualmente.
**Atajo de teclado**: {{< shortcut "A" >}}


{{< img_caption img="antialiasing-tool-mix.webp" class="no-box-shadow" >}}


El color calculado actúa como "**puente**" entre el color del pixel actúal, y el de sus vecinos colindantes, para conseguir el efecto de antialiasing. [Si no sabes lo que es el antialiasing, o quieres saber más, lee esté artículo.](https://saint11.art/pixel_art_articles/article5/).



<!-- ❗❗❗❗❗❗❗❗❗❗❗ -->
<!-- ❗❗❗❗❗❗❗❗❗❗❗ -->
<!-- ❗❗❗❗❗❗❗❗❗❗❗ -->
<!-- ❗❗❗❗❗❗❗❗❗❗❗ -->
<!-- TODO DECOMENTAR ESTO CUANDO SUBA LA ACTUALIZACION DEL ANTIALIASING!! -->
<!-- TODO DECOMENTAR ESTO CUANDO SUBA LA ACTUALIZACION DEL ANTIALIASING!! -->
<!-- TODO DECOMENTAR ESTO CUANDO SUBA LA ACTUALIZACION DEL ANTIALIASING!! -->
<!-- **Ofrece 2 algoritmos distintos** para calcular el color del antialiasing:

{{< img_caption "k-sprite-aa-algorithms.png" "Algoritmos del Antialiasing" >}}

- {{< cell text="**Mezcla** (M)" color="rgb(245, 96, 237)" >}} - El color seleccionado es la **mezcla** del color actual y del de sus vecinos.
- {{< cell text="**Paleta** (P)" color="rgb(245, 96, 237)" >}} - Selecciona el color de la **paleta** que es más similar, tanto al pixel actual, como al color de los vecinos (sin repetir el color ni del pixel, ni el de ninguno de sus vecinos adyacentes).

> Esta es el {{< text_wavy2 "mejor método" 0.5 0.1 7 >}} si estás usando una paleta de colores de forma estricta, y <u>solo quieres usar colores que pertenezcan a la paleta</u>.

Los números (*P4, P8, M4, M8*) se refieren al número **total de vecinos** que son **considerados** en el algoritmo:

{{< img_caption "k-sprite-neighbours-dots.png" "4 Vecinos & 8 Vecinos" >}}

- {{< cell text="4" color="#2B56CCFF" >}} - Tiene en consideración 4 vecinos de un pixel.
- {{< cell text="8" color="#f31654" >}} - Tiene en consideración todos los vecinos de un pixel. -->







{{< header t="Lineas" color="#F23C3CFF" h=4 align="left" >}}

Herramienta para crear líneas.
**Atajo de teclado**: {{< shortcut "V" >}}


{{< details summary="Sobre el *snaping*" color="rgb(33, 168, 202)" open=true >}}
> He añadido **{{< text_wavy2 "máaaaaas" >}} ángulos de *snap* para hacer **lineas perfectos** de lo que suele ser habitual en el resto de editores Pixel Art:

<br>

{{< img_caption "k-sprite-line-snap-angles.png" "Izquierda: **Otros editores de Pixel Art'** snapping. Derecha: **K-Sprite** *snapping*" >}}

<br>

Esto se debe a que personalmente me gusta dibujar edificios en perspectiva, calles, etc., y siempre he echado de menos que algunos editores no ofrezcan más ángulos de alineación para hacer algunas líneas más fáciles.
{{< /details >}}



{{< header t="Curvas de Bezier" color="#F23C3CFF" h=4 align="left" >}}

Curvas **cúbicas y cuadráticas de Bezier**!
**Atajo de teclado**: {{< shortcut "ALT+V" >}}


{{< img_caption "k-sprite-bezier-demo.gif" >}}

Para hacer una curva Bezier:

1. **Haz clic y arrastra** para definir los puntos de inicio y fin al hacer clic y soltar el ratón. 
2. **Coloca el primer punto** de control haciendo clic una segunda vez. 
3. **Coloca el segundo punto** de control haciendo clic una vez más.


{{< box_info >}}
Para hacer una **curva de bezier cúbica**, simplemente haz clic dos veces en la misma posición después de agregar el primer punto de control y termina la curva.

(Esto es para añadir el segundo punto de control esté en las mismas coordenadas que el primero).

{{< /box_info >}}

{{< box_green >}}
**Consejo**: Si deseas que la curva siga actualizándose incluso cuando el cursor esté fuera del editor, presiona (dentro del editor) y arrastra a donde necesites para hacer tu curva.
{{< img_caption "k-sprite-bezier-out-ezgif.webp" "La curva sigue actualizándose aún cuando el cursor está fuera de los límites del editor." >}}


{{< details summary="Razón" >}}
Esto se debe a que los puntos se añaden al **levantar el click del mouse**, y si la ventana pierde el foco **sin un evento pendiente** (como mantener un botón del mouse presionado), el editor no puede ser actualizado.
{{< /details >}}

{{< /box_green >}}





{{< header t="Cuadrados y Círculos" color="#F23C3CFF" h=4 align="left" >}}

Herramienta para dibujar cuadrados y círculos.

**Atajos de teclado**: 
- Cuadrados/Rectángulos: {{< shortcut "R" >}} 
- Círculos: {{< shortcut "C" >}}


{{< img_caption img="better-primitives-x8.png" caption="Primitivas de Krita vs Primitivas de K-Sprite" class="no-box-shadow" >}}


Atajo | Acción
:--|--:
{{< shortcut "MAYUS (Mantener)" >}} | Hacer cuadrados/círculos de ratio **1:1**.
{{< shortcut "CTRL" >}} | Cambía el **origen al centro**.
{{< shortcut "ALT" >}} | **Mueve** el cuadrado/círculo.


{{< header t="Cubo de relleno" color="#F23C3CFF" h=4 align="left" >}}

Herramienta para rellenar áreas cerradas.
**Atajo de teclado**: {{< shortcut "F" >}}

{{< img_caption "k-sprite-fill-tool-example.png" "¡Algunas formas llenas con el cubo de relleno y la opción de *dither*!" >}}


{{< details summary="⚠️ Advertencia sobre el <u>cubo de relleno</u> tool" color="rgba(228, 171, 17, 0.79)" >}}
{{< box_warning >}}
El cubo de relleno utiliza un <u>algoritmo recursivo</u> ([El algoritmo *flood fill*](https://en.wikipedia.org/wiki/Flood_fill)), y **Krita tiene limitadas el número total de llamadas recursivas que un script puede ejecutar**, y dicho límite no se puede cambiar.

Esto significa que si el área a rellenar es ***lo suficientemente grande*** como para alcanzar dicho límite de llamadas recursivas, Krita finalizará ese proceso y el relleno **no se completará**, mostrando esta ventana:

{{< img_caption "k-sprite-fill-bucket-warning.png" >}}

{{< box_info >}}
Probé algunos algoritmos no recursivos, pero en general son mucho más lentos que el *flood fill*, por lo que es mejor usar la herramienta de cubo de relleno de Krita para rellenar áreas grandes.

Consideré quitar la herramienta, pero dado que aún hace bien el trabajo en áreas pequeñas y medianas, decidí mantenerla, ya que a veces es útil 👍.
{{< /box_info >}}
{{< /box_warning >}}

{{< /details >}}










{{< header t="Texto" color="#F23C3CFF" h=4 align="left" >}}

<!-- 2. **Text**: Tool to render correctly pixelated fonts -->

¡Herramienta para dibujar textos con estética Pixel Art bien definida (sin bordes borrosos)!
**Atajo de teclado**: {{< shortcut "T" >}}

Para añadir texto:
- {{< shortcut "Click y Arrastra" >}} para **crear el rectángulo que contiene el texto**, o simplemente haz {{< shortcut "Left Click" >}} para crear un área por defecto.
- Agrega y edita tu texto en la ventana emergente:



{{< img_caption "k-sprite-text-editor-window.png" "Ventana del editor de texto" >}}

Editor de texto
:-- 
{{< cell "1" >}} Caja donde escribir tu **texto**.
{{< cell "2" >}} Selecciona la **fuente**.
{{< cell "3" >}} **Tamaño** de la fuente.
{{< cell "4" >}} **Alineación** Horizontal y Vertical.
{{< cell "5" >}} **Ajustar el rectángulo al texto** (útil si necesitas recalcular el área de texto, en caso de que sobresalga porque se ha quedado pequeña).
{{< cell "6" >}} Umbral de definición. Esto es útil para ajustar fuentes que no sean originalmente de Pixel Art, para lograr un buen acabado.
{{< cell "7" >}} Color del trazo exterior.
{{< cell "8" >}} Dirección del trazo exterior. Haz Click para activar/desactivar.
{{< cell "9" >}} Activa/desactiva todas las direcciones del trazo exterior.


Presiona {{< shortcut "OK" >}} para aceptar los cambios, o {{< shortcut "Cancel" >}} para -{{< text_rotate "redoble de tambor 🥁🥁🥁" >}}- {{< text_spoiler "cancel/descartar el text 🤯" >}}.



{{< box_green >}}
Puedes mover el texto mientras se está editando haciendo {{< shortcut "Clic en su rectángulo" >}} y arrastrándolo:
{{< img_caption "k-sprite-text-move.gif" "Moviendo el texto" >}}
{{< /box_green >}}

{{< box_green "💡" >}}

**Consejo**: También {{< text_shimmer "se ven fabuloso 💅" >}} {{< text_wavy2 "con fuentes que no son pixel art! 🎉🥳 " 0.5 0.1 8 >}}

{{< img_caption "k-sprite-text-arial.png" >}}

{{< /box_green >}}



{{< header t="Herramienta de Zoom" color="#F23C3CFF" h=4 align="left" >}}

Herramienta para hacer zoom con precisión en áreas específicas.
**Atajo de teclado**: {{< shortcut "Z" >}}

{{< img_caption "k-sprite-zoom-example.gif" "Haz zoom en áreas específicas con `Left Click + Arrastrar`" >}}



Atajos del Zoom | Action
:--|--:
{{< shortcut "Click Izq.+(Arrastrar)" >}} | Zoom en rectángulo.
{{< shortcut "Click Izq." >}} | Zoom In.
{{< shortcut "Click Der." >}} | Zoom Out.





{{< header t="Lienzo" h=3 align="left" class="underline" >}}
### Lienzo {.no-display}


Aquí es donde dibujas. Esta área muestra el estado actual del documento, y estarás editando **la capa que estaba activa cuando lanzaste el editor**.

- Controls
Atajos | Acción
:-- | --:
{{< shortcut "Click Izq." >}} |**Dibuja** con el color **Principal**
{{< shortcut "Click Der." >}} | **Dibuja** con el color **Secundario**
{{< shortcut "Botón Central del Ratón" >}} or {{< shortcut "Space + Click Izq. (*Drag*)" >}} | **Panear el lienzo**.
{{< shortcut "CTRL + Botón Central del Ratón (*Drag*)" >}} | **Zoom** in/out
{{< shortcut "CTRL + Click Izq./Der." >}} | **Samplear** el color principal/secundario.
{{< shortcut "X" >}} | **Intercambia** los colores principal/secundario.
{{< shortcut "1" >}} | (Zoom) **1:1**
{{< shortcut "2" >}} | (Zoom) **Ajustar** el ancho/alto mínimo.
{{< shortcut "3" >}} | (Zoom) **Ajustar el documento**.


{{< box_info "💡" >}}
**Consejo**: Puedes dibujar **dentro de máscaras** en K-Sprite **haciendo una selección en Krita**:
{{< img_caption "sync-selection.gif" "Máscarás y Selección" >}}

De esta manera, solo podrás dibujar dentro de la selección en K-Sprite.

{{< box_warning >}}
De momento no hay ningún *feedback* visual dentro de K-Sprite para saber si hay una selección activa. Tendrás que mirar el lienzo de Krita para verlo.
{{< /box_warning >}}
{{< /box_info >}}



{{< header t="Botones de Exportacion" h=3 align="left" class="underline" >}}
### Botones de Exportacion {.no-display}

{{< img_caption img="k-sprite-export-buttons.png" class="no-box-shadow" >}}

Exporta los cambios que hayas hecho en K-Sprite a `Una nueva capa (New Layer)` o a la `Capa Activa (Active Layer)` en Krita.

- `Nueva Capa (New layer)` exportará los cambios a una nueva capa **por encima de la capa seleccionada**.
- `Capa Activa (Active layer)` exportará los cambios a **capa que se encontraba activa cuando has ejecutado el editor**.

> 👉 Estos botones pueden mostrarse o no **dependiendo de la capa activa** al iniciar el editor.
> 
> - Iniciarlo con una **capa vacía** hará que <u>**no**</u> se muestre el botón `Nueva Capa` (para evitar añadir capas innecesarias).
> - Iniciarlo con una **capa oculta** seleccionada hará que <u>**no**</u> se muestre el botón `Capa Activa` (esto es para evitar realizar cambios en una capa invisible por error).





{{< header t="Barra de Información" h=3 align="left" class="underline" >}}
### Barra de Información {.no-display}

Muestra información, atajos de teclado, consejos, etc. al **pasar el cursor** sobre un botón/herramienta.

{{< img_caption "k-sprite-info-bar.png" "La Barra de Información, en la parte **inferior** del editor" >}}

{{< box_green >}}
Esto es útil para no tener que recordar cada atajo, consejo, etc.
{{< /box_green >}}



# Opciones

## Opciones de Pintura Indexada

- **Add gradient (Agregar degradado)**: Agrega un degradado para previsualizar el efecto de *dithering* y para poder samplear colores.

  {{< img_caption "index-painting-gradient.png" "Agregar un degradado es útil para previsualizar la estética del patrón de dithering con tonos específicos ✅" >}}

    - **Position (Posición)**: Cambia la posición del degradado.
    - **Size (Tamaño)**: Tamaño del gradiente (porcentage en función el tamaño del documento).
    - **Invert (Invertir)**: Invierte la dirección del gradiente.
- **Method (Método)**
    - **Index colors (Colores indexados)**: Usa el filtro de *Index Colors*.
    - **Gradient map (Mapa de Gradiente)**: Usa el filtro de *Gradient Map*. Puedes configurar su patrón de *dithering* en sus propiedades.
  {{< box_info >}}
  Personalmente, prefiero la opción de **Mapa de Degradado**. Ya que es más fácil gestionar los colores.
  {{< /box_info >}}
- **Dither live preview (Previsualización en vivo de dithering)**: Al seleccionar un nuevo preset de patrón o editar la matriz de *dithering* (rotándola, invirtiéndola, etc.), si hay una capa de "Dither" seleccionada (o una hermana) de la capa seleccionada, **la capa de Dither se actualizará automáticamente**.
  {{< box_green >}}
	Esto es para poder ver directamente cómo los cambios afectan el patrón de *dithering*.

  {{< img_caption "index-painting-live-preview.webp" "Hacer scroll por los presets (con los cursores) automaticamente actualiza el patrón de *dithering*." >}}
  {{< /box_green >}}


## Atajos de Teclado

{{< details summary="Cómo configurar los atajos de teclado en Krita" >}}
Ve a `Preferencias -> Configurar Krita`. Una vez allí, pulsa la pestaña `Accesos rápidos de teclado`. 

Busca `SZK Pixel Art Suite` para ver los atajos disponibles.
{{< /details >}}

Atajos proporcionados por el *plugin*:

### Paleta

- Al seleccionar un color de una paleta en la pestaña de Sombreado, puedes mover hacia atrás/adelante el color activo de la paleta con los atajos:
|Comando | Atajo por defecto
|:---|---:
Previous Palette Color (SZK Pixel Art Suite) | {{< shortcut "Alt+1" >}}
Next Palette Color (SZK Pixel Art Suite) | {{< shortcut "Alt+2" >}}



### K-Sprite

- Puedes ejecutar el editor K-Sprite con el atajo:
|Comando | Atajo por defecto
|:---|---:
Open SZK K Pixel Art Editor (SZK Pixel Art Suite) | {{< shortcut "Alt+F3" >}}

{{< box_info >}}
Personalmente, recomiendo encarecidamente configurar esto a tu gusto. 
Personalmente me gusta activar el editor como si estuviera cambiando de pincel (para usar una de sus características, como el pincel pixel perfecto, o dibujar una primitiva, etc.) de forma puntual y rápida, y luego volver a Krita.
{{< /box_info >}}

### Exportar Pixel Art

- Puedes asignar a un atajo la acción para exportar tu Pixel Art: 
|Comando | Atajo por defecto
|:---|---:
Export Scaled Pixel Art (Full Document) (SZK Pixel Art Suite) | (Sin asignar)
Export Scaled Pixel Art (Selected Layers) (SZK Pixel Art Suite) | (Sin asignar)


# Creditos

**Fuentes** usadas:

- [Minimal4](https://saint11.org/blog/fonts/) por *[Pedro Medeiros](https://saint11.art/)* ([@saint11](https://x.com/saint11)) ({{< text_wavy "Gracias!" 0.04 6 1.2 >}})
- [Tiny5-Regular](https://fonts.google.com/specimen/Tiny5) por *[Stefan Schmidt](https://fonts.google.com/?query=Stefan%20Schmidt)* ({{< text_wavy "Gracias!" 0.01 6  1.4 >}})

**Artículos** mencionados:

- [HD Index Painting in Photoshop](http://danfessler.com/blog/hd-index-painting-in-photoshop) por [Dan Fessler](http://danfessler.com/).

- [Anti-Alias and Banding](https://saint11.art/pixel_art_articles/article5/) por [Pedro Medeiros](https://saint11.art/about/)

---

{{< link_card 
  url="https://orb91.gumroad.com/l/szk-krita-pixel-art-suite"
  cover="images/feature_logo-animated-512px.webp"
  title="SZK Pixel Art Suite"
  subtitle="Añade muchas mejoras para hacer Pixel Art in *Krita*!"
  url_text="orb91.gumroad.com"
  color="#cd5b06"
  hover_color="#ff83f1"
  text_color="#f0f0f0"
  cover_position="50% 53%"
>}}

> Espero que el plugin {{< text_wavy "te ayude" >}} a {{< text_handwritten text="crear" font=3 >}} **{{< text_rotate "Pixel Art" >}}{{< text_shimmer "!" >}}** 🍀