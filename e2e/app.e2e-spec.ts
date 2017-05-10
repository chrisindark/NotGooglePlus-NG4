import { NotgoogleplusPage } from './app.po';

describe('Notgoogleplus App', () => {
  let page: NotgoogleplusPage;

  beforeEach(() => {
    page = new NotgoogleplusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
