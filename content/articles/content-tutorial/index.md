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



```
## Esto es un encabezado
Esto es un **texto en negrita** y esto un *texto en cursiva*

A continuación vamos a [crear un enlace](https://tutorialmarkdown.com)

Tal y como ves, no es tan complicado. No te preocupes si no comprendes esta sintaxis.
Al final de este tutorial tendrás todo más claro que el agua.
```

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

# Shortcodes

asdfasdf

{{< quote "Vamonooooh! **jejeje**" "Sasel" >}}
