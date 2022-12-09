import { PropsWithChildren } from "react";
import { css } from "@emotion/react";

const color = "white";

export const Component = (props: PropsWithChildren<any>) => {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      {props.children}
    </div>
  );
};
