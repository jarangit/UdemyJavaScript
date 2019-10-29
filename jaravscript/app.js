function b (){
    console.log(myVar);
}
function a() {
    var myVar = 2;
    b(); 
}

var myVar = 1;
a();


///ตอนที่ 18
var ep18 = "ep18";
    console.log(ep18);

    function waitThreeSeconds() {
        var ms = 3000 + new Date().getTime();
        while (new Date() < ms){}
        console.log('finished function');
    } //ทำให้เว็บโโหลดช้า 3 วิ อิงจากเวาลาเครื่อง
    
    function clickHandler() {
        console.log('click event!');   
    } //เมื่อคลิกที่ใดก็ได้ จะแสดง click event
    
    // listen for the click event
    document.addEventListener('click', clickHandler);
    
    waitThreeSeconds();
    console.log('finished execution');
    
    //สรุปการทำงาน เมื่อเปิดมา function finished , finished execution จะออกมาก่อน 
    //แต่ถ้าหาก ระหว่างรอเว็บโหลด 3 วิ แล้วคลิก console จะออกมาพร้อมกันทั้งสามเลย เหมือนว่า event จะถูถประมวลผลก่อน


//ตอนที่22
var ep22 = "ep22";
    console.log(ep22);

var a = 2 , b = 3, c = 4;

a = b = c ;
console.log(a);
console.log(b);
console.log(c);
//เมื่อเรา console.log ออกมาดู จะพบว่า เป็นค่า 4 ของ c ทั้งหมด 
//เพราะเครื่องหมาย = ทำให้อ่านจากขวาไปซ้าย เมื่อ b = c ก็จะได้ b = 4 จากนั้น a = b(4) ค่าของ a ก็จะเป็น 4 
// สิ่งที่ควรอ่านเรื่อง Oparetor file:///C:/xampp/htdocs/learn/udemy/code/Operator-Precedence-In-Javascript.pdf


//ep23
var ep23 ='ep23';
console.log(ep23);

var a = 1;
var b = '1';

if(a == b){
    console.log('true');
}else{
    console.log('flase');
}

if( a === b ){
    console.log('true');
}else{
    console.log('flase');
}
//จากตัวอย่างด้านบนสองตัวอย่างแสดงให้เห็นถึงความแตกต่างระหว่าง == กับ ===
// == จะเทียบค่าแค่ค่า ถึงทำให้ผลออกมาถูกต้อง เพราะเป็น 1 เท่ากัน
// === จะเทียบทั้งค่าและผระเภทของค่านั้นด้วย จึงทำให้ออกมาเป็น flase เพราะ 1 จาก a เป็นตัวเลย แต่ 1 จาก  b เป็นตัวหนังสือหรือ string

//ep28
var ep28 = 'ep28';
    console.log(ep28);

function greet(name){
    name = name || 'You name here';
    console.log('Hello'+ name);
}
greet(); //จะได้ You name here
greet('jaran'); // จะได้ Hello jaran

//เรื่องนี้เรายังไม่ค่อยเข้าใจเท่าไหร ต้องไปศึกษาเพิ่มเติม
var P_ep28 = "ยังไม่ค่อยเข้าใจ";
    console.log(P_ep28);


//ep29
var ep29 = "ep29";
    console.log(ep29);
    console.log(libraryName);
    //คือการเรียกข้ามไฟล์
    //แต่lib1.js lib2.js ต้องถูกเรียกก่อนในไฟล์ index.html

//ep30
var ep30 = "ep30";
    console.log(ep30);

var person = new Object();

person["firstname"] = "tony";
person["lastname"]  = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city   = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);

//บอกตรงๆ ยังอ่าน code ไม่ออกเลย
