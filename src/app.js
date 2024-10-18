/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  //write your code here
  let pronoun = ["the", "our", "your", "my", "this"];
  let adj = ["great", "big", "amazing", "spectacular", "friendly"];
  let noun = ["jogger", "racoon", "spider", "man", "rocket"];
  let donknow = ["in", "from", "outof", "within", "outsideof"];
  let place = ["sky", "hell", "mountain", "paris", "underthesea"];
  let extension = [".com", ".net", ".io", ".es", ".org"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < donknow.length; l++) {
          for (let m = 0; m < place.length; m++) {
            for (let n = 0; n < extension.length; n++) {
              console.log(
                `${pronoun[i]}${adj[j]}${noun[k]}${donknow[l]}${place[m]}${extension[n]}`
              );
            }
          }
        }
      }
    }
  }
};


