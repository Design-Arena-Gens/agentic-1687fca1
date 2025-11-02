import { JSX as ReactThreeFiberJSX } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements extends ReactThreeFiberJSX.IntrinsicElements {}
  }
}

export {};
