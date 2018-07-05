
const $studentItem = $('.student-item');
$studentItem.hide();

function showPage (){
  for (i = 0; i < $studentItem.length; i += 1) {
    if (i<10){
      $studentItem[i].show();
    }
  }
}

showPage();
