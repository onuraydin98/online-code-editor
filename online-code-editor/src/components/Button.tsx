import cx from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isNaked?: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Button({
  children,
  isNaked,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cx(
        isNaked
          ? 'hover:text-gray-300'
          : 'bg-gray-200 hover:bg-editor-dark hover:text-gray-200 shadow-sm',
        'inline-flex items-center gap-x-1.5 rounded-md py-2 px-3'
      )}
      {...props}
    >
      {children}
    </button>
  );
}
