
const $studentItem = $('.student-item');


//Displays 10 students per page
function showPage(pageNumber){
  $studentItem.hide();
  for (i = 0; i <= $studentItem.length; i += 1) {
    if (i >= pageNumber * 10 && i <= (pageNumber * 10) + 9){
      $studentItem.eq(i).show();
    }
  }
}

showPage(0);

function appendPageLinks(){
  let pageNumbers = Math.ceil($studentItem.length/10);
  let $pageLink = $('.pagination ul');
  let li = document.createElement('li');
  for (i=0; i<= pageNumbers; i += 1){
    $pageLink.appendChild(li[i]);
  }
}

appendPageLinks();
