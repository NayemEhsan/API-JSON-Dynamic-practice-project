function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}


function displayPost(posts){
  const postContainer = document.getElementById('post-container');
  for(const post of posts){
    console.log(post)

    const divPost = document.createElement('div');
    divPost.classList.add('post');
    divPost.innerHTML=`
     <h4>User:${post.id}</h4>
     <h5>post-Title:${post.title}</h5>
     <p>Descrption:${post.body}</p>
    
    `;
    postContainer.appendChild(divPost);
  }
}
loadPost()