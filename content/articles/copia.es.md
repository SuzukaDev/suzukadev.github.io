+++
title = 'Second Article'
date = '2025-02-26T21:13:58+01:00'
description = ""
draft = true
show_right_bar = true
show_table_of_contents = true
tags = ["art"]
# [params]
featured = true
featured_description = "Testing boxes and inline shortcodes"

# article_cover = "t.webp"
+++

aaa


![](/en/articles/second-article.png)

hola asdfhkjhf {{< text_glitch text="CTRL+ALT+T" >}} asdf

hola asdfhkjhf {{< shortcut "CTRL+ALT+T" >}} asdf

wow 



{{< box_green >}}

hola asdfhkjhf {{< shortcut "CTRL+ALT+T" >}} asdf

hola twitter {{< get_social_url twitter true >}} jeje

hola twitter {{< get_social twitter false >}} jeje

hola twitter {{< get_social twitter true >}} jeje

< >

aa

palitos Vamos a ver {{< text_rotate text="holaaa amigo" >}} Espero que sí

Vamos a ver {{< text_wavy text="holaaa amigo" >}} Espero que sí

Vamos a ver {{< text_strong text="holaaa amigo" >}} Espero que sí

Vamos a ver {{< text_spoiler text="holaaa amigo" >}} Espero que sí

Vamos a ver {{< text_glitch text="holaaa amigo" >}} Espero que sí

Vamos a ver {{< text_handwritten text="holaaa amigo" >}} Espero que sí

Vamos a ver {{< text_shimmer text="holaaa amigo" >}} Espero que sí

con % Vamos a ver {{% text_shimmer text="holaaa amigo" %}} Espero que sí

{{< youtube "5nf24no8dKU" >}}


adsf
{{< /box_green >}}


{{% box_green %}}

Porcentajesss


Vamos a ver{{< text_shimmer text="holaaa" >}}Espero que sí

con % Vamos a ver{{% text_shimmer text="holaaa" %}}Espero que sí

{{< youtube "5nf24no8dKU" >}}


adsf
{{% /box_green %}}

{{< box_error >}}
	Con < >

	Vamos a ver {{< text_shimmer text="holaaa" >}} Espero que sí

	con % Vamos a ver {{% text_shimmer text="holaaa" %}} Espero que sí

	as d
	fasd asd 

	{{< youtube "5nf24no8dKU" >}}


	adsf
{{< /box_error >}}

{{< box_green >}}
adsf
{{< /box_green >}}




# Artículo 2

{{% box_green false %}}
Thiss {{< shortcut keys="CTRL+ALT+V" >}} should be in the same line
{{% /box_green %}}

{{< box_green >}}
solo una linea
{{< /box_green >}}

{{< box_green >}}
Buenoo.... pues...

A ver qué tal se da

This {{< shortcut keys="CTRL+ALT+V" >}} should be in the same line


---

jajaja raq
{{< /box_green >}}

<div class="text-box green-box" data-text="✅">

This is a green box...

Multiline! 
</div>

<div class="green-box" data-text="✅">

This is a green box... aasjdkfhaskjdhfkajshd <kbd>jachi sape</kbd> kjasdkf haskdjfh askjdhf kashdfk ahskdf haskjdfh kjshf kasdfk haksjdfh

This {{< shortcut keys="CTRL+ALT+V" >}} should be in the same line


asdfahskdjfhaskjdfha skdjfh aksjdhf kajsd f
</div>

This {{< shortcut keys="CTRL+ALT+V" >}} should be in the same line

{{% deprecated/info %}}

Coco % This {{< shortcut keys="CTRL+ALT+V" >}} should be in the same line


{{% /deprecated/info %}}

---

{{< deprecated/info >}}
{{< shortcut keys="CTRL+ALT+V" pre="this..." post="... should be in the same line" >}} 
{{< /deprecated/info >}}

This.... {{< shortcut "CTRL+ALT+V" false >}} ... should be in the same line

This.... {{< shortcut "CTRL+ALT+V" false >}} ... should be in the same line

{{< shortcut "Pos+mu+Vien" false >}} = jeje

{{< deprecated/info >}}
This.... {{< shortcut "CTRL+ALT+V" false >}} ... should be in the same line
{{< /deprecated/info >}}


## El precursor de la leyenda
kbd hardcoded: Pulsa <kbd>CTRL</kbd> para hacer líneas

joder... {{< shortcut "CTRL+ALT+V" >}} pues bien

joder... {{< shortcut "CTRL+ALT+V" >}} vale

La verdad es que no tengo ni idea.

{{< shortcut "CTRL+ALT+V" false >}}


{{< deprecated/info >}}
This.... {{< shortcut "CTRL+ALT+V" false >}} ... should be in the same line

