//This program will dynamically display 10 students per page with a search feature
//Search function will filter through student name and email and present results by both keyup and button click
const studentItem = document.getElementsByClassName('student-item cf');
const pagination = document.getElementsByClassName('pagination')[0];
const searchBar = document.createElement('div');
const input = document.createElement('input');
const inputValue = document.getElementsByTagName('input')[0];
const button = document.createElement('button');
const pageHeader = document.getElementsByClassName('page-header cf')[0];
const pageNumbers = Math.ceil(studentItem.length/10);
const createUl = document.createElement('ul');

//Displays 10 students per page
function showPage(pageNumber, studentList, studentNamePosition){
  for (let i = 0; i < studentList; i += 1) {
    studentNamePosition[i].style.display = 'none';
    if (i >= pageNumber * 10 && i <= (pageNumber * 10) + 9){
      studentNamePosition[i].style.display = 'block';
    }
  }
}

//Clears old pagination, appends new
function appendChild (){
  createUl.setAttribute('class', 'ul');
  pagination.appendChild(createUl);
 }

//Appends li to ul and a to li
function appendPageLinks(pageNumbersAppend){
  for (let i = 0; i < pageNumbersAppend; i += 1) {
    let createLi = document.createElement('li');
    let createA = document.createElement('a');
    createLi.setAttribute('class', 'buttonLi');
    createA.setAttribute('class', 'buttonA')
     createUl.appendChild(createLi)[i];
     createLi.appendChild(createA)[i];
   }
 }

//Clears old pagination, appends new
function removeChild (){
  if (document.getElementsByClassName('buttonA').length > 0 ||
      document.getElementsByClassName('buttonLi').length > 0){
      $('.buttonLi').empty();
      $('.ul').empty();
  }
 }

//Adds innerHTML and sets attribute for anchor tags
function appendElements (pageNumbersAppend){
  for (let i = 0; i < pageNumbersAppend; i += 1){
    let page = document.getElementsByTagName('a')[i];
    page.innerHTML = i+1;
    page.setAttribute('href', '#')
  }
}

//Returns list of 10 students corresponding to page number clicked
function pageClick (pageNumbersAppend, studentList, studentNamePosition) {
  for (let i = 0; i < pageNumbersAppend; i += 1){
    let page = document.getElementsByTagName('a')[i];
    page.addEventListener('click', function(){
      let clickedPage = page.innerHTML-1;
      showPage(clickedPage, studentList, studentNamePosition);
    });
  }
}

//Activates and deactivates clicked button class.  Default to first button
function buttonClick (buttons) {
  let page = document.getElementsByClassName('buttonA');
  page[0].setAttribute('class', 'buttonA active');
    for (let i = 0; i < buttons; i += 1){
      page[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
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

//If no users are found during search, this function will print message to page
//If users are found, it will clear printed message
function printNoResults (){
  let noResults = document.createElement('h5');
  let div = document.createElement('div');
  document.getElementsByClassName('student-list')[0].appendChild(div);
  noResults.setAttribute('class', 'noResults');
  div.setAttribute('class', 'div');
  noResults.innerHTML = 'Sorry, there are no students that match your search';
  if (document.querySelectorAll('#yes').length == 0 && document.querySelectorAll('.noResults').length == 0){
    div.appendChild(noResults);
  }
  if (document.querySelectorAll('#yes').length !== 0 ){
      $('.div').empty();
  }
}

//Search function hides list items not containing user input in either email or name
const search = function (){
  let userInput = input.value.toLowerCase();
  let studentName = document.getElementsByTagName('h3');
  let studentEmail = document.getElementsByClassName('email');
  for (let i = 0; i < studentItem.length; i += 1){
    if (studentName[i].innerHTML.toLowerCase().includes(userInput) == true ||
        studentEmail[i].innerHTML.toLowerCase().includes(userInput) == true ){
      studentItem[i].style.display = 'block';
    document.getElementsByClassName('student-item')[i].setAttribute('id', 'yes');
    } else {
      studentItem[i].style.display = 'none';
      document.getElementsByClassName('student-item')[i].removeAttribute('id', 'yes');
    }
  }
  removeChild();
  appendPageLinks(Math.ceil(document.querySelectorAll('#yes').length/10));
  appendElements(Math.ceil(document.querySelectorAll('#yes').length/10));
  pageClick(Math.ceil(document.querySelectorAll('#yes').length/10), Math.ceil(document.querySelectorAll('#yes').length), document.querySelectorAll('#yes'));
  showPage(0, Math.ceil(document.querySelectorAll('#yes').length), document.querySelectorAll('#yes'));
  printNoResults();
  buttonClick(document.querySelectorAll('#yes').length/10);
}

//addEventListeners provide click and keyup feature for search bar
button.addEventListener('click', search);
input.addEventListener('keyup', search);

//Called functions
appendSearchBar();
showPage(0, studentItem.length, studentItem);
appendChild();
appendPageLinks(pageNumbers);
appendElements(pageNumbers);
pageClick(pageNumbers, studentItem.length, studentItem);
buttonClick(pageNumbers);
