all: sh_haskell.js

sh_haskell.js: haskell.lang
	perl -I ../shjs/shjs-0.6-src/ ../shjs/shjs-0.6-src/sh2js.pl haskell.lang > sh_haskell.js
