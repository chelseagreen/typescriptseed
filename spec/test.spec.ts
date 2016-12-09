import {TestSetup} from "../src/test";

describe('test', () => {
    it('meow should be true', () => {
        expect(TestSetup.meow).toBe(true);
    });
});