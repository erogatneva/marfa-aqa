import { test, expect, type Page } from "@playwright/test";
import HomePage from "../pages/HomePage";

test.describe("Проверка рассчёта с разными значениями Select species", async () => {
  test("Рассчёт с H₂O", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Выбрать опцию H₂O в Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("10");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });

  test("Рассчёт с CO₂", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Выбрать опцию CO₂ в Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("10");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });
});

test.describe("Проверки валидации Select species", async () => {
  test("Проверить валидацию пустого значения", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("10");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Появилась текстовка Select a value", async () => {
      await expect(homePage.selectAValueValidation.first()).toHaveText(
        "Select a value"
      );
    });
  });
});

test.describe("Проверки граничных значений Spectral interval", async () => {
  // test("Рассчёт на крайних граничных значениях - [10; 14000]", async ({
  //   page,
  // }) => {
  //   const homePage = new HomePage(page);
  //   await test.step("Перейти на страницу Home", async () => {
  //     await homePage.navigate();
  //   });
  //   await test.step("Заполнить Select species", async () => {
  //     await homePage.selectSpeciesButtonSelect(
  //       homePage.speciesValue.carbonDioxide
  //     );
  //   });
  //   await test.step("Заполнить Spectral interval", async () => {
  //     await homePage.spectralIntervalLeftInputFill("10");
  //     await homePage.spectralIntervalRightInputFill("14000");
  //   });
  //   await test.step("Заполнить Line cut-off condition", async () => {
  //     await homePage.lineCutOffConditionInputFill("10");
  //   });
  //   await test.step("Заполнить Temperature", async () => {
  //     await homePage.temperatureInputFill("300");
  //   });
  //   await test.step("Заполнить Pressure", async () => {
  //     await homePage.pressureInputFill("1");
  //   });
  //   await test.step("Заполнить Select target value", async () => {
  //     await homePage.selectTargetValueButtonSelect(
  //       homePage.targetValue.absorptionCrossSection
  //     );
  //   });
  //   await test.step("Нажать Calculate", async () => {
  //     await homePage.calculateButtonClick();
  //   });
  //   await test.step("ОР - Отобразилась страница с рассчётом", async () => {
  //     await expect(homePage.calcMsg).toHaveText(
  //       "Absorption spectra has been calculated ! ",
  //       { timeout: 420000 }
  //     );
  //   });
  // });

  test("Рассчёт на значениях внутри границ - [500; 1500]", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("10");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });
});

test.describe("Проверки валидации Spectral interval", async () => {
  test("Проверить валидацию минимального и максимального значения границ - [9; 14001]", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("9");
      await homePage.spectralIntervalRightInputFill("14001");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("10");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - появилась текстовка Minimum number is 10", async () => {
      await expect(homePage.minimumNumberValidation.first()).toHaveText(
        "Minimum number is 10"
      );
    });
    await test.step("ОР - появилась текстовка Maximum number is 14000", async () => {
      await expect(homePage.maximumNumberValidation).toHaveText(
        "Maximum number is 14000"
      );
    });
  });

  test("Проверить валидацию - first_spectral_interval > second_spectral_interval", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("600");
      await homePage.spectralIntervalRightInputFill("400");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("10");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - появилась текстовка First interval must be less", async () => {
      await expect(homePage.firstIntervalValidation).toHaveText(
        "First interval must be less"
      );
    });
  });

  test("Проверить валидацию - first_spectral_interval, second_spectral_interval > 0", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("-10");
      await homePage.spectralIntervalRightInputFill("-1");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("10");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - появилась текстовка Minimum number is 10", async () => {
      await expect(homePage.minimumNumberValidation.first()).toHaveText(
        "Minimum number is 10"
      );
      await expect(homePage.minimumNumberValidation.nth(1)).toHaveText(
        "Minimum number is 10"
      );
    });
  });

  test("Проверить валидацию ввода пустой и символьной строки", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("");
      await homePage.spectralIntervalRightInputFill("test string");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("10");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - появилась текстовка Enter a number", async () => {
      await expect(homePage.enterANumberValidation.first()).toHaveText(
        "Enter a number"
      );
      await expect(homePage.enterANumberValidation.nth(1)).toHaveText(
        "Enter a number"
      );
    });
  });
});

