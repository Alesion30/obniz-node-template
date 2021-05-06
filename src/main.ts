import { PORT } from "@/config";
import route from "@/routes";

route.listen(PORT);
console.log("Server running at ${PORT} > %o", `http://localhost:${PORT}`);
