import { BasePage } from "../pageObjects/BasePage";

export class PracticePage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }
   static get nameTextField() {
    return cy.get('[id="firstName"]');
   }

   static get surnameTextField() {
    return cy.get('[id="lastName"]');
   }

   static get emailTextField() {
    return cy.get('[id="userEmail"]');
   }
   
   static get genderButtons() {
    return cy.get('[class="col-md-9 col-sm-12"]');
   }

   static get phoneTextField() {
    return cy.get('[id="userNumber"]');
   }

   static get calendarWidgetButton() {
    return cy.get('[id="dateOfBirthInput"]');
   }

   static get birthMonthDropdown() {
    return cy.get('[class="react-datepicker__month-select"]');
   }

   static get birthYearDropdown() {
    return cy.get('[class="react-datepicker__year-select"]');
   }

   static get birthDateCalendar() {
    return cy.get('[class="react-datepicker__month"]');
   }

   static get subjectsTextField() {
    return cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]');
   }

   static get hobbiesButtons() {
    return cy.get('[class="col-md-9 col-sm-12"]');
   }

   static get fileUploadForm() {
    return cy.get('[id="uploadPicture"]');
   }

   static get stateDropdown() {
    return cy.get('[class=" css-yk16xz-control"]');
   }

   static get cityDropdown() {
    return cy.get('[class=" css-yk16xz-control"]');
   }

   static get submitButton() {
    return cy.get('[id="submit"]');
   }

   static get validateTable() {
    return cy.get('[class="table table-dark table-striped table-bordered table-hover"]');
   }
}