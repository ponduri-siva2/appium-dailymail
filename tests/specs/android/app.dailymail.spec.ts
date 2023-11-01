import TabBar from '../../screenobjects/components/TabBar';
import SwipeScreen from '../../screenobjects/ViewPaperScreen';
import Carousel from '../../screenobjects/components/Carousel';
import Gestures from '../../helpers/Gestures';
import Tutorial from '../../screenobjects/components/Tutorial';
import HomePage from '../../screenobjects/HomePage';
import ViewPaperScreen from '../../screenobjects/ViewPaperScreen';

describe('Dailymail application', () => {
    beforeEach(async () => {
        await Tutorial.finishTutorial();
        await TabBar.waitForTabBarShown();
    });

    // it('should be able to swipe horizontal by swiping the carousel from left to right', async () => {
    //     /**
    //      * To understand what happens in `getNthCardText()` please check the method
    //      */
    //     await expect(await Carousel.getNthCardText('first')).toContain('FULLY OPEN SOURCE');

    //     /**
    //      * To understand what happens in `swipeLeft()` please check the method
    //      */
    //     await Carousel.swipeLeft();
    //     await expect(await Carousel.getNthCardText('active')).toContain('GREAT COMMUNITY');

    //     await Carousel.swipeLeft();
    //     await expect(await Carousel.getNthCardText('active')).toContain( 'JS.FOUNDATION');

    //     await Carousel.swipeLeft();
    //     await expect(await Carousel.getNthCardText('active')).toContain( 'SUPPORT VIDEOS');

    //     await Carousel.swipeLeft();
    //     await Carousel.swipeLeft();
    //     await expect(await Carousel.getNthCardText('active')).toContain('COMPATIBLE');

    //     /**
    //      * To understand what happens in `swipeRight()` please check the method
    //      */
    //     await Carousel.swipeRight();
    //     await expect(await Carousel.getNthCardText('active')).toContain('EXTENDABLE');

    //     await Carousel.swipeRight();
    //     await Carousel.swipeRight();
    //     await Carousel.swipeRight();
    //     await Carousel.swipeRight();
    //     await expect(await Carousel.getNthCardText('first')).toContain('FULLY OPEN SOURCE');
    // });

    it('should be able to view the tutorial', async ()=>{
        await HomePage.scrollDownToRecentIssues();
        // await expect(HomePage.recentIssues).toBeDisplayed();
        await HomePage.scrollRightToMoreRecentIssues();
        await HomePage.tapOnRecentIssuesMore();
        await HomePage.downloadRequiredDateEdition('10 April 2023');
        // await expect(HomePage.re).toBeTruthy();
        await HomePage.signIn();
        
        // await ViewPaperScreen.waitForViewPagerShown();
        // const result = await ViewPaperScreen.isViewPagerDisplayed();
        // const fronrPageLoaded = await ViewPaperScreen.isFrontPageShown();
        // debugger;
        // await expect(fronrPageLoaded).toBeTruthy();
        await ViewPaperScreen.gotoDesirePageGallery(3);
        debugger;
        // Swipe horizontal and try to find the element. You can only swipe a max of 5 times
        // await Gestures.checkIfDisplayedWithSwipeUp(await SwipeScreen.logo, 5);
        // await expect(SwipeScreen.logo).toBeDisplayed();
    });
});
