// var test = function() {
//     var x = 1;
// }
// test();

// (function() {
//     var x = 1;
//     console.log(123)
// }) ();

// ;(function() {
//     var x = 1;
//     console.log(123)
// }) ();

// (function() {

//     function createObject() {
//         return this //{}
//     }

//     var x =  new createObject();
//     console.log(x)
// }) ();


// (function() {

//     function createObject() {
//         return this //{}
//     }

//     var x =  new createObject();
//     createObject.bind({
//         test: 1,
//     })
// }) ();

// (function() {

//     function createObject() {
//         return this //{}
//     }

//     var bindObject = {
//         test: 1,
//     }
//     var result = createObject.bind(bindObject)();
//     console.log(result)
// }) ();

// (function() {

//     function createObject(argument) {
//         return this //{}
//     }

//     var bindObject = {
//         test: 1,
//     }
//     var result = createObject.bind(bindObject)(123);
//     console.log(result)
// }) ();

// (function() {

//     function createObject(argument) {
//         return this //{}
//     }

//     var bindObject = {
//         a: 1,
//     }
//     var result = createObject.bind(bindObject)(123);
//     console.log(result)

// // Example
//     function testBind() {
//         if('a' in this) {
//             alert('Object has test properties')
//         }
//     }
//     console.log(testBind.bind({a:123})())


// }) ();

// {a: 1}
// app.js:83 undefined
// var a = {}
// undefined
// var a = {
//     x:1
// }
// undefined
// a
// {x: 1}x: 1[[Prototype]]: Object
// a.x = 5
// 5
// a
// {x: 5}
// var b = a
// undefined
// b
// {x: 5}
// b.x = 8
// 8
// a
// {x: 8}

//////////////////////

// {a: 1}
// app.js:83 undefined
// var a = {x:1};
// undefined
// var b = {x:1}
// undefined
// a.x = 5;
// 5
// b
// {x: 1}

(function() {

    function createObject(argument) {
        return argument ||this //{}
    }

    var bindObject = {
        a: 1,
    }
    var result = createObject.bind(bindObject)(123);
    console.log(result)

// Example
    function testBind() {
        if('a' in this) {
            alert('Object has test properties')
        }
    }

    //Object changes remain

    // var x = createObject.bind(bindObject)()
    // var b = createObject.bind(bindObject)()

    // b.test = 123;

    //New
    //Object changes remain

    // var x = new createObject(bindObject)
    // var b = new createObject(bindObject)

    // b.test = 123;
    
    //Call

    var x = createObject.call(bindObject);
    var b = createObject.call(bindObject);

    b.test = 123;

    console.log(x,b)


}) ();

[1,2, 'Hello', {}, 2,4, {}, {}, undefined, ]

var arr = [1,2, 'Hello', {}, 5,4, {}, {}, undefined, []];

for (var i = 0; i < arr.length; i++) {
    var next = arr[i];
    if(typeof next === 'object') {
        console.log(next);
    }
}


for (var i in arr) {
    var next = arr[i];
    if(typeof next === 'number') {
        console.log(next);
    }
}

for (var el of arr) {
    if(typeof el === 'object') {
        console.log(el);
    }
}

arr.forEach( el => typeof el === 'number' ? console.log(el): null)

arr.forEach(function(el){
    return typeof el === 'number' ? console.log(el): null
})

arr.forEach(function(el){
    if(typeof el === 'object') {
        console.log(el)
    }
})

////////////////////////

if(true) {
    alert(1)
} else {
    alert(2)
}

if(false) {
    alert(1)
} else {
    alert(2)
}


true ? alert(1) : alert(2)
false ? alert(1) : alert(2)
!false ? alert(1) : alert(2)


arr1 = [1, 2323, 25345, function() {}, 'aiosdn', function() {}, 213, 543, function() {} ]
arr1.forEach(function(el) {
    if (typeof el === 'function') {
        el();
    }
});