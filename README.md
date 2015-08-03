# holy-grail-ios-layout

This is my *in-progress* shot at The Holy Grail™ of iOS Safari mobile layout.

Goals below, split into what's working and what isn't:

What works: 

1. No full-page "rubberbanding".
2. Nav bar is fixed, fixed, fixed.
3. Scrolling the main content "rubberbands" and uses only native scrolling for smooth scrolling.
4. Double tapping the actual iOS status bar should still scroll to top of container. This is a *fugly* hack, but I managed to make it go (blog post to come).
5. Should work for both `window.standalone` (webapp capable mode) as well as when in regular Safari.
6. Encapsulate all the hacks in an, as light-as-possible, lib.

What doesn't work:

1. Single status bar tap to scroll (this is what native apps do, don't think this is possible).
2. Although it's *quite difficult* to make this happen. If you time it *just* perfectly it's possible to send a scroll event to the body instead of it scrolling the container. However, even if you do manage to hit this right, nothing really happens. It simply is a dead touch. As soon as you release the error is corrected and it's impossible for the very next swipe to cause the same problem twice. Essentially, in this highly unlikely case the user will simply think the phone failed to recognize the touch :)
3. There are a few (seemingly very fixable) layout quirks on other platforms.

## Demo

http://ios-layout.surge.sh/

## next?

I'll split this up in modules and whatnot once I get this all to behave as best as I can.

## credits

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## license

[MIT](http://mit.joreteg.com/)

