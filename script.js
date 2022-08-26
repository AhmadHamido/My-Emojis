const myEmojis = [];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function render(emojis) {
  emojiContainer.innerHTML = "";
  let listEmojis = "";
  for (let i = 0; i < emojis.length; i++) {
    // const emoji = document.createElement("span");
    // emoji.textContent = myEmojis[i];
    // emojiContainer.append(emoji);
    listEmojis += `<span>${emojis[i]}</span>`;
  }
  emojiContainer.innerHTML = listEmojis;
}

render(myEmojis);

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    render(myEmojis);
  }
});

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    render(myEmojis);
  }
});

popBtn.addEventListener("click", function () {
  myEmojis.pop();
  render(myEmojis);
});

shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  render(myEmojis);
});
