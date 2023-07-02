const input = document.getElementById("input");
const button = document.getElementById("add");
const list = document.getElementById("list");
const form = document.getElementById("form");
const total = document.getElementById("total");

// prevent the form from submitting
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", () => {
  createList();

  // reset input
  input.value = "";

  // print total tasks
  total.innerText = "Current task is " + list.children.length;
});

function createList() {
  // create li element
  let li = document.createElement("li");
  if (input.value == "") {
    alert("Please enter a task");
    return;
  }
  li.textContent = input.value;

  // create div element
  let div = document.createElement("div");
  div.classList.add("buttons");

  // create check button
  let check = document.createElement("i");
  check.classList.add("fa-solid", "fa-check", "fa-lg", "fa-item");

  // create minus button
  let minus = document.createElement("i");
  minus.classList.add("fa-solid", "fa-minus", "fa-lg");

  // max tasks is 5
  if (list.children.length >= 5) {
    alert("You can't have more than 5 tasks");
    return;
  }

  // append the elements
  list.appendChild(li);
  li.appendChild(div);
  div.appendChild(check);
  div.appendChild(minus);

  // check button proses
  let clickCount = 0;
  check.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
      li.style.textDecoration = "line-through";
    }

    if (clickCount === 2) {
      li.style.textDecoration = "none";
      clickCount = 0;
    }
  });

  // minus button proses
  minus.addEventListener("click", () => {
    let totalTasks = list.children.length - 1;
    total.innerText = "Current task is " + totalTasks;

    list.removeChild(li);
  });
}
