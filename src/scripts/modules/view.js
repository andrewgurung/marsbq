var helper = require('./helper.js');

var view =  module.exports = {
  init: function() {
    view.showCountdown();
    view.registerClick();
  },

  registerClick: function() {
    var id;
    var listItem = document.querySelectorAll("#menu li");

    for(var i = 0; i < listItem.length; i++) {
      view.addListener(listItem[i]);
    }
  },

  addListener: function(listItem) {
    listItem.addEventListener('click', function(){
      id = this.getAttribute('data-id');
      helper.setCurrent(+id);
      helper.increment();
      view.update();
    });
  },

  update: function() {
    var item = helper.getCurrent();
    var li = document.querySelector('[data-id="' + item.id + '"]');
    var count = li.querySelector('.menu-count');

    count.innerHTML = item.count;
  },


  showCountdown: function() {
    var diff = helper.dateDiff();

    document.querySelector("#years").innerHTML = diff.years;
    document.querySelector("#months").innerHTML = diff.months;
    document.querySelector("#days").innerHTML = diff.days;
  }
};
