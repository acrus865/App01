function setup() {
  var amountInput = document.getElementById("amount");


  //addevent listener
}

function yesnoCheck() {
   if (document.getElementById('memo').checked) {
       document.getElementById('memoAmount').style.display = 'block';
       document.getElementById('priorityAmount').style.display = 'none';}
   
   else {document.getElementById('memoAmount').style.display = 'none';
        document.getElementById('priorityAmount').style.display = 'block';}
}





//   document.getElementById("memo").onclick =
//     function () {
  
//       if (memo.checked) {
  
//         memoStorage = document.getElementById("amount").value;
  
//         setLabel("Memo ");
//       }
  
//     };
//   document.getElementById("priority").onclick =
//     function () {
  
  
//       if (priority.checked) {
  
//         priorityStorage = document.getElementById("amount").value;
  
//         setLabel("Priority ");
//       }
  
//     };
  
  
  
//   document.getElementById("enter").onclick =
//     function () {
//       var table = document.getElementById('tableOne');

//       var row = table.insertRow();

//       var cell1 = row.insertCell(rowNumber);
//       var cell2 = row.insertCell(memo);
//       var cell3 = row.insertCell(priority);

//       document.getElementById("memo").value = "";
//       document.getElementById("priority").value = "";
//     };




// }



// function setLabel(newLabel) {
//   var label = document.getElementById("inputLabel");
//   label.innerHTML = newLabel;
// }

// function storeMemo(input) {
//   var storage = input;
// }

// function storePriority(input) {
//   var storage = input;
// }

// function store() {
//   var memoText = memo.innerHTML;
//   var priorityText = priority.innerHTML;
//   console.log(memoText);
//   console.log(priorityText);
// }



// function enter() {
//   //takes memo and inserts in addToTable
//   //takes priority and inserts into tableOne
//   //calls addtable function
//   var memo = document.getElementById("memo");
//   var priority = document.getElementById("priority");
//
//   var table = document.getElementById('tableOne');
//   var tableRows = {1};
//
//   addToTable(tablerows.length, memo, priority);
// }

//takes input from id memo and stores it in variable
//takes input from id priority and stores it in variable
