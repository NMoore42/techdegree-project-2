
const $studentItem = $('.student-item');
const pageNumbers = Math.ceil($studentItem.length/10);
const pageLink = document.getElementsByClassName('pagination')[0];
const ul = document.createElement('ul');
const button = document.querySelector('div.pagination').children;


//Displays 10 students per page
function showPage(pageNumber){
  $studentItem.hide();
  for (i = 0; i <= $studentItem.length; i += 1) {
    if (i >= pageNumber * 10 && i <= (pageNumber * 10) + 9){
      $studentItem.eq(i).show();
    }
  }
}


//Appends page link buttons to DOM dynamically
function appendPageLinks(){
  pageLink.appendChild(ul);
  console.log(pageNumbers);
  for (let i=0; i< pageNumbers; i += 1){
    let a = document.createElement('a');
    let li = document.createElement('li');
    a.innerHTML = i+1;
    a.setAttribute('href', '#');
    ul.appendChild(li);
    li.appendChild(a);
  }
}

//Event listener dislays section of students corresponding to buttons
button.addEventListener('click', showPage(clickedPage) {
  let a = document.querySelectorAll("A");
  clickedPage = a.textContent;
  a.setAttribute('class', 'active');
});

showPage(0);
appendPageLinks();
