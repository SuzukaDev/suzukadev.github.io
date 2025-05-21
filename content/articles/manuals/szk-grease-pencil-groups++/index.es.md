+++
# TODO traducir archetype (ES)
title = 'Szk Grease Pencil Groups++'
date = '2025-05-20T19:01:56+02:00'
description = "*Addon* para Blender que añade muchas mejoras al *Grease Pencil*!"
lastmod = '2025-05-20T19:01:56+02:00'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
tags = ["Blender addon", "Animation", "Grease Pencil"]
# main_classes = 'pixel-font' # classes for <main> element. Allows customization of each page. Example of use: add a class from `fonts.scss` to change the page font. (consolas-font, handwritten-font, etc).
# # -------- DISPLAY OPTIONS --------
accent_color = "#EA7600" # customize the color for links, etc in the page
# show_breadcrumbs = false
# show_description = false
# show_author = false
# show_date = false
# show_reading_time = false
# show_tags = false
show_table_of_contents = true
show_right_bar = true
# show_next_and_previous_arrows = false # If false (or not set), will hide the left/right arrows next to the articles' title for navigating between articles
# show_related_articles = false # If false, it wont show the related articles at the bottom. If true (or non set), they will show.
# article_cover = 'images/cover600x600v2.gif' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'article_cover' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
# # ------- FEATURE OPTIONS --------
# featured = true # if true, the article will be featured in the index page.
# featured_title = 'Szk Grease Pencil Groups++' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags

+++

> Este addon de Blender **`agrega funcionalidad de grupos` ({{< text_wavy "¡y más cosas❗ 🎉" 0.05 10 >}}**) a **¡el Grease Pencil de Blender!**
<!-- ![=anim_webp_12-10-2023_21-19-16,85.webp](images/logo_banner.webp) -->
{{< link_card title="SZK Grease Pencil Groups++" 
subtitle="¡Hace que el Grease Pencil sea mejor!" 
url="https://orb91.gumroad.com/l/grease-pencil-groups" 
cover="images/logo_banner.webp" 
c=#fb9433 
hover_color=#fff8d4
url_text="www.orb91.gumroad.com" 
position="50% 80%" >}}
{{< img_caption img="images/logo_banner.webp" 
class="no-box-shadow" 
url="https://orb91.gumroad.com/l/grease-pencil-groups"
alt="Logo de SZK Grease Pencil Groups++" >}}
Está diseñado para hacer que trabajar con el Grease Pencil sea una experiencia más agradable (¡y organizada!) y para realizar tareas redundantes más rápidamente.
Además, también ofrece algunas pequeñas funciones nuevas que hacen que dibujar con el Grease Pencil sea más parecido a dibujar con otros programas gráficos.
> Hice (¡y **estoy haciendo!**) este addon para mi uso diario para simplificar un poco mi vida, y estoy añadiendo continuamente cada mejora e idea que se me ocurre, ¡así que está asegurada la máxima calidad posible!
Si tienes una idea o algo que creas que sería genial implementar, ¡estoy abierto a escuchar!
> 
# Instalación 💻
1. Descarga el archivo .zip con el addon y colócalo donde quieras.
2. En Blender, ve a `Editar → Preferencias`. Una vez allí, presiona la pestaña `Complementos` y pulsa el botón `Instalar` en la esquina superior derecha:
![Sin título](images/installation.png)
3. Selecciona el archivo .zip.
4. Una vez instalado, busca “Grease Pencil Groups” en la barra de búsqueda y activa el addon.
# Configuración 🛠
El panel del addon aparecerá en el `Panel de propiedades`, junto con el panel original de capas.
Para empezar a usarlo, simplemente haz clic en el botón Inicializar para añadir las capas actuales en el Grease Pencil activo:
![setup 4.gif](/images/setup_4.gif)
{{< box_info >}}
💡 Nota: añadir una capa **fuera** del panel de Capas y Grupos hará que el sistema de grupos quede **desactualizado**.
Si es así, no te preocupes, aparecerá un botón para refrescar los cambios.
> Personalmente sugiero que si prefieres usar el panel del addon en lugar del panel antiguo de capas, simplemente arrástralo hacia arriba (o donde quieras), para que no lo pierdas de vista:
![drag 3.gif](images/drag_3.gif)
{{< box_info "📢" >}}
Podría haber sobrescrito el panel de capas predeterminado de Blender, pero personalmente no me gusta eliminar elementos originales de la interfaz, por si algunos usuarios quieren seguir usando el panel nativo de capas.
{{< /box_info >}}
{{< /box_info >}}
# Interfaz 🖥️
{{< box_green "💡" >}}
**CONSEJO**: Cada botón está documentado y muchos operadores tienen diferentes opciones cuando se presionan con {{< shortcut "CTRL" >}}/{{< shortcut "ALT" >}}/{{< shortcut "SHIFT" >}}. Todo está explicado en su tooltip. **Consulta el tooltip** (pasando el cursor del ratón) **para descubrir nuevos atajos y funcionalidades**.
{{< /box_green >}}
![=anim_webp_10-10-2023_19-13-04,39.webp](/images/anim_webp_10-10-2023_19-13-0439.webp)
# Manual ⚙
## Añadir Capas/Grupos `+`
Usa los botones {{< shortcut "Nueva Capa" >}} y {{< shortcut "Nuevos Grupos" >}} para añadir nuevos elementos.
1. **Añadir Capa ✏:** 
    1. Mantén {{< shortcut "SHIFT" >}} para añadir la nueva capa **encima** del elemento seleccionado
    2. Mantén {{< shortcut "CTRL" >}} cuando un **grupo cerrado** esté **seleccionado**, para añadir la nueva capa dentro de él.
    3. Mantén {{< shortcut "ALT" >}} para añadir la nueva capa **debajo** del grupo/capa seleccionada
