import TabBar from '../../screenobjects/components/TabBar';
import SwipeScreen from '../../screenobjects/ViewPaperScreen';
import Carousel from '../../screenobjects/components/Carousel';
import Gestures from '../../helpers/Gestures';
import Tutorial from '../../screenobjects/components/Tutorial';
import HomePage from '../../screenobjects/HomePage';
import ViewPaperScreen from '../../screenobjects/ViewPaperScreen';
import WebHomePage from '../../pageobjects/webHome';

describe('Dailymail web application', () => {
    beforeEach(async () => {
        await WebHomePage.open();
        await WebHomePage.acceptCookiesIfAvailable();
    });

    it('I click on Video in page to begin playback', async () => {
        await WebHomePage.playButton.click();
    });

});
