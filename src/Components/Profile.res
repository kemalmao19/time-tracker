open Utils
@react.component
let make = (~timeChanger) => {
    <section id="profile" className="bg-[#1D204B] rounded-2xl">
        <div id="user" className="bg-[#5746EA] flex lg:flex-col lg:items-start items-center gap-10 p-10 rounded-2xl">
            <img src="/image-jeremy.png" className="w-20 h-auto rounded-full border-2 border-white"/>
            <div className="flex flex-col gap-3">
                <p className="text-xl font-light text-[#aeb4f1]">{"Report for"->React.string}</p>
                <h1 className="text-3xl font-thin text-white">{"Jeremy Robson"->React.string}</h1>
            </div>
        </div>
        <div id="times" className="flex lg:flex-col justify-center items-center lg:items-start p-5 lg:p-10 gap-10 text-[#aeb4f1]">
            <div id="card" className="hover:text-white hover:text-lg cursor-pointer" onClick={_=>timeChanger(_=>Daily)}>{"Daily"->React.string}</div>
            <div id="card" className="hover:text-white hover:text-lg cursor-pointer" onClick={_=>timeChanger(_=>Weekly)}>{"Weekly"->React.string}</div>
            <div id="card" className="hover:text-white hover:text-lg cursor-pointer" onClick={_=>timeChanger(_=>Monthly)}>{"Monthly"->React.string}</div>
        </div>
    </section>
}