let request = require("request");
let baseUrl = "http://localhost:8080/api/todos";
let responseInJson, id, responseInString, response;

describe('To-Do Task Item : API Integration Tests', function() {

    var taskName='task posted using API';

    it("should POST a new to-do item", function(done){
        request.post({url:baseUrl,form: {text:taskName}}, function(err,httpResponse){
            expect(httpResponse.statusCode).toBe(200);
            done();
        });
    });

    it("should GET to-do item list", function(done){
        request.get(baseUrl, function(err, res){
            responseInString = JSON.stringify(res);
            responseInJson = JSON.parse(responseInString);
            response= JSON.parse(responseInJson.body);
            id = response[response.length-1]._id;
            expect(response[response.length-1].text).toBe(taskName);
            expect(res.statusCode).toBe(200);
            done();
        })
    });

    it('should DELETE latest post', function(done) {
        request.delete(baseUrl +'/'+ id, function(err,httpResponse){
            expect(httpResponse.statusCode).toBe(200);
            done();
        });
    });
});
