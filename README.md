# Pure.Lettering.js

## Why make this?

I'm a big fan of [Lettering.js](https://github.com/davatron5000/Lettering.js), and I have been for quite a while. Typography is a *very* underappreciated part of the web, but there's just one problem: jQuery.

You see, the thing about Lettering.js is that it doesn't actually *do* that much, so why include jQuery? On a one-pager you're very limited in terms of bandwidth and external requests, so I was quite dismayed to find out that Lettering.js is actually... *jQuery*.Lettering.js. I've been using it for quite a long time, but that's six extra letters you don't always want.

The official description even goes so far as to suggest you load Lettering.js and jQuery within your header to prevent the infamous FOUT (Flash Of Unstyled Text), which as anyone in web development will tell you is a **big** no-no. You're already pushing it, why make it even worse and include jQuery unnecessarily?

So now you're here. A pure Javascript alternative to Lettering.js

## Usage

Include Pure.Lettering.js

```
  <script src="myfiles/js/pure.lettering.min.js"></script>
```

Letterize your phrases

```
  <script type="text/javascript">
    lettering("#pagetitle");
    lettering(".description");
    lettering("#sidebar p");
  </script>
```

An element such as <h1>Wizards</h1> becomes:
```
  <h1>
    <span class="char1">W</span>
    <span class="char2">i</span>
    <span class="char3">z</span>
    <span class="char4">a</span>
    <span class="char5">r</span>
    <span class="char6">d</span>
    <span class="char7">s</span>
  </h1>
```

And can then be styled in your CSS/SASS/LESS however you see fit. For easy in-browser kerning assistance try the wonderful [KernJS Bookmarklet](http://www.kernjs.com/). Pure.Lettering.js is fully compatible. 
