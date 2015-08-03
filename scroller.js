var isTouching = require('./is-touching')
var debounce = require('lodash.debounce')

function Scroller(el) {
  this.el = el
  this.selfTriggered = false
  if (el.scrollTop === 0) {
    el.scrollTop = 1
  }
  el.addEventListener('scroll', debounce(this.onScroll.bind(this), 100))
  window.addEventListener('touchend', debounce(this.onScroll.bind(this), 100))
}

Scroller.prototype.onScroll = function () {
  if (!isTouching() && !this.selfTriggered) {
    var el = this.el
    var top = el.scrollTop
    var height = el.offsetHeight
    var scrollHeight = el.scrollHeight

    // scroll down 1px if at top
    if (top === 0) {
      console.log('setting scroll', 1)
      this.setScroll(1)
      return
    }

    // scroll up 1px if at bottom
    if (top + height === scrollHeight) {
      this.setScroll(scrollHeight - height - 1)
    }
  } else {
    this.selfTriggered = false
  }
}

Scroller.prototype.setScroll = function (scrollTop) {
  //console.log('calling set scroll', scrollTop)
  // *this* will trigger a scroll event so we have to
  // track that we triggered it
  this.selfTriggered = true
  this.el.scrollTop = scrollTop
}

module.exports = Scroller
