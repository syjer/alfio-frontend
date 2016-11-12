import { AlfioFrontendPage } from './app.po';

describe('alfio-frontend App', function() {
  let page: AlfioFrontendPage;

  beforeEach(() => {
    page = new AlfioFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
