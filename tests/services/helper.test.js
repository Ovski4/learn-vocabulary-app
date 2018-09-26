import { waitForIt } from '../../src/services/helpers';

describe('Helper service', () => {

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    it('Should call the function only once', async () => {
        let counter = 0;

        // Call the wait for it function 3 times, with the default timeout of 500ms
        for (let i = 0; i < 3; i++) {
            waitForIt(() => {
                counter++;
            });
        }

        // Wait enough to be sure the waitForIt function ran
        await sleep(550)
        expect(counter).toEqual(1);
    });

    it('Should call the function twice', async () => {
        let counter = 0;

        // Call the wait for it function 5 times with a timeout of 300ms
        // The function should be triggered 2 times: for i = 2 and at the end of the loop
        for (let i = 0; i < 5; i++) {
            if (i === 2) {
                await sleep(350);
            }

            waitForIt(() => {
                counter++;
            }, 300);
        }

        // Wait enough to be sure the waitForIt function ran
        await sleep(350)
        expect(counter).toEqual(2);
    });
});
