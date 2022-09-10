import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middlewares";
import companyRoutes from "./routes/company.routes";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/user.routes";
import vancancyRoutes from "./routes/vacancy.routes";
import iterviewsRoutes from "./routes/interviews.routes";

const app = express();
app.use(express.json());

app.use("/company", companyRoutes);
app.use("/users", userRoutes);
app.use("/interviews", iterviewsRoutes);

app.use(handleErrorMiddleware);

export default app;

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/vacancies", vancancyRoutes);

app.use(handleErrorMiddleware);
