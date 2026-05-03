function scrollToSubscribe() {
  document.getElementById("subscribe").scrollIntoView({
    behavior: "smooth"
  });
}

function subscribe() {
  const email = document.getElementById("email").value;

  if(email === "") {
    alert("Enter your email");
    return;
  }

  alert("Redirecting to payment for $0.69/month");
}
