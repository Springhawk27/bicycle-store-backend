import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function bootstrap() {
  try {
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(`Connection Failed`, err);
  }
}

bootstrap();
