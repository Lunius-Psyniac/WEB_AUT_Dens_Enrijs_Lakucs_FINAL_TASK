import { PracticePage } from "../pageObjects/PracticePage";

describe("Final Task Scenario", () => {
  context("Automation Practice Form", () => {
    beforeEach(() => {
      PracticePage.visit();
    });

    it("Form", () => {
      // Set name field value to 'Dens'
      PracticePage.nameTextField.type('Dens');
      // Set surname field value to 'Lakucs'
      PracticePage.surnameTextField.type('Lakucs');
      // Set email field value to 'densenrijs.lakucs@va.lv'
      PracticePage.emailTextField.type('densenrijs.lakucs@va.lv');
      // Select gender 'Male'
      PracticePage.genderButtons.contains('Male').click();
      // Set phone number field value to '1234567890'
      PracticePage.phoneTextField.type('1234567890');
      // Click calendar widget button
      PracticePage.calendarWidgetButton.click();
      // Select month 'February'
      PracticePage.birthMonthDropdown.select('February');
      // Select year '1930'
      PracticePage.birthYearDropdown.select('1930');
      // Select date '28'
      PracticePage.birthDateCalendar.get('.react-datepicker__day').not('.react-datepicker__day--outside-month').contains('28').click();
      // Set subjects field value to 'Economics'
      PracticePage.subjectsTextField.type('Economics{enter}');
      // Select hobby 'Music'
      PracticePage.hobbiesButtons.contains('Music').click();
      // Upload image 'merry_christmas.png'
      PracticePage.fileUploadForm.selectFile('files/merry_christmas.png')
      // Select state 'NCR'
      PracticePage.stateDropdown.click().type('NCR{enter}');
      // Select city 'Delhi'
      PracticePage.cityDropdown.click({ multiple: true }).type('Delhi{enter}');
      // Click submit button
      PracticePage.submitButton.click();
      // Validate name and surname
      PracticePage.validateTable.should('contain.text','Dens Lakucs');
      // Validate email
      PracticePage.validateTable.should('contain.text','densenrijs.lakucs@va.lv');
      // Validate gender
      PracticePage.validateTable.should('contain.text','Male');
      // Validate phone number
      PracticePage.validateTable.should('contain.text','1234567890');
      // Validate date of birth
      PracticePage.validateTable.should('contain.text','28 February,1930');
      // Validate subjects
      PracticePage.validateTable.should('contain.text','Economics');
      // Validate hobbies
      PracticePage.validateTable.should('contain.text','Music');
      // Validate uploaded image
      PracticePage.validateTable.should('contain.text','merry_christmas.png');
      // Validate state and city
      PracticePage.validateTable.should('contain.text','NCR Delhi');
    });
  });
});