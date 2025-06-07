import { PipfilPipe } from "./custom-filter-pipe.pipe";


describe('CustomFilterPipePipe', () => {
  it('create an instance', () => {
    const pipe = new PipfilPipe();
    expect(pipe).toBeTruthy();
  });
});