test.describe("Проверки граничных значений Line cut-off condition", async () => {
  test("Рассчёт по нижней границе Line cut-off condition", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("0");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });

  test("Рассчёт по верхней границе Line cut-off condition", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("500");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });

  test("Рассчёт внутри границы Line cut-off condition", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });
});

test.describe("Проверки валидации Line cut-off condition", async () => {
  test("Проверить валидацию нижней границы Line cut-off condition", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("-1");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Minimum number is 0", async () => {
      await expect(homePage.minimumNumberValidation.first()).toHaveText(
        "Minimum number is 0"
      );
    });
  });

  test("Проверить валидацию верхней границы Line cut-off condition", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("501");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Maximum number is 500", async () => {
      await expect(homePage.maximumNumberValidation.first()).toHaveText(
        "Maximum number is 500"
      );
    });
  });

  test("Проверить валидацию невалидного ввода Line cut-off condition", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("test string");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Enter a number", async () => {
      await expect(homePage.enterANumberValidation.first()).toHaveText(
        "Enter a number"
      );
    });
  });

  test("Проверить валидацию пустого значения Line cut-off condition", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Enter a number", async () => {
      await expect(homePage.enterANumberValidation.first()).toHaveText(
        "Enter a number"
      );
    });
  });
});

test.describe("Проверки граничных значений Temperature", async () => {
  test("Рассчёт по нижней границе Temperature", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("20");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });

  test("Рассчёт по верхней границе Temperature", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("1000");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });

  test("Рассчёт внутри границы Temperature", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });
});

test.describe("Проверки валидации Temperature", async () => {
  test("Проверить валидацию нижней границы Temperature", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("19");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Minimum number is 20", async () => {
      await expect(homePage.minimumNumberValidation.first()).toHaveText(
        "Minimum number is 20"
      );
    });
  });

  test("Проверить валидацию верхней границы Temperature", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("1001");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Maximum number is 1000", async () => {
      await expect(homePage.maximumNumberValidation.first()).toHaveText(
        "Maximum number is 1000"
      );
    });
  });

  test("Проверить валидацию невалидного ввода Temperature", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("test string");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Enter a number", async () => {
      await expect(homePage.enterANumberValidation.first()).toHaveText(
        "Enter a number"
      );
    });
  });

  test("Проверить валидацию пустого значения Temperature", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Enter a number", async () => {
      await expect(homePage.enterANumberValidation.first()).toHaveText(
        "Enter a number"
      );
    });
  });
});

test.describe("Проверки граничных значений Pressure", async () => {
  test("Рассчёт по нижней границе Pressure", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("0");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });

  // TODO: Для этого теста нужно определить верхнюю границу ЛИБО использовать max integer value js
  // test("Рассчёт по верхней границе Pressure", async ({ page }) => {
  //   const homePage = new HomePage(page);
  //   await test.step("Перейти на страницу Home", async () => {
  //     await homePage.navigate();
  //   });
  //   await test.step("Заполнить Select species", async () => {
  //     await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
  //   });
  //   await test.step("Заполнить Spectral interval", async () => {
  //     await homePage.spectralIntervalLeftInputFill("500");
  //     await homePage.spectralIntervalRightInputFill("1500");
  //   });
  //   await test.step("Заполнить Line cut-off condition", async () => {
  //     await homePage.lineCutOffConditionInputFill("125");
  //   });
  //   await test.step("Заполнить Temperature", async () => {
  //     await homePage.temperatureInputFill("300");
  //   });
  //   await test.step("Заполнить Pressure", async () => {
  //     await homePage.pressureInputFill("1");
  //   });
  //   await test.step("Заполнить Select target value", async () => {
  //     await homePage.selectTargetValueButtonSelect(homePage.targetValue.absorptionCrossSection);
  //   });
  //   await test.step("Нажать Calculate", async () => {
  //     await homePage.calculateButtonClick();
  //   });
  //   await test.step("ОР - Отобразилась страница с рассчётом", async () => {
  //     await expect(homePage.calcMsg).toHaveText(
  //       "Absorption spectra has been calculated ! ",
  //       { timeout: 300000 }
  //     );
  //   });
  // });

  test("Рассчёт внутри границы Pressure", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(homePage.speciesValue.water);
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("20");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });
});

