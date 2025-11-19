import { RiArrowDropRightLine } from "react-icons/ri";

const ButtonWithIconAndShadowBelow = () => {
  return (
    <div className="w-full">
        <button className="relative cursor-pointer px-10 py-3 bg-linear-to-r from-neutral-700 to-neutral-800 rounded-3xl border border-neutral-800">
            <div className="absolute bg-linear-to-r from-transparent via-neutral-300 to-transparent w-full h-px -bottom-px inset-x-0"></div>
            <div className="flex gap-2 text-xs font-medium tracking-wide text-neutral-200">
                Introducing my first button
                <RiArrowDropRightLine  size={22} className="font-light"/>
            </div>
        </button>
    </div>
  )
}

export default ButtonWithIconAndShadowBelow;
