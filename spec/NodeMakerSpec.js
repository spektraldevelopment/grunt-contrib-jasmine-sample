describe("NodeMaker: ", function() {

    var nodeMaker, nodeContainer, page;

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

    it("phantom is defined.", function() {
        expect(phantom).toBeDefined();
    });
});