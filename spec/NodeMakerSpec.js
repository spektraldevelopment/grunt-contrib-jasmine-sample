describe("NodeMaker: ", function() {

    var nodeMaker, nodeContainer, newDiv;

    beforeEach(function() {
        nodeContainer = document.createElement("div");
        nodeContainer.id = "nodeContainer";
        document.body.appendChild(nodeContainer);
        nodeMaker = new NodeMaker("artemis");
    });

    it("Should have an id of artemis.", function() {
       expect(nodeMaker.id).toMatch("artemis");
    });

    it("nodeContainer is defined.", function() {
        expect(nodeContainer).toBeDefined();
    });

    it("creates a div.", function() {
        newDiv = nodeMaker.createNode("div", nodeContainer, "newDiv");
        expect(newDiv).toBeDefined();
    });

    it("newDiv has an id of \"newDiv\".", function() {
        expect(newDiv.id).toMatch("newDiv");
    });

    it("foo.", function() {
        var foo = "foobar";
        expect(foo).toMatch("foobar");
    });
});