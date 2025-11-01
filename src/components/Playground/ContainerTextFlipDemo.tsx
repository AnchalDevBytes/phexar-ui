import ButtonWithIconAndShadowBelow from "./ButtonWithIconAndShadowBelow";

const ContainerTextFlipDemo = () => {
  return (
    <div className="flex flex-col gap-1 w-3xl">
        <ButtonWithIconAndShadowBelow/>
        <h1 className="text-6xl tracking-wider leading-[75px] mt-8 font-bold bg-linear-to-b from-neutral-400 via-neutral-500 to-neutral-700 bg-clip-text text-transparent text-shadow-sm">
            Make Modern Website with TailwindCSS and Framer-motion
        </h1>
        <p className="tracking-wider text-lg mt-10 w-xl text-shadow-sm leading-6">
            Copy paste the most trending components and use them in your websites without having to worry about styling and animations.
        </p>
    </div>
  )
}

export default ContainerTextFlipDemo;
