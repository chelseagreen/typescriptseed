import {testSetup} from "../src/test";

describe('test', () => {
    it('meow should be true', () => {
        expect(testSetup.meow).toBe(true);
    });
});