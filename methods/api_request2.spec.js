const { test, expect, request } = require('@playwright/test');
const loginPayload = {username:"admin", password:"password123"};

let responseData;

test.beforeAll( async () =>{

   const apiContext = await request.newContext();
   const response = await apiContext.post('http://localhost:8000/api/login',    

    {
        data: loginPayload
    }

   );
  
   responseData = await response.json();
   console.log("Login Response:", response.status(), responseData);
 expect(response.status()).toBe(200);
   expect(response.ok()).toBeTruthy();
}
);



test('', async ({page}) =>{

await page.addInitScript(value =>{

      window.localStorage.setItem('nova_user', value);
}, responseData);




await page.goto('http://localhost:8000/');
//await page.locator('#email').fill('admin@shop.com');
//await page.locator('#password').fill('admin123');
//await page.getByRole('button', { name: 'Sign In' }).click();
await page.getByRole('button', { name: 'Fashion' }).click();
}
);

