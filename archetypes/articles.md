+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = '{{ .Date }}'
description = ""
lastmod = '{{ .Date }}'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
show_table_of_contents = true
show_right_bar = true
# show_related_articles = false # If false, it wont show the related articles at the bottom. If true (or non set), they will show.
# article_cover = '{{.File.ContentBaseName}}.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# show_next_and_previous_arrows = false # If false (or not set), will hide the left/right arrows next to the articles' title for navigating between articles
+++
