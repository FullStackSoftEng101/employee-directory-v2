import express from "express";
import { getEmployee, getEmployees, getRandomEmployee } from "#db/employees";

const app = express();
export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

import employeesRouter from "#app/employees";
app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong");
});
