/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "his"];
let adj = ["great", "big", "amazing"];
let noun = ["jogger", "racoon", "dog", "merchant", "driver"];
let extension = [".com", ".net", ".gov", ".org", ".us"];

function GeneradorDominios() {
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extension.length; e++) {
          console.log(pronoun[p] + adj[a] + noun[n] + extension[e]);
        }
      }
    }
  }
}

GeneradorDominios();
