import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-[360px] h-[480px] rounded-xl justify-start items-start inline-flex">
    <div className="w-[360px] h-[480px] rounded-xl border border-zinc-700 flex-col justify-center items-center inline-flex">
        <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center inline-flex">
            <div className="self-stretch h-[72px] pl-4 pr-1 py-3 justify-start items-center inline-flex">
                <div className="grow shrink basis-0 h-12 justify-start items-center gap-4 flex">
                    <div className="w-10 h-10 relative">
                        <div className="w-10 h-10 left-0 top-0 absolute bg-purple-300 rounded-full" />
                        <div className="w-10 h-10 left-0 top-0 absolute text-center text-neutral-900 text-base font-medium font-['Roboto'] leading-normal tracking-tight">A</div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-zinc-200 text-base font-medium font-['Roboto'] leading-normal tracking-tight">Header</div>
                        <div className="w-[56.81px] text-center text-zinc-200 text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Subhead</div>
                    </div>
                </div>
                <div className="w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                        <div className="p-2 justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 relative" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[360px] h-[188px] justify-center items-center inline-flex">
                <img className="w-[360px] h-[188px]" src="https://via.placeholder.com/360x188" />
            </div>
            <div className="self-stretch h-[220px] p-4 flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-11 flex-col justify-start items-start flex">
                    <div className="w-[328px] text-zinc-200 text-base font-normal font-['Roboto'] leading-normal tracking-wide">Title</div>
                    <div className="w-[328px] text-stone-300 text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Subhead</div>
                </div>
                <div className="self-stretch text-stone-300 text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                <div className="self-stretch justify-end items-start gap-2 inline-flex">
                    <div className="rounded-[100px] border border-neutral-400 flex-col justify-center items-center inline-flex">
                        <div className="self-stretch px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                            <div className="text-center text-purple-300 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">Enabled</div>
                        </div>
                    </div>
                    <div className="bg-purple-300 rounded-[100px] flex-col justify-center items-center inline-flex">
                        <div className="self-stretch px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                            <div className="text-center text-violet-950 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">Enabled</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[360px] h-[480px] bg-neutral-900 rounded-xl border border-zinc-700 flex-col justify-center items-center inline-flex">
        <div className="w-[360px] h-[480px] p-2.5" />
    </div>
</div>
  )
}
