import * as bucket from "@spica-devkit/bucket";

export default function (req, res) {
  console.log("hello");
  console.log("hello2");
  console.log("hello3");
  return res.status(201).send("Spica is awesome!");
}
