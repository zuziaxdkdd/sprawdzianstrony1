const openMenu = () => {
  console.log("Menu otwarte!");
  menuContainer.style.display = "block";
};

const closeMenu = () => {
  console.log("Menu zamknięte!");
  menuContainer.style.display = "none";
};

menu.addEventListener("click", () => {
  openMenu();
});

menuClose.addEventListener("click", () => {
  closeMenu();
});

const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.parentElement.querySelector("h1").innerText;

    const cartMessage = button.parentElement.querySelector(".cart-message");

    cartMessage.innerText = `Produkt ${productName} został dodany do koszyka.`;
    cartMessage.style.display = "block";

    setTimeout(() => {
      cartMessage.style.display = "none";
    }, 3000);
  });
});