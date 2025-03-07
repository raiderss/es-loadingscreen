fx_version "adamant"

description "EyesStore"
author "! Raider#0101"
version '1.0.0'
repository 'https://discord.com/invite/EkwWvFS'

game "gta5"


client_scripts { 
    "main/client/*.lua"
}

ui_page "index.html"

files {
    'index.html',
    'vue.js',
    'assets/**/*.*',
    'assets/font/*.otf',  
}

lua54 'yes'
-- dependency '/assetpacks'

loadscreen 'index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'