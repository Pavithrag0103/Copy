import { Locator, Page } from '@playwright/test';
import {FrameLocator} from "playwright";

export class RmProfileCriteriaComponent {
  readonly page: Page;
  public iframeProfile: FrameLocator;
  //Profile iFrame
  readonly regionHeader: Locator;
  readonly txtSearch: Locator;
  readonly btnEducation: Locator;
  readonly btnCountry: Locator;
  readonly btnState: Locator;
  readonly btnCancel: Locator;
  readonly btnConfirmSelectedProfiles: Locator;
  readonly containerProfile: Locator;
  //Profile container
  readonly btnSelect: Locator;
  readonly btnCV: Locator;
  readonly btnScores: Locator;
  readonly btnProjects: Locator;
  readonly btnQualifications: Locator;
  public profileNumber: number;

  constructor(page: Page) {
    this.page = page;
    this.profileNumber = 0;
    //Main Page
    this.iframeProfile = this.page.frameLocator('#apex_dialog_1 > iframe');
    this.regionHeader = this.iframeProfile.locator('#header_heading > span');
    this.txtSearch = this.iframeProfile.locator('#smartFilters_fr_search');
    this.btnEducation = this.iframeProfile.locator('#smartFilters_fr > div.a-FS-smartFilter > div.a-FS-suggestionChips > ul > li.a-Chip.education');
    this.btnCountry = this.iframeProfile.locator('#smartFilters_fr > div.a-FS-smartFilter > div.a-FS-suggestionChips > ul > li:nth-child(3)');
    this.btnState = this.iframeProfile.locator('#smartFilters_fr > div.a-FS-smartFilter > div.a-FS-suggestionChips > ul > li.a-Chip.state');
    this.btnCancel = this.iframeProfile.locator('#cancel');
    this.btnConfirmSelectedProfiles = this.iframeProfile.locator('#B11190207839374928330');
    this.containerProfile = this.iframeProfile.locator('#profileUnselect_Cards > div.a-TMV-body > div.a-TMV-w-scroll > ul > li');
    //> li:nth-child(2) > div
    //Profile container
    this.btnSelect = this.containerProfile.nth(this.profileNumber).locator('#selectBtn');
    this.btnCV = this.containerProfile.nth(this.profileNumber).locator('#cvBtn');
    this.btnScores = this.containerProfile.nth(this.profileNumber).locator('#scoreBtn');
    this.btnProjects = this.containerProfile.nth(this.profileNumber).locator('#projBtn');
    this.btnQualifications = this.containerProfile.nth(this.profileNumber).locator('#qlfBtn');
  }
}