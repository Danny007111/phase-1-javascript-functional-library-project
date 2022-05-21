function improArray(item){
    let newArray;
    if(Array.isArray(item)){
        newArray = item;
    }else{
        newArray = Object.values(item);
    };
    return newArray;
};

function myEach (collection, callback){
    let newArray = improArray(collection);
    for(let i = 0; i < newArray.length; i++){
        callback(newArray[i]);
    };
    return collection;
};

function myMap(collection, callback){
    let newArray = improArray(collection);
    let anotherArray = []
    for(let i = 0; i < newArray.length; i++){
        let mapArray = callback(newArray[i]);
        anotherArray.push(mapArray);
    };
    return anotherArray;
};

function myReduce(collection, callback, acc){
    let newArray = improArray(collection);
    if(acc === undefined){
        acc = newArray[0];
        for(let i = 1; i < newArray.length; i++){
            acc = callback(acc, newArray[i], collection);
        };

    }else{
        for(let i = 0; i < newArray.length; i++){
            acc = callback(acc, newArray[i], collection);
        };
    };

    return acc;
};

function myFind(collection, predicate){
    let newArray = improArray(collection);
    return newArray.find(predicate);
};


function myFilter(collection, predicate){
    let newArray = improArray(collection);
    return newArray.filter(predicate);
};

function mySize(collection){
    let newArray = improArray(collection);
    return newArray.length;
};

function myFirst(array, n){
    if (n == null){
        return array[0];
    }else{
        return array.slice(0, n);
    };
};

function myLast(array, n){
    if (n == null){
        return array[array.length - 1];
    }else{
        return array.slice(-n);
    };
};

function myKeys(object){
    return Object.keys(object);
};

function myValues(object){
    return Object.values(object);
};