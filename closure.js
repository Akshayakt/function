
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size_12').onclick = size12;
document.getElementById('size_14').onclick = size14;
document.getElementById('size_16').onclick = size16;