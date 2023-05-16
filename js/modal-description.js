const modalClassValue = document.querySelector(".modal");

const triggerBtn = document.getElementById("btn-trigger");

triggerBtn.addEventListener("click", () => {
  modalClassValue.classList.toggle("none");
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key === "Escape") {
    modalClassValue.classList.add("none");
  }
});

document.getElementById("close-modal").addEventListener("click", () => {
  triggerBtn.click();
});

let collection = document.querySelectorAll(".fa-question-circle");

for (let i = 0; i < collection.length; i++) {
  collection[i].addEventListener("click", (e) => {
    let infoBlock = e.currentTarget.getElementsByTagName("div")[0].innerHTML;
    provideInModal(infoBlock);
  });
}

const provideInModal = function (content) {
  var theDiv = document.getElementById("modal__description");
  theDiv.getElementsByTagName("p");
  if (theDiv.children.length) {
    theDiv.innerHTML = "";
  }
  theDiv.insertAdjacentHTML("afterBegin", content);
  document.getElementById("btn-trigger").click();
};
