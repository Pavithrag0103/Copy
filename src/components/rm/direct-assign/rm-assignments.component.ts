import { Locator, Page } from '@playwright/test';
import {FrameLocator} from 'playwright';

export class RmAssignmentsComponent {
  readonly page: Page;
  //Assignment
  readonly tabResource: Locator;
  readonly tabProject: Locator;
  //Assignment - Resource tab
  readonly imageRSearch: Locator;
  readonly txtRSearch: Locator;
  readonly btnRSearch: Locator;
  readonly dropRActions: Locator;
  readonly btnRUndo: Locator;
  readonly btnRReset: Locator;
  readonly btnAddResourceToView: Locator;
  readonly dropRPeriod: Locator;
  readonly dropRAssignedCapacity: Locator;
  readonly tableRAssigment: Locator;
  //Assignment - Resource - Select Resource pop-up
  readonly txtSRSearchPool: Locator;
  readonly txtSRSelectResource: Locator;
  readonly containerSRAvailableResources: Locator;
  readonly containerSRAddToGrid: Locator;
  readonly btnSRReset: Locator;
  readonly btnSRMoveAll: Locator;
  readonly btnSRMove: Locator;
  readonly btnSRRemove: Locator;
  readonly btnSRRemoveAll: Locator;
  readonly btnSRTop: Locator;
  readonly btnSRUp: Locator;
  readonly btnSRDown: Locator;
  readonly btnSRBottom: Locator;
  readonly btnSRCancel: Locator;
  readonly btnSRConfirm: Locator;
  readonly listSROptions: Locator;
  //Assignment - Project tab
  readonly imagePSearch: Locator;
  readonly txtPSearch: Locator;
  readonly btnPSearch: Locator;
  readonly dropPActions: Locator;
  readonly btnPUndo: Locator;
  readonly btnPReset: Locator;
  readonly btnAddProjectToView: Locator;
  readonly dropPPeriod: Locator;
  readonly dropPAssignedCapacity: Locator;
  readonly tablePAssigment: Locator;
  //Assignment Details
  readonly tableAssignmentDetails: Locator;
  readonly tableProjectAssignmentDetails: Locator;
  //Assign Resource Dialog
  readonly iframeAssignResource: FrameLocator;
  readonly btnADClose: Locator;
  readonly txtADResource: Locator;
  readonly selectADPCode: Locator;
  readonly listADPCode: Locator;
  readonly txtADAssignmentType: Locator;
  readonly selectADProjectCode: Locator;
  readonly listADProjectCode: Locator;
  readonly switchADLead: Locator;
  readonly txtADNotes: Locator;
  readonly selectADAssignedCountry: Locator;
  readonly listADAssignedCountry: Locator;
  readonly txtADAssignmentStartDate: Locator;
  readonly selectorADAssignmentStartDate: Locator;
  readonly txtADAssignmentEndDate: Locator;
  readonly selectorADAssignmentEndDate: Locator;
  readonly txtADAssignmentMonthlyHours: Locator;
  readonly btnADCancel: Locator;
  readonly btnADSaveAndNew: Locator;
  readonly btnADSave: Locator;
  //Unassign Resource Dialog
  readonly iframeUnassignResource: FrameLocator;
  readonly btnUDClose: Locator;
  readonly txtUDResource: Locator;
  readonly txtUDPCode: Locator;
  readonly radioUDRemoveAll: Locator;
  readonly radioUDRemovePeriod: Locator;
  readonly txtUDEffectiveDate: Locator;
  readonly selectorUDEffectiveDate: Locator;
  readonly txtUDFrom: Locator;
  readonly selectorUDFrom: Locator;
  readonly selectUDTurnoverReason: Locator;
  readonly listUDTurnoverReason: Locator;
  readonly txtUDTo: Locator;
  readonly selectorUDTo: Locator;
  readonly btnUDCancel: Locator;
  readonly btnUDUnassign: Locator;
  //Replace Resource Dialog
  readonly iframeReplaceResource: FrameLocator;
  readonly btnRDClose: Locator;
  readonly txtRDPCode: Locator;
  readonly txtRDOutgoingResource: Locator;
  readonly txtRDIncomingResource: Locator;
  readonly selectRDTurnoverReason: Locator;
  readonly listRDTurnoverReason: Locator;
  readonly txtRDEffectiveDate: Locator;
  readonly selectorRDEffectiveDate: Locator;
  readonly btnRDCancel: Locator;
  readonly btnRDReplaceResource: Locator;
  //Select Project Dialog
  readonly btnSPClose: Locator;
  readonly txtSPPCode: Locator;
  readonly selectSPSponsor: Locator;
  readonly listSPSponsor: Locator;
  readonly containerSPAvailableProject: Locator;
  readonly containerSPAddToGrid: Locator;
  readonly btnSPReset: Locator;
  readonly btnSPMoveAll: Locator;
  readonly btnSPMove: Locator;
  readonly btnSPRemove: Locator;
  readonly btnSPRemoveAll: Locator;
  readonly btnSPTop: Locator;
  readonly btnSPUp: Locator;
  readonly btnSPDown: Locator;
  readonly btnSPBottom: Locator;
  readonly btnSPCancel: Locator;
  readonly btnSPConfirm: Locator;

