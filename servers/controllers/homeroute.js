/** @format */

export const homePage = (req, res) => {
  res.render("index", { title: "Home page" });
};

export const aboutPage = (req, res) => {
  res.render("about", { title: "About page" });
};

export const resumePage = (req, res) => {
  res.render("resume", { title: "Resume Page" });
};

export const errorPage = (req, res) => {
  res.render("404", { title: "404 Page" });
};
