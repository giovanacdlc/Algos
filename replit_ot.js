/*
For this challenge, you're going to write the OT validation function. 
The function will take in a string for the stale file contents, a string containing the latest file contents, and a JSON string containing the operations. 
Your function should validate that the sequence of operations, when applied to the stale contents, produces the latest contents. 
If it does not, or if the sequence of operations is invalid, your function should return false.


Some examples:
Input document: ""
Starting cursor position: 0
Operation: {"op": "insert", "chars": "Hello, human!"}
Output document: "Hello, human!"
Ending cursor position: 13

Input document: "What is up?"
Starting cursor position: 7
Operation: {"op": "delete", "count": 3}
Output document: "What is?"
Ending cursor position: 7
Watch out: delete operations are applied forward while keeping the cursor in place. Crazy, we know.

Input document: "Nice!"
Starting cursor position: 0
Operation (1): {"op": "skip", "count": 4}
Operation (2): {"op": "insert", "chars": " day"}
Output document: "Nice day!"
Ending cursor position: 8
As you can see, this last example applies two transformations in a row.

*/


function isValid(stale, latest, otjson) {
    //stale = input, latest = output, otjson = operations

  }