var arr=[];
arr[0]="abc";
arr[1]="efg";
arr[2]=12;
arr[3]=23;
arr[4]="eee";
arr[5]=45;
console.log(arr);

var arr=[];
arr[0]=prompt();
arr[1]=prompt();
arr[2]=prompt();
arr[3]=prompt();
arr[4]=prompt();
arr[5]=prompt();
console.log(arr);

arr["amjad", "ajmal" , "amin"];
arr[1,3,4,5,];
arr[true , false ,undefined];
arr["amjad", "ajmal" , "amin" 12,23,34];

var edu=["SSC", "HSC", "BSC", "B.COM", "M.COM" , "PHD"];
console.log("Qualification:\n"+edu);


var stu = ["ali", "aslam", "khan"];
var scr = [320, 230, 480];
console.log("score of ali is  " + scr[0] + "  percentage: " + (scr[0] / 500) * 100 + "%");
console.log("score of Aslam is  " + scr[1] + "  percentage: " + (scr[1] / 500) * 100 + "%");
console.log("score of Khan is  " + scr[2] + "  percentage: " + (scr[2] / 500) * 100 + "%");

// 10

var stu = [320, 230, 480, 120];
var sort = stu.sort();
console.log(sort);

// 11

var city = ["khi", "isl", "lahore", "skd", "GB"];

var copy = city.slice(2, 6);

console.log(copy);

// 12
var arr = ["this", "is", "my", "cat"];
console.log(typeof arr);
console.log(arr);


var jo = arr.join();

console.log(typeof jo);
console.log(jo);

// 13
var cs = ["keyboard", "mouse", "printer", "monitor"];
console.log(cs)


cs.shift();
console.log("out: \n keyboard");

console.log(cs);
cs.shift();
console.log("out: \n mouse");

console.log(cs);

cs.shift();
console.log("out: \n printer");

console.log(cs);

cs.shift();
console.log("out: \n monitor");

console.log(cs);

// 14
var cs = ["keyboard", "mouse", "printer", "monitor"];
console.log(cs)


cs.pop();
console.log("out:  monitor");

console.log(cs);
cs.pop();
console.log("out: printer");

console.log(cs);

cs.pop();
console.log("out:  mouse");

console.log(cs);

cs.pop();
console.log("out:  keyboard");

console.log(cs);

// 15
var cell = ["Apple", "Samsung", "Motrola", "Nokia", "Sony", "Vivo"];
console.log(cell[2])

document.writeln("ssss <br" + cell)

