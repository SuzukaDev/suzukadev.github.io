---
title: Imprint
rss_ignore: true
layout: page
# type: "articles"

# layout: "articles/single"
# layout: "articles"
# layout: "articles2"
menu:
  footer:
    name: Contact
    weight: 1
params:
  show_author: false
  show_date: false
  show_reading_time: false
  show_tags: false
  show_breadcrumbs: false
  show_next_and_previous_arrows: false
  show_related_articles: false # If false, it wont show the related articles at the bottom. If true (or non set), they will show.

---

Óscar R.B.,
Alicante (Spain 🇪🇸)

# Tests!
<!-- Ejemplo wavy: {{<text_wavy text="hola soy un texto wavyyy" freq="10">}} -->

<span class="wavy-text">w</span><span class="wavy-text">a</span><span class="wavy-text">v</span><span class="wavy-text">y</span>
<span class="wavy-text">t</span><span class="wavy-text">e</span><span class="wavy-text">x</span><span class="wavy-text">t</span>


Ejemplo wavy 1.0: {{<text_wavy text="Silly things" freq="0.05" time="0.9" amp="5.0">}} la verdad es que queda bien chevere primo. No me lo puedo creer qué fantasía más apoteósica y espectacular es la que tenemos entre manos.

<!-- ## EEEEjemplo wavy 1.0: {{< text_wavy text="La Web de Guimu" freq="0.05" time=".8" >}} -->
# aEEEEjemplo wavy 1.0: {{<text_wavy text="La Web de Guimu" freq="0.05" time=".8">}}

Ejemplo wavy 0.8: {{<text_wavy text="La Web de Guimu" freq="0.8">}}

Ejemplo wavy 0.5: {{<text_wavy text="La Web de Guimu" freq="0.5">}}

Ejemplo wavy 0.1: {{<text_wavy text="La Web de Guimu" freq="0.1">}}

Ejemplo wavy 0.2: {{<text_wavy text="La Web de Guimu" freq="0.2">}}

Ejemplo wavy 0.01: {{<text_wavy text="La Web de Guimu" freq="0.01">}}

[may twitter]({{< get_social_url gumroad>}})

Joder... {{<link_underline "https://x.com/search?q=Palestina&vertical=trends" "hola soy el text">}}


Esto de delante es un link oculto... {{<link_hidden "https://x.com/search?q=Palestina&vertical=trends" "hola soy el text">}}




## Contact

<!-- ## {{<text_wavy text="Contact" freq="0.05" time="1.8">}} -->

You can contact me via:

Email: {{<get_social "email" >}}

Twitter: {{<get_social twitter true >}}

