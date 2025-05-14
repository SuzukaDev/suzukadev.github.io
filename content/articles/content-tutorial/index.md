+++
title = 'Content Tutorial'
date = '2025-05-13T20:18:50+02:00'
description = "Explain how to add the different kind of content"
lastmod = '2025-05-13T20:18:50+02:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
# tags = [""]
# # -------- DISPLAY OPTIONS --------
# show_breadcrumbs = false
# show_author = false
# show_date = false
# show_reading_time = false
# show_tags = false
show_table_of_contents = true
show_right_bar = true
# show_next_and_previous_arrows = false # If false (or not set), will hide the left/right arrows next to the articles' title for navigating between articles
# show_related_articles = false # If false, it wont show the related articles at the bottom. If true (or non set), they will show.
# article_cover = 'content-tutorial.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'article_cover' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'Content Tutorial' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags

+++

Esto es un tutorial de **cómo añadir contenido**.

Tiene 2 partes:
- [**Markdown**](#markdown): Enseña Markdown básico
- [**Shortcodes**](#shortcodes): Contenido específico hecho para la web.


# Markdown

## Introducción

Markdown facilita la escritura de contenido web, traduciendo elementos usados comunmente en un editor de texto a código web.

**Por ejemplo, el Texto:**

```
## Esto es un encabezado
Esto es un **texto en negrita** y esto un *texto en cursiva*

A continuación vamos a [crear un enlace](https://tutorialmarkdown.com)

Tal y como ves, no es tan complicado. No te preocupes si no comprendes esta sintaxis.
Al final de este tutorial tendrás todo más claro que el agua.
```
**Se traduce en:**



## Esto es un encabezado
Esto es un **texto en negrita** y esto un *texto en cursiva*

A continuación vamos a [crear un enlace](https://tutorialmarkdown.com)

Tal y como ves, no es tan complicado. No te preocupes si no comprendes esta sintaxis.
Al final de este tutorial tendrás todo más claro que el agua.

---
En `HTML` esto sería algo como:


```
<h2> Esto es un encabezado </h2>
<p> Esto es un <strong>texto en negrita</strong> y esto un <i>texto en cursiva</i> </p>

<p>A continuación vamos a <a href="https://tutorialmarkdown.com">crear un enlace</a></p>

(etcétera)
```

{{< box_color color="rgba(48, 189, 72, 0.3)" icon="👌" >}}
Básicamente hace que sea más fácil escribir contenido.
{{< /box_color >}}

## Headers

```
# Esto es un <h1>
## Esto es un <h2>
### Esto es un <h3>
#### Esto es un <h4>
##### Esto es un <h5>
###### Esto es un <h6>
```

# Esto es un `<h1>`
## Esto es un `<h2>`
### Esto es un `<h3>`
#### Esto es un `<h4>`
##### Esto es un `<h5>`
###### Esto es un `<h6>`

## Comentarios

Si quieres que algo que has escrito en Markdown no aparezca renderizado, pero siga en el documento, envuelvelo entre `<!--` y `-->`

`<!-- esto es un comentario -->`

## Estilos

~~Este texto está tachado.~~

`~~Este texto está tachado.~~`

**Este texto está en negritas.**
__Al igual que este texto.__

```
**Este texto está en negritas.**
__Al igual que este texto.__
```

## Párrafos

Los párrafos son una o múltiples líneas de texto adyacentes separadas por 
una o múltiples líneas en blanco

Usar `<br>` para hacer hacer un retorno de carro en un mismo párrafo:

¡Hay un <br> arriba de mí!

`¡Hay un <br> arriba de mí!`

## Citas

> Esta es una cita de bloque. Puedes
> envolver tus líneas manualmente y poner un `>` antes de cada línea o puedes dejar que tus líneas sean muy largas y que se envuelvan solas.
> No hay diferencia, siempre y cuando empiecen con `>`.

```
> Esta es una cita de bloque. Puedes
> envolver tus líneas manualmente y poner un `>` antes de cada línea o puedes dejar que tus líneas sean muy largas y que se envuelvan solas.
> No hay diferencia, siempre y cuando empiecen con `>`.
```

> Esta es una cita de bloque. Puedes envolver tus líneas manualmente y poner un `>` antes de cada línea o puedes dejar que tus líneas sean muy largas y que se envuelvan solas. No hay diferencia, siempre y cuando empiecen con `>`.

```
> Esta es una cita de bloque. Puedes envolver tus líneas manualmente y poner un `>` antes de cada línea o puedes dejar que tus líneas sean muy largas y que se envuelvan solas. No hay diferencia, siempre y cuando empiecen con `>`.
```

## Listas

### Listas Desordenadas
* Item
* Item
* Otro item

o

+ Item
+ Item
+ Un item más

o

- Item
- Item
- El último item

```
* Item
* Item
* Otro item

o

+ Item
+ Item
+ Un item más

o

- Item
- Item
- El último item
```

### Listas Ordenadas

1. Item uno
2. Item dos
3. Item tres

```
1. Item uno
2. Item dos
3. Item tres
```

### Sublistas

1. Item uno
2. Item dos
3. Item tres
    * Sub-item
    * Sub-item
4. Item cuatro


```
1. Item uno
2. Item dos
3. Item tres
    * Sub-item
    * Sub-item
4. Item cuatro
```


## Bloque de código

Puedes indicar un bloque de código (usan los elementos `<code>`) indentando 
una línea con cuatro espacios o un tab

	Puedes indicar un bloque de código (usan los elementos <code>) indentando 
	una línea con cuatro espacios o un tab

También puedes insertar dos tabs (o cuatro espacios adicionales)
para indentar dentro del código:

	my_array.each do |item|
        puts item
    end

Código dentro de una línea puede ser escrito usando la comilla ` 


Ejemplo: 

Este artículo es para aprender `Markdown`

``` 
Este artículo es para aprender `Markdown` 
```

## Reglas horizontales

Las reglas horizontales se agregan fácilmente con tres o más asteriscos o guiones,
con o sin espacios.


***
---
- - - 
****************

```
***
---
- - - 
****************
```

## Links

Pon el texto a mostrar en corchetes [] seguidos por la URL en paréntesis ()

[Visitar google](https://www.google.com/)

	[Visitar google](https://www.google.com/)

También puedes agregar el titulo del link usando comillas dentro de los paréntesis:

[Visitar google](https://www.google.com/ "click para ir a google. Este texto lo he escrito yo")

	[Visitar google](https://www.google.com/ "click para ir a google. Este texto lo he escrito yo")

{{< box_info >}}
El texto se ve cuando mantienes el ratón en el link.
{{< /box_info >}}

Markdown también soporta links con estilo de referencia:

¡[Haz click a este link][link1] para más información!
[También mira este link][otro_link] si quieres.

[link1]: https://google.com
[otro_link]: https://google.com

	¡[Haz click a este link][link1] para más información!
	[También mira este link][otro_link] si quieres.

	[link1]: https://google.com
	[otro_link]: https://google.com

### Links para emails

<foo@bar.com>
	
	<foo@bar.com>

## Imágenes

Las imagenes se hacen de la misma forma que los links pero con un símbolo de exclamaciónal frente:


![Dextercillo](/images/dex.jpeg "Perrito bonito")

	![Dextercillo](/images/dex.jpeg "Perrito bonito")


{{< box_info >}}
El titulo opcional se ve cuando mantienes el ratón en la imagen.
{{< /box_info >}}

Al igual que los links, soporta nombres para las referencias:

![Esta es una etiqueta.][myimage]

[myimage]: /images/dex.jpeg

	![Esta es una etiqueta.][myimage]

	[myimage]: /images/dex.jpeg


## Escapar caracteres

Quiero escribir *este texto rodeado por asteriscos* pero no quiero que esté en itálicas,
así que hago esto: \*Este texto está rodeado de asteriscos\*.

	Quiero escribir *este texto rodeado por asteriscos* pero no quiero que esté en itálicas, así que hago esto: \*Este texto está rodeado de asteriscos\*.


## Tablas

| Col1         | Col2     | Col3          |
| :----------- | :------: | ------------: |
| Izquierda | Centrado | Derecha |
| blah         | blah     | blah          |

	| Col1         | Col2     | Col3          |
	| :----------- | :------: | ------------: |
	| Izquierda | Centrado | Derecha |
	| blah         | blah     | blah          |


# Shortcodes

Un `shortcode` es una especie de script en Hugo que procesa el texto/html a tu antojo para lograr distintas cosas. Desde hacer que {{< text_wavy "el texto sea más divertido" >}}

{{< box_info >}}
Puedes encontrar los shortcode disponibles en la carpeta `shortcodes` en `\layouts\shortcodes`. Cada shortcode está **<u>documentado</u>** al inicio para comprender cómo se usa y qué es lo que hace ❗
{{< /box_info >}}

{{< box_green >}}
Estás mismas cajas de texto de colores están hechas con un shortcode.
{{< /box_green >}}


Hay dos tipos de shortcodes: **inline** y **block**.

- **Inline**: Se ejecutan con una única línea de comando

		{{</* wavy_text "hola" */>}}

- **Block**: Procesan el contenido entre la etiqueta de apertura y cierre:

		{{</* box_green */>}}
		Estás mismas cajas de texto de colores están hechas con un shortcode.
		{{</* /box_green */>}}

{{< box_info >}}
Hugo tiene algunos shortcodes por default (por ejemplo para insertar un post de instagram, twitter, etc). [Puedes verlos aqui](https://gohugo.io/content-management/shortcodes/#custom).
{{< /box_info >}}

A continuación documentaré todos los que he hecho.

## album_categories

Permite mostrar todas las categorias de los álbumes/galerias:

{{< album_categories >}}
	
	{{</* album_categories */>}}


{{< box_info >}}
Dependiendo de las categorias que tenga tu página, veras una cosa u otra (o tal vez no veas nada).
{{< /box_info >}}

{{< box_info >}}
Tiene más opciones. Como mostrar específicamente solo ciertas categorias si así lo deseas:

{{< /box_info >}}

Eso solo mostraría las categorías de "3D art" y "2D art":

	{{</* album_categories "3d-art, 2d-art" */>}}


## article_tags

Similar a `album_categories` pero con las tags de los artículos:

{{< article_tags >}}

	{{</* article_tags */>}}

También permite mostrar solo unas tags en concreto.


## audio

{{< audio src="sk-gs.mp3" artist="Skrillex" title="Good Space" cover="/images/sk.jpg" >}}

	{{</* audio src="sk-gs.mp3" artist="Skrillex" title="Good Space" cover="/images/sk.jpg" */>}}

{{< box_info >}}
Tiene más opciones! Como posicionar el fondo de la portada. Chequea el `audio.html` para ver la documentación.
{{< /box_info >}}

## box_error
Muestra un bloque en rojo, ideal para avisar de formas **críticas**, errores, etc.

{{< box_error >}}
Este texto es importante porque está en rojo.
{{< /box_error >}}

	{{</* box_error */>}}
	Este texto es importante porque está en rojo.
	{{</* /box_error */>}}


## box_green
Muestra un bloque en verde, ideal para remarcar algo positivo, por ejemplo.

{{< box_green >}}
Este texto es bueno porque está en verde.
{{< /box_green >}}

	{{</* box_green */>}}
	Este texto es bueno porque está en verde.
	{{</* /box_green */>}}


## box_info
Muestra un bloque en azúl, ideal para remarcar alguna información, por ejemplo.

{{< box_info >}}
Este texto es informativo porque está en azul.
{{< /box_info >}}

	{{</* box_info */>}}
	Este texto es informativo porque está en azul.
	{{</* /box_info */>}}
	
## box_warning
Muestra un bloque en azúl, ideal para remarcar alguna información, por ejemplo.

{{< box_warning >}}
Este texto es un texto para avisar de algo.
{{< /box_warning >}}

	{{</* box_warning */>}}
	Este texto es un texto para avisar de algo.
	{{</* /box_warning */>}}
	
## box_color
Como los anteriores, pero con color **customizable** (tanto para el modo light y dark).

{{< box_color >}}
Por defecto no tiene color
{{< /box_color >}}

	{{</* box_color */>}}
	Por defecto no tiene color
	{{</* /box_color */>}}

{{< box_color color_dark="rgba(42, 39, 238, 0.28)" color_light="rgba(212, 184, 24, 0.39)" >}}
Prueba a cambiar el tema y verás colores distintos para cada uno
{{< /box_color >}}

	{{</* box_color color_dark="rgba(42, 39, 238, 0.28)" color_light="rgba(212, 184, 24, 0.39)" */>}}
	Prueba a cambiar el tema y verás colores distintos para cada uno
	{{</* /box_color */>}}


{{< box_color color="rgba(230, 31, 170, 0.28)" >}}
Si se añade un solo color, **recomiendo usar rgba con alfa bajo para que se vea bien tanto en el tema oscuro como en el claro.**
{{< /box_color >}}

	{{</* box_color color="rgba(230, 31, 170, 0.28)" */>}}
	Si se añade un solo color, **recomiendo usar rgba con alfa bajo para que se vea bien tanto en el tema oscuro como en el claro.**
	{{</* /box_color */>}}

## download_file

Sirve para descargar archivos:

{{< download_file "sk-gs.mp3" >}}

	{{</* download_file "sk-gs.mp3" */>}}


{{< box_info >}}
Puedes customizar el icono, el texto, etc (mira la documentación en `download_file.html`)
{{< /box_info >}}

Ejemplos:

{{< download_file file="sk-gs.mp3" text="Icono del krita" type="krita" >}}

{{< download_file file="sk-gs.mp3" text=true type="windows" >}}

{{< download_file file="sk-gs.mp3" type="pdf" >}}

{{< download_file file="sk-gs.mp3" type="game" >}}



## featured_album_big

Muestra un album en grande.


	{{</* featured_album_big album="traditional-art" cover="images/cover-image.png" pos1="50% 50%" pos2="50% 100%" zoom1="100%" zoom2="200%" t1="1s" t2="2.5s" */>}}

{{< box_error >}}
No está demostrado porque podría poner un álbum que tú no tienes y te daría error. (Hice que diera error para saber si te has equivocado al ponerlo)
{{< /box_error >}}

## featured_albums

Muestra una serie de albums que quieres mostrar con sus tarjetas.

	{{</* featured_albums "my-first-album, another-album" */>}}

{{< box_error >}}
No está demostrado porque podría poner un álbum que tú no tienes y te daría error. (Hice que diera error para saber si te has equivocado al ponerlo)
{{< /box_error >}}

## featured_articles

Muestra una serie de artículos que quieres mostrar con sus tarjetas.

	{{</* featured_articles "my-first-article, another-article" */>}}

{{< box_error >}}
No está demostrado porque podría poner un artículo que tú no tienes y te daría error. (Hice que diera error para saber si te has equivocado al ponerlo)
{{< /box_error >}}

<!-- ## get_pages_count
{{< get_pages_count >}} -->

## get_social_url
Obtiene el enlace de una red-social directamente de `social_sites.json`. 

Twitter link: {{< get_social_url twitter >}}

	Twitter link: {{</* get_social_url twitter */>}}

Clickable twitter link: {{< get_social_url twitter true >}}

	Clickable twitter link: {{</* get_social_url twitter true */>}}

{{< box_info >}}
Esto es útil en el caso de que alguna vez cambiaras tu perfil a otro, al actualizarlo en social_sites, se actualizaría automáticamente en todas las páginas que has usado `get_social_url` y te evitaría tener que cambiarlo manualmente.
{{< /box_info >}}


## get_social

Parecido a lo de arriba pero más bonito.

Twitter link: {{< get_social twitter >}}

	Twitter link: {{</* get_social twitter */>}}

{{< box_info >}}
Admite distintos argumentos para personalizar el icono.
{{< /box_info >}}

Twitter link: {{< get_social twitter false >}}

	Twitter link: {{</* get_social twitter false */>}}

## header

Un header con opciones para alinear el texto

{{< header "h1 derecha" 1 "right" >}}

{{< header "h2 derecha" 2 "center" >}}

{{< header "h3 izquierda" 3 "left" >}}

	{{</* header "h1 derecha" 1 "right" */>}}

	{{</* header "h2 derecha" 2 "center" */>}}

	{{</* header "h3 izquierda" 3 "left" */>}}

## images_hover_link
Superpone 2 imágenes y realiza un efecto de transición entre ambas. Permite linkar a una url/página.

Ideal para una foto de perfil.

{{< images_hover_link img="/images/img1.jpg" img_hover="/images/img2.png" page="about" t1=1s t2=5s c0=red c2=blue >}}

	{{</* images_hover_link img="/images/img1.jpg" img_hover="/images/img2.png" page="about" t1=1s t2=5s */>}}

{{< box_info >}}
Tiene muchas opciones de personalización. Lee la documentación en `images_hover_link.html`
{{< /box_info >}}


## img_caption

Permite mostrar una imágen con un caption. Y también permite que al hacer click vaya a una url/página.

{{< img_caption img="/images/dex.jpeg" caption="Al clickar va a la pág. de about" italic=false alt="Picture of a cute dog" page="about" >}}

	{{</* img_caption img="/images/dex.jpeg" caption="Al clickar va a la pág. de about" italic=false alt="Picture of a cute dog" page="about" */>}}


## link_hidden

Añade un link que no se remarque de color (por si quieres que pase desapercibido o que no llame la atención).

Link que no se ve: {{< link_hidden "about" "link escondido" >}}

	Link que no se ve: {{</* link_hidden "about" "link escondido" */>}}

## link_markdown_page

Link con una página (de la página): {{< link_markdown_page text="This go to about.md page" page="about" >}}

	Link con una página (de la página): {{</* link_markdown_page text="This go to about.md page" page="about" */>}}

{{< box_info >}}

También se puede hacer con:

[Esto va a about]({{< ref "about" >}})

```
[Esto va a about]({\{< ref "about" >}})

[Esto va a about]({\{< relref "about" >}})

❗ Nota: Sin el "\"
```

{{< /box_info >}}


## link_underline

Link subrayado sin color: {{< link_underline "https://www.youtube.com/@slobulus" "slobulus" >}}

	{{</* link_underline "https://www.youtube.com/@slobulus" "slobulus" */>}}



## quote

Añade una frase con el autor (opcional)

{{< quote "**Learn** from yesterday, **live** for today, **hope** for tomorrow" "Einstein" >}}

	{{</* quote "**Learn** from yesterday, **live** for today, **hope** for tomorrow" "Einstein" */>}}


<!-- ## rawhtml

{{< rawhtml >}}
<p>holaa</p>
{{< /rawhtml >}}

	{{</* rawhtml */>}} -->

## row

Pone en una linea distintos items.

Viene bien para poner, por ejemplo, varios botones de download en una misma fila.

{{< row >}}
{{< download_file file="sk-gs.mp3" text=true type="windows" >}}
{{< download_file file="sk-gs.mp3" text=true type="mac" >}}
{{< download_file file="sk-gs.mp3" text=true type="linux" >}}
{{< download_file file="sk-gs.mp3" text=true type="android" >}}
{{< /row >}}

	{{</* row */>}}
	{{</* download_file file="sk-gs.mp3" text=true type="windows" */>}}
	{{</* download_file file="sk-gs.mp3" text=true type="mac" */>}}
	{{</* download_file file="sk-gs.mp3" text=true type="linux" */>}}
	{{</* download_file file="sk-gs.mp3" text=true type="android" */>}}
	{{</* /row */>}}

{{< box_warning >}}
No funciona con todos los elementos, solo con algunos.
{{< /box_warning >}}



## shortcut

Muestra un atajo de teclado de forma vistosa: {{< shortcut "CTRL+ALT+V" >}}


	{{</* shortcut "CTRL+ALT+V" */>}}

{{< box_green >}}
Si pasas el ratón por encima de los botones se "presionan".
{{< /box_green >}}


## text_centered

{{< text_centered >}}
Inside the tags I can write normal markdown code.

and it will be...

...centered
{{< /text_centered >}}

	{{</* text_centered */>}}
	Inside the tags I can write normal markdown code.

	and it will be...

	...centered
	{{</* /text_centered */>}}


## text_glitch

Texto glitcheado: {{< text_glitch "Soy un texto con un efecto de Glitch" >}}

	{{</* text_glitch "Soy un texto con un efecto de Glitch" */>}}

{{< box_green >}}
Tiene muchos otros parámetros para personalizar el efecto (documentado en `text_glitch.html`)
{{< /box_green >}}

## text_handwritten

Texto animado: {{< text_handwritten text="Esto simula un texto escrito a mano" font=3 >}}

	{{</* text_handwritten text="Esto simula un texto escrito a mano" font=3 */>}}

{{< box_info >}}
Tiene muchos otros parámetros para personalizar el efecto.
{{< /box_info >}}



## text_rotate

Añade un texto que rota: {{< text_rotate "ejemplo de text_rotate" >}}

	{{</* text_rotate "ejemplo de text_rotate" */>}}

{{< box_info >}}
Tiene muchos otros parámetros para personalizar el efecto.
{{< /box_info >}}


## text_shimmer

Otro efecto: {{< text_shimmer "una especie de brillo" >}}

	{{</* text_shimmer "una especie de brillo" */>}}

{{< box_info >}}
Tiene muchos otros parámetros para personalizar el efecto.
{{< /box_info >}}


## text_spoiler

Pone un texto en spoiler que **es revelado al pasar el ratón**: {{< text_spoiler "hola, soy un texto oculto" >}}

	{{</* text_spoiler "hola, soy un texto oculto" */>}}



## text_strong

Otro tipo de texto en **negrita**: {{< text_strong "texto enfatizado con un estilo chulo" >}}

	{{</* text_strong "texto enfatizado con un estilo chulo" */>}}


## text_wavy

Texto animado: {{< text_wavy "holaaaaaaaa olaaa" >}}

	{{</* text_wavy "holaaaaaaaa olaaa" */>}}

{{< box_info >}}

{{< text_wavy text="Tiene muchos otros parámetros para personalizar el efecto." time=1 freq=56.1 amp=4.0 >}}

{{< /box_info >}}

## video

Inserta un vídeo (archivo local)

{{< video url="video.mp4" >}}

	{{</* video url="my_video.mp4" */>}}


## youtube

Inserta un video de youtube:

{{< youtube "tKc3VcOyY2c" >}}

	{{</* youtube "tKc3VcOyY2c" */>}}



