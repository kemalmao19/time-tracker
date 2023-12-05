open Utils
open Data

@react.component
let make = (~time) => {
  <div className="col-span-2">  
    <section id="cards" className="grid lg:grid-cols-3 gap-5 mt-5">
        {data->Belt.Array.mapWithIndex((i, activity)=>{

            let matchData = (data) => switch data {
              | Daily => activity.timeframes.daily.current
              | Weekly => activity.timeframes.weekly.current
              | Monthly => activity.timeframes.monthly.current
            }

            let matchTime = (data) => switch data {
              | Daily => "Day"
              | Weekly => "Week"
              | Monthly => "Month"
            }

            Js.log(activity);
            <div className={`flex flex-col ${activity.title->activityColor} justify-between rounded-t-2xl`} key={i->Belt.Int.toString}>
                <div className="relative h-10 overflow-hidden">{activity.title -> activityIcon}</div>
                <div className="relative flex flex-col bg-[#1D204B] rounded-t-2xl p-5 gap-5">
                  <section className="flex items-center justify-between">
                    <div className="text-white text-lg font-normal">{activity.title -> React.string}</div>
                    <div><img src="/icon-ellipsis.svg"/></div>
                  </section>
                  <section className="text-[#aeb4f1] flex lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-5">
                    <div className="text-white text-3xl font-light">{`${matchData(time)->Belt.Int.toString}hrs`->React.string}</div>
                    <div>{`Last ${matchTime(time)} - hrs`->React.string}</div>
                  </section>
                </div>
            </div>
        })->React.array}
    </section>
  </div>
}