import { Locator, Page } from '@playwright/test';

export class RmDemandManagementComponent {
  readonly page: Page;
  readonly tabOverview: Locator;
  readonly tabNA: Locator;
  readonly tabJapan: Locator;
  readonly tabAPAC: Locator;
  readonly tabEMEA: Locator;
  readonly tabLATAM: Locator;
  readonly tabAll: Locator;
  readonly imageSearch: Locator;
  readonly txtSearch: Locator;
  readonly btnSearch: Locator;
  readonly dropActions: Locator;
  readonly dropProjectDuration: Locator;
  readonly tableOverviewDemand: Locator;
  readonly tableTabOverviewDemand: Locator;
  readonly tableTabDemand: Locator;
  readonly imageTabTopSearch: Locator;
  readonly txtTabTopSearch: Locator;
  readonly dropTabTopActions: Locator;
  readonly btnTabTopSearch: Locator;
  readonly dropTabTopProjectDuration: Locator;
  readonly imageTabSearch: Locator;
  readonly txtTabSearch: Locator;
  readonly dropTabActions: Locator;
  readonly btnTabSearch: Locator;
  readonly btnTabUndo: Locator;
  readonly btnTabReset: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tabOverview = page.locator('#SR_overview_tab');
    this.tabNA = page.locator('#SR_naTab_tab');
    this.tabJapan = page.locator('#SR_japanTab_tab');
    this.tabAPAC = page.locator('#SR_apacTab_tab');
    this.tabEMEA = page.locator('#SR_emeaTab_tab');
    this.tabLATAM = page.locator('#SR_latamTab_tab');
    this.tabAll = page.locator('[id^="SR_"][id$="Tab_tab"]');

    this.imageSearch = page.locator('[id^="overview_"][id$="_column_filter_button"]');
    this.txtSearch = page.locator('[id^="overview_"][id$="_search_field"]');
    this.btnSearch = page.getByRole('button', { name: 'Go' });
    //locator('div.a-Toolbar-group--search > button.a-Button > span', { hasText: 'Go' });
    this.dropActions = page.locator('[id^="overview_"][id$="_actions_button"]');
    this.dropProjectDuration = page.locator('#P19_YEAR');

    this.tableOverviewDemand = page.locator('#overview_new_ig_grid_vc > div.a-GV-bdy >' +
      ' div > table.a-GV-table');
    this.tableTabOverviewDemand = page.locator('[id$="_ig_ig_grid_vc"] > div.a-GV-bdy >' +
      ' div > table.a-GV-table');
    this.tableTabDemand = page.locator('[id^="below_grid_"][id$="_ig_grid_vc"] > div.a-GV-bdy >' +
      ' div > table.a-GV-table');

    this.imageTabTopSearch = page.locator('[id$="_ig_ig_toolbar_column_filter_button"]');
    this.txtTabTopSearch = page.locator('[id$="_ig_ig_toolbar_search_field"]');
    this.btnTabTopSearch = page.locator('[id$="_ig_ig_toolbar"]').getByText('Go');
    this.dropTabTopActions = page.locator('[id$="_ig_ig_toolbar_actions_button"]');
    this.dropTabTopProjectDuration = page.locator('select[id*="P19_YEAR_"]');

    this.imageTabSearch = page.locator('[id^="below_grid_"][id$="_ig_toolbar_column_filter_button"]');
    this.txtTabSearch = page.locator('[id^="below_grid_"][id$="_ig_toolbar_search_field"]');
    this.btnTabSearch = page.locator('[id^="below_grid_"][id$="_ig_toolbar"]').getByText('Go');
    // locator('div.a-Toolbar-group--search > button.a-Button > span', { hasText: 'Go' });
    this.dropTabActions = page.locator('[id^="below_grid_"][id$="_ig_toolbar_actions_button"]');
    this.btnTabUndo = page.locator('button[id^="undo_"].t-Button--iconLeft > span.fa-undo-arrow');
    this.btnTabReset = page.locator('button[id^="undo_"].t-Button--iconLeft > span.t-Button-label');
  }
}