+++
title = 'Probando Md'
date = '2025-03-14T14:10:50+01:00'
description = ""
lastmod = '2025-03-14T14:10:50+01:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
show_table_of_contents = true
show_right_bar = true
show_related_articles = false
tags = ["mierda", "test", "markdown"]
# article_cover = 'probando-md.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'article_cover' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# show_author = false
# show_date = false
# show_reading_time = false
# show_tags = false
# show_breadcrumbs = false
# show_next_and_previous_arrows = false
+++
This is an article for testing the markdown

{{< download_file "paco.zip" false "pdf" >}}

{{< download_file "paco.zip" false "game" >}}

{{< download_file "paco.zip" false "file" >}}

{{< download_file "paco.zip" false "image" >}}

{{< download_file "paco.zip" false "VIDEO" >}}

{{< download_file "paco.zip" false "krita" >}}

 {{< download_file "skrillex.mp4" >}}


# Test file download

{{% download_file "paco.zip" false "linux" %}} {{% download_file "skrillex.mp4" %}}


<a class="elcarpo" href="Test file download.zip"> Descarga el archivo </a> <a class="elcarpo" href="Test file download.zip"> Descarga el archivo </a>


[descarga el zip]("Test file download.zip")

[descarga el zip](Test file download.zip)

[💾 descarga eaaaal zip](Test-file-download.zip)

[descarga el zip](paco.zip)

[wooaaw](www.google.com) [wooaaw](www.google.com)

# Video testing

{{< text_centered >}}

# hola

Pues... esto en teoria...
sería un texto...

...centrado

muy centrado en la sociedad y en sus problemas

{{< /text_centered >}}


<!-- {{< article_tags tags="ameba, dexter" title="holaaa" align="right" >}} -->

<!-- {{< featured_articles articles="articulo-tres,copia,copia" align="center" h=3 >}} -->
<!-- {{< featured_articles articles="articulo-tres,copia,copia" title="WOW" align="center" h=3 >}} -->


{{< featured_albums albums="galleries/art, galleries/art/3d, 2d" title="WOW" align="center" h=3 >}}


{{< box_green >}}

{{< text_centered >}}

Pues... esto en teoria...
sería un texto...

...centrado

muy centrado en la sociedad y en sus problemas

{{< /text_centered >}}



{{< article_tags "ameba, dexter" "holaaa" >}}


{{< featured_articles articles=" articulo-tres,copia,copia" title="WOW" align="center" h=3 >}}

{{< featured_albums albums="galleries/art" title="WOW" align="center" h=3 >}}

{{< /box_green >}}
<!-- {{% featured_articles "articulo-tres,copia,copia" %}} -->


{{< video "skrillex.mp4" false >}}

{{< video "skrillex.mp4" true >}}

<!-- {{< video "https://www.youtube.com/watch?v=5nf24no8dKU" >}} -->

<!-- {{< youtube id="5nf24no8dKU" class="youtube">}} -->

{{< youtube id="5RfqB76eHTQ" autoplay=true mute=true >}}
<!-- {{< youtube "5RfqB76eHTQ">}} -->

# nada
<!-- 
<video width="320" height="240" controls>
  <source src="skrillex.mp4" type="video/mp4">
</video> -->


# Why I'm doing it? 

Basically for testing how it looks

## Is there any reason more for testing it?

Yes, I'm **scared**. I hope it shows correctly. _Esto es un texto en cursiva_. Y puedo hacer cursiva también *usando asteriscos.*

Pero bueno.

### Header 3

tres asf sfgksdj lgkjerlkgj slkfjg skgj slkdjg oiejrgoi jsdlgkjs ghjdkg lhjdlkghj ldfgjh djghlk djfghlkj dlkf gjhitrejh oirejtohi jdfghj dkgjh rth i erjth iwejioeworijoityj eoritjyioe rjtyoiej rtiohjoi jghoidjfgo ihjreoithj oifdjghio djgh 

#### Header 4
cuatro asf [sfgksdj lgkjerlkgj slkfjg skgj slkdjg oiejrgoi jsdlgkjs ghjdkg](www.youtube.com) lhjdlkghj ldfgjh djghlk djfghlkj dlkf gjhitrejh oirejtohi jdfghj dkgjh rth i erjth iwejioeworijoityj eoritjyioe rjtyoiej rtiohjoi jghoidjfgo ihjreoithj oifdjghio djgh 
##### Header 5
cinco asf sfgksdj lgkjerlkgj slkfjg skgj slkdjg oiejrgoi jsdlgkjs ghjdkg lhjdlkghj ldfgjh djghlk djfghlkj dlkf gjhitrejh oirejtohi jdfghj dkgjh rth i erjth iwejioeworijoityj eoritjyioe rjtyoiej rtiohjoi jghoidjfgo ihjreoithj oifdjghio djgh 
###### Header 6
seis asf sfgksdj [lgkjerlkgj slkfjg skgj slkdjg oiejrgoijsdlgkjs ghjdkg lhjdlkghj ldfgjh djghlk djfghlkj dlkf gjhitrejh oirejtohi jdfghj dkgjh rth i erjth iwejioeworijoityj eoritjyioe rjtyoiej rtiohjoi jghoidjfgo](www.github.com) ihjreoithj oifdjghio djgh 


