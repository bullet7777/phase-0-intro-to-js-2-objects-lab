// Write your solution in this file!
var employee={
    name:'chris',
    streetAddress:'nahr'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    var newObj={...obj};
    newObj[key]=value;
    return newObj
}
function  destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
obj[key]=value;
return obj
}
function deleteFromEmployeeByKey(obj,key){
var newObj={...obj}
delete newObj[key]
return newObj
}
function destructivelyDeleteFromEmployeeByKey(obj,key){
delete obj[key]
return obj
}