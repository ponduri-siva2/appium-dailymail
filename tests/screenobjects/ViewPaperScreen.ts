import Gestures from '../helpers/Gestures';
import AppScreen from './AppScreen';

class ViewPaperScreen extends AppScreen {
    constructor () {
        super('~View-screen');
    }

    get viewPager () {return $('//androidx.viewpager.widget.ViewPager');}
    get frontPage () {return $('//android.widget.TextView[@text="Front page"]');}
    get newsPage () {return $('//android.widget.TextView[@text="News"]');}

    async isViewPagerDisplayed() {
        return await this.viewPager.isDisplayed();
    }

    async isFrontPageShown() {
        return await this.frontPage.isDisplayed();
    }

    async navigateToFrontPage() {
        return (await this.frontPage).click();
    }

    async navigateToNewsPage() {
        return (await this.newsPage).click();
    }

    async waitForViewPagerShown() {
        return $('//androidx.viewpager.widget.ViewPager').waitForDisplayed({
            timeout: 50000,
        });
    }

    async tapViewPagerDisplayed() {
        return await this.viewPager.click();
    }

    async swipeToDesirePage(page: number) {
        while(page > 1) {
            await Gestures.swipeLeft();
            page--;
        }
    }
    async gotoDesirePageGallery(page: number) {
        // await this.tapViewPagerDisplayed();
        // const isDis = await (await $('//android.view.ViewGroup[@content-desc="Newspaper"]')).isDisplayed();
        // $('//android.view.ViewGroup[@content-desc="Tap me to open the sections menu"]').waitForClickable({
        //     timeout: 10000,
        // });
        // await $('//android.view.ViewGroup[@content-desc="Tap me to open the sections menu"]').click();
        // await (await $('//android.widget.TextView[contains(@text, "3 of")]')).click();
        $('//android.view.ViewGroup[@content-desc="Newspaper"]').waitForDisplayed({
            timeout: 5000,
        });
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup').click();
        await this.navigateToNewsPage();
        // await driver.pause(5000);
        await Gestures.checkIfDisplayedWithSwipeLeft(await $('//android.widget.TextView[contains(@text, "3 of")]'), 10);
        // await this.swipeToDesirePage(page);
        await driver.pause(5000);
    }

}

export default new ViewPaperScreen();
