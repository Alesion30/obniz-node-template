import route from "@/plugin/express";
import obniz from "@/plugin/obniz";

route.get("/", async (req: any, res: any) => {
  const connected = await obniz.connectWait({ timeout: 10 });
  if (connected) {
    obniz.display.clear();
    obniz.display.print("Hello World!");
    res.send("Hello World!");
  } else {
    res.send("Connection with obniz failed...");
  }
});

export default route;
