import { Switch } from "@headlessui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type ToggleProps = {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};
const Toggle = ({ isChecked, setIsChecked }: ToggleProps) => {
  return (
    <div className="flex space-x-2 items-center">
      <div>{isChecked ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</div>
      <Switch
        checked={isChecked}
        onChange={setIsChecked}
        className={`${isChecked ? "bg-teal-900" : "bg-teal-600"}
          relative inline-flex items-center h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${isChecked ? "translate-x-6" : "translate-x-1"}
            pointer-events-none inline-block w-4 h-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Toggle;
