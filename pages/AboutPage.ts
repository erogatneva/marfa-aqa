import { Page } from "@playwright/test";

class AboutPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://marfa.app/about');
    }

    
}

export default AboutPage;