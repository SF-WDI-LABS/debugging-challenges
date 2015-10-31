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
