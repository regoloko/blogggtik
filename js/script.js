import posts from "./posts.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  drawUI();
  checkPlayVideo();

  document.getElementById("showForm").addEventListener("click", showForm);

  document.getElementById("cancel").addEventListener("click", hideForm);

  // button post videos
  document.getElementById("post").addEventListener("click", addPost);
}

function drawUI() {
  const videos = document.querySelector(".videos");

  // loop = posts
  const allPosts = posts.map((post) => {
    const { username, caption, video } = post;

    videos.innerHTML = "";

    return `<div class="video">
        <video
          src=${video}
          loop
        ></video>
        <div class="video__footer">
          <h4>@${username}</h4>
          <p>${caption}</p>
        </div>
      </div>`;
  });

  videos.insertAdjacentHTML("beforeend", allPosts.join(""));
  // one, two, three => one two three
}

function checkPlayVideo() {
  const allVideos = document.querySelectorAll(".videos video");

  allVideos.forEach((video) => {
    video.addEventListener("click", (e) => {
      allVideos.forEach((v) => e.target.src !== v.src && v.pause());
      e.target.paused ? e.target.play() : e.target.pause();
    });
  });
}

// form
const form = document.querySelector("main.create__video");
// show form
function showForm() {
  form.classList.add("active");
}
// hide form function
function hideForm() {
  form.classList.remove("active");
}

// function add post
function addPost(e) {
  e.preventDefault();
  const username = document.getElementById("user"),
    caption = document.getElementById("caption"),
    video = document.getElementById("video");

  if (!username.value.trim() || !caption.value.trim() || !video.value.trim()) {
    alert("Please fill data...");
    return;
  }

  const newPost = {
    username: username.value,
    caption: caption.value,
    video: video.value,
  };

  posts.unshift(newPost);
  drawUI();
  checkPlayVideo();
  localStorage.setItem("posts", JSON.stringify(posts));
  form.classList.remove("active");

  username.value = "";
  caption.value = "";
  video.value = "";
}
