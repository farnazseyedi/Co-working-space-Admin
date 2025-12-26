interface BlueButtonProps {
  onClick?: () => void;
}

export default function BlueButton({ onClick }: BlueButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border border-primary-500 hover:opacity-80 text-primary-500 px-10 py-3 rounded-lg justify-center items-center transition text-center font-medium h-11 w-55"
    >
      افزودن رزرو جدید
    </button>
  );
}