2. **Añadir Grupo 📂:**
    1. Mantén {{< shortcut "SHIFT" >}} para colocar el **elemento seleccionado** dentro del **nuevo grupo**.
    2. Mantén {{< shortcut "CONTROL" >}} mientras tienes seleccionado un grupo para **colocar el nuevo grupo dentro del seleccionado**.
    3. Mantén {{< shortcut "ALT" >}} para añadir un grupo **debajo** del elemento seleccionado.
    4. Mantén {{< shortcut "SHIFT+CONTROL" >}} para añadir un nuevo grupo y **meter dentro todos los elementos que están debajo**.
### Eliminar una Capa/Grupo ❌
Haz clic en el **icono de la papelera** {{< shortcut "🗑️" >}} junto al botón {{< shortcut "Nuevo Grupo" >}} para **eliminar un elemento**.
{{< box_info >}}
Si el elemento seleccionado es un grupo, solo eliminará el grupo, pero dejará todos sus hijos.
{{< /box_info >}}
{{< box_green "💡" >}}
Puedes **eliminar** el **grupo y todo su contenido** presionando el botón de eliminar mientras mantienes {{< shortcut "CONTROL" >}}.
![delete.gif](images/delete.gif)
{{< /box_green >}}
{{< box_green "💡" >}}
**Consejo**: Presiona {{< shortcut "SHIFT + Click" >}} para limpiar un Grupo 🧹:
![clean group v2.gif](images/clean_group_v2.gif)
Esto **eliminará todas las capas ocultas** dentro de un grupo.
{{< /box_green >}}
## Editar capas y grupos
Cambiar una propiedad en una capa afectará solo a esa capa. **Modificar una propiedad en un grupo afectará a todas sus capas y grupos contenidos**.
![Ocultar el grupo ocultará todos sus elementos. Además, añadir una máscara a un grupo añadirá esa máscara a todos sus hijos. Si editas máscaras en un grupo, todos sus hijos serán editados.](/images/Masks.gif)
Ocultar el grupo ocultará todos sus elementos. Además, añadir una máscara a un grupo añadirá esa máscara a todos sus hijos. Si editas máscaras en un grupo, todos sus hijos serán editados.
## Mover elementos ⤴
Puedes mover fácilmente los elementos usando los botones de flecha:
![move arrows 1.gif](/images/move_arrows_1.gif)
Si necesitas mover un elemento “más lejos” y no quieres moverlo paso a paso, puedes usar el panel `Mover a`:
![move panel.gif](/images/move_panel.gif)
Allí, simplemente haz clic en un elemento para poner el elemento seleccionado dentro/encima/debajo de él (manteniendo `SHIFT`/`CONTROL` (consulta el panel para más información)).
{{< box_info "💡" >}}
Puedes activar el panel Mover en la Vista 3D presionando {{< shortcut "M" >}} mientras estás en Modo Pintura
{{< /box_info >}}
{{< box_green "💡" >}}
**Consejo**: Si quieres mover los elementos más rápido y directamente desde la vista de lista y evitar el menú de mover, puedes presionar el botón 👁️️ junto al panel `Mover a` para mostrar/ocultar los botones/operadores de mover:
![=anim_webp_12-10-2023_13-17-45,13.webp](images/anim_webp_12-10-2023_13-17-4513.webp)
Al hacer clic en los **puntos** a la izquierda, moverás la capa/grupo activo como en el panel `Mover a`.
Además, **los mismos atajos de mover se aplican aquí** (consulta el tooltip para más info):
![move panel uilist.gif](images/move_panel_uilist.gif)
{{< /box_green >}}
## Fusionar Grupos y Capas ⬇
**Puedes** fusionar capas como de costumbre, pero también **combinar todo el contenido de un grupo**.
![merge normal.gif](/images/merge_normal.gif)
También puedes **copiar un grupo en una sola capa**:
![copy group to layer.gif](/images/copy_group_to_layer.gif)
Puedes encontrar el operador de fusión (y otros) en el menú desplegable accesible con este botón en la barra superior:
![Sin título](/images/Untitled%201.png)
{{< box_green "💡" >}}
**Consejo**: Puedes decidir qué operadores mostrar en la capa/grupo y en la barra superior con [***“operadores favoritos”*** en preferencias](#favourite-operators)
{{< /box_green >}}
El addon viene con una **forma mejorada de fusionar capas** cuando su opacidad es menor que 1.0*
{{< box_info >}}
<strong>*</strong>Blender no fusiona correctamente las capas cuando tienen transparencia.
![Con el comportamiento normal de fusión de Blender (la transparencia cambia)](images/mergebad.webp)
Con el comportamiento normal de fusión de Blender (la transparencia cambia)
<br>
💪Con la forma **mejorada** de fusionar:
![El resultado más fiel al estado original (sin fusionar capas).](images/mergegoodV2.webp)
El resultado es más **fiel** al estado original (sin fusionar capas).
{{< /box_info >}}
Para activar este modo, presiona {{< shortcut "SHIFT + Click derecho" >}} al ejecutar el operador.
Esto lo configura manualmente (siendo más lento para fusionar, pero ofreciendo mejores resultados)
## Personalizar colores 🎨
Puedes **editar los colores de las capas/grupos** haciendo clic en su icono junto al nombre en la parte superior de la lista:
![colors.gif](/images/colors.gif)
{{< box_green "💡" >}}
**Consejo**: Al cambiar el color de un grupo, puedes:
- mantener {{< shortcut "SHIFT" >}} para **cambiar** el color de **todos los grupos hijos** 📂
- mantener {{< shortcut "CTRL" >}} para **cambiar** el color de **todas las capas** ✏
- mantener {{< shortcut "ALT" >}} para **cambiar el color de todos los hijos** ✏&📂
{{< /box_green >}}
## Abrir/cerrar grupos 📂
Haz clic en el icono de carpeta para abrir/cerrar un grupo.
![better close.gif](/images/better_close.gif)
Puedes mantener {{< shortcut "ALT" >}} mientras haces clic para **abrir/colapsar todos los hijos**.
Puedes abrir/colapsar todos los grupos en la lista presionando un icono de carpeta mientras mantienes {{< shortcut "ALT + CONTROL" >}}.
{{< box_green "💡" >}}
**Consejo**: Puedes presionar {{< shortcut "SHIFT + Click izquierdo" >}} **en el icono del grupo** para **añadir el elemento de abajo** directamente **al grupo**.
Presiona {{< shortcut "SHIFT + ALT + Click izquierdo" >}} para desagrupar el último elemento en el grupo.
![Presiona `SHIFT + Click izquierdo` para añadir el elemento de abajo a un grupo](images/add_to_group.gif)
Presiona {{< shortcut "SHIFT + Click izquierdo" >}} para **añadir el elemento de abajo a un grupo**.
![Presiona `SHIFT + ALT + Click izquierdo` para desagrupar el último elemento en el grupo](images/ungroup.gif)
Presiona {{< shortcut "SHIFT + ALT + Click izquierdo" >}} para **desagrupar el último elemento en el grupo**.
{{< /box_green >}}
## Modos Solo 🔍
El modo solo de Blender {{< text_wavy "ha sido" 0.1 4 >}} {{< text_wavy "mejorado*❗" 0.06 10 >}}
> Originalmente, **al salir del modo solo todas las capas se volvían visibles** (sin importar si estaban ocultas originalmente), **perdiendo los estados de visibilidad previos**.
Con este addon, **no pierdes ningún cambio en tu dibujo ya que guarda su estado previo**.
Puedes poner en solo la visibilidad 👁️ y el estado de bloqueo 🔐 de las capas/grupos.
{{< box_green >}}
El modo solo de bloqueo es especialmente *-súper-* útil (❗) cuando esculpes, editas los trazos, pintas pesos, mueves fotogramas en la dopesheet, etc. (¡yo lo uso mucho!)
{{< /box_green >}}
Puedes encontrarlos en el menú (junto a las flechas de mover). O puedes añadir un atajo para ello ([ver Operadores Favoritos en Preferencias](#favourite-operators)).
Ambos modos solo <u>ofrecen diferentes **niveles de filtro**</u>:
1. **Seleccionado** - Solo el elemento seleccionado será visible. Si el elemento seleccionado es un grupo, todos sus descendientes serán visibles.
2. **Hermanos** - Solo el elemento seleccionado y sus hermanos serán visibles.
3. **Carpeta superior** - Todos los elementos en la carpeta raíz (en caso de existir) serán visibles.
![solo ez 3mb.gif](/images/solo_ez_3mb.gif)
Ofrece 2 posibilidades para el modo solo de visibilidad:
- Ocultar capas
- Desvanecimiento de opacidad
[Lee sobre ellos aquí](#settings-).
## Alfa heredado 🖌
**Haz clic** en el **botón alfa** junto a las propiedades de la capa/grupo para activarlo.
{{< box_info >}}
Cuando el alfa heredado está activado, el contenido de la capa/grupo solo será visible dentro de la opacidad de sus hermanos.
![inherit alpha 1.gif](images/inherit_alpha_1.gif)
En este ejemplo, el color base y la sombra fueron dibujados sin considerar si salían o no del contorno de la bola. Al activar el alfa, su contenido se recorta por la opacidad de sus hermanos, encajando perfectamente en la silueta de la bola.
{{< /box_info >}}
Esta fue una función que pretende imitar el [**alfa heredado de Krita**](https://docs.krita.org/en/tutorials/clipping_masks_and_alpha_inheritance.html).
# Preferencias 🛠
## Ajustes ⚙
- `Usar luces por defecto` - Si es True, (sin padre*) **las nuevas capas** y grupos **usarán luces cuando se creen**. 
{{< box_warning >}}
*Si se crean dentro de un grupo, **heredarán** las propiedades actuales del grupo.
{{< /box_warning >}}
- `Mantener colores de vértice al cambiar pinceles` - Por defecto, cada pincel tiene su color principal y secundario, por lo que pierdes el color seleccionado al cambiar a otro pincel. Útil cuando quieres usar otro pincel por su textura pero quieres seguir pintando con el color que tenías seleccionado.
- `Modo de visibilidad solo` - Selecciona el método usado al poner en solo la visibilidad de las capas.
    - Ofrece 2 opciones:
        1. **Ocultar capas**: solo las capas filtradas serán visibles, mientras las otras estarán completamente ocultas.
            
            ![solo hide.gif](/images/solo_hide.gif)
        <br>
        2. **Desvanecimiento de opacidad**: las capas filtradas serán visibles con su opacidad original, mientras el resto se desvanecerá según el porcentaje de opacidad seleccionado en preferencias.
            
            ![solo opacity skull.gif](/images/solo_opacity_skull.gif)
        <br>
- `Prefijos/Sufijos al duplicar` - Establece los prefijos (izquierda) y sufijos (derecha) añadidos al duplicar un grupo y una capa.
- `Chequeo automático de nuevas versiones` - Si es True (recomendado), el addon comprobará automáticamente si hay una versión más reciente subida.
    
{{< box_info >}}
Esta comprobación ocurre solo una vez al cargar Blender
{{< /box_info >}}
    
### Apariencia 👁️
- `Iconos de visibilidad en el lado izquierdo` - Si es True, el icono de ocultar/mostrar se colocará a la izquierda (como en otros programas gráficos como *Krita* o *Photoshop*).
![=anim_webp_11-10-2023_14-03-50,28.webp](/images/anim_webp_11-10-2023_14-03-5028.webp)
- `Mostrar propiedades en la lista` - Decide si mostrar o no información extra en la lista.
    1. **Usar luces** - Indica si la capa/grupo está afectada por luces
    2. **Modo de fusión** - Muestra un icono con el modo de fusión usado cuando es diferente a ‘Regular’
    3. **Opacidad** - Muestra la opacidad directamente en la lista cuando es diferente a 100%.
        
        ![Sin título](/images/Untitled%202.png)
        
    
    1. **Padre** - Muestra un icono de hueso cuando la capa/grupo está parentada a otro objeto.
    
    ![=anim_webp_12-10-2023_11-26-14,64.webp](/images/anim_webp_12-10-2023_11-26-1464.webp)
    
<!-- ### Operadores Favoritos ⭐ -->
### Operadores Favoritos
Puedes seleccionar tus acciones favoritas para mostrarlas en la barra superior y en la capa/grupo seleccionado.
![fav operators 3.png](/images/fav_operators_3.png)
{{< box_info >}}
Pasa/coloca el ratón sobre los iconos para ver su función.
{{< /box_info >}}
# Atajos ⌨
Atajos para las nuevas funcionalidades.
## Grease Pencil `Modo Pintura` 🖌
{{< shortcut "A" >}} - Cambiar entre color principal y secundario
{{< shortcut "E" >}} - Cambiar entre Dibujar y Borrador
{{< shortcut "ALT + E" >}} - Cambiar entre Modo Pintura y Esculpir
{{< shortcut "ALT + A" >}} - Tomar/muestrear color de vértice bajo el ratón. (¡No necesitas ir manualmente al color cada vez para activar el cuentagotas❗ 🎉🥳)
![Los colores se están muestreando directamente de las letras mientras pintas (No necesitas ir a la propiedad y presionar `E` para activar el cuentagotas 🥳)](/images/ezgif-3-3110dce1cc.gif)
Los colores se están muestreando directamente de las letras mientras pintas (No necesitas ir a la propiedad y presionar {{< shortcut "E" >}} para activar el cuentagotas 🥳)
{{< shortcut "SHIFT + A" >}} - Seleccionar pincel anterior.
{{< shortcut "M" >}} - (En Vista 3D) Mostrar “Panel Mover”
## Grease Pencil `Modo Edición` 📐
{{< shortcut "M" >}} - (En Vista 3D) Mover trazos seleccionados a otra capa
---
![OPH.webp](/images/OPH.webp)
# Preguntas Frecuentes❔
- ***¿Por qué escribes una sección de Preguntas Frecuentes si nadie te ha hecho una sola pregunta relacionada con el complemento?***
    
    Esa es una muy buena pregunta. No lo sé. Supongo que si alguna vez me preguntan algo “frecuentemente” (más de 0 veces), lo aclararé aquí por si es útil para otros 🐢.
    
- ***¿Por qué pusiste iconos en el encabezado?***
    
    Personalmente me gusta cuando puedo distinguir claramente cuando alguna funcionalidad viene de un complemento que tengo instalado y no es algo nativo de Blender. Además, como decidí no sobrescribir el panel original de Capas (por si alguien quiere seguir usándolo mientras tiene este complemento instalado), quise hacer que el panel destaque del otro.
    
    - Además, me gusta mostrar a mi perro, Dex:
        
        ![Imagen de WhatsApp 2023-07-02 a las 23.36.05.jpeg](/images/WhatsApp_Image_2023-07-02_at_23.36.05.jpeg)
        
        <!-- ![Imagen de WhatsApp 2023-07-02 a las 23.36.00.jpeg](/images/WhatsApp_Image_2023-07-02_at_23.36.00.jpeg) -->
        
        <!-- ![Imagen de WhatsApp 2023-07-02 a las 23.36.01.jpeg](/images/WhatsApp_Image_2023-07-02_at_23.36.01.jpeg) -->
        
        <!-- ![Imagen de WhatsApp 2023-07-02 a las 23.36.04.jpeg](/images/WhatsApp_Image_2023-07-02_at_23.36.04.jpeg) -->
        
        <!-- ![Imagen de WhatsApp 2023-07-02 a las 23.36.08 (1).jpeg](/images/WhatsApp_Image_2023-07-02_at_23.36.08_(1).jpeg) -->
        
# Contacto ✉
<!-- Twitter: [@SuzukaKDev](https://twitter.com/SuzukaKDev)
Mail: [suzukakadev@gmail.com](mailto:suzukakadev@gmail.com) -->
Twitter: {{< get_social "twitter" >}}
Mail: {{< get_social "email" >}}
---
<!-- Página de Gumroad: [Grease Pencil Groups ++](https://orb91.gumroad.com/l/grease-pencil-groups) -->
{{< link_card title="SZK Grease Pencil Groups++" 
subtitle="¡Hace que el Grease Pencil sea mejor!" 
url="https://orb91.gumroad.com/l/grease-pencil-groups" 
cover="images/logo_banner.webp" 
c=#fb9433 
hover_color=#fff8d4
url_text="www.orb91.gumroad.com" 
position="50% 80%" >}}