import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser, $, $$ } from '@wdio/globals';
import {expect} from 'chai';

import HomePage from '../pageobjects/dailmail.home.page';

const pages: any = {
    video : HomePage
}
let currentData: any;
// let playButton;
// let forwardButton;
// let backwardButton;
// let volumeButton;

Given(/^I am on the Daily Mail (\w+) page$/, async (page) => {
  await pages[page].open()
});

Given('I accept cookies',  async () => {
    await HomePage.acceptCookies();
});

When('I click on Video in page to begin playback', async() => {
  await HomePage.waitForAvailable(await HomePage.playButton);
  await HomePage.playOrPauseVideo();
});

Then('the video should be playing', async() => {
  await HomePage.waitForVideoPlay('vjs-playing');
  const classAttributeValue = await HomePage.playButton.getAttribute('class');
  expect(classAttributeValue).to.include('vjs-playing');
});

When('I click the video again to pause playback', async() => {
  await HomePage.waitForAvailable(await HomePage.playButton);
  await HomePage.playOrPauseVideo();
});

Then('the video should be paused', async() => {
  await HomePage.waitForVideoPlay('vjs-paused');
  const classAttributeValue = await HomePage.playButton.getAttribute('class');
  expect(classAttributeValue).to.include('vjs-paused');
});

When('I click on the forward arrow to change to the next video', async() => {
  currentData = await HomePage.mainVideo.getAttribute('poster');
  await HomePage.waitForAvailable(await HomePage.advDiv);
  await HomePage.waitForAvailable(await HomePage.forwardButton);
  await HomePage.forwardButton.click();
});

Then('the next video should start playing', async() => {
  await HomePage.waitForAvailable(await HomePage.advDiv);
  await HomePage.mainVideo.waitUntil(async () => {
    const currentPoster = await HomePage.playButton.getAttribute('poster');
    return currentData !== currentPoster;
  }, {
    timeout: 10000,
    timeoutMsg: 'Expected next video not playing after clicking forward button',
  });
  const poster = await HomePage.mainVideo;
  const currentPoster = await poster.getAttribute('poster');
  expect(currentData).to.not.equal(currentPoster);
});

When('I click on the back arrow to navigate to the previous video', async() => {
  browser.pause(5000);
  await $('div.video-ad-label.vjs-control').waitForDisplayed({ reverse: true, timeout: 60000});
  await HomePage.backwardButton.waitForClickable({ timeout: 60000 });
  await HomePage.backwardButton.click();
});

Then('the previous video should start playing', async() => {
  await HomePage.backwardButton.waitForClickable({ timeout: 60000 });
  const poster = await HomePage.mainVideo;
  let currentPoster = await poster.getAttribute('poster');
});

When('I click on the speaker icon to mute the video', async() => {
  await HomePage.waitForAvailable(await HomePage.volumeButton);
  await HomePage.muteOrUnmuteVideo();
  await browser.execute(() => {
    const body = document.body;
    body.focus();
  });
});

Then('the video should be muted', async() => {
  const classAttributeValue = await HomePage.volumeButton.getAttribute('class');
  expect(classAttributeValue).to.include('vjs-vol-0');
});

When('I click on the speaker icon again to unmute the video', async() => {
  await HomePage.waitForAvailable(await HomePage.volumeButton);
  await HomePage.muteOrUnmuteVideo();
  const classAttributeValue = await HomePage.volumeButton.getAttribute('class');
  expect(classAttributeValue).not.to.include('vjs-vol-0');
});

Then('the video should be unmuted', async() => {
  const classAttributeValue = await HomePage.volumeButton.getAttribute('class');
  expect(classAttributeValue).to.not.include('vjs-vol-0');
});

When('I wait for the video to finish', () => {
});

Then('the next video should autoplay', () => {
  browser.pause(10000);
});


