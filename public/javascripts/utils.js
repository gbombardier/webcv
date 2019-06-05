class Utils{
  static focusComponentHeader(url){
    var fileName = url.substring(url.lastIndexOf('/')+1);
    document.getElementById(fileName+"_link").style.color="black";
    document.getElementById(fileName+"_link").style.borderBottom="1px solid black";
  }
}
