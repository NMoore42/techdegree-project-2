
const $studentItem = $('.student-item');
const pageNumbers = Math.ceil($studentItem.length/10);
const pageLink = document.getElementsByClassName('pagination')[0];
const ul = document.createElement('ul');
const searchBar = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
const pageHeader = document.getElementsByClassName('page-header cf')[0];
const infoBlock = document.getElementsByClassName('student-item cf');
const onPage = document.getElementsByName('onPage');


//Displays 10 students per page
function showPage(pageNumber){
  $studentItem.hide();
  for (let i = 0; i <= $studentItem.length; i += 1) {
    if (i >= pageNumber * 10 && i <= (pageNumber * 10) + 9){
      $studentItem.eq(i).show();
    }
  }
}

//Appends page link buttons to DOM dynamically
function appendPageLinks(){
  pageLink.appendChild(ul);
  for (let i=0; i< pageNumbers; i += 1){
    let a = document.createElement('a');
    let li = document.createElement('li');
    li.setAttribute('class', 'lists')
    a.innerHTML = i+1;
    a.setAttribute('href', '#');
    ul.appendChild(li);
    li.appendChild(a);
    //Event listener dislays section of students corresponding to buttons
    a.addEventListener('click', function() {
      let clickedPage = a.textContent-1;
      a.setAttribute('class', 'active');
      showPage(clickedPage);
    });
  }
}

//Dynamically adds searchbar to page
function appendSearchBar(){
  searchBar.setAttribute('class', 'student-search');
  $(input).attr({
    'id': 'myInput',
    'onkeyup': 'searchPage()',
    'placeholder': 'Search for students...'
  });
  button.textContent = 'Search';
  pageHeader.appendChild(searchBar);
  searchBar.appendChild(input);
  searchBar.appendChild(button);


}

function searchPage(){
  let userInput = document.getElementById('myInput');
  let filteredInput = userInput.value.toLowerCase();
  let studentInfo = document.getElementsByClassName('student-list')[0];
  let names = studentInfo.getElementsByTagName('h3');
  let email = document.getElementsByClassName('email');
  for (let i = 0; i <= $studentItem.length; i += 1){
    let matchingNames = names[i];
    let matchingEmail = email[i];
    let a = document.getElementsByTagName('a')[i];
    let li = document.getElementsByClassName('lists')[i];
    if (matchingNames) {
      if (matchingNames.innerHTML.toLowerCase().indexOf(filteredInput) > -1 ||
          matchingEmail.innerHTML.toLowerCase().indexOf(filteredInput) > -1 ){
        infoBlock[i].setAttribute('name', 'onPage')
        infoBlock[i].style.display = 'block';
      } else {
        infoBlock[i].removeAttribute('name', 'onPage');
        infoBlock[i].style.display = 'none';
        }
      }
    }
  }

appendPageLinks();
appendSearchBar();
searchPage();
showPage(0);
