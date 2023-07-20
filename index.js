#! /usr/bin/nodejs
/** @format */
"use strict";

import dotenv from "dotenv";
dotenv.config();
import app from "./servers/app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  else console.log(`Listening on port http://localhost:${PORT}`);
});
