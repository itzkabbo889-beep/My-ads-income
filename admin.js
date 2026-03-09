document.getElementById('articleForm').addEventListener('submit', function(e){
  e.preventDefault();
  
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;
  let image = document.getElementById('image').value;

  let articles = JSON.parse(localStorage.getItem('articles')) || [];
  articles.push({title, content, image});
  localStorage.setItem('articles', JSON.stringify(articles));

  alert('Article Added Successfully!');
  document.getElementById('articleForm').reset();
});