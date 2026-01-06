{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c100000\c100000\c100000;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
self.addEventListener("install", e => \{\
 e.waitUntil(\
   caches.open("clay-ko").then(cache =>\
     cache.addAll([\
       "./",\
       "./index.html",\
       "./manifest.json"\
     ])\
   )\
 );\
\});\
\
self.addEventListener("fetch", e => \{\
 e.respondWith(\
   caches.match(e.request).then(res => res || fetch(e.request))\
 );\
\});}
