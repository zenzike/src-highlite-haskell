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

