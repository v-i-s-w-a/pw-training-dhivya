import { Page } from '@playwright/test';

export class BasePage {
    constructor(
    protected readonly page: Page,
    private path: string
  ) {}

    async open() {
        await this.page.goto(this.path);
    }
}
