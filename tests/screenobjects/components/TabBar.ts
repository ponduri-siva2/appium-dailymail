export default class TabBar {
    static async bottomMenu () {
        return $('//android.view.ViewGroup[@resource-id="bottom-menu-bar"]');
    }

    static async waitForTabBarShown ():Promise<boolean|void> {
        return $('//android.view.ViewGroup[@resource-id="bottom-menu-bar"]').waitForDisplayed({
            timeout: 20000,
        });
    }
}
