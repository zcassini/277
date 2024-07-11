document.getElementById("contact-form").addEventListener("submit", (e) => {
  const email = document.getElementById("email").value
  const confirmEmail = document.getElementById("confirm-email").value

  if (email !== confirmEmail) {
    e.preventDefault()
    alert("Email addresses do not match. Please verify and try again.")
  }
})
