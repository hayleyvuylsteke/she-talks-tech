var autoLogout = (function() {
  function AutoLogout() {
    this.events = ['load', 'mousemove', 'mousedown' ,'click', 'scroll', 'keypress']

    this.logout = this.logout.bind(this)
    this.resetTimeout = this.resetTimeout.bind(this)

    var self = this
    this.events.forEach(function(event) {
      window.addEventListener(event, self.resetTimeout)
    })
    this.setTimeout
  }

  var _t = AutoLogout.prototype

  _t.clearTimeout = function() {
    if(this.logoutTimeout)
    clearTimeout(this.logoutTimeout)
  }

  _t.setTimeout = function() {
    this.logoutTimeout = setTimeout(this.logout, 30 *60 *1000)
  }

  _t.resetTimeout = function() {
    this.clearTimeout()
    this.setTimeout()
  }

  _t.logout = function() {
    const response = fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
    alert(response.statusText);
    }

    this.destroy()
  }

  _t.destroy = function () {
    this.clearTimeout();

    var self = this
    this.forEach(function(event){
      window.removeEventListener(event, self.resetTimeout)
    })
  }

  return AutoLogout
})
()

