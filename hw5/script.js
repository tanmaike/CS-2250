// https://jsonplaceholder.typicode.com/guide/

let page = 5;

async function downloadPosts(page = 5) {
  const postsURL = `https://jsonplaceholder.typicode.com/posts?_page=${page}`;
  const response = await fetch(postsURL);
  const articles = await response.json();
  addPost(articles, page);
  
  const comments = await downloadComments(page);
  return articles;
}

async function downloadComments(postId) {
  const commentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
  const response = await fetch(commentsURL);
  const comments = await response.json();
  return comments;
}

async function getUserName(userId) {
  const userURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const response = await fetch(userURL);
  const user = await response.json();
  console.log(user.name);
  return user.name;
}

function getArticleId(comments) {
  const article = comments.previousElementSibling;
  const data = article.dataset;

  return data.postId;
}

const details = document.getElementsByTagName("details");
for (const detail of details) {
  detail.addEventListener("toggle", async (event) => {
    if (detail.open) {
      const asides = detail.getElementsByTagName("aside");
      const commentsWereDownloaded = asides.length > 0;
      if (!commentsWereDownloaded) {
        const articleId = getArticleId(detail);
        const comments = await downloadComments(page);
        for(let i = 0; i < comments.length; i++) {
          let comment = comments[i];
          console.log(comment);

          const commentAside = document.createElement("aside");

          const commentText = document.createElement("p");
          let commentContent = comment.body;

          const newlinerg = /\n/gi;
          commentContent = commentContent.replaceAll(newlinerg, "<br/>");
          
          const commentContentNode = document.createTextNode(commentContent);
          commentText.appendChild(commentContentNode);

          const commentNameSection = document.createElement("p");
          const commentName = document.createElement("small");
          let commentNameContent = comment.name;
          const commentNameNode = document.createTextNode(commentNameContent);
          commentName.appendChild(commentNameNode);
          
          const commentP = document.getElementById("commentSect");
          commentP.appendChild(commentAside);
          commentAside.appendChild(commentText);
          commentAside.appendChild(commentNameSection);
          commentText.innerHTML = commentContent;
          commentNameSection.appendChild(commentName);
        }
      }
      //  for loop for posts and a for loop for comments
    }
  });
}

async function addPost(articles, page) {
  const articleData = document.getElementById("post");
  // set post title
  // set post body
  // replace body \n with <\br>

  let article = articles[0]

  const title = document.createElement("h2");
  let titleText = article.title;
  const titleTextNode = document.createTextNode(titleText);
  title.appendChild(titleTextNode);
  
  const titleh2 = document.getElementById("post");
  titleh2.appendChild(title);

  const author = document.createElement("aside");
  let authorName = await getUserName(page);
  const authorNameNode = document.createTextNode(authorName);
  author.appendChild(authorNameNode);
  
  const authorAside = document.getElementById("post");
  authorAside.appendChild(author);

  const text = document.createElement("p");
  let textFull = article.body;

  const newlinerg = /\n/gi;
  const textBroken = textFull.replaceAll(/\n/gi, "<br/>");

  const textNode = document.createTextNode(textBroken);
  text.appendChild(textNode);
  text.innerHTML = textBroken;
  
  const textP = document.getElementById("post");
  textP.appendChild(text);
}



/* const post = document.querySelector("#post");
post.dataset.article = article;
post.dataset.postId = postId;
post.dataset.article = article;
document.getElementById('{{id}}').id = '{{id}}';
*/

const posts = await downloadPosts();
console.log(posts);