This.... {{% shortcut "CTRL+ALT+V" %}} ... should be in the same line

This.... 
{{< shortcut "CTRL+ALT+V" false >}} 
... should be in the same line

True

{{< shortcut "CTRL+ALT+V" true >}}

{{< /deprecated/info >}}

{{% deprecated/info %}}
Con porcentajes
{{% shortcut "CTRL+ALT+V" false %}}
True
{{% shortcut "CTRL+ALT+V" true %}}
{{% /deprecated/info %}}


{{< deprecated/info >}}
Consejo: Pulsa <kbd>CTRL</kbd> para hacer líneas
{{< /deprecated/info >}}


{{< deprecated/info >}}
La verdad es que no sé si dejarlo así...
{{< /deprecated/info >}}

{{< deprecated/info >}}
O si por el contrario, hacer que ocupe todo el espacio que pueda y que no se adapte solo al contenido dentro de la caja
{{< /deprecated/info >}}

{{< deprecated/warning >}}
joder... {{< shortcut "CTRL+ALT+V" false >}}

With more than one line...

the emoji displays on top, not next to the first line...

How can I solve that?

---

IDK loool xD
{{< /deprecated/warning >}}

{{< deprecated/warning >}}
No está vacío
{{< /deprecated/warning >}}

{{< deprecated/warning false >}}
VACIO one line va bien claro asdfhkjfdgh fhg ueihg jsdhfg herug ihdjgkdfug hewriug hsufgh ierhg ieur hgsfugh eiurhg eiuhrg iuehrigu heiur ghiuwehrg iuherigu hewiur ghiuew hrgiuewhrgui hewiugh iuewhrg uiheg 
{{< /deprecated/warning >}}

{{< deprecated/warning "🍟" >}}
Esto es un warning sin emoji. Si fuera así pues ya estaría. asjdfhsdjfkgh skdjfgh sdjfhg kjeshg kjsfgk hesgr uhseiug hsg hiew rhgishgk jsdfg kjher iugheiu gheiur hgiuher giuhsfgh sdjfgh

Pero es que no.

---
Quiero que vaya bien




> A ver qué tal **funciona esto**
{{< /deprecated/warning >}}

{{< deprecated/info "🍟" >}}
Esto es un warning sin emoji. Si fuera así pues ya estaría. asjdfhsdjfkgh skdjfgh sdjfhg kjeshg kjsfgk hesgr uhseiug hsg hiew rhgishgk jsdfg kjher iugheiu gheiur hgiuher giuhsfgh sdjfgh

Pero es que no.

---
Quiero que vaya bien



> A ver qué tal **funciona esto**
{{< /deprecated/warning >}}

{{< deprecated/info "💩" >}}
Esto es un info. Si fuera así pues ya estaría. asjdfhsdjfkgh skdjfgh sdjfhg kjeshg kjsfgk hesgr uhseiug hsg hiew rhgishgk jsdfg kjher iugheiu gheiur hgiuher giuhsfgh sdjfgh

Pero es que no.

---
Quiero que vaya bien



> A ver qué tal **funciona esto**
{{< /deprecated/info >}}

{{< deprecated/error >}}
Esto es un info. Si fuera así pues ya estaría. asjdfhsdjfkgh skdjfgh sdjfhg kjeshg kjsfgk hesgr uhseiug hsg hiew rhgishgk jsdfg kjher iugheiu gheiur hgiuher giuhsfgh sdjfgh
{{< youtube id="5RfqB76eHTQ" autoplay=false mute=true >}}


Pero es que no.

---
Quiero que vaya bien



> A ver qué tal **funciona esto**
{{< /deprecated/info >}}

{{< youtube id="5RfqB76eHTQ" autoplay=false mute=true >}}

{{< youtube "5nf24no8dKU" >}}



Hubo vida antes del artículo 3.


prime chachi <kbd>Jean Cucu</kbd> sdf jhfgkjsdfgkj hsdfkjg hsdigh eiurhg sdhfgk jshfgu iwhe riuhsdfgh iuehrg jsdhfkg sdkfjg h jfkghsdkjfghksjdfhgkjsdfgkjh sdkjfgh ksjdhfgkjsdfkjghskd jfhgksj dhfgksdfg

{{< youtube id="5RfqB76eHTQ" autoplay=false mute=true >}}



Jejejejeje

Indent?

# NEW
{{< youtube id="5RfqB76eHTQ" autoplay=false mute=true >}}


joder tutube
<div style="height:100%; width: 100%;">
{{< youtube id="5RfqB76eHTQ" autoplay=false mute=true >}}

{{< youtube "5nf24no8dKU" >}}
</div>

con % Vamos a ver {{% text_shimmer text="holaaa" %}} Espero que sí

con < Vamos a ver {{< text_shimmer text="holaaa" >}} Espero que sí
