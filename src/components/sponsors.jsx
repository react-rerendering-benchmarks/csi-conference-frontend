import { memo } from "react";
import React from "react";
import Ud from "./ud";
const sponsors = memo(() => {
  console.log(window.globalCount++);
  return <Ud />;
});
export default sponsors;