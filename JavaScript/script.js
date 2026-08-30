'use strict';

// Toggle "me" container
const meBtn = document.querySelector("#me-btn");
const meContainer = document.querySelector(".me-container");

meBtn.addEventListener("click", (e) => {
  e.preventDefault();
  meContainer.classList.toggle("hidden");
  meContainer.style.display = meContainer.classList.contains("hidden") ? "none" : "block";
});

// Delete post buttons (delegated, no repetition per post)
document.querySelectorAll('[id^="delete_post"]').forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const num = btn.id.replace("delete_post", "");
    const postEl = document.querySelector(`.post${num}`);
    if (postEl) postEl.classList.add("delete_post");
  });
});
/* const deletePost1 = document.getElementById("delete_post1");
const deletePost2 = document.getElementById("delete_post2");
const deletePost3 = document.getElementById("delete_post3");
const meContainer = document.querySelector(".me-container");
const meBtn = document.querySelector("#me-btn");



meBtn.addEventListener("click", function(e) {
  e.preventDefault();
       
      if (meContainer.classList.contains('hidden') || meContainer.style.display !== 'block') {
          meContainer.style.display = 'block';
          meContainer.classList.remove('hidden');
    } else {
          meContainer.style.display = 'none';
          meContainer.classList.add('hidden');
     }
       
});



deletePost1.addEventListener("click", function(e){
  e.preventDefault();
  const postEl = document.querySelector(".post1");
  postEl.classList.add('delete_post');
});

deletePost2.addEventListener("click", function(e){
  e.preventDefault();
  const postEl = document.querySelector(".post2");
  postEl.classList.add('delete_post');
});

deletePost3.addEventListener("click", function(e){
  e.preventDefault();
  const postEl = document.querySelector(".post3");
  postEl.classList.add('delete_post');
});

 */