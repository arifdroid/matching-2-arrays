const perf = require('execution-time')();
perf.start();

const data_stream_int = [1, 2, 3, 6, 2, 106, 5, 3, 1]; //can repeat
const black_box_int = [2, 1, 3, 4, 6, 7]; //unique


var data_stream_string = ["1", "2", "3", "6", "2", "106", "5", "3", "1"]; //can repeat
var black_box_string = ["2", "1", "3", "4", "6", "7"]; //unique

const data_stream_5k = require('./data-5k-random-words/rand_5K_words.json');
const data_stream_10k = require('./data/rand_10K_words.json');
var real_black_box_string = ["somebody", "asda", "hurry", "as11", "box", "kkk"]; //unique



const _filter_fx = (data_stream, filter) => {

    for (var k = 0; k < data_stream.length; k++) {

        //memoize , so if found drop the next 
    }

}

const _filter_fx_2 = (data_stream, filter) => {

    for (var k = 0; k < filter.length; k++) {

        //memoize , so if found drop the next 
    }

}


//regular recursion

const find_matching_recursive = (data1, data2) => {

    let data_filtered_matching = [];

    for (var j = 0; j < data1.length; j++) {

        for(var k=0; k< data2.length; k++){
            if(data1[j] == data2[k]) data_filtered_matching.push(data1[j])
        }
    }   

    return data_filtered_matching;

}

//https://stackoverflow.com/questions/12433604/how-can-i-find-matching-values-in-two-arrays

const diff = (arr1, arr2) => { //this just return matching one, not return unmatch
    var ret = [];
    // this.sort();
    // arr2.sort();
    for (var i = 0; i < arr1.length; i += 1) {
        if (arr2.indexOf(arr1[i]) > -1) {
            ret.push(arr1[i]);
        }
    }
    return ret;
};

// console.log('\n\n => check matching', diff(black_box_string, data_stream_string))

// console.log('\n\n => check matching real 10k data', diff(real_black_box_string, data_stream_10k))

console.log('\n\n => CLASSIC check matching real 5k data', find_matching_recursive(real_black_box_string, data_stream_10k))

// console.log('\n\n data filtered is ->', _filter_fx(data_stream_int, black_box_int))

const results = perf.stop();
console.log('\n\n performance time -> ', results.time); 