import fetch from "node-fetch";
import DomParser from "dom-parser";

let supportDomParser = () => {
  let parser = new DomParser();
  try {
    parser.parseFromString("x", "text/html");
  } catch (err) {
    return false;
  }
  return true;
};

let searchIndex = (string, searchTerm) => {
  return string.indexOf(searchTerm)
};

let getNavData = async () => {
  try {
    let navObject = {}
    let fetchData = await fetch("https://codequiz.azurewebsites.net/", {
      method: "GET",
      headers: {
        Cookie: "hasCookie=true",
      },
    });
    let jsonData = await fetchData.text();

    let support = supportDomParser();
    if (support) {
      let parser = new DomParser();
      let doc = parser.parseFromString(jsonData, "text/html").rawHTML;
      let startIndex = searchIndex(doc, '<table>')
      let lastIndex = searchIndex(doc, '<input')
      doc = doc.slice(startIndex, lastIndex)
      doc = doc.split('<tr>')
      
      for (let i=2; i<doc.length; i++) {
        doc[i] = doc[i].split('<td>')
        for (let j=1; j<doc[i].length; j++) {
          if (j === 1 ) {
            if (doc[i][1] === 'BM70SSF </td>') {
              navObject[doc[i][1].slice(0, -6).toString() ] = doc[i][2].slice(0, -5).toString()
            } else {
              navObject[doc[i][1].slice(0, -5).toString()] = doc[i][2].slice(0, -5).toString()
            }
          }
        }
      }
      console.log(navObject)
    } else {
      console.log("Not Support DomParser");
    }
  } catch (error) {
    console.log(error);
  }
};

getNavData();
