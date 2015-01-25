# glyphicons-extractor


Uses Gulp together with Wiredep and PostCSS features to extract information useful when creating data `.json` files for use in project like @glyphsearch (which I'm using frequently).

## Description

Instead of crawling a website (if one exists) to extract class names for use with Glyphsearch like here:

[https://github.com/matiassingers/iconmart-glyphicons-crawler](https://github.com/matiassingers/iconmart-glyphicons-crawler)
[https://github.com/matiassingers/foundation-icon-fonts-3-glyphsearch-crawler](https://github.com/matiassingers/foundation-icon-fonts-3-glyphsearch-crawler)

in order to get data, the relevant Gulp task will scan the same Bower managed assets as used in Glyphsearch project.

For example to extract all Bootstrap glyphicons run:

```
gulp bootstrap
[16:04:12] Using gulpfile ~/git/glyphicons-extractor/gulpfile.js
[16:04:12] Starting 'bootstrap'...
.glyphicon-asterisk:before
.glyphicon-plus:before
.glyphicon-euro:before
.glyphicon-eur:before
.glyphicon-minus:before
.glyphicon-cloud:before
.glyphicon-envelope:before
.glyphicon-pencil:before
.glyphicon-glass:before
.glyphicon-music:before
[...]
```

To extract Zurb Foundation Icons run:

```
gulp foundation
[16:05:13] Using gulpfile ~/git/glyphicons-extractor/gulpfile.js
[16:05:13] Starting 'foundation'...
.fa-glass:before
.fa-music:before
.fa-search:before
.fa-envelope-o:before
.fa-heart:before
.fa-star:before
.fa-star-o:before
.fa-user:before
.fa-film:before
.fa-th-large:before
.fa-th:before
.fa-th-list:before
.fa-check:before
.fa-remove:before
[...]
```
## Installation

Just clone or download this repository and then run:

```
npm install
```
This will download all required dependencies and download Bower manages assets used by Glyphsearch project.

## NOTICE
This is still a **WIP**, so Gulp tasks just output list of selectors right now and selectors are not yet processed to contains only class names.

Thanks!

