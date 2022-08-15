import { tipsCollection } from "../provider/mongo.ts"

export const tips: Map<string, string> = new Map()
export let keys:string[]
export let todaysTip = ""

export const updateTips = async (tips: Map<string, string>) => {
    const newTips = await tipsCollection.find({}).map(doc => doc)
    for (let i = 0; i < newTips.length; i++) {
        const tip = newTips[i].tip;
        const key = newTips[i].key
        if (tips.has(tip)) continue
        tips.set(key, tip)
    }
    keys = Array.from(tips.keys());
}

export const setTodaysTip = () => {
    let index = 0
    if (!todaysTip) {
        todaysTip = keys[index]
        return
    }
    index = keys.indexOf(todaysTip)
    if(index === (keys.length - 1)) {
        index = 0
        todaysTip = keys[index]
        return
    }
    todaysTip = keys[index+1]
    return
}

setInterval(setTodaysTip, 300000)
setInterval(async () => {await updateTips(tips)}, 1000*60*60)