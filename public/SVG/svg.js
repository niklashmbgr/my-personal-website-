const svgObject = {
  close:
    "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z",
};
const SVG = ({ size = "24px", color = "currentColor", variant }) => {
  return (
    <svg style={{ width: size, height: size }} viewBox="0 0 24 24">
      <path fill={color} d={svgObject[variant]} />
    </svg>
  );
};
export default SVG;
