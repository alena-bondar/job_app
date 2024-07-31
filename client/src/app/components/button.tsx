import { FC } from 'react';

type ButtonProps = {
  name: string;
  type?: 'button' | 'submit';
  onClick: () => {};
}

const Button: FC<ButtonProps> = ({name, type, onClick}) => {

  return (
    <div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 active:bg-blue-800"
        type={type}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  )
}

export default Button;