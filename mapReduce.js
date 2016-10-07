
//07/10/2016 Leonardo CAMPUZANO


window.onload = function() {
    var fileInput = document.getElementById('openFile');
    var fileDisplayArea = document.getElementById('fileContents');

    fileInput.addEventListener('change', function(e) {
      var file = fileInput.files[0];//reads file from the beginning
      
      var textType = /text.*/;//the type of the file should be text file

      if (file.type.match(textType)) {
        var reader = new FileReader();

        reader.onload = function(e) { //reads content of the file
          fileDisplayArea.innerText = reader.result;
        }

        reader.readAsText(file);  //displays the content as text
      } else {
        fileDisplayArea.innerText = "Archivo no válido" //detects if the file is not text type
      }
    });
}



/*
//Split the text word by word
function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    var last  = 0;
    while (index > -1) {
      var line = remaining.substring(last, index);
      last = index + 1;
      func(line);
      index = remaining.indexOf('\n', last);
    }

    remaining = remaining.substring(last);
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}*/

/*var listToMap = ["This", "is", "a", "list","list"]*/


function map(listToMap){

  var listToShuffle= [];

  for(i = 0; i < listToMap.length; i++){//introduces every word into a key-value list

      listToShuffle.push(listToMap[i].word);
      listToShuffle.push(listToMap[i].count);

  return listToShuffle;
}

/*var listToShuffle = [{word:'This', count: 1}, 
{word:'is', count: 1},
{word:'a', count: 1}, 
{word:'list', count: 1},
{word:'list', count: 1}
]*/

function shuffle(listToShuffle){

var listToReduce= [];

listToShuffle.sort(function(a, b){return a.a - b.b});//Compares  the values of the array and makes a sort

for (i=0;i<listToShuffle.length;i++){
  listToShuffle[i].word =listToReduce.word[i];
  listToShuffle[i].count =listToReduce.count[i];
}
return listToReduce;
}

/*var listToReduce = [{word:'a', count: 1},
{word:'is', count: 1},
{word:'list', count: 1},
{word:'list', count: 1},
{word:'This', count: 1}

];*/



function reduce(listToReduce){

  var outputList = [][];

  for(i = 0; i < listToReduce.length; i++){ //the loop goes through the array and checks if there are repeated words so the count of it increments and the repeated word is deleted
    if (listToReduce[i].word===listToReduce[i++].word){
        listToReduce[i].count++;
        listToReduce[i++].pop();
    }
    outputList[i].word=listToReduce[i].word;
    outputList[i].count=listToReduce[i].count;
  }


  return outputList:

}

/*outputList = [{word:'a', count: 1},
{word:'is', count: 1},
{word:'list', count: 2},
{word:'This', count: 1}

];


*/



