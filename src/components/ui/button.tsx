import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import {
  AbsoluteCenter,
  Button as ChakraButton,
  Spinner,
  useToken,
} from "@chakra-ui/react";
import * as React from "react";
import tinycolor from "tinycolor2";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { loading, disabled, loadingText, children, bg, _hover, ...rest } = props;

    // Use Chakra's useToken to ensure compatibility with theme-based colors
    const bgColor = useToken("colors", bg as string) || bg;
    const hoverColor = tinycolor(bgColor).lighten(20).toString(); // Generate lighter hover color

    return (
      <ChakraButton
        disabled={loading || disabled}
        ref={ref}
        bg={bgColor}
        _hover={{
          bg: hoverColor,
          ..._hover, // Allow overriding hover behavior via props
        }}
        {...rest}
      >
        {loading && !loadingText ? (
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner size="inherit" color="inherit" />
            </AbsoluteCenter>
            <span style={{ opacity: 0 }}>{children}</span>
          </>
        ) : loading && loadingText ? (
          <>
            <Spinner size="inherit" color="red" />
            {loadingText}
          </>
        ) : (
          children
        )}
      </ChakraButton>
    );
  }
);
