type timesdata = Daily | Weekly | Monthly

type time = {
    current: int,
    previous: int
}

type timeframe = {
    daily: time,
    weekly: time,
    monthly: time
}

type data = {
    title: string,
    timeframes: timeframe
}

type dataList = array<data>