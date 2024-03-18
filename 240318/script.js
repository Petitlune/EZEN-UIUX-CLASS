const feed = document.querySelector(".feed");
console.log(feed);

//users에서 username을 찾아오기 위한 함수 정의
//자바스크립트가 1급 시민이기 때문에 return문 안에 함수 쓸 수 있다.
const getUserById = (id) => {
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data);
};

const createPost = async (post) => {
  const wrap = document.createElement("div");
  const user = document.createElement("a");
  const article = document.createElement("div");

  wrap.className = "post";
  user.className = "user";
  article.className = "article";

  wrap.id = post.id;
  article.innerText = post.body;

  const userInfo = await getUserById(post.userId);
  console.log(userInfo);
  //비동기 이슈
  user.innerText = `@${userInfo.username}`;
  user.href = "./user.html";
  user.target = "_blank";

  user.addEventListener("click", () => {
    localStorage.setItem("userId", post.userId);
  });

  wrap.append(user, article);
  feed.appendChild(wrap);
};

const getAllPost = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  fetch(URL)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((post) => {
        createPost(post);
      })
    );
};

if (feed) {
  getAllPost();
}
