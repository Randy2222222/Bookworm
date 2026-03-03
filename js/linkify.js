const editor = document.getElementById("editor");

editor.addEventListener("blur", function () {
  linkify(editor);
});

function linkify(el) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  el.innerHTML = el.innerHTML.replace(urlRegex, url => {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });
}
