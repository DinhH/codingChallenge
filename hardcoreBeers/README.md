
So you have these files:

* [index.html](index.html)
* [style.css](css/style.css)
* [script.js](js/script.js)

and a [PSD](Leaderboard.psd) to use as a mockup.

You will build a "Hardcore Beers" leaderboard, which is a list of the top five hardcore beers names paired with the number of times that they have been mentioned on Twitter or Facebook.

For simplicity's sake, we've created an API and included some starter code (see [script.js](js/script.js)). The API provides a `Poller()` class with a `.poll()` method that allows you to set some options and provide a callback function that will be called when the poller returns data.

Upon each poll, the API will send an array of objects to your callback function. Each object will contain an item name and its associated count, sorted descending by count.

The leaderboard that you build should satisfy these basic requirements:

* Visually adhere to the provided [PSD](Leaderboard.psd).
* Every 15 seconds, update the leaderboard to show the latest beers names and counts, sorted descending by count.
