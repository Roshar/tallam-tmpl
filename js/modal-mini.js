const collectionBtn = document.querySelectorAll(".modal-status");

for (let i = 0; i < collectionBtn.length; i++) {
  collectionBtn[i].addEventListener("click", toggleWindow);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modalList = document.querySelectorAll(".modal");
    for (let i = 0; i < modalList.length; i++) {
      modalList[i].classList.add("none");
    }
  }
});

// const obj = new Set([
//   "delete",
//   "confirm_sending",
//   "confirm_deletion",
//   "forgot_password",
// ]);

function toggleWindow(e) {
  const action = e.currentTarget.dataset.action;
  // if (obj.has(action)) {
  //   document.getElementById("modal-send").classList.toggle("none");
  // }
  if (action === "send") {
    document.getElementById("modal-send").classList.toggle("none");
  } else if (action === "delete") {
    document.getElementById("modal-delete").classList.toggle("none");
  } else if (action === "confirm_sending") {
    console.log("sending");
  } else if (action === "confirm_deletion") {
    console.log("deletion");
  } else if (action === "forgot_password") {
    document.getElementById("modal-forgot").classList.toggle("none");
  } else {
    const modalList = document.querySelectorAll(".modal");
    for (let i = 0; i < modalList.length; i++) {
      modalList[i].classList.add("none");
    }
  }
}
