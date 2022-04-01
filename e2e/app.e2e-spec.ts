import { UdemyprojectPage } from './app.po';

describe('udemyproject App', () => {
  let page: UdemyprojectPage;

  beforeEach(() => {
    page = new UdemyprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
