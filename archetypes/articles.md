+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = '{{ .Date }}'
description = ""
lastmod = '{{ .Date }}'
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
# featured_image = '{{.File.ContentBaseName}}.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# # ------- FEATURE OPTIONS --------
# featured = false # if true, the article will be featured in the index page.
# featured_title = '{{ replace .File.ContentBaseName "-" " " | title }}' # if set, it will use this as the title in the featured card. If not, it will use the article's title.
# featured_description = "" # if set, the article will use this description in the featured card. If not, it will use the article's description.
# featured_tags = [""] # if set, it will only feature the tags in this array (useful to display only some of the tags). Note: Tags must match the tag in .Params.tags
+++
