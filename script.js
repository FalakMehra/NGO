// -----------------------------
// Smooth Scrolling for Navigation
// -----------------------------
document.querySelectorAll('header nav ul li a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// -----------------------------
// Gallery Hover Effect (show title on hover)
// -----------------------------
document.querySelectorAll(".gallery .galleryContainer .item").forEach(item => {
  const title = item.querySelector(".title");
  item.addEventListener("mouseenter", () => {
    if (title) title.style.opacity = "1";
  });
  item.addEventListener("mouseleave", () => {
    if (title) title.style.opacity = "0";
  });
});

// -----------------------------
// Newsletter Subscription Validation
// -----------------------------
const newsletterForm = document.querySelector(".newsLetterContainer form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    const emailInput = newsletterForm.querySelector("input[type='email']");
    if (!emailInput || !emailInput.value.trim()) {
      e.preventDefault();
      alert("⚠️ Please enter your email before subscribing.");
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value)) {
      e.preventDefault();
      alert("⚠️ Please enter a valid email address.");
    } else {
      alert("✅ Thank you for subscribing!");
    }
  });
}

// -----------------------------
// Join Now Button Functionality
// -----------------------------
const joinBtn = document.querySelector(".joinNow");
if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    const name = prompt("🙏 Enter your name to join:");
    const email = prompt("📧 Enter your email address:");
    if (name && email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert(`🎉 Thank you ${name}! You have successfully joined our NGO. We will contact you at ${email}.`);
    } else {
      alert("⚠️ Please provide a valid name and email to join.");
    }
  });
}

// -----------------------------
// Adopt a Child Button Functionality
// -----------------------------
const adoptBtn = document.querySelector(".adoptBtn");
if (adoptBtn) {
  adoptBtn.addEventListener("click", () => {
    const confirmAdopt = confirm("👶 Would you like to adopt a child? We will connect you with our team.");
    if (confirmAdopt) {
      window.location.href = "mailto:info@ngo.com?subject=Adopt a Child&body=Hello, I am interested in adopting a child.";
    }
  });
}
