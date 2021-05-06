import { Request, Response } from "@/typings/express";
import obniz from "@/plugin/obniz";

export const sayhello = async (req: Request, res: Response) => {
  // 接続するまで待機 [タイムアウト3秒]
  const connected = await obniz.connectWait({ timeout: 3 });

  if (connected) {
    // ディスプレイを初期化
    obniz.display.clear();

    // URLパラメーターを取得
    const hoge = req.params.hoge ?? "World";

    // ディスプレイにテキストを表示
    const text = `Hello, ${hoge}!!`;
    obniz.display.print(text);

    console.log(text);
    res.send(text);
  } else {
    const error = "Connection with obniz failed..."
    console.log(error);
    res.status(500).send(error);
  }
};
