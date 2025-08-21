import {expect, Locator, Page} from '@playwright/test';
import { RmProfileCriteriaComponent } from 'src/components/rm/requests/rm-profile-criteria.component';
import { RmCommonActions } from 'src/actions/rm/common/rm-common.actions';
import {playwrightExtension} from "src/helpers/utils.helper";

export class RmProfileCriteriaActions extends RmProfileCriteriaComponent {
  rmCommonActions: RmCommonActions;

  constructor(page: Page) {
    super(page);
    this.rmCommonActions = new RmCommonActions(this.page);
  }

  async validateHeader(labelText: string): Promise<void> {
    await this.rmCommonActions.waitForLoadState();
    await expect(this.regionHeader.filter({ hasText: `${labelText}` }), `Validate Header with text: ${labelText} is visible.`).toBeVisible();
  }
  async checkEssentialElements(): Promise<void> {
    //await this.rmCommonActions.waitForLoadState();
    //await this.validateHeader("Profile Criteria");
    //const isPreAward = (await this.rmCommonActions.getTitle()).toLowerCase().includes('pre-award');
    //!isPreAward ? await expect(this.btnAssignAvailability, 'Validate Assign Availability button is visible').toBeVisible() : null;
    //Main Page
    await expect(this.txtSearch, 'Validate Search input is visible').toBeVisible();
    await playwrightExtension.softStep('Validate Education button is visible', async () => {
      await expect(this.btnEducation, 'Validate Education button is visible').toBeVisible({timeout:1000});
    })
    await playwrightExtension.softStep('Validate Country button is visible', async () => {
      await expect(this.btnCountry, 'Validate Country button is visible').toBeVisible({timeout:1000});
    })
    await playwrightExtension.softStep('Validate State button is visible', async () => {
      await expect(this.btnState, 'Validate State button is visible').toBeVisible({timeout:1000});
    })
    await expect(this.btnCancel, 'Validate Cancel button is visible').toBeVisible();
    await expect(this.btnConfirmSelectedProfiles, 'Validate Confirm Selected Profiles button is visible').toBeVisible();
    const items = await this.containerProfile;
    const profiles = await items.count();
    expect(profiles, 'Validate Profile Container has more than 1 Profile').toBeGreaterThanOrEqual(1);
    //Profile container
    await expect(this.btnSelect, 'Select button in Profile is visible').toBeVisible();
    await expect(this.btnCV, 'CV button in Profile is visible').toBeVisible();
    await expect(this.btnScores, 'Scores button in Profile is visible').toBeVisible();
    await expect(this.btnProjects, 'Projects button in Profile is visible').toBeVisible();
    await expect(this.btnQualifications, 'Qualifications button in Profile is visible').toBeVisible();
  }
}