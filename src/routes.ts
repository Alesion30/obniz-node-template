import app from "@/plugin/express";
import { sayhello } from "./functions/sample";

app.get("/", sayhello);
app.get("/:hoge", sayhello);

export default app;
