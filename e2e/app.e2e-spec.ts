import { PruebairontecPage } from './app.po';

describe('pruebairontec App', () => {
  let page: PruebairontecPage;

  beforeEach(() => {
    page = new PruebairontecPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
