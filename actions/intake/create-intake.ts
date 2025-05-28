
import { expect, Page } from '@playwright/test';
import { CreateIntakeComponent } from '../../components/intake/create-intake';

export class CreateIntakeActions extends CreateIntakeComponent {

  async fillProjectCode(code: string): Promise<void> {
    await this.projectCodeInput.fill(code);
  }

  async searchWithProjectCode(projectCode: string): Promise<void> {
    await this.projectCodeInput.fill(projectCode);
    await this.searchButton.click();
    await expect(this.resultProjectCode).toBeVisible();
    await expect(this.resultProjectCode).toHaveText(projectCode);
  }

  async searchWithOpportunityName(opportunityName: string): Promise<void> {
    await this.opportunityNameInput.fill(opportunityName);
    await this.searchButton.click();
    await expect(this.resultOpportunityName).toBeVisible();
    await expect(this.resultOpportunityName).toHaveText(opportunityName);
  }

  async searchWithSponsorName(sponsorName: string): Promise<void> {
    await this.sponsorNameInput.fill(sponsorName);
    await this.searchButton.click();
    await expect(this.resultSponsorName).toBeVisible();
    await expect(this.resultSponsorName).toHaveText(sponsorName);
  }

}
