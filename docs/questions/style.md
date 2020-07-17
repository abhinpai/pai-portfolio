---
id: style
title: Interview questions on Styling (CSS, SCSS & Less)
sidebar_label: "Styling CSS"
---

import GB from '../../src/components/glowBullet/glowBullet.jsx';

🔸 CSS Fundamentals

🔸 What are the different ways to apply CSS
<!-- ----
There are three ways to apply CSS to HTML those are `Inline`, `internal`, and `external`

🔸# Inline
Inline styles are plonked straight into the HTML tags using the style attribute.
```html
<p style="color: red">Twin-Thumb</p>
```
>Its not recommended to use inline css into an HTML elements

🔸# Internal
Embedded, or internal, styles are used for the whole page. Inside the `head` element, the `style` tags surround all of the styles for the page.
```html
<html>
  <head>
    <title>CSS Example</title>
    <style>
      p {
        color: red;
      }

      a {
        color: blue;
      }
    </style>
    ...
  </head>
</html>
```

🔸# External

External styles are used for the whole, multiple-page website. There is a `separate CSS file`
```css
p {
  color: red;
}

a {
  color: blue;
}
``` -->

🔸 What is `selector` and how will that solve the problem 
<!-- ----
CSS selector are used to target the HTML element which we want to style

There are different selectors present in the css those are
* **Element Selector**
Use HTML element to apply styling
```css
div {
  color: red;
}
```

* **Id Selector**
The id selector selects the id attribute of an HTML element to select a specific element. An id is always unique within the page so it is chosen to select a single, unique element

It is written with the hash character `#`, followed by the id of the element.


```html
<html>
  <head>
    <style>
      #sampleId {
        text-align: center;
        color: blue;
      }
    </style>
  </head>
  <body>
    <p id="sampleId">Hello People</p>
  </body>
</html>
```

* **Class Selector**
The class selector selects HTML elements with a specific class attribute. It is used with a period character `. (full stop symbol)` followed by the class name.

```html
<html>
  <head>
    <style>
      .sampleId {
        text-align: center;
        color: blue;
      }
      h2.sampleId{
          color: red;
      }
    </style>
  </head>
  <body>
    <p class="sampleId">Hello People</p>
    <h2 class="sampleId">Hello People</p>
  </body>
</html>
```

> A class name should not be started with a number

* **Universal Selector**
The universal selector is used as a wildcard character. It selects all the elements on the pages

```html
<html>
  <head>
    <style>
      * {
        text-align: center;
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>Hello People</p>
  </body>
</html>
```

* **Group Selector**
If you have more than one thing which uses the same CSS then the individual selectors can be combined into a selector list so that the rule is applied to all of the individual selectors
```css
h1,h2,p {  
    text-align: center;  
    color: blue;  
} 
```

> When you group selectors if any selector is invalid the whole rule will be ignored.

* **Attribute selectors**

This group of selectors gives you different ways to select elements based on the presence of a certain attribute on an element

```css
a[title] { }
a[href="https://example.com"] { }
```

* **Pseudo-classes and pseudo-elements**

This group of selectors includes pseudo-classes, which style certain states of an element.

The `:hover` pseudo-class for example selects an element only when it is being hovered over by the mouse pointer

```css
a:hover { }
```

It also includes pseudo-elements, which select a certain part of an element rather than the element itself

 For example, `::first-line` always selects the first line of text inside an element 

 ```css
 p::first-line { }
 ```

 * **Combinators**

 The final group of selectors combine other selectors in order to target elements within our documents. The following for example selects paragraphs that are direct children of `<article>` elements using the child combinator `>`

 ```css
 article > p { }
 ``` -->

🔸Selector that match only links ends (.zip, .Zip, .ZIP...)
<!-- ```css
a[href$=".zip" i]:after {
  content: '↓'
}
``` -->

🔸What are the different units available in CSS 

<!-- Please refer [Mozila Developer document](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) for the best understanding of it -->

🔸 Describe float? and its working 


<!-- ### How CSS file/ Style files compile 
🔸 How Styling will be taken place in browser
🔸 How CSS applies to a HTML element
🔸 CSS Specificity
🔸 Resting & Normalizing CSS
🔸 What is BEM and why its required
🔸 CSS Architecture (BEM)
🔸 Explain Flexbox
🔸 Explain Grid System in CSS
🔸 Flexbox vs Grid
🔸 Explain Media Query
🔸 How do you build responsive application using Media Query
🔸 CSS display properties
🔸 Hidden vs Visibility vs display
🔸 CSS Position properties
🔸 position vs fixed vs sticky
🔸 absolute vs relative
🔸 CSS Animation
🔸 What are the CSS pseudo class
🔸 Explain Spirit in CSS
🔸 Inheritance in css

🔸 Critical CSS


🔸 Clearfix method with an example
🔸 classes vs Ids in CSS
🔸 Resting vs Normalization
🔸 How z-index works and How stacking context is formatted
🔸 Block Formatting Context (BFC)
🔸 Twinning

🔸 Anatomy of CSS rule
🔸 CSS Elements
🔸 Box Model
🔸 Overflow
🔸 Pseudo Element
🔸 CSS Unit Vales
🔸 CSS Background
🔸 CSS Border 
🔸 CSS Font
🔸 CSS Accessibility

## SCSS
🔸 What are the CSS Preprocessor
🔸 SASS vs SCSS
🔸 CSS preprocessor difference
🔸 What is mixin how to use it 


## Other Concepts and Topics

🔸 SVG and Canvas
🔸 What approach we should follow to build an app for mobile, tablet and desktop
🔸 What are the styling best practice
🔸 Browser Specific styling
🔸 Optimize the webpage for print 

🔸 How do you gauge the CSS coverage in browser
🔸 What are the css frameworks
🔸 What is loader for css and why its required
🔸 Why loader is required for sass
🔸 What make app PWA
🔸 How do you maintain CSS for an enterprise application 
🔸 What a11y and why is that important 
🔸 What are the different CSS UI Framework is available
🔸 How do you debug CSS Code

🔸 How `.module.css` is different from `.css`
 -->



