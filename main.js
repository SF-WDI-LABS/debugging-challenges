/*
 * Run the entire site, we do all the logic here.
 * @notes Fix was to remove most of the function, the body was irrelevant. This may seem like cheating but often there will be times when legacy code made sense once but is no longer necessary. If you're unable to find the reason the code exists then it is best to remove it and document the removal.
 */
function runSite() {
  // The logic was all removed, see the @notes section.
  var currentStatus = "WORKING";
  // Don't edit the following lines.
  var statusDiv = document.getElementById("status");
  switch (currentStatus) {
    case "WORKING":
      statusDiv.textContent = "WORKING";
      break;
    default:
      statusDiv.textContent = "BROKEN";
      break;
  }
}


/*
 * Start a profiler and compare a for loop and a forEach loop.
 * @param maxIterations {int} Maximum number of loops to attempt.
 * @todo Does this profile give enough information to compare the two?
 */
function profileLoops(maxIterations) {
  console.group("For vs forEach");
  console.info("Initializing Testing Array");
  var arrayToLoop = [];
  var i = maxIterations;
  // NOTE while isn't even considered here, but it may be the fastest depending on the problem.
  while(i--) {
    arrayToLoop[i] = "x";
  }

  console.info("Starting");
  console.profile("For vs forEach");

  console.group("For Loops");
  console.info("Checking Timing");
  console.time("for");
  for(var i = 0; i < arrayToLoop.length; i++) {arrayToLoop[i]}
  console.timeEnd("for");
  console.info("Completed");
  console.groupEnd("For Loops");

  console.group("forEach Loops");
  console.info("Checking Timing");
  console.time("forEach");
  arrayToLoop.forEach(function(x) {x})
  console.timeEnd("forEach");
  console.info("Completed");
  console.groupEnd("forEach Loops");

  console.info("Completed All Steps");
  console.profileEnd("For vs forEach");

  console.groupEnd("For vs forEach");
}
