// Eventify adds bind/trigger event functionality to any class! yay!
window.Eventify = function(c) {
    c.prototype.bind = function(eventName, func) {
        if(!this.event_bindings)
            this.event_bindings = {}
        if(!this.event_bindings[eventName])
            this.event_bindings[eventName] = []
        this.event_bindings[eventName].push(func)
    }
    c.prototype.trigger = function(eventName) {
        if(!this.event_bindings) return;
        if(!this.event_bindings[eventName]) return;

        for(var i = 0; i < this.event_bindings[eventName].length; i++) {
            console.log('calling', eventName, this.event_bindings[eventName][i])
            this.event_bindings[eventName][i]()
        }
    }
}