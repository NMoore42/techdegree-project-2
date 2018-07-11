
const $studentItem = $('.student-item');
const pageNumbers = Math.ceil($studentItem.length/10);
const pageLink = document.getElementsByClassName('pagination')[0];
const ul = document.createElement('ul');




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
  for (let i=0; i< pageNumbers; i += 1){
    let a = document.createElement('a');
    let li = document.createElement('li');
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



showPage(0);
appendPageLinks();
