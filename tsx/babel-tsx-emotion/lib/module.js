import { css } from "@emotion/react";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
const color = "white";
export const Component = props => {
  return _jsx("div", {
    css: /*#__PURE__*/css("padding:32px;background-color:hotpink;font-size:24px;border-radius:4px;&:hover{color:", color, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:Component;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2R1bGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFjIiwiZmlsZSI6Ii4uL3NyYy9tb2R1bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5jb25zdCBjb2xvciA9IFwid2hpdGVcIjtcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudCA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48YW55PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */"),
    children: props.children
  });
};