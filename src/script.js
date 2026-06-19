function emailClick(event) {
  event.preventDefault();
  const element = document.querySelector("#emailBtn");
  const email = "iandudley012@gmail.com";

  navigator.clipboard.writeText(email).then(() => {
    const originalText = element.textContent;
    element.textContent = "Copied!";

    setTimeout(() => {
      element.textContent = originalText;
    }, 1500);
  });
}
