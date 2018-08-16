var homePage = require('./pages/home.page.js');
var utility = require('../utilities/util.js');

var toDoItemCountFromLabel;

var toDoItem1 = 'Get the furniture assembled '+ utility.getRandomString(3);
var toDoItem2 = 'Send condolences to relative '+ utility.getRandomString(3);
var homePageTitle = 'Node/Angular Todo App';

describe('To-Do Task Item : End-to-End Tests', function() {

    beforeAll(function() {
        browser.get('http://localhost:8080/');
    });

    it('should verify the title', function() {
        expect(browser.getTitle()).toEqual(homePageTitle);
    });

    it('should check for existing to-do items and verify the count in label', function() {
        var toDoItemCountFromLabel = homePage.getToDoItemsCountFromLabel();
        var toDoItemCountFromCheckBoxes = homePage.getToDoItemsCountFromCheckBoxes();
        expect(parseInt(toDoItemCountFromLabel)).toEqual(parseInt(toDoItemCountFromCheckBoxes));
    });

    it('should add a new to-do item', function() {
        homePage.getToDoItemsCountFromCheckBoxes().then(function(itemCountBeforeAddingNewItem){
            homePage.toDoItemInputBox().sendKeys(toDoItem1);
            homePage.addButton().click();
            homePage.toDoItemInputBox().sendKeys(toDoItem2,protractor.Key.ENTER);
            homePage.getToDoItemsCountFromCheckBoxes().then(function(itemCountAfterAddingNewItem){
                expect(parseInt(itemCountAfterAddingNewItem)).toEqual(parseInt(itemCountBeforeAddingNewItem)+2);
                expect(homePage.getLatestToDoItemText()).toEqual(toDoItem2);
            });
        });
    });

    it('should delete latest added to-do item', function() {
        homePage.getToDoItemsCountFromLabel().then(function(itemCountBeforeDeletingLatestItem){
            homePage.deleteLatestToDoItem();
            homePage.getToDoItemsCountFromLabel().then(function(itemCountAfterDeletingLatestItem){
                expect(parseInt(itemCountAfterDeletingLatestItem)).toEqual(parseInt(itemCountBeforeDeletingLatestItem)-1);
            });
        });
    });
});
