#!/bin/bash

filename=${1}

bootstrap=$(cat assets/css/bootstrap.min.css)
fontawesome=$(cat assets/css/fontawesome.min.css)
fontawesome=$(echo "$fontawesome" |  sed 's;\\;\\\\;g')
solid=$(cat assets/css/solid.min.css)
brands=$(cat assets/css/brands.min.css)
style=$(cat assets/css/style.min.css)

sed -r -i -e "/^<\/head>.*/i<style>$bootstrap<\/style>" ${filename}
sed -r -i -e '/^<\/head>.*/ i <style>'"${fontawesome}"'<\/style>' ${filename}
sed -r -i -e "/^<\/head>.*/i<style>$solid<\/style>" ${filename}
sed -r -i -e "/^<\/head>.*/i<style>$brands<\/style>" ${filename}
sed -r -i -e "/^<\/head>.*/i<style>$style<\/style>" ${filename}

sed -r -i -e "s/\.\.\/webfonts/assets\/webfonts/g" ${filename}
