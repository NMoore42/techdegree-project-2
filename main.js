
const studentItem = document.getElementsByClassName('student-item cf yes');
const studentItemStatic = document.getElementsByClassName('student-item cf');
const pagination = document.getElementsByClassName('pagination')[0];
const searchBar = document.createElement('div');
const input = document.createElement('input');
const inputValue = document.getElementsByTagName('input')[0];
const button = document.createElement('button');
const pageHeader = document.getElementsByClassName('page-header cf')[0];
const pageNumbers = Math.ceil(studentItem.length/10);
const createUl = document.createElement('ul');

function addClass (){
  for (let i = 0; i < studentItemStatic.length; i += 1) {
  let activeStudents = document.getElementsByClassName('student-item')[i];
  activeStudents.setAttribute('class', 'student-item cf yes');
  }
}

//Displays 10 students per page
function showPage(pageNumber, studentList){
  for (let i = 0; i < studentList; i += 1) {
    studentItem[i].style.display = 'none';
    if (i >= pageNumber * 10 && i <= (pageNumber * 10) + 9){
      studentItem[i].style.display = 'block';
    }
  }
}

//Appends li to ul and a to li
function appendPageLinks(){
  pagination.appendChild(createUl);
  if (document.getElementsByClassName('buttonA').length > 0 ||
      document.getElementsByClassName('buttonLi').length > 0){
    removeChild();
  }
  let pageNumbersAppend = Math.ceil(studentItem.length/10);
  for (let i = 0; i < pageNumbersAppend; i += 1) {
    let createLi = document.createElement('li');
    let createA = document.createElement('a');
    createLi.setAttribute('class', 'buttonLi');
    createA.setAttribute('class', 'buttonA')
     createUl.appendChild(createLi)[i];
     createLi.appendChild(createA)[i];
   }
   appendChild();
 }

//Clears old pagination, appends new
function removeChild (){
  let a = document.getElementsByClassName('buttonA')[0];
  let li = document.getElementsByClassName('buttonLi')[0];
  $('.buttonA').empty();
  $('.buttonLi').empty();
 }

 //Clears old pagination, appends new
 function appendChild (){
    pagination.appendChild(createUl);
  }

//Adds innerHTML and sets attribute for anchor tags
function appendElements (){
  let pageNumbersAppend = Math.ceil(studentItem.length/10);
  for (let i = 0; i < pageNumbersAppend; i += 1){
    let page = document.getElementsByTagName('a')[i];
    page.innerHTML = i+1;
    page.setAttribute('href', '#')
  }
}

//Returns list of 10 students corresponding to page number clicked, sets attribute class of "active"
function pageClick () {
  let pageNumbersAppend = Math.ceil(studentItem.length/10);
  for (let i = 0; i < pageNumbersAppend; i += 1){
    let page = document.getElementsByTagName('a')[i];
    page.addEventListener('click', function(){
      let clickedPage = page.textContent-1;
      page.setAttribute('class', 'active');
      showPage(clickedPage, studentItem.length);
    });
  }
}

//Dynamically adds searchbar to page
function appendSearchBar(){
  searchBar.setAttribute('class', 'student-search');
  input.setAttribute('placeholder', 'Search for students...');
  pageHeader.appendChild(searchBar);
  searchBar.appendChild(input);
  searchBar.appendChild(button);
  button.textContent = 'Search';
}

//Search function hides list items not containing user input in either email or name
const search = function (){
  let userInput = input.value.toLowerCase();
  let studentName = document.getElementsByTagName('h3');
  let studentEmail = document.getElementsByClassName('email');
  for (let i = 0; i < studentItemStatic.length; i += 1){
    if (studentName[i].innerHTML.toLowerCase().indexOf(userInput) > -1 ||
        studentEmail[i].innerHTML.toLowerCase().indexOf(userInput) > -1){
      studentItem[i].style.display = 'block';
      document.getElementsByClassName('student-item')[i].setAttribute('class', 'student-item cf yes');
    } else {
      studentItem[i].style.display = 'none';
      document.getElementsByClassName('student-item')[i].removeAttribute('class', 'yes');
    }
  }
}

//addEventListeners provide click and keyup feature for search bar
button.addEventListener('click', search);
input.addEventListener('keyup', search);

//Called functions
addClass();
appendSearchBar();
showPage(0, studentItemStatic.length);
appendPageLinks();
appendChild();
appendElements();
pageClick();
