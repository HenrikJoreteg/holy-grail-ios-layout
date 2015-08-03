var div = document.querySelector('.message')

module.exports = function (message) {
    var newMessage = document.createElement('div')
    newMessage.textContent = message
    console.log('message: ', message)
    div.appendChild(newMessage)
    setTimeout(function () {
      div.removeChild(newMessage)
    }, 1000)
}
