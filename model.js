const Tweeter = function () {
  let _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let postIdCounter = _posts.length;
  let commentIdCounter = countComments();

  function countComments() {
    let count = 0;
    for (const post of _posts) {
      count += post.comments.length;
    }
    return count;
  }

  const getPosts = function () {
    return _posts;
  };

  const addPost = function (text) {
    postIdCounter += 1;
    let newpost = { text: text, id: `p${postIdCounter}`, comments: [] };
    _posts.push(newpost);
  };

  const removePost = function (postID) {
    _posts = _posts.filter((data) => data.id != postID);

    // for (let index in posts) {
    //   if (idpost == posts[index].id) posts.splice(index, 1);
    // }
  };

  const addComment = function (text, postID) {
    commentIdCounter += 1;
    _posts.map((post) => {
      if (post.id == postID) {
        post.comments.push({ id: `c ${commentIdCounter}`, text: text });
      }
    });
    // let newcomment = { text: text, id: "c" + commentIdCounter };
    // for (let index of posts) {
    //   if (postID == index.id) index.comments.push(newcomment);
    // }
  };

  const removeComment = function (postID, commentID) {
    commentIdCounter -= 1;
    _posts.filter((post) => {
      if (post.id == postID) {
        post.comments = post.comments.filter(
          (comment) => commentID != comment.id
        );
      }
    });

    // for (let index of posts) {
    //   if (postID == index.id) {
    //     for (let inner in index.comments) {
    //       if (commentID == index.comments[inner].id)
    //         index.comments.splice(inner, 1);
    //     }
    //   }
    // }
  };

  return {
    getPosts: getPosts,
    addPost: addPost,
    addComment: addComment,
    removePost: removePost,
    removeComment: removeComment,
  };
};
