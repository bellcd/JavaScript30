
window.onload = (e) => {
  let video = document.querySelector('video');
  let timestamp = video.currentTime;
  let progressBar = document.querySelector('.progress');

  // scrubBar
  let scrubSetup = () => {
    progressBar.addEventListener('mousemove', scrub);
    // document.addEventListener('mousemove', scrub); // TODO: why does this not work ?? along with #2
  }

  let scrub = (e) => {

    const percent = calculatePercent(e);
    // console.log('clientX / srcElement.clientWidth: ', e.clientX / e.srcElement.clientWidth); // TODO: why do these not calculate the percent correctly??
    // console.log('e.x / e.srcElement.clientWidth: ', e.x, e.srcElement.clientWidth);

    video.currentTime = video.duration * percent;

    document.querySelector('.progress__filled').style = `flex-basis: ${percent * 100}%`;
  }

  let calculatePercent = (e) => {
    const screenX = e.screenX;
    const progressBarWidth = progressBar.clientWidth;
    const innerWidth = window.innerWidth;
    const margin = (innerWidth - progressBarWidth) / 2;

    return (screenX - margin) / progressBarWidth;
  }

  document.addEventListener('mousedown', scrubSetup);
  document.addEventListener('mouseup', () => {
    progressBar.removeEventListener('mousemove', scrub);
    // document.removeEventListener('mousemove', scrub); // TODO #2
  });

}

// on mousedown on the scrub bar
  // add event listener on mousemove
    // each mousemove event calculates the current position as a percentage of the div's width
    // seeks the video to that percent
    // updates the visual to display that percent of the scrub bar filled
// on mouseup on the scrub bar
  // removes that event listener