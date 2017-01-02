import { MirrorMagicPage } from './app.po';

describe('mirror-magic App', function() {
  let page: MirrorMagicPage;

  beforeEach(() => {
    page = new MirrorMagicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
