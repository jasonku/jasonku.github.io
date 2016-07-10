window.onload = function (e) {
  var secondsToString = function (seconds) {
    var years = Math.floor(seconds / 31536000);
    var yearString = years == 1 ? "year" : "years";

    return years + " " + yearString;

  };

  var sync = function () {
    var a = 1413676800;
    var b = new Date().getTime() / 1000;
    document.getElementById("marriage").innerHTML = secondsToString(b - a);
  };
  sync();
  setInterval(sync, 1000);
};
