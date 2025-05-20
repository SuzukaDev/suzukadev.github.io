---
title: Suzuka Ka Portfolio
description: (DESCRIPTION EN EL content/_index.md)An example site for hugo-theme-gallery. Images from Unsplash.
#lastmod: 2023-07-05
resources:
  - src: martin-martz-wRuhOOaG-Z4-unsplash.jpg
    params:
      cover: true # cover of the home page is used for OpenGraph cards, etc.
# profile_picture: "/images/yo.jpg"
# profile_picture: "/images/yo.jpg" # DEPRECATED This is not used

menus:
  main:
    name: Home
    weight: -1
# sub-galleries on list pages are sorted by date and weight (descending)
# TODO cambiar links del indice (español)
---


{{< header text="*Suzuka Ka*" h=1 class="bloom-shadow" >}}

{{< images_hover_link img="/images/yo.jpg" img_hover="/images/yo_color.png" page="about" c0_dark=#A64951FF c1_dark=#EF454EFF c2_dark=#6e3656 c0_light=#fd7c26 c1_light=#EF454EFF c2_light=#f16c13 t1=2.2s fit=300 >}}

{{< text_glitch text="Ingeniero multimedia 🧠" time=10 rotation=901 font=1 sync=true intensity=0.1 >}} y <span class="pixel-font">{{< text_shimmer text="desarrollador de videojuegos" time=2.4 delay=.03 scale=1.3 blur=10 y=0 color1=orange color2=red color1-light=#ffde26 color2-light=red >}}</span> {{< text_rotate text="🎮" time=7.2  scale=1.5 >}} {{< text_wavy text="multidisciplinario" time="1.0" freq="0.1" amp="5">}} <br> con {{< text_strong text="gran" font_weight=900 bloom_color=#00f7ff bloom_size=9 >}} pasión por {{< text_handwritten text="el arte la creatividad" scale=.1 rotation=40 font=3 frame_time=.3 time_variation=.10 spacing=.1  fx=1.3 >}} {{< text_handwritten text="🎨" rotation=360 scale=.1 offset=4 font=3 frame_time=.3 time_variation=.10 fx=1.0 >}} 

Lee más [**sobre mí**]({{< relref "about.md" >}}) o [**echa un vistazo a mi trabajo**]({{< relref "/articles/" >}}).
<!-- TODO cambiar el link de "check my work here -->
(❌❌❌TODO❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗: cambiar el link de "check my work here"❗)

❌❌❌❗❌❌❌❗❌❌❌❗❌❌❌❗❌❌❌❗❌❌❌❗❌❌❌❗❌❌❌❗❌❌❌❗




<!-- Ingeniero multimedia 🧠 y desarrollador de videojuegos {{< text_wavy text="multidisciplinario" time="1.0" freq="0.1" amp="5">}} 🎮 al que le molan bastante las artes 🎨. -->


{{< featured_album_big album="pixel-art" cover="images/the-resilence-of-memory.png" pos1="50% 100%" pos2="50% 0%" zoom1="100%" zoom2="100%" t1="10s" t2="2.5s" >}}

{{< featured_albums albums="traditional-art, galleries/art/3d" >}}

<!-- [Artículos]({{< relref "articles" >}}) &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;[Álbumes]({{< relref "galleries" >}}) &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;[Interviews]({{< relref "articles" >}}) -->


{{< link_box "galleries" "*ALBUMS*" false "sans-font" >}} 
{{< link_box "articles" "*ARTÍCULOS*" false "sans-font" >}} 
