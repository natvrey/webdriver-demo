import HomePage from "../pageobjects/home.page.js";
import { searchData } from "../search.data.js";

const { queryOne } = searchData.search;

describe("YouTube - Search for a video", () => {
  it("Should search for a video", async () => {
    await HomePage.open();
    await HomePage.search(queryOne);
  });
});

describe("YouTube - Click on desired video", () => {
  it("Should click on desired video", async () => {
    await HomePage.chooseVideo();
  });
});
