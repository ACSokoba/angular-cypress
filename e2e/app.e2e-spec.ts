import { AngularCypressPage } from './app.po';

describe('angular-cypress App', function() {
  let page: AngularCypressPage;

  beforeEach(() => {
    page = new AngularCypressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
