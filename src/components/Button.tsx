import { type ComponentPropsWithoutRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

// type LinkProps = LProps & {
//   to?: string;
// };

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return 'to' in props;
}

export default function Button(props: ButtonProps | LinkProps) {
  if (isLinkProps(props)) {
    return <Link className='button' {...props}></Link>;
  }

  return <button className='button' {...props}></button>;
}
