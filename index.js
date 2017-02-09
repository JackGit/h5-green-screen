function drawVideo () {
  var canvas = document.getElementById('targetCanvas')
  var context = canvas.getContext('2d')
  var video = document.getElementById('greenVideo')

  context.drawImage(video, 0, 0, canvas.width, canvas.height)
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height)

  for (var i = 0; i < imageData.width * imageData.height * 4; i += 4) {
    var r = imageData.data[i + 0];
    var g = imageData.data[i + 1];
    var b = imageData.data[i + 2];
    var a = imageData.data[i + 3];
    // compare rgb levels for green and set alphachannel to 0;
    selectedR = 25;
    selectedG = 90
    selectedB = 60;
    if (r <= selectedR && b <= selectedB && g >= selectedG) {
      imageData.data[i + 3] = 0;
    }
  }

  context.putImageData(imageData, 0, 0)
}

setInterval(drawVideo, 16)
