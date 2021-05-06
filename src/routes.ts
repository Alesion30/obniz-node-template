import app from "@/plugin/express";
import { sayhello } from "./functions/sample";

// エンドポイント
app.get("/", sayhello);
app.get("/:hoge", sayhello);

export default app;
