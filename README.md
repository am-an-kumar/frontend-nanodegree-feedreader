# Feedreader

## Contents

- [Feedreader](#feedreader)
    - [Contents](#contents)
    - [Introduction](#introduction)
    - [Dependencies](#dependencies)
    - [Using Locally](#using-locally)
        - [Creating a Test](#creating-a-test)
            - [Understanding the Structure](#understanding-the-structure)
                - [describe](#describe)
                - [it](#it)
                - [expect](#expect)
            - [Writing a Test Case](#writing-a-test-case)
    - [Project Overview (Original Udacity README)](#project-overview-original-rubric)
        - [Why this Project](#why-this-project)
        - [What will I learn](#what-will-i-learn)
        - [How will this help my career](#how-will-this-help-my-career)
    - [How will I complete this project](#how-will-i-complete-this-project)

## Introduction

This project's focus was to use the [Jasmine](https://jasmine.github.io) framework to write tests against a simple RSS feed application.

## Dependencies

The majority of the code was provided by [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader), and a few common external resources were used.

- [Google Fonts](http://handlebarsjs.com)
- [Handlebars](http://handlebarsjs.com)
- [Jasmine](https://jasmine.github.io)
- [jQuery](http://jquery.com)

## Using Locally

Go to the [GitHub repo](https://github.com/am-an-kumar/frontend-nanodegree-feedreader) for this site and clone it and open the index.html in a browser.

You'll see your feedreader app, along with the Jasmine testing output at the bottom of the page.

### Creating a Test

You can create your own tests if you like!

```javascript
describe('RSS Feeds', function () {
    it('are defined', function () {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });
});
```

#### Understanding the Structure

##### describe

It is used to create test suites which is a collection of similar tests, like all tests to check if the menu items have a valid url and name.

```javascript
describe('RSS Feeds', function () {
    // Related tests ('it' functions) go here
});
```

##### it

Subsections of `describe`. Each it corresponds to a single test case.

```javascript
it('are defined', function () {
    // Specific tests ('expect' functions) go here
});
```

##### expect

These are the individual items to be tested. These can be classes, functionality, page content, or really anything you can reference with Javascript.

These are things you're *expecting* to happen, so a test will show an error if it didn't happen the way you describe. You can use `not` to negate the expected result.

```javascript
expect(allFeeds).toBeDefined(); // 'allFeeds' (an array, in this case) has to exist
expect(allFeeds.length).not.toBe(0); // 'allFeeds' cannot have zero elements
```

#### Writing a Test Case

1. Open `feedreader.js`.
2. Decide if you want to add to an existing `describe` block, or create a new one.
3. Decide if you need to further categorize your tests into `it` blocks.
4. Use Jasmine's **matching** syntax to write your `expect` statements.

## Project Overview (Original Rubric)

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

### Why this Project

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

### What will I learn

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

### How will this help my career

- Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.

- Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

## How will I complete this project

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
