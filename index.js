function improArray(item){
    let newArray;
    if(Array.isArray(item)){
        newArray = item;
    }else{
        newArray = Object.values(item);
    };
    return newArray;
};

let myEach = (collection, callback) => {
    let newArray = improArray(collection);
    for(let i = 0; i < newArray.length; i++){
        callback(newArray[i]);
    };
    return collection;
};

let myMap = (collection, callback) => {
    let newArray = improArray(collection);
    let anotherArray = []
    for(let i = 0; i < newArray.length; i++){
        let mapArray = callback(newArray[i]);
        anotherArray.push(mapArray);
    };
    return anotherArray;
};

let myReduce = (collection, callback, acc) => {
    let newArray = improArray(collection);
  
    if(acc === undefined){
        acc = newArray[0];

        for(let i = 0; i < newArray.length; i++){
            acc = callback(acc, newArray[i], collection);
        };

    };

    return acc;
};