[Visit **GitHub**!](www.github.com)


This is an h1
=============

This is an h2
-------------

Wow
=========

# Y esto qué es?

wow

~~This text is rendered with strikethrough.~~


I end with two spaces (highlight me to see them).

There's a <br /> above me!

> This is a block quote. You can either
> manually wrap your lines and put a `>` before every line or you can let your lines get really long and wrap on their own.
> It doesn't make a difference so long as they start with a `>`.


> You can also use more than one level
>> of indentation?
>>> How neat is that?

> wow

# Listas
Pues vamos a ver las listas como funcionan y vengaa...:
* Item
* Item
* Another item

or

+ Item
+ Item
+ One more item

or

- Item
- Item
- One last item
  - sub item
  - otro subitem
    - susub item

1. Item one
2. Item two
3. Item three
    1. sub item
    2. sub item 2
        1. subsub 


veamos
1. Item one
1. Item two
1. Item three


## Sublists

1. Item one
2. Item two
3. Item three
    * Sub-item
    * Sub-item
4. Item four


## Checkboxes

Boxes below without the 'x' are unchecked HTML checkboxes.
- [ ] First task to complete.
- [ ] Second task that needs done
This checkbox below will be a checked HTML checkbox.
- [x] This task has been completed

### Nested checkboxes

- [x] This task has been completed
  - [x] this one too
  - [ ] this not
    - [ ] neither this
      - [x] but this yes
        - [x] but this yes
        - [x] but this yes
          - wow
          - [x] but this yes
## Code

    This is code
    So is this

	esto también lo es

Esto ya no es código

### Code 2

    my_array.each do |item|
      puts item
    end

### Mas código

	prueba
	a ver
		que tal va
		jeje
	bueno
	  ala

### Inline code

Esto -> `es un trozo de código`, y esto ya no.

Esto -> `es un trozo de <strong>código</strong>`, y esto ya no. asdfsadf has fhaskdfh asjdhf kjashdf jashdfjsahfuiwher iuwh eiuhf iuwehifuh uihgsidfg sdjfghsk hfgsdiugh 

Debería de ser `a:list[] = split(a, " ")`

### Flavoured code

```ruby
def foobar
  puts "Hello world!"
end
```

```python
def foobar():
  puts "Hello world! asdfasdf wae asdf"
  pass
```

# Horizontal rules

Con asteriscos *
***
Con -
---
con - -
- - -
Con un huevo de asteriscos
****************

# links

[Click me!](http://test.com/)

## links with title

[Click me!](http://test.com/ "Link to Test.com")

## Relative paths ‼‼‼‼❗❗❗❗

[Go to music](/music/).

[Go to articles](/articles/).

[Go to tags](/tags/).

## Markdown also supports reference style links.

[Click this link][link1] for more info about it!

[Also check out this link][foobar] if you want to.

[link1]: http://test.com/ "Cool!"
[foobar]: http://foobar.biz/ "Alright!"

# Tables

- [Heading](#heading)
- [Another heading](#another-heading)
- [Chapter](#chapter)
  - [Subchapter <h3 />](#subchapter-h3-)


# Images

![This is the alt-attribute for my image](http://imgur.com/myimage.jpg "An optional title")

![This is theeeee alt-attribute for my image](https://i.imgur.com/b6XBklC.mp4 "An optional title")

![Artee](https://i.imgur.com/4nGbkUF_d.webp?maxwidth=520&shape=thumb&fidelity=high "An optional title artee")

# Misc

## Keyboard

Your computer crashed? Try sending a
<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>

`<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>`


## Tables

| Col1         | Col2     | Col3          | La cuarta columna | la quinta
| :----------- | :------: | ------------: | :---: | :-:
| Left-aligned | Centered | Right-aligned | a ver | va bien
| blah         | blah     | blah          | que tal| o eso creo
| wow | que fantasia| no me lo creo wowowowow qué bien| se da| wow
| wow | que fantasia| no me lo creo wowowowow qué bien venga vamos otra hugocentrico jserjashdfkjasdfkjhas da sdfasjdf haskjdfh aksjghfs kjdhgfsk dhfgiudshfg sjdfgksjdfghsdfhgkjsdfhgkjsdkfjgsdkjfghksjdfhg kjsdfg| se da| wow
| wow | que fantasia| no me lo creo wowowowow qué bien| se da| wow
| wow | que fantasia| no me lo creo wowowowow qué bien| se da| wow

Ugly table
Col 1 | Col2 | Col3
:-- | :-: | --:
Ugh this is so ugly | make it | stop