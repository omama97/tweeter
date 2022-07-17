const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

$("#post").click(function () {
  let postText = $("#container>#input").val();

  tweeter.addPost(postText);
  $("#container>#input").val("");
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete", function () {
  tweeter.removePost($(this).data("id"));
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".comments>button", function () {
  let comment = $(this).closest(".comments").find("input").val();
  tweeter.addComment(comment, $(this).data("id"));
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
  tweeter.removeComment($(this).data("post-id"), $(this).data("comment-id"));
  renderer.renderPosts(tweeter.getPosts());
});
