function loadArticles(){
  let articles = JSON.parse(localStorage.getItem('articles')) || [];
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';
  articles.forEach(article => {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `
      <img src="${article.image}" />
      <h2>${article.title}</h2>
      <p>${article.content}</p>
      <a href="#">Read More</a>
    `;
    postsContainer.appendChild(post);
  });
}

window.onload = loadArticles;