open Utils

@react.component
let make = () => {
    
    let (timesData, setTime) = React.useState(()=>Daily)
    Js.log(timesData)
    
    <div className="w-full h-full lg:h-screen bg-[#0D1323] flex justify-center lg:items-center font-custom p-10 lg:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center my-20 lg:my-auto gap-10">
            <Profile timeChanger=setTime/>
            <Cards time=timesData/>
        </div>
    </div>
}