console.log("asdfasdfasdfasdf");

this.onmessage = function(songs) {
  for (var i = 0; i < songs.data; i++) {
    var request = new XMLHttpRequest();
    request.open("GET", "http://127.0.0.1:5000/fetch/" + i, false); // `false` makes the request synchronous

    request.send(null);

    if (request.status === 200) {
      // console.log(JSON.parse(request.responseText));
      this.postMessage(JSON.parse(request.responseText));
    }
  }
};

// xhr.onload = (e) => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(this.postMessage(xhr.responseText));
//         } else {
//             console.error(xhr.statusText);
//         }
//     }
// };
// xhr.onerror = function (e) {
//     console.error(xhr.statusText);
// };
// xhr.send(null);