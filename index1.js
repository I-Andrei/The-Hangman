var newWord = "", wordReady = "", lives = 8;

function inputNewWord(){
  newWord = document.getElementById("newWord").value
  wordReady += newWord.charAt(0)
  for(var i = 1; i < newWord.length-1; ++i)
    wordReady += "_"
  wordReady += newWord.charAt(newWord.length-1)
  lengthOfWord = newWord.length-1
  document.getElementById('newWordChange').innerHTML = wordReady + " ---> The Word has " + lengthOfWord + " letters and you have 8 lives total"
  document.getElementById('MyID').innerHTML = lives
}

 function inputLetter(){
  var letter = document.getElementById("newLetter").value
  var found = 0, completed = 1
  for(var i = 1; i < newWord.length-1; ++i){
    if(newWord.charAt(i) == letter){
      wordReady2 = newWord.charAt(0)
      for(var s = 1; s < newWord.length-1; ++s){
        if(s == i)
          wordReady2 += letter;
        else
          wordReady2 += wordReady.charAt(s)
        if(wordReady2.charAt(s) == "_")
          completed = 0
      }
      wordReady2 += newWord.charAt(newWord.length-1)
      wordReady = wordReady2
      found = 1
    }
  }
  document.getElementById('newWordChange').innerHTML = wordReady + " ---> The Word has " + lengthOfWord + " letters and you have 8 lives total"
  if(found == 0)
    --lives
  document.getElementById('MyID').innerHTML = lives
  if(lives == 0)
    document.getElementById('newWordChange').innerHTML = "Try again!"
  if(completed == 1)
    document.getElementById('newWordChange').innerHTML = "Winner!"
 }