function FatalError(){
    Error.apply(this, arguments);
    this.name = "FatalError";
}

FatalError.prototype = Object.create(Error.prototype);

function export_github_source() {

    // the source code we want is in a table element; there should be only one
    var tbl = document.getElementsByTagName("table");
    if (tbl.length != 1) {
        throw new FatalError("Fatal error: Could not find exactly one table on page.");
    }
    
    // capture the styles assigned to each of the ancestral nodes
    var parentStyles = [];
    var currentNode = tbl[0];
    var baseNode = document.getElementsByTagName("html")[0];
    
    while (currentNode != baseNode) {
        parentStyles.push(currentNode.style.cssText);
        currentNode = currentNode.parentNode;
    }

    return parentStyles;
}
