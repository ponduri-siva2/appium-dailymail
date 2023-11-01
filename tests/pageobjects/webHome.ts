import { $ } from '@wdio/globals'
import Page from './page';
// import * as fs from 'fs';
// import * as resemble from 'node-resemble-js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WebHomePage extends Page {
    /**
     * define selectors using getter methods
     */

    public get mainVideo() {
        return $('#vjs_video_3 video.vjs-tech');
    }

    public get cookieAccept() {
        return $('.primary_2xk2l');
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

    async acceptCookiesIfAvailable() {
        if (await this.cookieAccept) {
            // Click the cookies consent element to accept cookies
            await this.cookieAccept.click();
            browser.pause(10000);
            console.log('Cookies consent element accepted.');
          } else {
            console.log('Cookies consent element not found, no action needed.');
          }
    }

}

export default new WebHomePage();
