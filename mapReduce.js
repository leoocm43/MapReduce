

window.onload = function() {
    var fileInput = document.getElementById('openFile'); 
    var fileDisplayArea = document.getElementById('fileContents ');

    fileInput.addEventListener('change', function(e) { 
      
      var file = fileInput.files[0];//read file from the beginning
      
        var reader = new FileReader();

        reader.onload = function(e) {//reads content of the file
          fileDisplayArea.innerText = reader.result;
        }

        reader.readAsText(file);  //displays the content as text
      
    });
}


/*function readLines(input, func) {
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

  for(i = 0; i < listmap.length; i++){//introduces every word into a key-value list
      listToReduce.push(listmap[i]);
  }

  return listToShuffle;
}

/*var listToShuffle = [{"This", 1}, {"is", 1}, {"a", 1}, {"list", 1}, {"list", 1}; */

function shuffle(listToShuffle){


}

/*var listToReduce = [{"a", 1}, {"is", 1}, {"list", 1}, {"list", 1}, {"This", 1}];*/



function reduce(listToReduce){

  var outputList = [];

  for(i = 0; i < listToReduce.length; i++){


  }



}



