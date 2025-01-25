import {test, expect} from "../fixture";
import Adder from '../../my-react-app/src/lib/adder';
import Counter from '../../my-react-app/src/lib/counter';
import RandomNumber from '../components/button';


test.describe("Running component tests",  () => {

  test("counter should increment", async ({mount, page}) => {
    const c = await mount(<Counter />);
    await expect(page.getByText('0')).toBeVisible();

    await page.locator('button').first().click();
    await expect(page.getByText('1')).toBeVisible();

  })

  test("counter should decrement", async ({mount, page}) => {
    const c = await mount(<Counter />);
    await expect(page.getByText('0')).toBeVisible();

    await page.locator('button').last().click();
    await expect(page.getByText('-1')).toBeVisible();

  })

  test("click even ton button should be handled", async ({page, mount}) => {
    const button = await mount(<RandomNumber />);

    await button.locator('button').click();

    await expect(button).toBeVisible();
    
  })

})