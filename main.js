/*
 * Run the entire site, we do all the logic here.
 * @todo Fix this function to make the site "run". It will be running when the status in the HTML page is changed to the word "WORKING".
 */
function runSite() {
  debugger
  var working;
  var starting = true;
  var currentStatus;

  if(starting) {
    var started = false;
  }

  if (currentStatus = "STARTING") {
    currentStatus = started;
  }

  if(currentStatus != "STARTED") {
    currentStatus -= "undefined";
  }
  
  if (currentStatus == "STARTED") {
    var newStatus = currentStatus.split("");
    currentStatus = newStatus.splice(0, 9).join();
  }

  function checkSite(siteStatus) {
    if(siteStatus == "STARTED") {
      var working = true;
      siteStatus = "IN PROGRESS";
    }
  }(currentStatus);

  if (working) {
    siteStatus = "STAGE TWO";
  }

  for (var i = 0; i < 27; i++) {
    if (i == 27 && siteStatus == "STAGE TWO" && currentStatus == "IN PROGRESS") {
      currentStatus = "WORKING";
    }
  }

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
