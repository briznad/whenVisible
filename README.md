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
  - A positive integer representing the total number of checks to run before timing out. The default settings of 100ms checks occurring at most 3000 times means the timeout will occur at 5 minutes.

### Example: check out the [demo page](http://briznad.github.io/whenVisible/)!
