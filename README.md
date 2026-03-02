# Flick JS

Super lightweight chainable DOM utility.

## Installation

```html
<script src="flick.min.js"></script>
```

## Size

- **minified:** ~440B
- **compressed (tar.gz):** ~330B

That's it. That's the whole library.

## Quick Start

```html
<div id="modal" class="hidden">Content</div>
<button id="btn">Click</button>

<script src="flick.min.js"></script>
<script>
  f('#btn').on('click', () => {
    f('#modal').removeClass('hidden');
  });
</script>
```

---

## Selectors

```javascript
f('#id')           // by ID
f('.class')        // by class
f('div')           // by tag
f(element)         // by DOM element
f(nodeList)        // by NodeList
f([element1, element2]) // array of elements
```

---

## API

```javascript
// Events
f('div').on('click', handler)
f('div').on('click', handler, { passive: true })
f('div').off('click', handler)

// Classes
f('div').addClass('active')
f('div').removeClass('active')
f('div').toggleClass('active')
f('div').toggleClass('active', true) // force add

// Remove elements
f('.toast').remove()

// Get element by index
f('.items').get() // default 0
f('.items').get(1)
```

---

## Chaining

All methods return `f()` for chaining:

```javascript
f('button')
  .addClass('loading')
  .on('click', handleClick);
```

---

## Browser Support

Any modern browser. Chrome, Firefox, Safari, Edge all work.

## License

MIT