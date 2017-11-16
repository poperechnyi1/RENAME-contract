var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;
var child;
var nameFileForRename = 'StepanToken2.sol';
var tokenName = "SomeNAME";
var str = 'string public constant name = "Stepan Token"';
var getShortName = 'string public constant symbol = "SPT"';
var newNameContract = "SomeNAME"
//rename contract
var className = "contract StepanToken2";
var resultClassName = "contract " + newNameContract;


var text = fs.readFileSync(nameFileForRename, 'utf8');
console.log(text);

text = text.replace(className, resultClassName);


var nameContract ='string public constant name = ';
var renameTokenResult = nameContract + '"' + tokenName +'"';
text = text.replace(str, renameTokenResult);



var shortField = 'string public constant symbol = ';
var shortName = tokenName.substring(0,3).toUpperCase();
var renameTokenShort = shortField + '"' + shortName +'"';
text = text.replace(getShortName, renameTokenShort);


fs.writeFileSync("SomeNAME.sol", text);


// var result = fs.readFileSync(nameFileForRename, 'utf8');
// console.log(result);


child = exec("truffle compile", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
    