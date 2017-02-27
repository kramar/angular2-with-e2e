import {browser, element, by} from 'protractor';

describe('Sum component', function () {

  let firstInput: any;
  let secondInput: any;
  let sumButton: any;
  let summary: any;

  beforeEach(function () {
    browser.get('');
  });

  it('should show summary after clicking on "Summary" button', function () {

    firstInput = element(by.id('firstValue'));
    secondInput = element(by.id('secondValue'));
    sumButton = element(by.id('sumButton'));
    summary = element(by.id('summary'));

    firstInput.sendKeys(5);
    secondInput.sendKeys(7);

    sumButton.click();

    expect(summary.getText()).toEqual('12');
  });

});
