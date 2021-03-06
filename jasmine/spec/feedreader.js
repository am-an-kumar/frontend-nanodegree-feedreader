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
        // allFeeds = [];
        // allFeeds = undefined;
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have a url field and it is not empty', function(){
            for(const feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeNull();
                expect(feed.url.trim()).not.toBe('');
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a name field and it is not empty', function(){
            for(const feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeNull();
                expect(feed.name.trim()).not.toBe('');
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
        describe("The menu", function(){
            /* TODO: Write a test that ensures the menu element is
            * hidden by default. You'll have to analyze the HTML and
            * the CSS to determine how we're performing the
            * hiding/showing of the menu element.
            */
           it("should be hidden by default", function(){
                expect(document.body.classList.contains("menu-hidden")).toBe(true);

           })


            /* TODO: Write a test that ensures the menu changes
            * visibility when the menu icon is clicked. This test
            * should have two expectations: does the menu display when
            * clicked and does it hide when clicked again.
            */
           it("visibility should toggle on clicking menu icon", function(){
                // simulating click on the menu icon...
                document.getElementsByClassName('menu-icon-link')[0].click();
                expect(document.body.classList.contains("menu-hidden")).toBe(false);

                document.getElementsByClassName('menu-icon-link')[0].click();
                expect(document.body.classList.contains("menu-hidden")).toBe(true);
           })

        });
        

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("initial entries", function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        // waiting for loadFeed() to fetch the feeds for the 2nd item in the menu
        beforeEach(function(done){
            loadFeed(1, done);
        })


        it("has atleast 1 entry", function(){
            expect(document.querySelectorAll('.feed .entry').length).not.toBe(0);
        })
        

    })

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe("New Feed Selection", function(){

        // variables to hold the innerHTML of the feed container after every loadFeed() call...
        let initialFeeds;
        let finalFeeds;
        let feedContainer = document.querySelector('.feed');


        beforeEach(function(done){
            loadFeed(1, function(){
                initialFeeds = feedContainer.innerHTML;
                // console.log(initialFeeds);

                loadFeed(2, function(){
                    finalFeeds = feedContainer.innerHTML;
                    done();
                })
            })
        })

        it("updates the feeds", function(){
            expect(initialFeeds).not.toEqual(finalFeeds);
        })

    });
        
}());
