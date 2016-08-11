TweenMax.set('svg', {
  visibility: 'visible'
});

var tl = new TimelineMax();

tl
// Bounding box w/ Droplet
.from('#Automate-SVG', 1, {
  y: 25,
  opacity: 0
})
// Terminal box
.from('#Automate-terminal rect', 1, {
  drawSVG: '0'
})
// Terminal window management dots
.staggerFrom('#Automate-terminal .Automate-boxBorder', 0.25, {
  opacity: 0,
  y: 5
}, 0.05)
// Terminal lines
.staggerFrom('#Automate-terminal .Automate-greenLine', 0.5, {
  opacity: 0,
  y: 5
}, 0.1)
// Bottom right circle on terminal
.from('#Automate-terminalPoint', 0.25, {
  scale: 0,
  transformOrigin: 'center center'
})
// Line from terminal to box
.from('#Automate-lineToBox', 1, {
  drawSVG: '0'
})
// Top left point on box
.from('#Automate-boxPointTL', 0.25, {
  scale: 0,
  transformOrigin: 'center center'
})
// Lines
.from('.Automate-dropletGroup:not(.Automate-dropletGroup--segment) .Automate-line', 2, {
  drawSVG: '0'
}, 'line-segment')
// Lines (segments)
.from('.Automate-dropletGroup.Automate-dropletGroup--segment .Automate-line', 1, {
  delay: 1,
  drawSVG: '0'
}, 'line-segment')
.from('.Automate-droplet', 0.75, {
  scale: 0,
  transformOrigin: 'center center',
  ease: Elastic.easeOut.config(1, 1)
})
// Replay button
.from('.replay', 0.25, {
  scale: 0
})
// Radar circle on terminal (pulse)
.fromTo('#Automate-radarCircle', 2, {
  scale: 0,
  transformOrigin: 'center center'
}, {
  scale: 1.5,
  opacity: 0,
  transformOrigin: 'center center',
  repeat: -1
});

document.querySelector('.replay').addEventListener('click', function(e) {
  e.preventDefault();

  tl.restart();
})
