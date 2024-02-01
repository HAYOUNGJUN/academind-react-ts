import { ReactNode, type ComponentPropsWithoutRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};
type ButtonProps = ComponentPropsWithoutRef<'button'> &
  BaseProps & { to?: never };
type LinkButtonProps = LinkProps & BaseProps & { to: string };

function isLinkButtonProps(
  props: ButtonProps | LinkButtonProps
): props is LinkButtonProps {
  return 'to' in props;
}

export default function Button(props: ButtonProps | LinkButtonProps) {
  if (isLinkButtonProps(props)) {
    const { children, textOnly, ...otherProps } = props;

    return (
      <Link
        className={`button ${textOnly ? 'button--text-only' : ''}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? 'button--text-only' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
