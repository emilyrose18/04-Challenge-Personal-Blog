const submitEl = document.querySelector('#submit');
let x = document.querySelector('#uname');
let y = document.querySelector('#title');
let z = document.querySelector('#content');

function formValidation(event) {
  if (x.value == '' || y.value == '' || z.value == '') {
    alert('Name must be filled out');
    return;
  } else {
    event.preventDefault()
    store();
  };
};

submitEl.addEventListener('click', formValidation);


let posts = [];

function getPost(key) {
  if (localStorage.getItem(key) == null) {
    console.log('what');
    return posts;
  } else{
  return JSON.parse(localStorage.getItem(key)); }
}

function addPost(key, item) {
  let currentPost = getPost(key);
  console.log('hi');
  currentPost.push(item);
  localStorage.setItem(key, JSON.stringify(currentPost));
  return currentPost;
}

function store() {
  let post  = 
    {  
      'Username' : x.value, 
      'title' : y.value,
      'content' : z.value

    }
    console.log('hello');
    addPost('allPosts', post);

  };

