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

let getNavData = async () => {
  try {
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
      console.log(doc);
    } else {
      console.log("Not Support DomParser");
    }
  } catch (error) {
    console.log(error);
  }
};

getNavData();
