/**
 * Delay the trigger of a callback until this function is not called for a given time
 *
 * @param callback
 * @param time
 */
export const waitForIt = (callback, time) => {
    if ('undefined' === typeof time) {
        time = 500;
    }
    clearTimeout(this.timeout);
    this.timeout = setTimeout(callback, time);
};
