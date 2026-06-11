const { test, expect } = require('@playwright/test');


test('@Login Parallel Execution - Test-1', async () => {
    console.log('1 Test started');
});

test('@Login Parallel Execution - Test-2', async () => {
    console.log('2 Test started');
});

test('@Order Parallel Execution - Test-3', async () => {
    console.log('3 Test started');
});

test('example test @Order', async ({}) => {
   console.log('4 Test started');
});