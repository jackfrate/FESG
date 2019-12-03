# Frontend Survival Guide Cheat Sheet

# vscode

- its amazing because of the command palette and extensions

# common editor shortcuts you should learn

- `ctrl/cmd + /` = start comment / comment out line in most editors
- multi cursor
- duplicate a line
- emmet

# html

## emmet

- lets you generate html really fast by using css syntax
- **YOU DON'T HAVE TO MAKE TAGS ANYMORE**
- borrowed from https://docs.emmet.io/cheat-sheet/
- you can literally layout your entire html page
- wrap with abbreviation

```html
<!-- press intellisense with emmet -->

<!-- basic stuff -->
nav>ul>li
<nav>
  <ul>
    <li></li>
  </ul>
</nav>

<!-- class names for tags and multiplication-->
div.className>nav>ul>li*5
<div class="className">
  <nav>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </nav>
</div>

<!-- dynamic numbering -->
ul>li.item$*5
<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>

<!-- grouping -->
div>(header>ul>li*2>a)+footer>p
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

# CSS

## flex box

- the **_MOST IMPORTANT THING IN THE LANGUAGE_**
- only flexbox cheat sheet you'll need: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- shout out Anika from new media for showing me this

```css
/* activate flex box */
.container {
  display: flex; /* or inline-flex */
}
```

```css
/* set direction */
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

```css
/* set direction */
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

```css
/* align axis (look at the link for visual) */
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    space-evenly | start | end | left | right;
}
```

## wildcard

- https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
- helps a ton

```css
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}
```
