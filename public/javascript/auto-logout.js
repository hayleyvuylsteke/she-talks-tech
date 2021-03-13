function autoLogout() {
    this.timeout = setTimeout(() => {
            const response = await fetch('/api/users/logout', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' }
          });
          
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert(response.statusText);
          }
    }, 60000)

//list events
 const events = ['load', 'mousemove', 'mousedown','click', 'scroll', 'keypress'];

 //create a timeout function
 const resetTimeout = () => {
     clearTimeout(timeout);
     timeout();
 }


 events.forEach(function(event) { window.addEventListener(event, resetTimeout) })
}