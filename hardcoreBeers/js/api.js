(function($) {

  var Poller = function () {
    this.defaults = {
      type: 'beers',
      limit: 10
    };

    this.items = {
      beers-light: [
        'Lager',
        'Pilsner',
        'Wheat Beer',
        'IPA',
        'Pale Ale',
        'Pale Lager',
        'Helles',
        'Saison',
        'Cream Ale',
        'Hefeweizen'
      ],
      beers-dark: [
        'Souts',
        'Amber',
        'Porter',
        'Bock',
        'Schwarbier',
        'Dunkel',
        'Brown Ale',
        'Imperial Souts',
        'Red Ale'
      ]
    };
  };

  Poller.prototype._getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  Poller.prototype._getData = function (type) {
    var item, i, len;
    var list = this.items[type] || [];
    var results = [];

    for (i = 0, len = list.length; i < len; i++) {
      item = list[i];

      results.push({
        name: item,
        count: this._getRandomNumber(0, 200000)
      });
    }
    return results;
  };

  Poller.prototype._processData = function (data, limit) {
    return data.slice(0, limit);
  };

  Poller.prototype.poll = function (options, cb) {
    var self = this;
    var config = $.extend({}, this.defaults, options);
    var dfd = $.Deferred();

    setTimeout(function () {
      var payload = self._processData(self._getData(config.type), config.limit);

      cb && cb(payload);
      dfd.resolve(payload);
    }, this._getRandomNumber(400, 2000));

    return dfd;
  };

  if (window.test == null) {
    window.test = {
      Poller: Poller
    };
  }
}(jQuery));
