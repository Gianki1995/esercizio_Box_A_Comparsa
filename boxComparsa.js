let distanceBoxFromViewportBorderTop;

const boxes = document.querySelectorAll('.box');

const viewportHeight = (document.documentElement.clientHeight / 8) *7 ;
showHideBoxes();
addEventListener('scroll', showHideBoxes);
addEventListener('resize', showHideBoxes);
screen.orientation.addEventListener('change', showHideBoxes);

function showHideBoxes(){
for (let boxIndex = 0; boxIndex < boxes.length; boxIndex++) {
    distanceBoxFromViewportBorderTop = boxes[boxIndex].getBoundingClientRect().top;
    if (distanceBoxFromViewportBorderTop <= viewportHeight) {
        boxes[boxIndex].classList.add('show');
    }else{
        boxes[boxIndex].classList.remove('show');
    }
}
}


// 

