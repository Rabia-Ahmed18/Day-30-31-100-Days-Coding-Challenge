// ======================== Q # 92 ======================
// Q#:92 Write a function to remove the last element from an array and return the removed element.
function removeLastEle(arr) {
    return arr.pop();
}
var arr = ["A", "B", "C", "D"];
console.log(removeLastEle(arr), " is the last element");
