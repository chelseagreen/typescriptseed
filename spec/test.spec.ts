import {testSetup} from "../src/test";

describe('test', () => {
    it('true should be true', () => {
        expect(testSetup.meow).toBe(true);
    });
});