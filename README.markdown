Src-Highlight Haskell Syntax
============================

This code provides syntax highlighting for Haskell files with Src-Highlite.
Here are some features:


* Operators are supported (++, !, >>=, and any other combination of legal operator characters)
* Special symbols are recognised (=>, <-, ->, ::, ..)
* Unicode support for  →, ←, ∷, ‥,⇒, ∀, ∃
* Support for qualified module functions (List.sort, etc)
* Support for qualified module types
* Support for literate code (using > and \begin{code} \end{code})
* Support for literate specifications (using < and \begin{spec} \end{spec})

You can see some examples of its use at [zenzike.com](http://zenzike.com/).

Installation
------------

The `haskell.lang` file is provided as is, and can be used to compile a
javascript file suitable for use with [SHJS](http://shjs.sourceforge.net) for
syntax highlighting.

    git clone git://github.com/zenzike/src-highlite-haskell.git
    cd src-highlite-haskell
    make

License
-------

Copyright 2010, 2011 Nicolas Wu

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
