const container = document.getElementById("container");
const svg = document.getElementById("svg");

let startDot = null;
let tempLine = null;

// Correct matches
const correct = {
  b1: "b4",
  b3: "b6",
  b5: "b2"
};

// Get dot center
function getDotCenter(dot) {
  const r = dot.getBoundingClientRect();
  const c = container.getBoundingClientRect();

  return {
    x: r.left + r.width / 2 - c.left,
    y: r.top + r.height / 2 - c.top
  };
}

// Start drag from DOT
document.querySelectorAll(".dot").forEach(dot => {
  dot.addEventListener("mousedown", e => {
    e.stopPropagation();

    startDot = dot;
    const p = getDotCenter(dot);

    tempLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    tempLine.setAttribute("x1", p.x);
    tempLine.setAttribute("y1", p.y);
    tempLine.setAttribute("x2", p.x);
    tempLine.setAttribute("y2", p.y);
    tempLine.setAttribute("stroke", "red");
    tempLine.setAttribute("stroke-width", "3");

    svg.appendChild(tempLine);
  });
});

// Drag
document.addEventListener("mousemove", e => {
  if (!tempLine) return;

  const c = container.getBoundingClientRect();
  tempLine.setAttribute("x2", e.clientX - c.left);
  tempLine.setAttribute("y2", e.clientY - c.top);
});

// Drop on DOT
document.querySelectorAll(".dot").forEach(dot => {
  dot.addEventListener("mouseup", e => {
    if (!tempLine || !startDot || dot === startDot) return;

    svg.removeChild(tempLine);
    tempLine = null;

    const fromBox = startDot.parentElement.id;
    const toBox = dot.parentElement.id;

    const p1 = getDotCenter(startDot);
    const p2 = getDotCenter(dot);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", p1.x);
    line.setAttribute("y1", p1.y);
    line.setAttribute("x2", p2.x);
    line.setAttribute("y2", p2.y);
    line.setAttribute("stroke-width", "3");

    if (correct[fromBox] === toBox) {
      line.setAttribute("stroke", "green");
      svg.appendChild(line);
    } else {
      line.setAttribute("stroke", "red");
      svg.appendChild(line);
      setTimeout(() => line.remove(), 800);
    }

    startDot = null;
  });
});
