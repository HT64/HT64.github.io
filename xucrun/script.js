// Purpose: Implements language switching and small website interactions.
const strings = {
  de: {
    openNavigation: "Navigation öffnen",
    closeNavigation: "Navigation schließen"
  },
  en: {
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation"
  }
};

const language = document.documentElement.lang === "en" ? "en" : "de";
const text = strings[language];

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
  menuButton.querySelector(".sr-only").textContent = isOpen
    ? text.openNavigation
    : text.closeNavigation;
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    const menuLabel = menuButton?.querySelector(".sr-only");
    if (menuLabel) {
      menuLabel.textContent = text.openNavigation;
    }
  });
});