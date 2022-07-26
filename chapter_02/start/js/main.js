const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .style("border", "2px solid black");

// Append a rectangle element into the SVG container
svg
  .append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 160)
  .attr("fill", "turquoise")
  .style("fill", "plum");