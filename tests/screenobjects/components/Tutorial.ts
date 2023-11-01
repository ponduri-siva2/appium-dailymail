let TOTAL_STEPS = 5;
let CURRENT_STEP = 1;
export default class Tutorial {
    static async clickContinue () {
        await $('//*[@text="Continue"]').click();
        CURRENT_STEP+=1;
    }

    static async waitForTutorial ():Promise<boolean|void> {
        return $(`*//android.widget.TextView[@text="Step ${CURRENT_STEP} of ${TOTAL_STEPS}"]`).waitForDisplayed({
            timeout: 20000,
        });
    }

    static async finishTutorial ():Promise<boolean|void> {
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup').click();
        while(CURRENT_STEP <= TOTAL_STEPS) {
            await Tutorial.waitForTutorial();
            await Tutorial.clickContinue();
        }
    }
}
