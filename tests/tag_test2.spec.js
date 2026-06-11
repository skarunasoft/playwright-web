const { test, expect } = require('@playwright/test');


test.describe.configure({ mode: 'parallel' });
test('@uat1 First tests', () => {
    console.log('First test');
});


test('@reg Second tests', () => {
    console.log('Second test');
});


test('Third tests @uat', () => {
    console.log('Third test');
});
