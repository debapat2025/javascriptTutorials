function callingApi() {
   console.log("api calling")
}


let lastcall=0;
function throttleScroll() {
  let now= Date.now();
  if(now-lastcall>=2000)
  {
    callingApi();
    lastcall=now;
  }
}

// Throttling ensures that the function is called at most once in every given time (here 2 seconds). No matters how many times the event is triggered, the function will be called only once in the specified time interval. This is useful for optimizing performance and preventing excessive API calls or function executions in response to rapid events like scrolling or resizing.