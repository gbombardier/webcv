class Utils{
  static focusComponentHeader(url){
    var fileName = url.substring(url.lastIndexOf('/')+1);
    document.getElementById(fileName+"_link").style.color="black";
    document.getElementById(fileName+"_link").style.borderBottom="1px solid black";
  }

  static putXpText(node, text){
    switch (text) {
      case "csmb":
        node.innerText = "csmb";
        break;
      case "summit":
        node.innerText = "summit";
        break;
      case "gcm":
        node.innerText = "gcm";
        break;
      case "makwa":
        node.innerText = "makwa";
        break;
      case "csdgs":
        node.innerText = "csdgs";
        break;
      default:
          node.innerText = "Pas d'informations";
    }
  }
}
