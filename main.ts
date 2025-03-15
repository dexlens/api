import express from "npm:express";
import swaggerUi from "npm:swagger-ui-express";
import { swaggerDocument } from "./swaggerMaker.ts";
const port = 3000;
const app = express();

const swaggerOptions = {
  explorer: true,
  customSiteTitle: "Dexlens API",
  customCss: `.opblock-tag { cursor: pointer; }`, // Ensures tags are clickable
  swaggerOptions: {
    defaultModelExpandDepth: -1,  // Collapses models
    defaultModelsExpandDepth: -1,
    // tagsSorter: ["WebSocket", "Ethereum", "Blockchain"],
    tagsSorter: function (a: string, b: string) {
      // Define your custom ordering
      const order = ["WebSocket", "Ethereum", "Blockchain"];
      return order.indexOf(a) - order.indexOf(b);
    }  
  }
};


// enable swagger ui
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
