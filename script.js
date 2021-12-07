var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector(".txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/pirate.json"
function getTranslationUrl(text)
{
  return serverURL + "?" + "text=" + text
}

function errorHandler(error)
{
  console.log("Error occured" , error);
  alert("Something wrong with the server: try again after sometime");
}

function clickHandler()
{
  var inputText = txtInput.value;
  fetch(getTranslationUrl(inputText))
  .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    }) 
  .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)






