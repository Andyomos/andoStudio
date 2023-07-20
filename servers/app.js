/** @format */

import express from "express";
import morgan from "morgan";
import homeRoutes from "./routes/homeRoutes.js";
import { errorPage } from "./controllers/homeroute.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

app.use(homeRoutes);

app.use(errorPage);

export default app;
