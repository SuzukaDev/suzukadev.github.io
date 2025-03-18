+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = '{{ .Date }}'
description = ""
lastmod = '{{ .Date }}'
# draft = true # if true (or not set), the page will be excluded in build
private = false # If true, the article wont be listed and will only be visible by knowing its url
show_breadcrumbs = false
# show_author = false
# show_date = false
# show_reading_time = false
# show_tags = false
show_table_of_contents = true
show_right_bar = true
# show_related_articles = false # If false, it wont show the related articles at the bottom. If true (or non set), they will show.
# article_cover = '{{.File.ContentBaseName}}.png' # local path for the image used as the cover. NOTE: Check its extension! (.png set as a template)
# NOTE Since this is a leaf bundle (page in its own folder), placing an image in the same folder with the name 'cover' (no matter its extension) will be used as the cover AUTOMATICALLY. BUT if 'article_cover' is set, it will use that (this is also useful for having different covers for each language, if that is needed).
+++
