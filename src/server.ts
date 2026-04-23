import dotenv from "dotenv";

dotenv.config();

import app from "@/app";
import { config } from "@/config";

const port = config.port;

app.listen(port, () => {
  console.log(`Server running in ${config.nodeEnv} mode on port ${port}`);
});
