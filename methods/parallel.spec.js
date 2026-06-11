const{test, expect} = require('@playwright/test');


test.describe.configure({mode: 'parallel'});
test('Parallel Execution - Test-1', async() => {
    console.log('1 Test started');
});

test('Parallel Execution - Test-2', async() => {
    console.log('2 Test started');
});

test('Parallel Execution - Test-3', async() => {
    console.log('3 Test started');
});