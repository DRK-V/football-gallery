// src/declarations.d.ts
declare module "*.jsx" {
  import React from "react";
  const Component: React.FC<any>;
  export default Component;
}
