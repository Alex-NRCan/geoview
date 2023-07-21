import { Popover as PopoverElement, PopoverProps } from '@mui/material';

/**
 * Create a popover component
 *
 * @param {PopoverProps} props popover properties
 * @returns {JSX.Element} returns popover component
 */
export function Popover(props: PopoverProps): JSX.Element {
  return <PopoverElement {...props} />;
}
