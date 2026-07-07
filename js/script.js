const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
  const question = faq.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // Close other items
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
      }
    });

    // Toggle current
    faq.classList.toggle("active");

  });
});