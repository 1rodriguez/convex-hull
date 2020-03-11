"use-strict";

import * as cHull from "../scripts/convex-hull.js";

const rectangle = document.getElementById("viewfinder");

rectangle.addEventListener("click", function(ev) {
  if (!ev.target.classList.contains("draggable")) {
    let y = ev.layerY - rectangle.offsetTop;
    let x = ev.layerX - rectangle.offsetLeft;
    createPoint(x, y);
    console.log(cHull.convexHull(ev));
  }
});

/**
 * setting up svg element for placement of circles
 */
var ns = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(ns, "svg");
svg.setAttributeNS(null, "id", "canvas");
svg.setAttributeNS(null, "width", "100%");
svg.setAttributeNS(null, "height", "100%");
rectangle.appendChild(svg);

let createPoint = function(xC, yC) {
  let circ = document.createElementNS(ns, "circle");
  circ.setAttribute("class", "draggable");
  circ.setAttribute("cx", xC.toString());
  circ.setAttribute("cy", yC.toString());
  const w = screen.width * 0.003;

  circ.setAttribute("r", w.toString());
  circ.setAttribute("fill", "gray");
  svg.appendChild(circ);
};

function makeDraggable(evt) {
  var svg = evt.target;
  svg.addEventListener("mousedown", startDrag);
  svg.addEventListener("mousemove", drag);
  svg.addEventListener("mouseup", endDrag);
  svg.addEventListener("mouseleave", endDrag);
  svg.addEventListener("dblclick", deleteElement);

  let selectedElement = false;

  function deleteElement(evt) {
    if (evt.target.classList.contains("draggable")) {
      document.getElementById("canvas").removeChild(evt.target);
    }
  }

  function startDrag(evt) {
    if (evt.target.classList.contains("draggable")) {
      selectedElement = evt.target;
      console.log(cHull.convexHull(ev.target));
    }
  }

  function drag(evt) {
    if (selectedElement) {
      evt.preventDefault();
      var x = parseFloat(selectedElement.getAttribute("cx"));
      var y = parseFloat(selectedElement.getAttribute("cy"));

      let mouseX = event.clientX - rectangle.offsetLeft; // x coordinate relative to rectangle
      let mouseY = event.clientY - rectangle.offsetTop; // y coordinate relative to rectangle
      selectedElement.setAttributeNS(null, "cx", mouseX.toString());
      selectedElement.setAttributeNS(null, "cy", mouseY.toString());
      console.log(cHull.convexHull(evt));
    }
  }

  function endDrag(evt) {
    selectedElement = null;
  }
}
window.onload = makeDraggable;
