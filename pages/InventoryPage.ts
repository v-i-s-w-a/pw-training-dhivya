import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page, '/inventory.html');
  }
   private card(productName: string): Locator {
          return this.page.getByTestId("inventory-item").filter({ hasText: productName });
      }
      
async addToCart(productName: string) {
        await this.card(productName).getByRole('button', { name: 'Add to cart' }).click();
    }
async openCart() {
    await this.page.getByTestId('shopping-cart-link').click();
  }
}