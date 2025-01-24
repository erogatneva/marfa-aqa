import { Page } from "@playwright/test";

class DataFormatPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://marfa.app/format');
  }

  async ptFileStructureClick() {
    await this.page.getByRole('link', { name: 'PT File Structure' }).click();
  }

}

export default DataFormatPage;