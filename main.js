require('./add-statusbar-doubletap-event')
var message = require('./debug-div')
var Scroller = require('./scroller')
var scrollContainer = document.querySelector('.scroll-container')
var pageScroller = new Scroller(scrollContainer)
var isTouching = require('./is-touching')

window.addEventListener('statusdoubletap', function () {
    console.log('double tapped')
    pageScroller.setScroll(1)
})
