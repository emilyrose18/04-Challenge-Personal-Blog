const posts = document.getElementById("Posts");
window.onload = function() {
    postsRetrieved = JSON.parse(localStorage.getItem('allPosts')); 
    postsRetrieved.forEach(item => {
        let post = document.createElement('div');
        let title = document.createElement('div');
        let user = document.createElement('div');
        let content = document.createElement('div');

        title.textContent = item.title;
        title.setAttribute('id', 'titleId');

        user.textContent = `Posted by: ${item.Username}`;
        user.setAttribute('id','userId');

        content.textContent = item.content;
        content.setAttribute('id','contentId')

        posts.appendChild(post);
        post.appendChild(title);
        post.appendChild(content);
        post.appendChild(user);
    });
  };

  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', goBack);
  


