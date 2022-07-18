import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());

app.use(cookieParser());

let username;

app.get("/", (req, res) => {
  res.send("welcome to a simple HTTP cookie server");
});

app.get("/setcookie", (req, res) => {
  res.cookie(`CookieName`, `CookieValue`);
  res.send("Cookie have been saved successfully");
});

app.get("/getcookie", (req, res) => {
  //show the saved cookies
  console.log(req.cookies);
  res.send(req.cookies);
});

app.get("/deletecookie", (req, res) => {
  //show the saved cookies
  res.clearCookie("CookieName");
  res.clearCookie("userCookie");
  res.send("Cookie has been deleted successfully");
});

app.post("/login", (req, res) => {
  username = req.body;
  console.log(username);
  res.send("nada");
});

app.get("/login", (req, res) => {
  res.cookie(`userCookie`, `matheus`);
  res.send(req.cookies);
});

app.listen(5000, () => console.log("The server is running port 5000..."));
