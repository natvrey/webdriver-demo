import HomePage from "../pageobjects/home.page.js";
import { searchData } from "../search.data.js";

const { queryOne } = searchData.search;

describe("YouTube - Search for and Select a Video", () => {
  it("Should search for specified video", async () => {
    await HomePage.open();
    await HomePage.search(queryOne);
  });

  it("Should click on first video in the results", async () => {
    await HomePage.chooseVideo();
  });
});