  constructor(page: Page) {
    this.page = page;
    //Assignment
    this.tabResource = page.locator('#SR_resourceTab_tab');
    this.tabProject = page.locator('#SR_projectTab_tab');
    //Assignment - Resource tab
    this.imageRSearch = page.locator('#Resource_grid_ig_toolbar_column_filter_button');
    this.txtRSearch = page.locator('#Resource_grid_ig_toolbar_search_field');
    this.btnRSearch = page.locator('#Resource_grid_ig_toolbar > div.a-Toolbar-groupContainer.a-Toolbar-groupContainer--start > div.a-Toolbar-group.a-Toolbar-group--search.a-Toolbar-group--together > button:nth-child(3)');
    this.dropRActions = page.locator('#Resource_grid_ig_toolbar_actions_button');
    this.btnRUndo = page.locator('#reset > span.t-Icon.t-Icon--left.fa.fa-undo-arrow');
    this.btnRReset = page.locator('#reset > span.t-Button-label');
    this.btnAddResourceToView = page.locator('#Addresource');
    this.dropRPeriod = page.locator('#P118_YEAR');
    this.dropRAssignedCapacity = page.locator('#P118_ASSIGNED_CAPACITY');
    this.tableRAssigment = page.locator('#Resource_grid_ig_grid_vc > div.a-GV-bdy > div.a-GV-w-scroll > table.a-GV-table');
    //Assignment - Resource - Select Resource pop-up
    this.txtSRSearchPool = page.locator('#P118_SEARCH_POOL > div > input');
    this.txtSRSelectResource = page.locator('#P118_SEARCH_RESOURCE > div > input');
    this.containerSRAvailableResources = page.locator('#P118_AVAILABLE_RESOURCES_LEFT');
    this.containerSRAddToGrid = page.locator('#P118_AVAILABLE_RESOURCES_RIGHT');
    this.btnSRReset = page.locator('#P118_AVAILABLE_RESOURCES_RESET');
    this.btnSRMoveAll = page.locator('#P118_AVAILABLE_RESOURCES_MOVE_ALL');
    this.btnSRMove = page.locator('#P118_AVAILABLE_RESOURCES_MOVE');
    this.btnSRRemove = page.locator('#P118_AVAILABLE_RESOURCES_REMOVE');
    this.btnSRRemoveAll = page.locator('#P118_AVAILABLE_RESOURCES_REMOVE_ALL');
    this.btnSRTop = page.locator('#P118_AVAILABLE_RESOURCES_TOP');
    this.btnSRUp = page.locator('#P118_AVAILABLE_RESOURCES_UP');
    this.btnSRDown = page.locator('#P118_AVAILABLE_RESOURCES_DOWN');
    this.btnSRBottom = page.locator('#P118_AVAILABLE_RESOURCES_BOTTOM');
    this.btnSRCancel = page.locator('#Cancel');
    this.btnSRConfirm = page.locator('#Confirm');
    this.listSROptions = page.locator('#CS_118_P118_SEARCH_POOL,#CS_118_P118_SEARCH_RESOURCE');
    //Assignment - Project tab
    this.imagePSearch = page.locator('#project_grid_ig_toolbar_column_filter_button');
    this.txtPSearch = page.locator('#project_grid_ig_toolbar_search_field');
    this.btnPSearch = page.locator('#project_grid_ig_toolbar > div.a-Toolbar-groupContainer.a-Toolbar-groupContainer--start > div.a-Toolbar-group.a-Toolbar-group--search.a-Toolbar-group--together > button:nth-child(3)');
    this.dropPActions = page.locator('#project_grid_ig_toolbar_actions_button');
    this.btnPUndo = page.locator('#reset_p > span.t-Icon.t-Icon--left.fa.fa-undo-arrow');
    this.btnPReset = page.locator('#reset_p > span.t-Button-label');
    this.btnAddProjectToView = page.locator('#Addproject');
    this.dropPPeriod = page.locator('#P118_YEAR_PROJECT');
    this.dropPAssignedCapacity = page.locator('#P118_ASSIGNED_CAPACITY_PROJECT');
    this.tablePAssigment = page.locator('#project_grid_ig_grid_vc > div.a-GV-bdy > div.a-GV-w-scroll > table.a-GV-table');
    //Request Details
    this.tableAssignmentDetails = page.locator('#assign_ig_grid_vc > div.a-GV-bdy > div.a-GV-w-scroll > table');
    this.tableProjectAssignmentDetails = page.locator('#assign_project_grid_ig_grid_vc > div.a-GV-bdy > div.a-GV-w-scroll > table');
    //Assign Resource Dialog
    this.iframeAssignResource = this.page.frameLocator('#apex_dialog_1 > iframe');
    this.btnADClose = this.page.locator('#t_PageBody >' +
      ' div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-dialog--apex.t-Dialog-page--standard.ui-draggable > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > button > span')
    this.txtADResource = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_RESOURCE"]');
    this.selectADPCode = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_PCODE"]');
    this.listADPCode = this.iframeAssignResource.locator('[id^="PopupLov"][id$="_ASSIGN_PCODE_dlg"] > div.a-PopupLOV-results.a-TMV.js-no-select > div > div.a-TMV-w-scroll > ul');
    this.txtADAssignmentType = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_TYPE"]');
    this.selectADProjectCode = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_ROLE"]');
    this.listADProjectCode = this.iframeAssignResource.locator('[id^="PopupLov"][id$="_ASSIGN_ROLE_dlg"] > div.a-PopupLOV-results.a-TMV.js-no-select > div > div.a-TMV-w-scroll > ul');
    this.switchADLead = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_LEAD_CONTAINER"] > div.t-Form-inputContainer > div > span');
    this.txtADNotes = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_NOTES"]');
    this.selectADAssignedCountry = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGNED_COUNTRY"]');
    this.listADAssignedCountry = this.iframeAssignResource.locator('[id^="PopupLov_"][id$="_ASSIGNED_COUNTRY_dlg"] > div.a-PopupLOV-results.a-TMV.js-no-select > div > div.a-TMV-w-scroll > ul');
    this.txtADAssignmentStartDate = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_START_input"]');
    this.selectorADAssignmentStartDate = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_START"] > button > span');
    this.txtADAssignmentEndDate = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_END_input"]');
    this.selectorADAssignmentEndDate = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_END"] > button > span');
    this.txtADAssignmentMonthlyHours = this.iframeAssignResource.locator('[id^="P"][id$="_ASSIGN_HOURS"]');
    this.btnADCancel = this.iframeAssignResource.locator('#Cancel');
    this.btnADSaveAndNew = this.iframeAssignResource.locator('#SaveAndNew');
    this.btnADSave = this.iframeAssignResource.locator('#Save');
    //Unassign Resource Dialog
    this.iframeUnassignResource = this.page.frameLocator('#apex_dialog_2 > iframe');
    this.btnUDClose = this.iframeAssignResource.locator('#t_PageBody >' +
      ' div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-dialog--apex.t-Dialog-page--standard.ui-draggable > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > button')
    this.txtUDResource = this.iframeUnassignResource.locator('#P24_RESOURCE');
    this.txtUDPCode = this.iframeUnassignResource.locator('#P24_PCODE');
    this.radioUDRemoveAll = this.iframeUnassignResource.locator('#P24_SELECT1_0');
    this.radioUDRemovePeriod = this.iframeUnassignResource.locator('#P24_SELECT2_0');
    this.txtUDEffectiveDate = this.iframeUnassignResource.locator('#P24_EFFECTIVE_DATE_input');
    this.selectorUDEffectiveDate = this.iframeUnassignResource.locator('#P24_EFFECTIVE_DATE > button > span');
    this.txtUDFrom = this.iframeUnassignResource.locator('#P24_FROM_input');
    this.selectorUDFrom = this.iframeUnassignResource.locator('#P24_FROM > button > span');
    this.selectUDTurnoverReason = this.iframeUnassignResource.locator('#P24_TURNOVER_REASON');
    this.listUDTurnoverReason = this.iframeUnassignResource.locator('#PopupLov_24_P24_TURNOVER_REASON_dlg >' +
      ' div.a-PopupLOV-results.a-TMV.js-no-select > div > div.a-TMV-w-scroll > ul');
    this.txtUDTo = this.iframeUnassignResource.locator('#P24_TO_input');
    this.selectorUDTo = this.iframeUnassignResource.locator('#P24_TO > button > span');
    this.btnUDCancel = this.iframeUnassignResource.locator('#Cancel');
    this.btnUDUnassign = this.iframeUnassignResource.locator('#unassign');
    //Replace Resource Dialog
    this.iframeReplaceResource = this.page.frameLocator('#apex_dialog_3 > iframe');
    this.btnRDClose = this.iframeAssignResource.locator('#t_PageBody >' +
      ' div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-dialog--apex.t-Dialog-page--standard.ui-draggable > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > button')
    this.txtRDPCode = this.iframeReplaceResource.locator('#P147_PCODE');
    this.txtRDOutgoingResource = this.iframeReplaceResource.locator('#P147_OUTGOING_RESOURCE');
    this.txtRDIncomingResource = this.iframeReplaceResource.locator('#P147_INCOMING_RESOURCE');
    this.selectRDTurnoverReason = this.iframeReplaceResource.locator('#P147_TURNOVER_REASON');
    this.listRDTurnoverReason = this.iframeReplaceResource.locator('#PopupLov_147_P147_TURNOVER_REASON_dlg >' +
      ' div.a-PopupLOV-results.a-TMV.js-no-select > div > div.a-TMV-w-scroll > ul');
    this.txtRDEffectiveDate = this.iframeReplaceResource.locator('#P147_EFFECTIVE_DATE_input');
    this.selectorRDEffectiveDate = this.iframeReplaceResource.locator('#P147_EFFECTIVE_DATE > button > span');
    this.btnRDCancel = this.iframeReplaceResource.locator('#Cancel');
    this.btnRDReplaceResource = this.iframeReplaceResource.locator('#Replace');
    //Select Project Dialog
    this.btnSPClose = this.page.locator('#wwvFlowForm > div:nth-child(16) > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > button > span');
    this.txtSPPCode = this.page.locator('#P118_SEARCH_POOL_PROJECT');
    this.selectSPSponsor = this.page.locator('#P118_SEARCH_RESOURCE_PROJECT > div > input');
    this.listSPSponsor = this.page.locator('#CS_118_P118_SEARCH_RESOURCE_PROJECT > ul');
    this.containerSPAvailableProject = this.page.locator('#P118_AVAILABLE_PROJECT_LEFT');
    this.containerSPAddToGrid = this.page.locator('#P118_AVAILABLE_PROJECT_RIGHT');
    this.btnSPReset = this.page.locator('#P118_AVAILABLE_PROJECT_RESET');
    this.btnSPMoveAll = this.page.locator('#P118_AVAILABLE_PROJECT_MOVE_ALL');
    this.btnSPMove = this.page.locator('#P118_AVAILABLE_PROJECT_MOVE');
    this.btnSPRemove = this.page.locator('#P118_AVAILABLE_PROJECT_REMOVE');
    this.btnSPRemoveAll = this.page.locator('#P118_AVAILABLE_PROJECT_REMOVE_ALL');
    this.btnSPTop = this.page.locator('#P118_AVAILABLE_PROJECT_TOP');
    this.btnSPUp = this.page.locator('#P118_AVAILABLE_PROJECT_UP');
    this.btnSPDown = this.page.locator('#P118_AVAILABLE_PROJECT_DOWN');
    this.btnSPBottom = this.page.locator('#P118_AVAILABLE_PROJECT_BOTTOM');
    this.btnSPCancel = this.page.locator('#Cancel_project');
    this.btnSPConfirm = this.page.locator('#Confirm_project');
  }
}