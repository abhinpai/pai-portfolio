---
id: style
title: 👨🏻‍🎨 Styling (CSS and SCSS) Questions
sidebar_label: 'Styling CSS'
---

- ✅ What are the different ways to apply CSS

  - **Inline** - Attach style to html element
  - **Internal** - Add a style model in a head under the `<style>`
  - **External** - By adding external stylesheet using `<link>`

- ✅ What is `selector` and how will that solve the problem
- ✅ Selector that match only links ends (.zip, .Zip, .ZIP...)

```css
a[href$='.zip' i]:after {
  content: '↓';
}
```

- ✅ What are the different units available in CSS <br/>
  Please refer [Mozila Developer document](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) for the best understanding of it

- ✅ `em` and `rem`

  Both `rem` and `em` are relative units, `px` is not.

  - `em` directly refer to its relative parent and it change the behavior if the parent value changes <br/>

  `1em` **=** `10px` **=** `100%` but it vary based on parent size

  - `rem` always refer to the `root` that is `html` if the root changes only then `rem` content that uses the rem will change <br/>

  `1rem` **=** `16px` **=** `100%` <br/>

  Where default browser font size would be `16px`

- ✅ `vh`, `vw`, `vmin` and `vmax`

  - **vh** - viewport height of the current display
  - **vw** - Viewport width of the current display
  - **vmin** - `vmin` uses the ratio of the smallest side. That is, if the height of the browser window is less than its width, `1vmin` will be equivalent to `1vh`. If the width of the browser is less than it’s height, 1vmin is equivalent to `1vw`.
  - **vmax** - `vmax` is the opposite: it uses the largest side. So `1vmax` is equivalent to `1vw` if the viewport is wider than it is tall; if the browser is taller than it is wide, 1vmax will be equivalent to `1vh`.

* ✅ Describe float? and its working

  Float specify how the element should float which can only move `left` or `right` its not possible to move `top` and `bottom`

  Content before float will not have any side-effect but content after the floating element will ship accordingly

