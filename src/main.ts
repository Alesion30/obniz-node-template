import * as Obniz from "obniz";
import { OBNIZ_ID } from "./config";
const obniz = new Obniz(OBNIZ_ID);

obniz.onconnect = () => {
  obniz.display.clear();
  console.log("Hello World!");
  obniz.display.print("Hello World!");
};
