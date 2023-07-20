/** @format */
import express from "express";
import { homePage, aboutPage, resumePage } from "../controllers/homeroute.js";

const homeRoutes = express.Router();

homeRoutes.get("/", homePage);

homeRoutes.get("/about", aboutPage);
homeRoutes.get("/resume", resumePage);

export default homeRoutes;
