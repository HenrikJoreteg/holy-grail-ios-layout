var isTouching = require('./is-touching')

module.exports = function addScrollEnd(element) {
  element.addEventListener('scroll', function () {
    if (!isTouching()) {
      element.dispatchEvent(new Event('scrollend'))
    }
  })
}
