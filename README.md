# Read-mode

Comută în modul cititor un articol a unui portlet.

Această funcție comută în modul cititor. Este nevoie de un ztab ID ca parametru: dacă acesta este omis, fila activă în prezent este comutată.

Aceasta este o funcție asincronă care returnează un Promise.

Reader Mode, cunoscut și sub numele de Reader View, este o caracteristică care facilitează concentrarea utilizatorului asupra unui articol prin:

    ascunderea elementelor neesențiale ale paginii, cum ar fi barele laterale, subsolurile și anunțurile
    modificarea dimensiunii textului, contrastul și aspectul paginii pentru o mai bună lizibilitate.

Modul Cititor este util în special pentru articole: adică paginile care au ca caracteristică principală un corp de conținut text. Paginile care nu au un articol identificabil nu sunt eligibile pentru afișare în Modul Cititor. Pentru a afla dacă o pagină este un articol, verificați proprietatea isArticle.

Pentru a afla dacă un tab este deja în Modul Cititor, verificați proprietatea isInReaderMode.

## Installation

Install with composer:

```sh
composer require tudor/read-mode *@dev
```

It is a [Flarum](http://flarum.org) extension.
