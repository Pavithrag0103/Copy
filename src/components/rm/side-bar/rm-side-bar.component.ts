import { Locator, Page } from '@playwright/test';

export class RmSideBarComponent {
  readonly page: Page;
  readonly navHome: Locator;
  readonly btnShowMenu: Locator;
  readonly btnHideMenu: Locator;
  readonly btnOverview: Locator;
  readonly btnHome: Locator;
  readonly lnkAllProjects: Locator;
  readonly lnkMyProjects: Locator;
  readonly lnkAssignment: Locator;
  readonly lnkMyRequests: Locator;
  readonly lnkHrActions: Locator;
  readonly lnkMyPools: Locator;
  readonly btnDemand: Locator;
  readonly btnRequests: Locator;
  readonly lnkPreAwardRequests: Locator;
  readonly lnkPostAwardRequests: Locator;
  readonly btnDirectAssign: Locator;
  readonly lnkAssignments: Locator;

  constructor(page: Page) {
    // RM Page - Side bar elements
    this.page = page;

    // Hide/Show buttons for the menu
    this.btnShowMenu = page.locator('img.expand');
    this.btnHideMenu = page.locator('img.collapse');
    //this.btnHideMenu = page.locator('.collapse[style*="display: block"]');

    // Home Sidebar Navigation
    this.navHome = page.locator('nav#sidebar');
    // Main Menu: OVERVIEW
    this.btnOverview = page.locator('.t-LinksList-label:has-text("OVERVIEW")');

    // Main Menu: HOME
    this.btnHome = page.locator('.t-LinksList-label:has-text("HOME")');
    // Submenu: All Projects
    this.lnkAllProjects = page.locator('.t-LinksList-label:has-text("All Projects")');
    // Submenu: My Projects
    this.lnkMyProjects = page.locator('.t-LinksList-label:has-text("My Projects")');
    // Submenu: Assignment
    this.lnkAssignment = page.locator('.t-LinksList-label:has-text("Assignment")');
    // Submenu: My Requests
    this.lnkMyRequests = page.locator('.t-LinksList-label:has-text("My Requests")');
    // Submenu: HR Actions
    this.lnkHrActions = page.locator('.t-LinksList-label:has-text("HR Actions")');
    // Submenu: My Pools
    this.lnkMyPools = page.locator('.t-LinksList-label:has-text("My Pools")');

    // Main Menu: DEMAND
    this.btnDemand = page.locator('.t-LinksList-label:has-text("DEMAND")');

    // Main Menu: REQUESTS
    //this.btnRequests = page.locator('.t-LinksList-label', {hasText: "REQUESTS"});{ name: 'REQUESTS', exact: true }
    this.btnRequests = page.getByRole('link', { name: 'REQUESTS', exact: true });
    // Main Menu: Pre-Award Requests
    this.lnkPreAwardRequests = page.locator('.t-LinksList-label:has-text("Pre-Award Requests")');
    // Main Menu: Post-Award Requests
    this.lnkPostAwardRequests = page.locator('.t-LinksList-label:has-text("Post-Award Requests")');

    // Main Menu: DIRECT ASSIGN
    this.btnDirectAssign = page.locator('.t-LinksList-label:has-text("DIRECT ASSIGN")');
    // Main Menu: Assignments
    this.lnkAssignments = page.locator('.t-LinksList-label:has-text("Assignments")');
  }
}
