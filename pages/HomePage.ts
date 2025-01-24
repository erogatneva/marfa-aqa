import { Locator, Page } from "@playwright/test";

class HomePage {
  constructor(private page: Page) {}

  get minimumNumberValidation(): Locator {
    return this.page.getByText("Minimum number is");
  }

  get maximumNumberValidation(): Locator {
    return this.page.getByText("Maximum number is");
  }

  get firstIntervalValidation(): Locator {
    return this.page.getByText("First interval must be less");
  }

  get enterANumberValidation(): Locator {
    return this.page.getByText("Enter a number");
  }

  get selectAValueValidation(): Locator {
    return this.page.getByText("Select a value");
  }

  get calcMsg(): Locator {
    return this.page.locator("body > div > div > div > div.mui-39e8b5 > h2");
  }

  get databaseValue() {
    return {
      HITRAN: "HITRAN",
    };
  }

  get speciesValue() {
    return {
      water: "H₂O",
      carbonDioxide: "CO₂",
      ozone: "O₃",
      nitrousOxide: "N₂O",
      carbonMonoxide: "CO",
      methane: "CH₄",
      oxygen: "O₂",
      nitricOxide: "NO",
      sulfurDioxide: "SO₂",
      nitrogenDioxide: "NO₂",
      ammonia: "NH₃",
      nitricAcid: "HNO₃",
    };
  }

  get targetValue() {
    return {
      absorptionCrossSection: "absorption cross-section",
      volumeAbsorptionCoefficient: "volume absorption coefficient",
    };
  }

  async navigate() {
    await this.page.goto("https://marfa.app/");
  }

  async selectSpectralDatabaseSelect(optionName: string) {
    this.page
      .locator("div")
      .filter({ hasText: /^Select spectral database$/ })
      .locator("div");
    await this.page.waitForTimeout(500);
    await this.page.getByRole("option", { name: `${optionName}` }).click();
  }

  async selectSpeciesButtonSelect(optionName: string) {
    await this.page
      .locator("div")
      .filter({ hasText: /^Select species$/ })
      .getByRole("button")
      .click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole("option", { name: `${optionName}` }).click();
  }

  async spectralIntervalLeftInputFill(value: string = "10") {
    await this.page.locator('input[name="first_spectral_interval"]').click();
    await this.page.waitForTimeout(500);
    await this.page
      .locator('input[name="first_spectral_interval"]')
      .fill(`${value}`);
  }

  async spectralIntervalRightInputFill(value: string = "10") {
    await this.page.locator('input[name="second_spectral_interval"]').click();
    await this.page.waitForTimeout(500);
    await this.page
      .locator('input[name="second_spectral_interval"]')
      .fill(`${value}`);
  }

  async lineCutOffConditionInputFill(value: string = "0") {
    await this.page
      .getByRole("textbox", { name: "Line cut-off condition (e.g." })
      .click();
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("textbox", { name: "Line cut-off condition (e.g." })
      .fill(`${value}`);
  }

  async temperatureInputFill(value: string = "20") {
    await this.page
      .getByRole("textbox", { name: "Temperature (e.g. 300 K)" })
      .click();
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("textbox", { name: "Temperature (e.g. 300 K)" })
      .fill(`${value}`);
  }

  async pressureInputFill(value: string = "0") {
    await this.page
      .getByRole("textbox", { name: "Pressure (e.g. 1 atm)" })
      .click();
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("textbox", { name: "Pressure (e.g. 1 atm)" })
      .fill(`${value}`);
  }

  async selectTargetValueButtonSelect(optionName: string) {
    await this.page
      .locator("div")
      .filter({ hasText: /^Select target value$/ })
      .getByRole("button")
      .click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole("option", { name: `${optionName}` }).click();
  }

  async numberDensityInputFill(value: string = "0") {
    await this.page
      .getByRole("textbox", { name: "Number Density (e.g. 1E25 cm" })
      .click();
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("textbox", { name: "Number Density (e.g. 1E25 cm" })
      .fill(`${value}`);
  }

  async calculateButtonClick() {
    await this.page.waitForTimeout(500);
    await this.page.getByRole("button", { name: "Calculate" }).click();
  }

  async asideClick() {
    await this.page.waitForTimeout(500);
    await this.page.getByRole("heading", { name: "MARFA" }).click();
  }
}

export default HomePage;
