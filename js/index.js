// get hash from url and remove it
const hash = window.location.hash.substring(1)
window.history.pushState({}, "", `/${hash}`)

// swap the htmx element and replace the url with hash if hash is present
htmx.ajax("GET", hash ? hash : "home", "#main")
