all: sh_haskell.js sh_haskell.min.js

sh_haskell.js: haskell.lang
	perl -I ../shjs/shjs-0.6-src/ ../shjs/shjs-0.6-src/sh2js.pl haskell.lang > sh_haskell.js

sh_haskell.min.js: sh_haskell.js
	yuicompressor sh_haskell.js -o sh_haskell.min.js

