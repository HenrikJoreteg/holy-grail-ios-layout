var isTouching = false
var onTouchEnd = function notTouching(e) {
  if (e.touches.length === 0) {
    isTouching = false
  }
}

if (typeof window === 'undefined') {
  module.exports = function () { return false }
} else {
  window.addEventListener('touchstart', function () {
    isTouching = true
  }, false)
  window.addEventListener('touchend', onTouchEnd, false)
  window.addEventListener('touchcancel', onTouchEnd, false)

  module.exports = function () {
    return isTouching
  }
}

