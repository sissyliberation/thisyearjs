;(function() {
  window.thisyear = {
    thisyear: new Date().getFullYear(),
    start: function() {
      var elems = document.getElementsByClassName('thisyear');
      for(var i = 0; i < elems.length; ++i) {
        elems[i].innerText = this.thisyear;
      }
    }
  };

  thisyear.start();
})();