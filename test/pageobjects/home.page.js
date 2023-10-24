import { $ } from '@wdio/globals'
import Page from './page.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch () {
        return $('input#search');
    }

    get btnSubmit () {
        return $('#search-icon-legacy');
    }

    get desiredVideo () {
        return $('a[href="/watch?v=agtCnC-2eiY&pp=ygUUdmllIHN0cmF3YmVycnkgc3dpbmc%3D"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    /**
     * Search for a video
      */
    async search(query) {
        await this.inputSearch.waitForClickable();
        await this.inputSearch.setValue(query);
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
        await browser.pause(5000);
    }

     /**
     * Click on desired video
      */
     async chooseVideo() {
        await this.desiredVideo.waitForClickable();
        await this.desiredVideo.click();
        await browser.pause(35000);
    }
}

export default new HomePage();
