import dotenv from "dotenv";
import app from "@/app";
import { config } from "@/config";

dotenv.config();

const port = config.port;

app.listen(port, () => {
  console.log(`Server running in ${config.nodeEnv} mode on port ${port}`);
});
