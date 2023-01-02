randomBinary();
function randomBinary(){
    document.getElementById('xxx').innerHTML = "";
    var l = 100;
    for (var i = 0; i < l; i++) {
        var table1 = document.getElementById('xxx');
        var rowrow =  document.createElement('tr');
    
        for (var j = 0; j < l; j++) {
            var y = Math.random();
            if (y < 0.5) y = 0;
            else y= 1;

            var cell1  =  document.createElement('td');
            var text1 = document.createTextNode(y);
            cell1.style.opacity = Math.random();
            cell1.appendChild(text1);
            rowrow.appendChild(cell1);
        }
        table1.appendChild(rowrow);
    }
    setTimeout(randomBinary, 1);
}