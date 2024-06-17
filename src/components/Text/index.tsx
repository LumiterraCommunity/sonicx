import React from "react";

const sizes = {
  lg: "text-[40px] font-normal md:text-[38px] sm:text-4xl",
  xs: "text-lg font-normal",
  s: "text-xl font-normal",
  md: "text-[40px] font-normal md:text-[38px] sm:text-4xl",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-lime-900_31 font-swisblkcnbt ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
