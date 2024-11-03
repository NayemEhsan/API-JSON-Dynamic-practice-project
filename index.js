  function loadUsers2(){

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data =>displayUser2(data))
  }

  function displayUser2(users){

    const ul = document.getElementById('user-list');
    for(const user of users){
      console.log(user.title);
        const li = document.createElement('li');
        li.innertext = user.name;
        ul.appendChild(li);
        
    }
  }