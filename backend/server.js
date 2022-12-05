/*
* Amanpreet Kapoor Module 6 Slides
*/

//Require Statements
const fs = require('fs');
const path = require('path');
const json = require('big-json');

//Create a read and parse stream to get data from JSON file
const readStream = fs.createReadStream('../data.json');
const parseStream = json.createParseStream();

//Create express server
var express = require('express');
var server = express();

//Data object that will hold array of branded food items
var data;

//Parses input from data.json
parseStream.on('data', (d) => {
  data = d;

  //Removes unnecessary spaces and quotations around food items so that they can be properly lexicographically sorted
  for (let i = 0; i < data.BrandedFoods.length; i++)
  {
    if (data.BrandedFoods[i].description[0] == ' ')
      data.BrandedFoods[i].description = 
      data.BrandedFoods[i].description.replace(' ', '');

    data.BrandedFoods[i].description = 
    data.BrandedFoods[i].description.replaceAll('\"', '');
  }

  //Logs that the data has been parsed and is ready to use
  console.log("Data parsed! API is ready to use.");
})

//Reads the parsed stream
readStream.pipe(parseStream);

//Creates a backend server on port 5600
server.listen(5600, () => {
  console.log("\nServer is running on port 5600");
})

//Uploads top 10 merge sorted food items to backend server
server.get("/mergeSortedData", (req, res) => {
  let dataCopy = data.BrandedFoods.slice();
  
  var startTime = performance.now();
  mergeSort(dataCopy);
  var endTime = performance.now();

  let totalExecutionTime = endTime - startTime;

  const resData = {
    list: dataCopy.slice(0, 10),
    time: totalExecutionTime
  }

  res.json(resData);

  delete dataCopy;
})

//Uploads top 10 quick sorted food items to backend server
server.get("/quickSortedData", (req, res) => {
  let dataCopy2 = data.BrandedFoods.slice(0, data.BrandedFoods.length/8);

  var startTime = performance.now();
  quickSort(dataCopy2);
  var endTime = performance.now();

  let totalExecutionTime = endTime - startTime;

  const resData = {
    list: dataCopy2.slice(0, 10),
    time: totalExecutionTime
  }
  
  res.json(resData);

  delete dataCopy2;
})

/**
 * Merge sorts an input array from index 0 to end of array
 * @param {*} arr 
 */
function mergeSort(arr) {mergeSortHelper(arr, 0, arr.length-1);}

/**
 * Recursive function that calculates new midpoint that exists and calls merge on parent call stack once left pointer is no longer less than right pointer
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 */
function mergeSortHelper(arr, left, right) {
  if(left < right)
  {
    let mid = Math.floor((left+right)/2);
    mergeSortHelper(arr, left, mid);
    mergeSortHelper(arr, mid + 1, right);

    merge(arr, left, mid, right);
  }
}

/**
 * Creates two subarrays from input array and merges them in ascending order (lexicographically)
 * @param {*} arr 
 * @param {*} left 
 * @param {*} mid 
 * @param {*} right 
 */
function merge(arr, left, mid, right) {
  
  let n1 = mid - left + 1;
  let n2 = right - mid;

  const X = arr.slice(left, mid + 1);
  const Y = arr.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while(i < n1 && j < n2)
  {
    if(X[i].description[0] <= Y[j].description[0])
    {
      arr[k] = X[i];
      i++;
    }
    else
    {
      arr[k] = Y[j];
      j++;
    }
    k++;
  }

  while(i < n1)
  {
    arr[k] = X[i];
    i++;
    k++;
  }

  while(j < n2)
  {
    arr[k] = Y[j];
    j++;
    k++;
  }
}

/**
 * Quick sorts an input array from index 0 to end of array
 * @param {*} arr 
 */
function quickSort(arr) { quickSortHelper(arr, 0, arr.length-1); }

/**
* Recursive function that calculates partition index and exits once low pointer is no longer less than right pointer
* @param {*} arr 
* @param {*} low 
* @param {*} high 
*/
function quickSortHelper(arr, low, high) {
  if(low < high)
  {
    let pivot = partition(arr, low, high);
    quickSortHelper(arr, low, pivot - 1);
    quickSortHelper(arr, pivot + 1, high);
  }
}

/**
* Partition function that finds and swaps necessary elements 
* @param {*} arr 
* @param {*} low 
* @param {*} high 
* @returns pivot index
*/
  function partition(arr, low, high) {
  let pivot = arr[low];
  let up = low;
  let down = high;

  while(up < down)
  {
    for(let j = up; j < high; j++)
    {
      if(arr[up].description[0] > pivot.description[0])
        break;
      up++;
    }
    for(let j = high; j > low; j--)
    {
      if(arr[down].description[0] < pivot.description[0])
        break;
      down--;
    }
    if(up < down)
      swap(arr, up, down);
  }
  swap(arr, low, down);
  return down;
}

/**
* Swaps two elements of an input array
* @param {*} arr 
* @param {*} index1 
* @param {*} index2 
*/
function swap(arr, index1, index2)
{
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}