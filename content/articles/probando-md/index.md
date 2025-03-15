+++
title = 'Probando Md'
date = '2025-03-14T14:10:50+01:00'
description = ""
lastmod = '2025-03-14T14:10:50+01:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
show_table_of_contents = true
show_right_bar = true
# article_cover = 'probando-md.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'article_cover' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
+++
This is an article for testing the markdown

# Why I'm doing it? 

Basically for testing how it looks

## Is there any reason more for testing it?

Yes, I'm **scared**. I hope it shows correctly. _Esto es un texto en cursiva_. Y puedo hacer cursiva también *usando asteriscos.*

Pero bueno.

### Header 3
tres
#### Header 4
cuatro
##### Header 5
cinco
###### Header 6
seis


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

1. Item one
2. Item two
3. Item three


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

[x] This task has been completed
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

# Misc

## Keyboard

Your computer crashed? Try sending a
<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd>


## Tables

| Col1         | Col2     | Col3          | La cuarta columna | la quinta
| :----------- | :------: | ------------: | :---: | :-:
| Left-aligned | Centered | Right-aligned | a ver | va bien
| blah         | blah     | blah          | que tal| o eso creo
| wow | que fantasia| no me lo creo wowowowow qué bien| se da| wow

Ugly table
Col 1 | Col2 | Col3
:-- | :-: | --:
Ugh this is so ugly | make it | stop