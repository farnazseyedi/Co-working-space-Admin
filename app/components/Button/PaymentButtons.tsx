// components/PaymentButtons.tsx
import React from "react";

interface PaymentButtonsProps {
  onApprove?: () => void;
  onReject?: () => void;
}

const PaymentButtons: React.FC<PaymentButtonsProps> = ({
  onApprove,
  onReject,
}) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={onApprove}
        className="
          px-3 
          py-1 
          border 
          border-neutral-300
          bg-white 
          text-neutral-800
          text-sm
          rounded-full
          transition-colors 
          hover:bg-success-500
          hover:text-white
        "
      >
        تایید پرداخت
      </button>
      <button
        onClick={onReject}
        className="
          px-3 
          py-1 
          border 
          border-neutral-300
          bg-white 
          text-neutral-800
          rounded-full 
          text-sm
          transition-colors 
          hover:bg-error-600
          hover:text-white
        "
      >
        عدم تایید پرداخت
      </button>
    </div>
  );
};

export default PaymentButtons;
