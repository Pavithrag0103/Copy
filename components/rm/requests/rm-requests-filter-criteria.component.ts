import { Locator, Page } from '@playwright/test';

//The Commented locators are placeholder for elements to be implemented on regression
export class RmRequestsFilterCriteriaComponent {
  readonly page: Page;
  //Search text
  readonly txtSearch: Locator;
  //readonly listSearch: Locator;
  //Project Role
  readonly btnProjectRole: Locator;
  //readonly txtProjectRole: Locator;
  //readonly lstProjectRole: Locator;
  //Region
  readonly btnRegion: Locator;
  //readonly txtRegion: Locator;
  //readonly lstRegion: Locator;
  //Country
  readonly btnCountry: Locator;
  //readonly txtCountry: Locator;
  //readonly lstCountry: Locator;
  //P-Code
  readonly btnPCode: Locator;
  //readonly txtPCode: Locator;
  //readonly lstPCode: Locator;
  //Sponsor
  readonly btnSponsor: Locator;
  //readonly txtSponsor: Locator;
  //readonly lstSponsor: Locator;
  //Other controls
  readonly switchAward: Locator;
  readonly btnSave: Locator;
  //Request Summary Report
  readonly tableReport: Locator;


  constructor(page: Page) {
    this.page = page;
    //Search text
    this.txtSearch = page.locator('input[id$="_fr_search"]');
    //this.listSearch = page.locator('');
    //Project Role
    this.btnProjectRole = page.locator('div.a-FS-suggestionChips > ul.a-Chips > li.a-Chip', { hasText: 'Project Role' });
    //this.txtProjectRole = page.locator('');
    //this.lstProjectRole = page.locator('');
    //Region
    this.btnRegion = page.locator('div.a-FS-suggestionChips > ul.a-Chips > li.a-Chip', { hasText: 'Region' });
    //this.txtRegion = page.locator('');
    //this.lstRegion = page.locator('');
    //Country
    this.btnCountry = page.locator('div.a-FS-suggestionChips > ul.a-Chips > li.a-Chip', { hasText: 'Country' });
    //this.txtCountry = page.locator('');
    //this.lstCountry = page.locator('');
    //P-Code
    this.btnPCode = page.locator('div.a-FS-suggestionChips > ul.a-Chips > li.a-Chip', { hasText: 'P-Code' });
    //this.txtPCode = page.locator('');
    //this.lstPCode = page.locator('');
    //Sponsor
    this.btnSponsor = page.locator('div.a-FS-suggestionChips > ul.a-Chips > li.a-Chip', { hasText: 'Sponsor' });
    //this.txtSponsor = page.locator('');
    //this.lstSponsor = page.locator('');
    //Other controls
    this.switchAward = page.locator('span.a-Switch-toggle');
    this.btnSave = page.locator('#Save');
    //Request Summary Report
    this.tableReport = page.locator('#Request_Report_Grid_ig_grid_vc > div.a-GV-bdy >' +
      ' div.a-GV-w-scroll > table.a-GV-table');
  }
}