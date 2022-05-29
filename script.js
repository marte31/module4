(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name = 0; name < names.length; name++) {

    var firstLetter = names[name].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }

})();