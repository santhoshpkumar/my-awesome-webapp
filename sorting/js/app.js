/**
 * Created by santhoshkumar on 30/08/15.
 */

(function () {

    // defaults for canvas graph
    var getDefaults = function() {
        return {
            arrayLimit: 20,
            arrayMinLimit: 4,
            arrayMaxLimit: 50,
            maxValueLimit: 80,
            maxValueMax: 200,
            maxValueMin: 5,
            canvasWidth: 600,
            canvasHeight: 300,
            animationSpeed: 5
        }
    };


    var defaults = getDefaults();
    var randomArr = [];
    var selectionSort, selectionSortGraph,
        bubbleSort, bubbleSortGraph,
        insertionSort, insertionSortGraph,
        shellSort, shellSortGraph,
        heapSort, heapSortGraph;
    var bubbleSortCanvas = document.getElementById('canvasBubbleSort');
    var selectionSortCanvas = document.getElementById('canvasSelectionSort');
    var insertionSortCanvas = document.getElementById('canvasInsertionSort');
    var shellSortCanvas = document.getElementById('canvasShellSort');
    var heapSortCanvas = document.getElementById('canvasHeapSort');

    initialize();
    //Bubble Sort
    $('#btnBubblePlay').click(function () {
        bubbleSortGraph.play();
    });
    $('#btnBubblePause').click(function () {
        bubbleSortGraph.pause();
    });
    $('#btnBubbleRandom').click(function () {
        bubbleSortGraph.pause();
        bubbleSort.setArray(generateRandomArray(bubbleSortGraph.getNoOfItems(),bubbleSortGraph.getMaxValue()));
        bubbleSortGraph.update(bubbleSort);
        bubbleSortGraph.reset();
    });
    $('#btnBubbleReset').click(function () {
        bubbleSortGraph.reset();
    });
    $('#btnBubbleFin').click(function () {
        bubbleSortGraph.fin();
    });
    $('#btnBubbleNext').click(function () {
        bubbleSortGraph.next();
    });
    $('#btnBubblePrev').click(function () {
        bubbleSortGraph.previous();
    });
    $('#btnBubbleSlow').click(function () {
        bubbleSortGraph.increaseAnimationSpeed();
        $('#btnBubbleSpeed').text("0"+bubbleSortGraph.getAnimationSpeed());
    });
    $('#btnBubbleFast').click(function () {
        bubbleSortGraph.decreaseAnimationSpeed();
        if (bubbleSortGraph.getAnimationSpeed() === 10) {
            $('#btnBubbleSpeed').text(bubbleSortGraph.getAnimationSpeed());
        }else{
            $('#btnBubbleSpeed').text("0"+bubbleSortGraph.getAnimationSpeed());
        }
    });
    $('#btnBubbleLess').click(function () {
        bubbleSortGraph.pause();
        var itemsCount = bubbleSortGraph.getNoOfItems();
        if (itemsCount > defaults.arrayMinLimit) {
            bubbleSort.setArray(generateRandomArray(--itemsCount, bubbleSortGraph.getMaxValue()));
            bubbleSortGraph.update(bubbleSort);
            bubbleSortGraph.reset();
            bubbleSortGraph.setNoOfItems(itemsCount);
            $('#btnBubbleNoOfItems').text(itemsCount);
        }
    });
    $('#btnBubbleMore').click(function () {
        bubbleSortGraph.pause();
        var itemsCount = bubbleSortGraph.getNoOfItems();
        if (itemsCount < defaults.arrayMaxLimit) {
            bubbleSort.setArray(generateRandomArray(++itemsCount, bubbleSortGraph.getMaxValue()));
            bubbleSortGraph.update(bubbleSort);
            bubbleSortGraph.reset();
            bubbleSortGraph.setNoOfItems(itemsCount);
            $('#btnBubbleNoOfItems').text(itemsCount);
        }
    });
    $('#btnBubbleDec').click(function () {
        bubbleSortGraph.pause();
        var itemsMax = bubbleSortGraph.getMaxValue();
        if (itemsMax > defaults.maxValueMin) {
            bubbleSort.setArray(generateRandomArray(bubbleSortGraph.getNoOfItems(), --itemsMax));
            bubbleSortGraph.update(bubbleSort);
            bubbleSortGraph.reset();
            bubbleSortGraph.setMaxValue(itemsMax);
            $('#btnBubbleMaxValue').text(itemsMax);
        }
    });
    $('#btnBubbleInc').click(function () {
        bubbleSortGraph.pause();
        var itemsMax = bubbleSortGraph.getMaxValue();
        if (itemsMax < defaults.maxValueMax) {
            bubbleSort.setArray(generateRandomArray(bubbleSortGraph.getNoOfItems(), ++itemsMax));
            bubbleSortGraph.update(bubbleSort);
            bubbleSortGraph.reset();
            bubbleSortGraph.setMaxValue(itemsMax);
            $('#btnBubbleMaxValue').text(itemsMax);
        }
    });

    //Selection Sort
    $('#btnSelectionPlay').click(function () {
        selectionSortGraph.play();
    });
    $('#btnSelectionPause').click(function () {
        selectionSortGraph.pause();
    });
    $('#btnSelectionRandom').click(function () {
        selectionSortGraph.pause();
        selectionSort.setArray(generateRandomArray(selectionSortGraph.getNoOfItems(),selectionSortGraph.getMaxValue()));
        selectionSortGraph.update(selectionSort);
        selectionSortGraph.reset();
    });
    $('#btnSelectionReset').click(function () {
        selectionSortGraph.reset();
    });
    $('#btnSelectionFin').click(function () {
        selectionSortGraph.fin();
    });
    $('#btnSelectionNext').click(function () {
        selectionSortGraph.next();
    });
    $('#btnSelectionPrev').click(function () {
        selectionSortGraph.previous();
    });
    $('#btnSelectionSlow').click(function () {
        selectionSortGraph.increaseAnimationSpeed();
        $('#btnSelectionSpeed').text("0"+selectionSortGraph.getAnimationSpeed());
    });
    $('#btnSelectionFast').click(function () {
        selectionSortGraph.decreaseAnimationSpeed();
        if (selectionSortGraph.getAnimationSpeed() === 10) {
            $('#btnSelectionSpeed').text(selectionSortGraph.getAnimationSpeed());
        }else{
            $('#btnSelectionSpeed').text("0"+selectionSortGraph.getAnimationSpeed());
        }
    });
    $('#btnSelectionLess').click(function () {
        selectionSortGraph.pause();
        var itemsCount = selectionSortGraph.getNoOfItems();
        if (itemsCount > defaults.arrayMinLimit) {
            selectionSort.setArray(generateRandomArray(--itemsCount, selectionSortGraph.getMaxValue()));
            selectionSortGraph.update(selectionSort);
            selectionSortGraph.reset();
            selectionSortGraph.setNoOfItems(itemsCount);
            $('#btnSelectionNoOfItems').text(itemsCount);
        }
    });
    $('#btnSelectionMore').click(function () {
        selectionSortGraph.pause();
        var itemsCount = selectionSortGraph.getNoOfItems();
        if (itemsCount < defaults.arrayMaxLimit) {
            selectionSort.setArray(generateRandomArray(++itemsCount, selectionSortGraph.getMaxValue()));
            selectionSortGraph.update(selectionSort);
            selectionSortGraph.reset();
            selectionSortGraph.setNoOfItems(itemsCount);
            $('#btnSelectionNoOfItems').text(itemsCount);
        }
    });
    $('#btnSelectionDec').click(function () {
        selectionSortGraph.pause();
        var itemsMax = selectionSortGraph.getMaxValue();
        if (itemsMax > defaults.maxValueMin) {
            selectionSort.setArray(generateRandomArray(selectionSortGraph.getNoOfItems(), --itemsMax));
            selectionSortGraph.update(selectionSort);
            selectionSortGraph.reset();
            selectionSortGraph.setMaxValue(itemsMax);
            $('#btnSelectionMaxValue').text(itemsMax);
        }
    });
    $('#btnSelectionInc').click(function () {
        selectionSortGraph.pause();
        var itemsMax = selectionSortGraph.getMaxValue();
        if (itemsMax < defaults.maxValueMax) {
            selectionSort.setArray(generateRandomArray(selectionSortGraph.getNoOfItems(), ++itemsMax));
            selectionSortGraph.update(selectionSort);
            selectionSortGraph.reset();
            selectionSortGraph.setMaxValue(itemsMax);
            $('#btnSelectionMaxValue').text(itemsMax);
        }
    });

    //Insertion Sort
    $('#btnInsertionPlay').click(function () {
        insertionSortGraph.play();
    });
    $('#btnInsertionPause').click(function () {
        insertionSortGraph.pause();
    });
    $('#btnInsertionRandom').click(function () {
        insertionSortGraph.pause();
        insertionSort.setArray(generateRandomArray(insertionSortGraph.getNoOfItems(), insertionSortGraph.getMaxValue()));
        insertionSortGraph.update(insertionSort);
        insertionSortGraph.reset();
    });
    $('#btnInsertionReset').click(function () {
        insertionSortGraph.reset();
    });
    $('#btnInsertionFin').click(function () {
        insertionSortGraph.fin();
    });
    $('#btnInsertionNext').click(function () {
        insertionSortGraph.next();
    });
    $('#btnInsertionPrev').click(function () {
        insertionSortGraph.previous();
    });
    $('#btnInsertionSlow').click(function () {
        insertionSortGraph.increaseAnimationSpeed();
        $('#btnInsertionSpeed').text("0"+insertionSortGraph.getAnimationSpeed());
    });
    $('#btnInsertionFast').click(function () {
        insertionSortGraph.decreaseAnimationSpeed();
        if (insertionSortGraph.getAnimationSpeed() === 10) {
            $('#btnInsertionSpeed').text(insertionSortGraph.getAnimationSpeed());
        }else{
            $('#btnInsertionSpeed').text("0"+insertionSortGraph.getAnimationSpeed());
        }
    });
    $('#btnInsertionLess').click(function () {
        insertionSortGraph.pause();
        var itemsCount = insertionSortGraph.getNoOfItems();
        if (itemsCount > defaults.arrayMinLimit) {
            insertionSort.setArray(generateRandomArray(--itemsCount, insertionSortGraph.getMaxValue()));
            insertionSortGraph.update(insertionSort);
            insertionSortGraph.reset();
            insertionSortGraph.setNoOfItems(itemsCount);
            $('#btnInsertionNoOfItems').text(itemsCount);
        }
    });
    $('#btnInsertionMore').click(function () {
        insertionSortGraph.pause();
        var itemsCount = insertionSortGraph.getNoOfItems();
        if (itemsCount < defaults.arrayMaxLimit) {
            insertionSort.setArray(generateRandomArray(++itemsCount, insertionSortGraph.getMaxValue()));
            insertionSortGraph.update(insertionSort);
            insertionSortGraph.reset();
            insertionSortGraph.setNoOfItems(itemsCount);
            $('#btnInsertionNoOfItems').text(itemsCount);
        }
    });
    $('#btnInsertionDec').click(function () {
        insertionSortGraph.pause();
        var itemsMax = insertionSortGraph.getMaxValue();
        if (itemsMax > defaults.maxValueMin) {
            insertionSort.setArray(generateRandomArray(insertionSortGraph.getNoOfItems(), --itemsMax));
            insertionSortGraph.update(insertionSort);
            insertionSortGraph.reset();
            insertionSortGraph.setMaxValue(itemsMax);
            $('#btnInsertionMaxValue').text(itemsMax);
        }
    });
    $('#btnInsertionInc').click(function () {
        insertionSortGraph.pause();
        var itemsMax = insertionSortGraph.getMaxValue();
        if (itemsMax < defaults.maxValueMax) {
            insertionSort.setArray(generateRandomArray(insertionSortGraph.getNoOfItems(), ++itemsMax));
            insertionSortGraph.update(insertionSort);
            insertionSortGraph.reset();
            insertionSortGraph.setMaxValue(itemsMax);
            $('#btnInsertionMaxValue').text(itemsMax);
        }
    });

    //Shell Sort
    $('#btnShellPlay').click(function () {
        shellSortGraph.play();
    });
    $('#btnShellPause').click(function () {
        shellSortGraph.pause();
    });
    $('#btnShellRandom').click(function () {
        shellSortGraph.pause();
        shellSort.setArray(generateRandomArray(shellSortGraph.getNoOfItems(), shellSortGraph.getMaxValue()));
        shellSortGraph.update(shellSort);
        shellSortGraph.reset();
    });
    $('#btnShellReset').click(function () {
        shellSortGraph.reset();
    });
    $('#btnShellFin').click(function () {
        shellSortGraph.fin();
    });
    $('#btnShellNext').click(function () {
        shellSortGraph.next();
    });
    $('#btnShellPrev').click(function () {
        shellSortGraph.previous();
    });
    $('#btnShellSlow').click(function () {
        shellSortGraph.increaseAnimationSpeed();
        $('#btnShellSpeed').text("0"+shellSortGraph.getAnimationSpeed());
    });
    $('#btnShellFast').click(function () {
        shellSortGraph.decreaseAnimationSpeed();
        if (shellSortGraph.getAnimationSpeed() === 10) {
            $('#btnShellSpeed').text(shellSortGraph.getAnimationSpeed());
        }else{
            $('#btnShellSpeed').text("0"+shellSortGraph.getAnimationSpeed());
        }
    });
    $('#btnShellLess').click(function () {
        shellSortGraph.pause();
        var itemsCount = shellSortGraph.getNoOfItems();
        if (itemsCount > defaults.arrayMinLimit) {
            shellSort.setArray(generateRandomArray(--itemsCount, shellSortGraph.getMaxValue()));
            shellSortGraph.update(shellSort);
            shellSortGraph.reset();
            shellSortGraph.setNoOfItems(itemsCount);
            $('#btnShellNoOfItems').text(itemsCount);
        }
    });
    $('#btnShellMore').click(function () {
        shellSortGraph.pause();
        var itemsCount = shellSortGraph.getNoOfItems();
        if (itemsCount < defaults.arrayMaxLimit) {
            shellSort.setArray(generateRandomArray(++itemsCount, shellSortGraph.getMaxValue()));
            shellSortGraph.update(shellSort);
            shellSortGraph.reset();
            shellSortGraph.setNoOfItems(itemsCount);
            $('#btnShellNoOfItems').text(itemsCount);
        }
    });
    $('#btnShellDec').click(function () {
        shellSortGraph.pause();
        var itemsMax = shellSortGraph.getMaxValue();
        if (itemsMax > defaults.maxValueMin) {
            shellSort.setArray(generateRandomArray(shellSortGraph.getNoOfItems(), --itemsMax));
            shellSortGraph.update(shellSort);
            shellSortGraph.reset();
            shellSortGraph.setMaxValue(itemsMax);
            $('#btnShellMaxValue').text(itemsMax);
        }
    });
    $('#btnShellInc').click(function () {
        shellSortGraph.pause();
        var itemsMax = shellSortGraph.getMaxValue();
        if (itemsMax < defaults.maxValueMax) {
            shellSort.setArray(generateRandomArray(shellSortGraph.getNoOfItems(), ++itemsMax));
            shellSortGraph.update(shellSort);
            shellSortGraph.reset();
            shellSortGraph.setMaxValue(itemsMax);
            $('#btnShellMaxValue').text(itemsMax);
        }
    });

    //Heap Sort
    $('#btnHeapPlay').click(function () {
      heapSortGraph.play();
    });
    $('#btnHeapPause').click(function () {
      heapSortGraph.pause();
    });
    $('#btnHeapRandom').click(function () {
      heapSortGraph.pause();
      heapSort.setArray(generateRandomArray(heapSortGraph.getNoOfItems(), heapSortGraph.getMaxValue()));
      heapSortGraph.update(heapSort);
      heapSortGraph.reset();
    });
    $('#btnHeapReset').click(function () {
      heapSortGraph.reset();
    });
    $('#btnHeapFin').click(function () {
      heapSortGraph.fin();
    });
    $('#btnHeapNext').click(function () {
      heapSortGraph.next();
    });
    $('#btnHeapPrev').click(function () {
      heapSortGraph.previous();
    });
    $('#btnHeapSlow').click(function () {
      heapSortGraph.increaseAnimationSpeed();
      $('#btnHeapSpeed').text("0"+heapSortGraph.getAnimationSpeed());
    });
    $('#btnHeapFast').click(function () {
      heapSortGraph.decreaseAnimationSpeed();
      if (heapSortGraph.getAnimationSpeed() === 10) {
        $('#btnHeapSpeed').text(heapSortGraph.getAnimationSpeed());
      }else{
        $('#btnHeapSpeed').text("0"+heapSortGraph.getAnimationSpeed());
      }
    });
    $('#btnHeapLess').click(function () {
      heapSortGraph.pause();
      var itemsCount = heapSortGraph.getNoOfItems();
      if (itemsCount > defaults.arrayMinLimit) {
        heapSort.setArray(generateRandomArray(--itemsCount, heapSortGraph.getMaxValue()));
        heapSortGraph.update(heapSort);
        heapSortGraph.reset();
        heapSortGraph.setNoOfItems(itemsCount);
        $('#btnHeapNoOfItems').text(itemsCount);
      }
    });
    $('#btnHeapMore').click(function () {
      heapSortGraph.pause();
      var itemsCount = heapSortGraph.getNoOfItems();
      if (itemsCount < defaults.arrayMaxLimit) {
        heapSort.setArray(generateRandomArray(++itemsCount, heapSortGraph.getMaxValue()));
        heapSortGraph.update(heapSort);
        heapSortGraph.reset();
        heapSortGraph.setNoOfItems(itemsCount);
        $('#btnHeapNoOfItems').text(itemsCount);
      }
    });
    $('#btnHeapDec').click(function () {
      heapSortGraph.pause();
      var itemsMax = heapSortGraph.getMaxValue();
      if (itemsMax > defaults.maxValueMin) {
        heapSort.setArray(generateRandomArray(heapSortGraph.getNoOfItems(), --itemsMax));
        heapSortGraph.update(heapSort);
        heapSortGraph.reset();
        heapSortGraph.setMaxValue(itemsMax);
        $('#btnHeapMaxValue').text(itemsMax);
      }
    });
    $('#btnHeapInc').click(function () {
      heapSortGraph.pause();
      var itemsMax = heapSortGraph.getMaxValue();
      if (itemsMax < defaults.maxValueMax) {
        heapSort.setArray(generateRandomArray(heapSortGraph.getNoOfItems(), ++itemsMax));
        heapSortGraph.update(heapSort);
        heapSortGraph.reset();
        heapSortGraph.setMaxValue(itemsMax);
        $('#btnHeapMaxValue').text(itemsMax);
      }
    });

    $('#btnBubbleSpeed').text("0"+defaults.animationSpeed);
    $('#btnSelectionSpeed').text("0"+defaults.animationSpeed);
    $('#btnInsertionSpeed').text("0"+defaults.animationSpeed);
    $('#btnShellSpeed').text("0"+defaults.animationSpeed);
    $('#btnHeapSpeed').text("0"+defaults.animationSpeed);

    $('#btnBubbleNoOfItems').text(defaults.arrayLimit);
    $('#btnSelectionNoOfItems').text(defaults.arrayLimit);
    $('#btnInsertionNoOfItems').text(defaults.arrayLimit);
    $('#btnShellNoOfItems').text(defaults.arrayLimit);
    $('#btnHeapNoOfItems').text(defaults.arrayLimit);

    $('#btnBubbleMaxValue').text(defaults.maxValueLimit);
    $('#btnSelectionMaxValue').text(defaults.maxValueLimit);
    $('#btnInsertionMaxValue').text(defaults.maxValueLimit);
    $('#btnShellMaxValue').text(defaults.maxValueLimit);
    $('#btnHeapMaxValue').text(defaults.maxValueLimit);

    function initialize() {
        // Register an event listener to
        // call the resizeCanvas() function each time
        // the window is resized.
        window.addEventListener('resize', resizeCanvas, false);

        initialiseRandomArray();

        // Obtain a graphics context on the canvas element for drawing
        bubbleSortGraph = new BarGraph(bubbleSortCanvas.getContext('2d'));
        selectionSortGraph = new BarGraph(selectionSortCanvas.getContext('2d'));
        insertionSortGraph = new BarGraph(insertionSortCanvas.getContext('2d'));
        shellSortGraph = new BarGraph(shellSortCanvas.getContext('2d'));
        heapSortGraph = new BarGraph(heapSortCanvas.getContext('2d'));

        bubbleSort = new BubbleSort();
        selectionSort = new SelectionSort();
        insertionSort = new InsertionSort();
        shellSort = new ShellSort();
        heapSort = new HeapSort();

        updateCanvasSize();

        bubbleSort.setArray(randomArr.slice());
        bubbleSortGraph.setNoOfItems(defaults.arrayLimit);
        bubbleSortGraph.setMaxValue(defaults.maxValueLimit);
        bubbleSortGraph.setAnimationSpeed(defaults.animationSpeed);
        bubbleSortGraph.update(bubbleSort);
        bubbleSortGraph.play();

        selectionSort.setArray(randomArr.slice());
        selectionSortGraph.setNoOfItems(defaults.arrayLimit);
        selectionSortGraph.setMaxValue(defaults.maxValueLimit);
        selectionSortGraph.setAnimationSpeed(defaults.animationSpeed);
        selectionSortGraph.update(selectionSort);
        selectionSortGraph.play();

        insertionSort.setArray(randomArr.slice());
        insertionSortGraph.setNoOfItems(defaults.arrayLimit);
        insertionSortGraph.setMaxValue(defaults.maxValueLimit);
        insertionSortGraph.setAnimationSpeed(defaults.animationSpeed);
        insertionSortGraph.update(insertionSort);
        insertionSortGraph.play();

        shellSort.setArray(randomArr.slice());
        shellSortGraph.setNoOfItems(defaults.arrayLimit);
        shellSortGraph.setMaxValue(defaults.maxValueLimit);
        shellSortGraph.setAnimationSpeed(defaults.animationSpeed);
        shellSortGraph.update(shellSort);
        shellSortGraph.play();

        heapSort.setArray(randomArr.slice());
        heapSortGraph.setNoOfItems(defaults.arrayLimit);
        heapSortGraph.setMaxValue(defaults.maxValueLimit);
        heapSortGraph.setAnimationSpeed(defaults.animationSpeed);
        heapSortGraph.update(heapSort);
        heapSortGraph.play();

    }

    function initialiseRandomArray(){
        for (var l = 0; l < defaults.arrayLimit; l++){
            randomArr.push(parseInt(Math.random()*defaults.maxValueLimit));
        }
    }

    function generateRandomArray(noOfItems, maxItemValue){
        var randomised = [];
        for (var l = 0; l < noOfItems; l++){
            randomised.push(parseInt(Math.random()*maxItemValue));
        }
        return randomised;
    }

    function resizeCanvas() {
        updateCanvasSize();
        bubbleSortGraph.reSize();
        selectionSortGraph.reSize();
        insertionSortGraph.reSize();
        shellSortGraph.reSize();
        heapSortGraph.reSize();
    }

    function updateCanvasSize() {
        var newWidth = window.innerWidth;
        if (newWidth <= defaults.canvasWidth){
          bubbleSortGraph.setWidth(newWidth - parseInt(newWidth/10));
          selectionSortGraph.setWidth(newWidth - parseInt(newWidth/10));
          insertionSortGraph.setWidth(newWidth - parseInt(newWidth/10));
          shellSortGraph.setWidth(newWidth - parseInt(newWidth/10));
          heapSortGraph.setWidth(newWidth - parseInt(newWidth/10));
        }else{
          bubbleSortGraph.setWidth(defaults.canvasWidth);
          selectionSortGraph.setWidth(defaults.canvasWidth);
          insertionSortGraph.setWidth(defaults.canvasWidth);
          shellSortGraph.setWidth(defaults.canvasWidth);
          heapSortGraph.setWidth(defaults.canvasWidth);
        }
        var newHeight = window.innerHeight;
        if (newHeight <= defaults.canvasHeight){
          bubbleSortGraph.setHeight(newHeight - parseInt(newHeight/10));
          selectionSortGraph.setHeight(newHeight - parseInt(newHeight/10));
          insertionSortGraph.setHeight(newHeight - parseInt(newHeight/10));
          shellSortGraph.setHeight(newHeight - parseInt(newHeight/10));
          heapSortGraph.setHeight(newHeight - parseInt(newHeight/10));
        }else{
          bubbleSortGraph.setHeight(defaults.canvasHeight);
          selectionSortGraph.setHeight(defaults.canvasHeight);
          insertionSortGraph.setHeight(defaults.canvasHeight);
          shellSortGraph.setHeight(defaults.canvasHeight);
          heapSortGraph.setHeight(defaults.canvasHeight);
        }
    }
}());
