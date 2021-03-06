var codes = document.getElementsByTagName("code");
var title, elTitle, elPre;
for (var i=0, l=codes.length ; i<l ; i++) {
  elPre = codes[i].parentNode;
  if (elPre.tagName != "PRE") continue;

  // Prepare for highlighting
  // elPre.className = elPre.className.replace("sourceCode ","");
  if (elPre.className.match("sourceCode"))
  switch (elPre.className.replace("sourceCode ","")) {
    case 'css':
    case 'haskell':
    case 'html':
    case 'php':
    elPre.className = "sourceCode sh_" + elPre.className.replace("sourceCode ", "");
    break;
    case 'js':
    elPre.className += " sh_javascript";
    case 'literate haskell':
    elPre.className += " sh_haskell";
    break;
  }
}

sh_highlightDocument();
