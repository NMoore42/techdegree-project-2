
const studentItem = document.getElementsByClassName('student-item cf');
const pagination = document.getElementsByClassName('pagination')[0];
const searchBar = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
const pageHeader = document.getElementsByClassName('page-header cf')[0];

//Displays 10 students per page
function showPage(pageNumber, studentList){
  for (let i = 0; i < studentList; i += 1) {
    studentItem[i].style.display = 'none';
    if (i >= pageNumber * 10 && i <= (pageNumber * 10) + 9){
      studentItem[i].style.display = 'block';
    }
  }
}

//Appends page link buttons to DOM dynamically depending on studentList
function appendPageLinks(studentList){
  let pageNumbers = Math.ceil(studentList/10);
  let pageLinkSection = pagination.appendChild(document.createElement('ul'));
  for (let i = 0; i < pageNumbers; i += 1) {
     let pageLink = document.createElement('li');
     let page = document.createElement('a');
     pageLinkSection.appendChild(pageLink)[i];
     pageLink.appendChild(page)[i];
   }
  pagination.removeChild(pageLinkSection);
  pagination.appendChild(pageLinkSection);
  for (let i = 0; i < pageNumbers; i += 1){
    let page = document.getElementsByTagName('a')[i];
    page.innerHTML = i+1;
    page.setAttribute('href', '#');
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
  for (let i = 0; i < studentItem.length; i += 1){
    if (studentName[i].innerHTML.toLowerCase().indexOf(userInput) > -1 ||
        studentEmail[i].innerHTML.toLowerCase().indexOf(userInput) > -1){
      /*studentItem[i].style.display = 'block';
      studentItem[i].setAttribute('name', 'printed');*/
    } else {
      /*studentItem[i].style.display = 'none';
      studentItem[i].removeAttribute('name', 'printed');*/
      document.getElementsByClassName('student-list')[0].removeChild(document.getElementsByClassName('student-item cf')[i]);
    }
  }
}


button.addEventListener('click', search);
input.addEventListener('keypress', search);


appendPageLinks(studentItem.length);
appendSearchBar();

showPage(0, studentItem.length);
