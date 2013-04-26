# [.whenVisible()](http://briznad.github.io/whenVisible/)

    .whenVisible( function(Element) [ , interval ] [ , timeout ] )

### Description: A [plugin for jQuery](http://plugins.jquery.com/whenvisible/) or Zepto that repeatedly checks an element's visibility and fires a callback when visible.

- **function(Element)**
  - Type: [**Function**](http://api.jquery.com/Types#Function)
  - A function to execute once the specified element meets the conditions of visibility.
- **interval**
  - Type: [**Number**](http://api.jquery.com/Types#Number)
  - Default: `100`
  - A positive integer representing the time, _in milliseconds_, to wait between checks of the specified element's visibility.
- **timeout**
  - Type: [**Number**](http://api.jquery.com/Types#Number)
  - Default: `3000`
  - A positive integer representing the total number of checks to run before timing out. The default setting of 100ms checks occurring at most 3000 times means the timeout will occur at 5 minutes.

### Example: check out the [demo page](http://briznad.github.io/whenVisible/)!

The novelty of this plugin is that it provides a flexible and accurate way to tell when an element is visible on the screen, which can be tricky when dealing with images. A common solution is to use jQuery's .load event method either on the window object or the desired image. However, as the jQuery page explains, there are numerous bugs and gotchas when attempting to monitor image loading. Also, you have to make sure your event handler is registered prior to the image being loaded. The whenVisible plugin takes a much more basic approach to detecting if an element is loaded: it checks to see if the element has a width and height greater than 0.

**Please Note:** whenVisible uses the same condition used by jQuery for the [`:visible`](http://api.jquery.com/visible-selector/) filter, which judges visibility based on if an element "consumes space in the document." From the [jQuery docs](http://api.jquery.com/visible-selector/):
> Elements with `visibility: hidden` or `opacity: 0` are considered visible, since they still consume space in the layout.

That's it. If the image element meets these conditions, a callback is fired. If not, the plugin will monitor the situation, repeatedly checking at a set interval for any changes. As soon as the image loads, BOOM, callback fired. Otherwise it waits. Eventually, if the element never gains a width and height, it will simply give up. Admittedly, this fills a narrow use case where such a plugin would be necessary. But I needed it, so I built it, and hopefully it can help you at some point. Enjoy!