- ✅ How Styling will be taken place in browser
- ✅ How CSS applies to a HTML element
- ✅ CSS Specificity

  If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.

  Think of specificity as a score/rank that determines which style declarations are ultimately applied to an element.

  The universal selector (*) has low specificity, while ID selectors are highly specific! 

  !important -> Inline  -> Style Attribute -> ID  -> class and pseudo class attribute -> elements and pseudo-elements

  Blog post of [Chris Coyier](https://css-tricks.com/specifics-on-css-specificity/) and [Amelia Wattenberger](https://wattenberger.com/blog/css-cascade)

  **Specificity Rules**

  * Equal specificity: the latest rule counts: If the same rule is written twice into the external style sheet, then the lower rule in the style sheet is closer to the element to be styled, and therefore will be applied
  * ID selectors have a higher specificity than attribute selectors 
  * Contextual selectors are more specific than a single element selector - The embedded style sheet is closer to the element to be styled
  * A class selector beats any number of element selectors
  * The universal selector and inherited values have a specificity of 0 - *, body * and similar have a zero specificity. Inherited values also have a specificity of 0.

- ✅ Resting & Normalizing CSS

  I found a amazing article on [Reseting and Normalizing](https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e)

- ✅ Why `box-sizing:border-box` is good approach to design an website
- ✅ What is BEM and why its required

  **Block Element Modifier** aka **BEM** is a methodology that helps you to create reusable components and code sharing in front-end. Its helpful to avoid a style / class name collision for a large application which uses the millions of styles

  `block__element--modifier`

  * **Block**: A block of the element that holds some other elements *ex: card*
  * **Element**: Element is a part of block usually denoted with `__` and element name  *ex: card__title*
  * **Modifier**: A modifier that modify the behavior/looks of an element represent with `--` *ex: card__title--active*

  Best article on BEM [Link 1](https://medium.com/@dannyhuang_75970/what-is-bem-and-why-you-should-use-it-in-your-project-ab37c6d10b79) and [Link 2](https://css-tricks.com/bem-101/)

  Pros of BEM

  * Self explanatory style codes
  * By avoiding use of HTML element names in CSS selectors, BEM makes CSS code readily portable to a different HTML structure.
  * Better CSS performance: Browsers evaluate CSS selectors right to left and BEM encourages frontend developers to create a flat CSS structure with no nested selectors. So the less browsers have to evaluate, the faster they can render.
  * BEM avoids CSS conflicts by using unique contextual class names for every block, element and modifier combination.
  * BEM's modular approach encourages developing independent modules of code and hence easier to maintain & update without affecting other modules in the project.

  Cons of BEM
  * It is known that BEM can bloat file sizes with the longer CSS class names, but this can easily be overcome by minifying and gzipping production code.
  * While the overall HTML code does 'look' ugly with BEM class names, the visitor of the website or application will not look in the source too often, so it is not really an issue.
  * Adding class according to BEM to the grandChildren elements or further make no sense *`ex: card__list__item__user__username--active`*

- ✅ Explain Flexbox
- ✅ Explain Grid System in CSS
- ✅ Flexbox vs Grid
- ✅ Explain Media Query
- ✅ How do you build responsive application using Media Query
- ✅ CSS display properties
- ✅ Hidden vs Visibility vs display
- ✅ CSS Position properties
- ✅ absolute vs relative
- ✅ CSS Animation
- ✅ What are the CSS pseudo class
- ✅ Explain Spirit in CSS
- ✅ Inheritance in css
- ✅ Clearfix method with an example
- ✅ Resting vs Normalization

  Every browser will have its own style for the HTML contents, Which may lead to the bad inconsistency during the bootup of our application inorder to solve this problem resting and Normalization will come into picture

  * **Resting** take away the entire browser style and let you to apply your own style. But this can lead to another problem that is if css file fail to load for some reason then you may face the broken style to your application 

  * **Resting** is a pretty better and consistent technique than resting. By using `Normalize.css` we can have consistent style across the browser. 

- ✅ How z-index works and How stacking context is formatted

  Every webpage is made up of what are called stacking contexts. You can think of these as, quite literally, a stack of elements. The z-index property determines the order of items in each stack, with higher z-index being placed further up.

  All pages begin with a root stacking context, which builds from the root element (as you'd expect). But more stacking contexts can be created in a number of ways. One way is an absolutely positioned div; its children will be in a new stacking context.

- ❌ Block Formatting Context (BFC)
- ❌ Twinning
- ✅ Anatomy of CSS rule
- ✅ CSS Elements
- ❌ Box Model
- ✅ Overflow
- ✅ Pseudo Element & class
- ✅ What are the styling best practice
  
  * Avoid using third party css framework until and unless its really required
  * Always look for css coverage via devtool
  * Prefer Using a CSS Methodology like 
    - **BEM (Block Element Model)**
    - **ITCSS (Inverted Triangle CSS)**  by introducing different layers to different specificities. The deeper you go, the more specific. *Global config, fonts, colors (Setting)*, *Mixins and functions (Tools)*, *Reset and normalizing style (Generic)*, *style for HTML tags (Elements)*, *Object with no visuals (Object)*, *Well designed element (Component)*, *overridden (Trumps)* 
    - **OOCSS (Object-oriented CSS** 
  * Setup preprocessor
    - Import all style in one file `index.scss` or `main.scss`
    - Nesting related styles
    - Automatically vendor prefix your rules
    - use config for design consistency
  * Use Shorthand Properties
  * Reduce Redundancy
  * Proper class naming convention 
  * Avoid Complex Selectors
  * Use Mobile First

- ❌ Browser Specific styling
- ❌ Optimize the webpage for print
- ✅ How do you gauge the CSS coverage in browser
- ✅ What are the css frameworks
- ✅ What is loader for css and why its required

  Loaders are the node-based utilities built for webpack to help webpack to compile and/or transform a given type of resource that can be bundled as a javascript module.

  `css-loader` is the npm module that would help webpack to collect CSS from all the css files referenced in your application and put it into a string.

  And then `style-loader` would take the output string generated by the above `css-loader` and put it inside the `<style>` tags in the index.html file.

- ✅ Why loader is required for sass

- ✅ Why node-scss is required

  `Node-sass` is a library that provides binding for `Node.js` to `LibSass`, the C version of the popular stylesheet preprocessor, Sass.

  It allows you to natively compile `.scss` files to `css` at incredible speed and automatically via a connect middleware.
    
- ✅ How do you maintain CSS for an enterprise application
- ✅ How do you debug CSS Code

  While you can not `debug` CSS, because it is not a scripting language, you can utilize the Chrome DevTools Elements panel to inspect an element & view the Styles pane on the right.

  This will give you insights as to the styles being overridden or ignored (line threw)
- ✅ How `.module.css` is different from `.css`
  
  Naming css file with `.module.css` is helpful which will avoid the style collision. Module file will be privately serve to only the imported HTML.

  A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.

  During comiplation css engine will add a radom hash to the style

  - `cat`: the file name
  - `meow`: the local class name
  - `j3xk`: a random hash

- ✅ What are the CSS Preprocessor

  CSS Preprocessor is the scripting language which extend the existing capabilities of css. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations

  **Ex**: `scss`, `less` and `stylus`

- ✅ SASS vs SCSS
- ✅ What is mixin how to use it
- ✅ extend  and include method in mixin
- ✅ `7 to 1` architecture
  7 to 1 is one of the most effective and popular pattern commonly used for large application development
  
  The directory Structure of this pattern will look like
  * **abstract**: Configuration and helpers
    - _variables
    - _functions
    - _mixins
    - _...
  * **base**: base stuff like constants, fonts, colors, etc
    - _base
    - _fonts
    - _colors
    - _typography
    - _helpers
    - _...
  * **layout**: Layout-r_elated sections
    - _header
    - _footer
    - _body
    - _...
  * **component**
    - _button
    - _card
    - _accordion
    - _...
  * **pages**: pages
    - _userDetails
    - _cart
    - _result
    - _...
  * **Themes**
    - _light
    - _dark
  * **main.scss** should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but @import and comments.
