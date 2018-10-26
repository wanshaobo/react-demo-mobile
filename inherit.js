//组合继承
function SuperType(){}
function SubType(){
	SuperType.call(this);
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

//
function SuperType(){}
function SubType(){
	SuperType.call(this);
}
SubType.prototype = new SuperType();
console.log(SubType.prototype.constructor);//ƒ SuperType(){}
SubType.prototype.constructor = SubType;
console.log(SubType.prototype.constructor);//ƒ SubType(){SuperType.call(this);}

//
var a = []
Object.prototype.toString.call(a);//"[object Array]"

//
var person = {
	name:'name',
	friends: ['zhao','li','qin']
}
var wanshaobo = Object.create(person)
wanshaobo.friends.push('liujun');//
var zhangsan = Object.create(person,{name:{value: 'zhangsan'}});//覆盖原型的同名属性
console.log(wanshaobo.name);//name
console.log(zhangsan.name)//zhangsan
console.log(person.friends);//["zhao", "li", "qin", "liujun"]

//静态方法不被实例继承 实例方法可以被继承
function SuperType(){

}
SuperType.staticProp = "this is a static prop";//静态属性
SuperType.staticMethod = function(){//静态方法
	console.log("this is a static method");
}
SuperType.prototype.instanceProp = "this is a instance prop"//实例属性
SuperType.prototype.instanceMethod = function(){//实例方法
	console.log("this is a instance method");
}
console.log(SuperType.staticProp);
console.log(SuperType.staticMethod());
function SubType(){

}
SubType.prototype = new SuperType();
var instance1 = new SubType();
console.log(SubType.staticProp);//undefined
console.log(SubType.staticMethod());//SubType.staticMethod is not a function
console.log(instance1.instanceMethod());//this is a instance method

//原型属性 实例属性
function SuperType(){
	this.name = 'wansahobo';
}
SuperType.prototype.age = 18;
var instance1 = new SuperType();
instance1.sex = 'man';
console.log(instance1.hasOwnProperty('name'));//true 实例属性
console.log(instance1.hasOwnProperty('age'));//false 原型属性
console.log(instance1.hasOwnProperty('sex'));//true 实例属性

//__proto__ 实例原型的prototype
function SuperType(){
	this.name = 'wansahobo';
}
SuperType.prototype.age = 18;
var instance1 = new SuperType();
console.log(instance1.prototype);//undefined
console.log(instance1.__proto__ == SuperType.prototype);//true
console.log(instance1.__proto__);//{age: 18, constructor: ƒ SuperType()}
console.log(SuperType.__proto__);//ƒ () { [native code] }
console.log(Function.__proto__);//ƒ () { [native code] }
console.log(Function.__proto__ == SuperType.__proto__);//true
console.log(instance1.constructor);//ƒ SuperType(){this.name = 'wansahobo';}
console.log(instance1.constructor == SuperType);//true
console.log(SuperType.prototype);//{age: 18, constructor: ƒ SuperType()}
console.log(SuperType.prototype.constructor);//ƒ SuperType(){this.name = 'wansahobo';}
console.log(SuperType.prototype.constructor == SuperType);//true
console.log(instance1.constructor.prototype);//{age: 18, constructor: ƒ}
console.log(instance1.constructor.prototype == SuperType.prototype);//true
console.log(SuperType.constructor);//ƒ Function() { [native code] }
console.log(SuperType.constructor == Function);//true

//A.isPrototypeOf(B) A是否是B的原型链
console.log(SuperType.isPrototypeOf(instance1));//false
console.log(instance1 instanceof SuperType);//true
console.log(SuperType.prototype.isPrototypeOf(instance1));//true

arr.reduce((res, item, index, self) => {},"resInit")//形参详解


//js数组扁平化
//Number类型的数组
var arr = [[1,2,3],[4,5,6],7,8,9]
console.log(arr.toString().split(',').map( item => parseInt(item)));//split把字符串分割为字符串数组。
//String类型的数组
var arr = [['a','b','c'],['d','e','f'],'g','h','i']
console.log(arr.toString().split(','));//split把字符串分割为字符串数组。
//引用类型的数组
function flatten(arr){
	var res = [];
	arr.forEach((item, index, self) => {
		if(Array.isArray(item)){
			res = res.concat(flatten(item))
		}else{
			res.push(item)
		}
	});
	return res
}
function flatten(arr){
	return arr.reduce((res,item) => res.concat(Array.isArray(item) ? flatten(item) : item),[]);
}
var arr = [[{a:1},{b:2},{c:3}],[{d:4}],{e:5}]
console.log(flatten(arr));

