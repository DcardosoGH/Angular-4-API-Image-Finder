import { ImageFinderPage } from './app.po';

describe('image-finder App', () => {
  let page: ImageFinderPage;

  beforeEach(() => {
    page = new ImageFinderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
