function CustomEvent(t, e) {
    e = e || {bubbles: !1, cancelable: !1, detail: void 0};
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
}
CustomEvent.prototype = window.Event.prototype, window.CustomEvent = CustomEvent;