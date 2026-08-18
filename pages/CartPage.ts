import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    readonly title: Locator;
    readonly cart: Locator;
    readonly cartBadge: Locator;

    constructor (page: Page){
        super(page, '/cart.html');
        this.title = page.getByText('Your Cart');
        this.cart = page.getByTestId('shopping-cart-badge');
        this.cartBadge = page.getByTestId('shopping-cart-badge');
    }
    private card(productName: string): Locator {
        return this.page.getByTestId("inventory-item").filter({ hasText: productName });
    }

    async removeFromCart(productName: string) {
        await this.card(productName).getByRole('button', { name: 'Remove' }).click();
    }

    async getCartCount(): Promise<number> {
        if((await this.cartBadge.count()) === 0) return 0;
        return Number(await this.cartBadge.textContent());
    }
    itemNames(): Locator {
  return this.page.getByTestId('inventory-item-name');
}
}