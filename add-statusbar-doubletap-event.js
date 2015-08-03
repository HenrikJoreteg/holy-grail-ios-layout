var debounce = require('lodash.debounce')
var iOS = require('is-ios')
var isTouching = require('./is-touching')
var lastInteraction

if (iOS && typeof window !== 'undefined') {
  document.body.scrollTop = 1

  function isIdle() {
    return (!isTouching() && Date.now() - lastInteraction) >  1000
  }

  function notIdle() {
    lastInteraction = Date.now()
  }
  notIdle()

  // keep pinned at 1 pixel
  function setPosition() {
    if (isIdle()) {
      notIdle()
      document.body.scrollTop = 1
    }
  }

  // track last move just to avoid potential human-caused ones
  document.documentElement.addEventListener('touchmove', notIdle)

  // fix issue with scrolling that happens on device orientation changes
  window.addEventListener('orientationchange', setPosition)

  var debounced = debounce(function () {
    if (isIdle()) {
      window.dispatchEvent(new Event('statusdoubletap'))
      setPosition()
    }
  }, 200)

  // WTF APPLE!?!
  // So, in `window.standalone` mode this isn't needed
  // but inside safari it is.
  // if we don't wait, the initial scroll causes a late
  // scroll event and falsly triggers a double tap.
  // so we have to wait a bit to avoid this.
  // Technically doing 150 seemed to be consistently enough
  // but want to make sure it's not an issue on older/slower phones
  // It seems very unlikely a user will double-tap a status bar within
  // one second of the page loading given that they're likely starting
  // at the top anyway.
  setTimeout(function () {
    window.addEventListener('scroll', debounced)
  }, 1000)
}
