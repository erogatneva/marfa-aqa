import { test, expect, type Page } from "@playwright/test";
import DataFormatPage from "../pages/DataFormatPage";

test.describe("Проверки для страницы Data format", async () => {
  test("Перейти в репозиторий с описанием PT File Structure", async ({
    page,
    context,
  }) => {
    const dataFormatPage = new DataFormatPage(page);
    await test.step("Перейти на страницу Data format", async () => {
      await dataFormatPage.navigate();
    });
    await test.step("Кликнуть по ссылке PT File Structure, ОР - в новой вкладке открылся репозиторий", async () => {
      const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        dataFormatPage.ptFileStructureClick(),
      ]);
      await newPage.waitForLoadState();
      await expect(newPage).toHaveURL(
        "https://github.com/Razumovskyy/MARFA?tab=readme-ov-file#pt-file-structure"
      );
    });
  });
});