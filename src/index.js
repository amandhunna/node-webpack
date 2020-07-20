import { nav } from "./nav";
import body from "./body";
import footer from "./footer";
import imageURL from "./webpackLogo.jpg";
import makeImage from "./image";

console.log(imageURL) // base64 image
const image = makeImage(imageURL)
document.body.appendChild(image);

const navi = nav();
document.body.appendChild(navi);

console.log(nav, body, footer);
