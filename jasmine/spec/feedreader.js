/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
  describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it('are defined and not empty', function() {
          // expect(allFeeds).toBeDefined();
          // expect(allFeeds.length).not.toBe(0);
          expect(allFeeds).toBeTruthy();
      });


      /* 'contain URLs' is a test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */

       it('contain URLs', function() {
         // for (let feed of allFeeds) {
         //   expect(feed.url).toBeDefined();
         //   expect(feed.url.length).not.toBe(0);
         // }
         allFeeds.forEach(feed => {
           expect(feed.url).toBeTruthy();
         });
       });

      /* 'contain names' is a test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */

       it('contain names', function() {
         // for (let feed of allFeeds) {
         //   expect(feed.name).toBeDefined();
         //   expect(feed.name.length).not.toBe(0);
         // }
         allFeeds.forEach(feed => {
           expect(feed.name).toBeTruthy();
         });
       });
     });


  describe('the menu', function() {

    /* 'is hidden' is a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */


    it('is hidden', function() {
      const body = document.querySelector('body');
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });

    /* 'toggles when clicked' is a test that ensures the menu changes
     * visibility when the menu icon is clicked.
     * It has two expectations: the menu displays when
     * clicked and it hides when clicked again.
     */

     it('toggles when clicked', function() {
       const body = document.querySelector('body');
       const menuIcon = document.querySelector('.menu-icon-link');
       menuIcon.click();
       expect(body.classList.contains('menu-hidden')).toBe(false);
       menuIcon.click();
       expect(body.classList.contains('menu-hidden')).toBe(true);
     });
  });




  describe('Initial Entries', function() {

     beforeEach(function(done) {
       loadFeed(0, done);
     });

     /* 'contain an entry' is a test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      */

     it('contain an entry', function() {
       const entry = document.querySelector('div.feed .entry');
       expect(entry.innerText.length).toBeGreaterThan(0);
     });
  });


 describe('New Feed Selection', function() {
   const feed = document.querySelector('.feed');
   const firstFeed = [];
   const secondFeed = [];

   beforeEach(function(done) {
     loadFeed(0, function() {
       Array.from(feed.children).forEach(function(entry) {
         firstFeed.push(entry.innerText);
       });
       loadFeed(1, function() {
         Array.from(feed.children).forEach(function(entry) {
           secondFeed.push(entry.innerText);
         });
         done();
       });
     });
   });


   /* 'changes content' is a test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */

   it('changes content', function() {
     secondFeed.forEach(function(entry, index) {
       expect(secondFeed[index] === firstFeed[index]).toBe(false);
     });
   });
 });
}());
