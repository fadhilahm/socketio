var socket = io('ws://localhost:8080');
socket.on('message', function (text) {
    var el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
});
document.querySelector('button').onclick = function (e) {
    e.preventDefault();
    var text = document.querySelector('input').value;
    socket.emit('message', text);
    document.querySelector('input').value = '';
};
