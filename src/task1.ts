

function round(arr: any[], step: number): any[]{
    let result: any[] = [];

    for(let i = 0; i<arr.length; i++){

        let newIndex: number = i + step;
        if(newIndex >= arr.length){
            newIndex = newIndex - arr.length;
        }
        result[newIndex] = arr[i];
    }
    return result;
}



function round2(arr: any[], step: number): any[]{
    let result: any[] = [];
    
    result = arr.map((el, index, arr) => {
        let newIndex: number = index + step;
        (newIndex >= arr.length) ? newIndex -= arr.length : newIndex;
        return arr[newIndex];
    });

    return result
}


console.log(round([1,2,3,4,5], 4));
console.log(round2([1,2,3,4,5], 1));