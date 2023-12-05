open Utils

let data:dataList = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
]

let activityColor = (activity: string) => 
    switch activity {
        | "Work"=> "bg-color1" 
        | "Play"=> "bg-color2" 
        | "Study"=> "bg-color3" 
        | "Exercise"=> "bg-color4" 
        | "Social"=> "bg-color5" 
        | "Self Care"=> "bg-color6" 
        | _ => ""
    }

let activityIcon = (activity: string) => 
    switch activity {
        | "Work" => <img className="absolute -top-2 right-3" src="/icon-work.svg"/>
        | "Play" => <img className="absolute -top-2 right-3" src="/icon-play.svg"/>
        | "Study" => <img className="absolute -top-2 right-3" src="/icon-study.svg"/>
        | "Exercise" => <img className="absolute -top-2 right-3" src="/icon-exercise.svg"/>
        | "Social" => <img className="absolute -top-2 right-3" src="/icon-social.svg"/>
        | "Self Care" => <img className="absolute -top-2 right-3" src="/icon-self-care.svg"/>
        | _ => <></>
    }
