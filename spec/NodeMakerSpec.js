describe("NodeMaker: ", function() {

    var nodeMaker;

    beforeEach(function() {
       nodeMaker = new NodeMaker("artemis");
    });

    it("Should have an id of artemis.", function() {
       expect(nodeMaker.id).toMatch("artemis");
    });

});