'use strict';

const deletePost = document.getElementById("delete_post");



deletePost.addEventListener("click", function(e,){
  e.preventDefault();
  const postEl = document.querySelector(".post");
  postEl.classList.add('delete_post');

  
});