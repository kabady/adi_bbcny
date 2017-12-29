"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _window = window;
var _document = document;
_window.onresize = RemInit;
function RemInit() {
    var c = _document.getElementsByTagName('html')[0];
    var b = c.clientWidth;
    c.style.fontSize = b / 20 / 16 * 100 + 'px';
}
exports.RemInit = RemInit;