test.describe("Проверки валидации Pressure", async () => {
  test("Проверить валидацию нижней границы Pressure", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("-1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Minimum number is 0", async () => {
      await expect(homePage.minimumNumberValidation.first()).toHaveText(
        "Minimum number is 0"
      );
    });
  });

  // TODO: Для этого теста нужно определить верхнюю границу ЛИБО использовать max integer value js
  // test("Проверить валидацию верхней границы Pressure", async ({ page }) => {
  //   const homePage = new HomePage(page);
  //   await test.step("Перейти на страницу Home", async () => {
  //     await homePage.navigate();
  //   });
  //   await test.step("Заполнить Select species", async () => {
  //     await homePage.selectSpeciesButtonSelect(
  //       homePage.speciesValue.carbonDioxide
  //     );
  //   });
  //   await test.step("Заполнить Spectral interval", async () => {
  //     await homePage.spectralIntervalLeftInputFill("500");
  //     await homePage.spectralIntervalRightInputFill("1500");
  //   });
  //   await test.step("Заполнить Line cut-off condition", async () => {
  //     await homePage.lineCutOffConditionInputFill("125");
  //   });
  //   await test.step("Заполнить Temperature", async () => {
  //     await homePage.temperatureInputFill("1001");
  //   });
  //   await test.step("Заполнить Pressure", async () => {
  //     await homePage.pressureInputFill("1");
  //   });
  //   await test.step("Заполнить Select target value", async () => {
  //     await homePage.selectTargetValueButtonSelect(homePage.targetValue.absorptionCrossSection);
  //   });
  //   await test.step("Нажать Calculate", async () => {
  //     await homePage.calculateButtonClick();
  //   });
  //   await test.step("ОР - отображена текстовка Maximum number is 1000", async () => {
  //     await expect(homePage.maximumNumberValidation.first()).toHaveText(
  //       "Maximum number is 1000"
  //     );
  //   });
  // });

  test("Проверить валидацию невалидного ввода Pressure", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("test string");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Enter a number", async () => {
      await expect(homePage.enterANumberValidation.first()).toHaveText(
        "Enter a number"
      );
    });
  });

  test("Проверить валидацию пустого значения Pressure", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - отображена текстовка Enter a number", async () => {
      await expect(homePage.enterANumberValidation.first()).toHaveText(
        "Enter a number"
      );
    });
  });
});

// TODO: узнать границы по Number Density
// TODO: добавить наборы для Number Density

test.describe("Рассчёт с разными значениями Select target value", async () => {
  test("Рассчёт с опцией absorption cross-section", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.absorptionCrossSection
      );
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });

  test("Рассчёт с опцией volume absorption coefficient", async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step("Перейти на страницу Home", async () => {
      await homePage.navigate();
    });
    await test.step("Заполнить Select species", async () => {
      await homePage.selectSpeciesButtonSelect(
        homePage.speciesValue.carbonDioxide
      );
    });
    await test.step("Заполнить Spectral interval", async () => {
      await homePage.spectralIntervalLeftInputFill("500");
      await homePage.spectralIntervalRightInputFill("1500");
    });
    await test.step("Заполнить Line cut-off condition", async () => {
      await homePage.lineCutOffConditionInputFill("125");
    });
    await test.step("Заполнить Temperature", async () => {
      await homePage.temperatureInputFill("300");
    });
    await test.step("Заполнить Pressure", async () => {
      await homePage.pressureInputFill("1");
    });
    await test.step("Заполнить Select target value", async () => {
      await homePage.selectTargetValueButtonSelect(
        homePage.targetValue.volumeAbsorptionCoefficient
      );
    });
    await test.step("Заполнить Number Density", async () => {
      await homePage.numberDensityInputFill("1E25");
    });
    await test.step("Нажать Calculate", async () => {
      await homePage.calculateButtonClick();
    });
    await test.step("ОР - Отобразилась страница с рассчётом", async () => {
      await expect(homePage.calcMsg).toHaveText(
        "Absorption spectra has been calculated ! ",
        { timeout: 300000 }
      );
    });
  });
});