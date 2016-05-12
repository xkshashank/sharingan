chrome.webRequest.onBeforeRequest.addListener(function(details)
{
  var myAudio = new Audio();        // create the audio object
  myAudio.src = "sharingan.mp3"; // assign the audio file to it
  //myAudio.play();                   // play the music
  if(details.method == "GET")
  var gString = unescape(details.url)
  //alert(gString);
  var strng = /\?.*/.exec(gString);
  //alert(strng);
  var patg = /.*\<\+*script(\+*|\+.*)>/i;
  if(patg.test(strng) == true)
  {
    myAudio.play();
    alert("ALERT !! ALERT !! Sharingan has detected a XSS attack.");
    return {cancel: true};
  }

//window.location.search.replace("?", "");

if(details.method == "POST")
  var pString = details.requestBody.formData.postp[0]
  //alert(JSON.stringify(details));
  var patt = /^\<\s*script(\s*|\s.*)>/i;
  if(patt.test(pString) == true)
  {
    myAudio.play();
    alert("ALERT !! ALERT !! Sharingan has detected a XSS attack.");
    return {cancel: true};
  }
    //alert(window.location.href);
    //window.location.reload();
    //return false;
//    var patt = /(^\<\s*script\s*>|^\<\s*script\s*type\s*=\s*(\'|\")js(\'|\")\s*\>)/i;

},
{urls: [ "<all_urls>" ]},["blocking","requestBody"]
);

