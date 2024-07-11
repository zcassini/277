// get hash from url and remove it
const hash = window.location.hash.substring(1)
if (hash) window.history.pushState({}, "", `${hash}`)

// swap the htmx element and replace the url with hash if hash is present
htmx.ajax("GET", hash ? hash : "/277/home.html", "#main")
