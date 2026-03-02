function f(selector, context = document) {
  const elements = Array.from(context.querySelectorAll(selector));

  const api = {
    elements,
    on(event, handler, options) {
      elements.forEach(el => el.addEventListener(event, handler, options));
      return api;
    },
    off(event, handler, options) {
      elements.forEach(el => el.removeEventListener(event, handler, options));
      return api;
    },
    addClass(cls) {
      elements.forEach(el => el.classList.add(cls));
      return api;
    },
    removeClass(cls) {
      elements.forEach(el => el.classList.remove(cls));
      return api;
    },
    toggleClass(cls, force) {
      elements.forEach(el => el.classList.toggle(cls, force));
      return api;
    },
    remove() {
      elements.forEach(el => el.remove());
      return api;
    },
    get(i = 0) {
      return elements[i];
    }
  };

  return api;
}