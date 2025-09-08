import { Locator, Page } from '@playwright/test';

export class RmReviewAndAssignComponent {
  readonly page: Page;
  //Resource Pool Filter
  readonly btnRPUndo: Locator;
  readonly btnRPRestoreToDefault: Locator;
  readonly dropRegion: Locator;
  readonly popupRegion: Locator;
  readonly dropCountry: Locator;
  readonly popupCountry: Locator;
  readonly dropRole: Locator;
  readonly btnSearch: Locator;
  readonly dropDepartment: Locator;
  readonly dropResourceName: Locator;
  readonly dropSponsorExperience: Locator;
  readonly dropEmployeeClass: Locator;
  readonly dropState: Locator;
  readonly txtTenure: Locator;
  //Experience Criteria
  readonly btnECUndo: Locator;
  readonly btnECRestoreToDefault: Locator;
  readonly dropTherapeuticArea: Locator;
  readonly dropTreatment: Locator;
  readonly dropStudyPhase: Locator;
  readonly dropStudyPopulation: Locator;
  readonly dropTechnical: Locator;
  readonly dropLanguage: Locator;
  //Request Details
  readonly tabRequestDetails: Locator;
  readonly tabCurrentAssignment: Locator;
  readonly tabAssignmentHistory: Locator;
  readonly btnAssignDemand: Locator;
  readonly btnAssignAvailability: Locator;
  readonly btnProfileReview: Locator;
  readonly btnRDUndo: Locator;
  readonly btnRDReset: Locator;
  readonly dropRequestDuration: Locator;
  readonly btnMarkUnfulfilled: Locator;
  readonly btnSave: Locator;
  readonly btnSubmit: Locator;
  readonly tableGeneral: Locator;
  readonly tableResources: Locator;


  constructor(page: Page) {
    this.page = page;
    //Resource Pool Filter
    this.btnRPUndo = page.locator('#rpf_reset > span.fa-undo-arrow').first();
    this.btnRPRestoreToDefault = page.locator('#rpf_reset > span.t-Button-label');
    this.dropRegion = page.locator('[id^="P"][id$="_RPF_REGION"]');
    this.popupRegion = page.locator('[id^="PopupLov_"][id$="_RPF_REGION_dlg"]');
    this.dropCountry = page.locator('[id^="P"][id$="_RPF_COUNTRY"]');
    this.popupCountry = page.locator('[id^="CS_"][id$="_RPF_COUNTRY"]');
    this.dropRole = page.locator('[id^="P"][id$="_RPF_ROLE"]');
    //this.btnSearch = page.locator('#B10923652483018534228', { hasText: 'SEARCH' });
    //this.btnSearch = page.locator('[id^="B1150140"]', { hasText: 'SEARCH' });
    this.btnSearch = page.locator('button > span', { hasText: 'SEARCH' });
    this.dropDepartment = page.locator('[id^="P"][id$="_RPF_DEPARTMENT"]');
    this.dropResourceName = page.locator('[id^="P"][id$="_RPF_RESOURCE"]');
    this.dropSponsorExperience = page.locator('[id^="P"][id$="_RPF_SPONSOR"]');
    this.dropEmployeeClass = page.locator('[id^="P"][id$="_RPF_EMP_CLASS"]');
    this.dropState = page.locator('[id^="P"][id$="_RPF_EMP_STATE"]');
    this.txtTenure = page.locator('[id^="P"][id$="_RPF_TENURE"]');
    //Experience Criteria
    this.btnECUndo = page.locator('#refresh > span.fa-undo-arrow').first();
    this.btnECRestoreToDefault = page.locator('#refresh > span.t-Button-label');
    this.dropTherapeuticArea = page.locator('[id^="P"][id$="_THERAPEUTIC_AREA_EC"]');
    this.dropTreatment = page.locator('[id^="P"][id$="_TREATMENT_EC"]');
    this.dropStudyPhase = page.locator('[id^="P"][id$="_STUDY_PHASE_EC"]');
    this.dropStudyPopulation = page.locator('[id^="P"][id$="_STUDY_POPULATION_EC"]');
    this.dropTechnical = page.locator('[id^="P"][id$="_TECHNICAL_EC"]');
    this.dropLanguage = page.locator('[id^="P"][id$="_LANGUAGE_EC"]');
    //Request Details
    this.tabRequestDetails = page.locator('#SR_req_details_tab_tab');
    this.tabCurrentAssignment = page.locator('#SR_cur_assignment_tab_tab');
    this.tabAssignmentHistory = page.locator('#SR_assignment_tab_tab');
    this.btnAssignDemand = page.locator('#ASSIGN_DEMAND_BTN');
    this.btnAssignAvailability = page.locator('#ASSIGN_AVAILABILITY_BTN');
    this.btnProfileReview = page.locator('#PROFILE_REVIEW_BTN');
    this.btnRDUndo = page.locator('[id^="B11"].t-Button.t-Button--icon.btn_style.reset_report_btn.t-Button--iconLeft > span.fa-undo-arrow').first();
    this.btnRDReset = page.locator('[id^="B11"].t-Button.t-Button--icon.btn_style.reset_report_btn.t-Button--iconLeft > span.t-Button-label');
    this.dropRequestDuration = page.locator('[id^="P"][id$="_YEAR"]');
    this.btnMarkUnfulfilled = page.locator('#MARK_UNFULFILLED_BTN');
    //this.btnSave = page.locator('#save');
    this.btnSave = page.locator('button.t-Button > span.t-Button-label', { hasText: 'SAVE' });
    this.btnSubmit = page.locator('#submit');
    this.tableGeneral = page.locator('[id^="resource_details_sum_above"] > div.a-GV-bdy >' +
      ' div.a-GV-w-scroll > table.a-GV-table');
    this.tableResources = page.locator('#resource_details_ig_grid_vc > div.a-GV-bdy >' +
      ' div.a-GV-w-scroll > table.a-GV-table');
  }
}