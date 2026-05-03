<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CreatorLaunch</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<header>
  <nav>
    <h1>CreatorLaunch</h1>
    <ul>
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#subscribe">Subscribe</a></li>
    </ul>
  </nav>
</header>

<section class="hero">
  <h2>Launch Your Creator Journey</h2>
  <p>Get viral ideas, scripts, templates and tools to grow faster.</p>
  <button onclick="scrollToSubscribe()">Start for $0.69</button>
</section>

<section id="features">
  <h2>Features</h2>
  <div class="cards">
    <div class="card">AI Video Ideas</div>
    <div class="card">Script Templates</div>
    <div class="card">Brand Deal Outreach</div>
    <div class="card">Growth Dashboard</div>
  </div>
</section>

<section class="ad-space">
  <h3>Sponsored Ads</h3>
  <div class="ad-box">
    Place AdSense / sponsor banners here
  </div>
</section>

<section id="pricing">
  <h2>Pricing</h2>
  <div class="price-card">
    <h3>Starter Plan</h3>
    <p>$0.69 / month</p>
    <button onclick="subscribe()">Subscribe</button>
  </div>
</section>

<section id="subscribe">
  <h2>Join CreatorLaunch</h2>
  <input type="email" id="email" placeholder="Enter email">
  <button onclick="subscribe()">Subscribe Now</button>
</section>

<footer>
  <p>© 2026 CreatorLaunch</p>
</footer>

<script src="script.js"></script>
</body>
</html>
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
