var link = "";
function clicked(){
$('.jumbotron').toggle("slide");
link= prompt("Please enter The Correct Json Link:", "");
if(link !== null|| link !== "")
{
setTimeout(print, 1000);
}
}

function print(){

$.getJSON(link, {callback: "?"}, function(res) {
	
var txt = "";
var data = res.products;

for(var propName in data) {
    if(res.products.hasOwnProperty(propName)) {	
        var propValue = data[propName];
		txt  +=  "<tr><td>"+propValue.subcategory+"</td><td>"+propValue.title+"</td><td>"+propValue.price+"</td><td>"+propValue.popularity+"</td></tr>";	
 }
}

if(txt != ""){
$("#table").append(txt).removeClass("hidden");
}			
	
});

setTimeout(sortTable, 2000);

}
//Merge sort starts
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (600); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
  

