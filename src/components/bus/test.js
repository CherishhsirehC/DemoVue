

function outerFn(k) {
    var i = 5;
    function innnerFn() {
        i++;
        //    console.log(i);
    }
    for (let j = 0; j < k; j++) {
        innnerFn();
    }
    return i;
}
var inner1 = outerFn(2);
var inner2 = outerFn(3);
console.log(inner1);
console.log(inner2)


var add = function (x) {
    var sum = 1;
    var tmp = function (x) {
        sum = sum + x;
        return tmp;
    }
    tmp.toString = function () {
        return sum;
    }
    return tmp;
}
console.log((add()(2)(1)).toString());

var arr = [3, 6, 1, 9, 8, 2, 44, 4, 89, 12, 5];

//冒泡排序
for (let n = 0, j = arr.length - 1; n < j; n++) {
    for (let k = 0; k < j - n; k++) {
        if (arr[k] > arr[k + 1]) {
            let temp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = temp;
        }
    }
    console.log(arr)
}
console.log(arr);

// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);

//快速排序
// function quicksort(arr, i, j) {
//     if (arr.length <= 1) return;
//     // let i = 0, j = arr.length - 1;
//     while (arr[i] < arr[j] && i < j) {
//         j--;
//     }
//     if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// }

// var a={b:['1','2','3','4']};
// function c(a){
//     a.b.splice(2,1);
// }
// c(a);
// console.log(a)
// var t='h';
// function a(){
//     if(t==='h'){
//         var t='s'
//         console.log(t)
//     }else{
//         // csonsole.log(t)
//     }
//     console.log(t+'1')
// }
// a()

var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
//1、从数组尾部移除一个元素，并返回该元素
console.log(arr.pop());
//2、在数组尾部添加一个元素，并返回数组的长度
console.log(arr.push('g'));
//3、从数组头部移除一个元素，并返回元素
console.log(arr.shift());
//4、在数组头部添加元素，并返回该数组新的长度
console.log(arr.unshift('s', 'j'))
console.log(arr);

var copyArr = Object.assign([], arr);
arr.splice(2, 3);
console.log(arr + 'originalArr:' + copyArr);
console.log(copyArr.reverse() + ' ' + copyArr)
//以下方法不改变原数组对象
//concat连接多个数组返回新数组，
//join返回字符串由指定的分隔符分隔，
//slice截取返回字符串，可用负数传参为length+begin/end
//valueOf返回指定对象的原始值 Number(2).valueOf()为2
//toString([radix])返回对象的字符串表示
//
//以下方法会改变原数组对象
// pop()从数组尾部移除一个元素并返回该元素
// push()在数组尾部添加一个元素并返回数组长度
// shift()从数组头部移除第一个元素并返回该数组
// unshift()在数组头部插入一个元素并返回新数组长度
//reverse()反转原数组
//sort([Function])对原数组排序,若参数被忽略将按照ASCII字符顺序进行升序排列，传入的参数函数返回值如果小于零将按照升序排列，如果大于零将按照降序排列，等于零保持原顺序不动





// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };

// // ES5的写法
// var arr1 = Array.prototype.slice.call(arrayLike,1,2); // ['a', 'b', 'c']
// console.log(arr1)
Array.prototype.sum = function () {
    let sum = 0;
    console.log(this.valueOf() + ' ' + Array.from(arguments));
    for (const iterator of this) {
        sum += iterator;
    }
    return sum;
}
let a = new Array(2, 6, 9, 3)
console.log(a.sum([87, 90]));
for (const key in a) {
    // if (Object.hasOwnProperty.call(a, key)) {
    const element = a[key];
    console.log(element);
    // }
}
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hhh');
    }, 2000)
}).then(val => {
    console.log(val);
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej('nooo');
        })
    })
}).then(val => {
    console.log(val);
}, val2 => {
    console.log(val2);
    return new Promise((res, rej) => {
        throw new Error('e')
    })
}).catch((error) => {
    console.log('Error ' + error);
});

function a() {

}
a.prototype.plus = function (x) {
    console.log('plus');
    return this;
}
a.prototype.css = function () {
    console.log('cssChange');
    return this;
}
new a().plus().css();

//柯里化
function check(reg) {
    return function (txt) {
        return console.info(reg.test(txt));
    }
}
var c = check(/\d+/g);
c('fght');
c('3567');

let a = [  //初始化坐标数据
    { x: 0, y: 0 }, { x: 100, y: 0 }, { x: 200, y: 0 }, { x: 300, y: 0 },
    { x: 0, y: 100 }, { x: 100, y: 100 }, { x: 200, y: 100 }, { x: 300, y: 100 },
    { x: 0, y: 200 }, { x: 100, y: 200 }, { x: 200, y: 200 }, { x: 300, y: 200 },
    { x: 0, y: 300 }, { x: 100, y: 300 }, { x: 200, y: 300 }, { x: 300, y: 300 },
]

function observe(obj, callback) {
    let newObj = new Object();
    Object.keys(obj).forEach(key => {
        Object.defineProperty(newObj, key, {
            configurable: true,
            enumerable: true,
            set(newVal) {
                obj[key] = newVal;
                callback(key, newVal);
            },
            get() {
                return obj[key];
            }
        })
    })
    return newObj;
}
let o = {
    name: 'zp',
    sex: 'male'
}
const obj = observe(o, (k, v) => {
    console.log(`[${k}]---[${v}]`)
});

obj.name = 'aa'
console.log(o.name);