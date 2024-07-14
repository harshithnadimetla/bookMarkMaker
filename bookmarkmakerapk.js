let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let submitBtnEl = document.getElementById("submitBtn");
let listContainerEl = document.getElementById("bookmarksList");

function createBookmark() {
    let listItem = document.createElement("li");
    listItem.classList.add("style-form", "p-4");
    listContainerEl.appendChild(listItem);

    let headingEl = document.createElement("h1");
    headingEl.classList.add("style-google");
    headingEl.textContent = siteNameInputEl.value;
    listItem.appendChild(headingEl);

    let linkEl = document.createElement("a");
    linkEl.href = siteUrlInputEl.value;
    linkEl.target = "_blank";
    linkEl.textContent = siteUrlInputEl.value;
    linkEl.classList.add("style-google");
    listItem.appendChild(linkEl);
}

siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});
siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});
bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Reuired";
    }
    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }
    if (siteNameInputEl.value !== "" && siteUrlInputEl.value !== "") {
        createBookmark();
    }
});