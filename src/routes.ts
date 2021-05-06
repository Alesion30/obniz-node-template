import { Request, Response } from "@/typings/express";
import app from "@/plugin/express";
import obniz from "@/plugin/obniz";

app.get("/", async (req: Request, res: Response) => {
  const connected = await obniz.connectWait({ timeout: 10 });
  if (connected) {
    obniz.display.clear();
    obniz.display.print("Hello World!");
    res.send("Hello World!");
  } else {
    res.status(500).send("Connection with obniz failed...");
  }
});

export default app;
