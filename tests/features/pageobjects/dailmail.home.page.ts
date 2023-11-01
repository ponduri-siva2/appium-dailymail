import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    public get mainVideo() {
        return $('#vjs_video_3 video.vjs-tech');
    }

    public get playButton() {
        return $('.vjs-control-bar .vjs-play-control');
    }

    public get forwardButton() {
        return $('.vjs-control-bar .mol-skip-control');
    }

    public get backwardButton() {
        return $('.vjs-control-bar .mol-previous-control');
    }

    public get volumeButton() {
        return $('div.vjs-control-bar>[role="button"][class*="vjs-vol-"]');
    }

    public get posterDiv() {
        return $('#vjs_video_3 div.vjs-poster');
    }

    public get advDiv() {
        return $('div.video-ad-label.vjs-control');
    }

    public async playOrPauseVideo () {
        await (await this.playButton).click();
    }

    public async muteOrUnmuteVideo () {
        await (await this.volumeButton).click();
    }

    public async nextVideo () {
        await (await this.forwardButton).click();
    }

    public async previousVideo () {
        await (await this.backwardButton).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('video/index.html');
    }

    async acceptCookies() {
        const cookiesConsentPresent = await $('.primary_2xk2l');
        if (cookiesConsentPresent) {
        // Click the cookies consent element to accept cookies
        await cookiesConsentPresent.click();
        browser.pause(10000);
        console.log('Cookies consent element accepted.');
        } else {
        console.log('Cookies consent element not found, no action needed.');
        }
    }

    async waitForAvailable(element:WebdriverIO.Element) {
        return await element.waitForClickable({ timeout: 10000 })
    }

    async waitForDisplay(element:WebdriverIO.Element) {
        return await element.waitForDisplayed({ reverse: true, timeout: 10000});
    }

    async waitForVideoPlay(className: string) {
        await this.playButton.waitUntil(async () => {
            const classes = await this.playButton.getAttribute('class');
            return classes.includes(className);
        }, {
            timeout: 10000, // Adjust the timeout as needed
            timeoutMsg: 'Expected class "vjs-playing" not found after clicking play button',
        });
    }

}

export default new HomePage();
