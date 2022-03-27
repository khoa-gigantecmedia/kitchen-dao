import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x9FF645d187689F118AF4e02C234C5933d81d10ae");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "🌮DAO Pass",
        description: "This NFT will give you access to 🌮DAO!",
        image: readFileSync("dao-scripts/assets/taco-pass.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();