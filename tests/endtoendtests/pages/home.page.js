var toDoItemsInfo = element(by.css('.label.label-info.ng-binding'));

var homePage = {

    toDoItemInputBox : function(){
        return element(by.model('formData.text'));
    },

    addButton : function () {
        return element(by.buttonText('Add'));
    },

    getToDoItemsCountFromLabel : function(){
        return toDoItemsInfo.getAttribute('innerText').then(function(toDoItemCountFromLabel){
            return parseInt(toDoItemCountFromLabel);
        });
    },

    getToDoItemsCountFromCheckBoxes : function(){
        return element.all(by.repeater('todo in todos')).count().then(function(toDoItemCountFromCheckBox){
            return parseInt(toDoItemCountFromCheckBox);
        });
    },

    deleteLatestToDoItem : function(){
        element.all(by.css('.checkbox.ng-scope')).last().click();
    },

    getLatestToDoItemText : function(){
        return element.all(by.repeater('todo in todos')).last().getText().then(function(latestToDoItemText){
            return latestToDoItemText;
        });
    },
};

module.exports = homePage;
