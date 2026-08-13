import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly error: Locator;

    constructor(page: Page) {
        super(page, "/");
        this.userName = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.error = page.getByTestId('error');
    }
    async login(user: string, pass: string) {
        await this.userName.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }
}
