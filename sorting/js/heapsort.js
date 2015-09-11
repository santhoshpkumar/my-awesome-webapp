/**
 * Created by santhoshkumar on 11/09/15.
 */

function HeapSort() {
  var arr;
  var traceLogger = [];

  var generateFrame = function(color){
    var arrayTrace = [];
    for (var i = 0; i < arr.length; i++) {
      arrayTrace.push({value:arr[i],color:color});
    }
    traceLogger.push(arrayTrace);
  };

  var generateCompareFrame = function(left,right,index,size){
    var arrayTrace = [];
    for (var i = 0; i < size; i++) {
      if ( i === left || i === right || i ===index){
        arrayTrace.push({value: arr[i], color: "yellow"});
      }else {
        arrayTrace.push({value: arr[i], color: "red"});
      }
    }
    for (i = size; i < arr.length; i++) {
        arrayTrace.push({value: arr[i], color: "green"});
    }
    traceLogger.push(arrayTrace);
  };

  var generateSwapFrame = function(left,index,size){
    var arrayTrace = [];
    for (var i = 0; i < size; i++) {
      if ( i === left || i ===index){
        arrayTrace.push({value: arr[i], color: "purple"});
      }else {
        arrayTrace.push({value: arr[i], color: "red"});
      }
    }
    for (i = size; i < arr.length; i++) {
      if ( i === left || i === index){
        arrayTrace.push({value: arr[i], color: "blue"});
      }else {
        arrayTrace.push({value: arr[i], color: "green"});
      }
    }
    traceLogger.push(arrayTrace);
  };

  var heapify = function(index, heapSize) {
    var left = 2 * index + 1,
      right = 2 * index + 2,
      largest = index;

    var compared = false;

    if (left < heapSize && arr[left] > arr[index]) {
      largest = left;
      compared = true;
    }

    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
      compared = true;
    }

    if(compared) {
      generateCompareFrame(left, right, index, heapSize);
    }

    if (largest !== index) {
      generateSwapFrame(largest, index, heapSize);
      var temp = arr[index];
      arr[index] = arr[largest];
      arr[largest] = temp;
      generateSwapFrame(largest, index, heapSize);

      heapify( largest, heapSize);
    }
  };

  var buildMaxHeap = function() {
    for (var i = Math.floor(arr.length / 2); i >= 0; i -= 1) {
      heapify( i, arr.length);
    }
  };

  this.setArray = function(array) {
    arr = array;
  };

  this.sort = function () {

    traceLogger = [];
    generateFrame("red");
    var temp;
    buildMaxHeap(arr);
    generateFrame("grey");
    for (var i = arr.length - 1; i > 0; i -= 1) {
      generateSwapFrame(0,i,i);
      temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      generateSwapFrame(0,i,i);
      heapify( 0, i);
    }
    generateFrame("green");
    return traceLogger;
  };

}
