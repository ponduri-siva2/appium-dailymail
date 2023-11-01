import Gestures from "../helpers/Gestures";
import AppScreen from "./AppScreen";
import LoginScreen from "./LoginScreen";

class HomePage extends AppScreen {
    constructor () {
        super('~Home-screen');
    }
    
    private get recentIssues () {
        return $('//android.widget.TextView[@text="Recent issues"]');
    }
    private get recentIssuesMore () {
        // return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[2]/android.view.ViewGroup/android.view.ViewGroup[4]');
        return $('(//*[@text="SEE MORE"])');
    }
    private get requiredSignIn() {
        // return $('//*[@text="Sign in"]');
        // return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]");
           return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]")
    }

    // async isRequiredSignInDisplayed() {
    //     return (await this.requiredSignIn).isDisplayed();
    // }

    async isRecentIssuesMoreDisplayed () {
        return this.recentIssuesMore.isDisplayed();
    }

    async tapOnRecentIssuesMore(){
        await this.recentIssuesMore.click();
    }

    async downloadRequiredDateEdition(date: string) {
        await $(`//*[@text="${date}"]`).click();
    }

    async scrollDownToRecentIssues() {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.recentIssues, 10);
    }

    async scrollRightToMoreRecentIssues() {
        await Gestures.checkIfDisplayedWithSwipeLeft(await this.recentIssuesMore, 10);
    }

    async signIn() {
        await this.requiredSignIn.click();
        await LoginScreen.submitLoginForm({username: process.env.USER_NAME as string, password: process.env.PASSWORD as string});
    }
}
export default new HomePage();