let idSeq = 4;
let arrType = ["交通工具", "全息电视", "全息相机", "火星巧克力"];
let json = [
    {
        "id": 1,
        "name": "宇宙飞船1",
        "type": "0",
        "price": 1000
    },{
        "id": 2,
        "name": "宇宙飞船2",
        "type": "0",
        "price": 1000
    },{
        "id": 3,
        "name": "宇宙飞船3",
        "type": "0",
        "price": 1000
    }
];
export let getItem = (id) => {
    for(var item of json) {
        if(item.id == id) {
            return item;
        }
    }
    return {};
}
export let getType = (value) => {
    if(value >= 0) {
        return arrType[value];
    }
    return '-';
}
export let loadData = () => {
    return json
};
export let deleteData = (id) => {
    json = json.reduce( (pre, cur) => {
        if(cur.id != id) {
            pre.push(cur);
        }
        return pre;
    }, []);
}

export let editData = (param) => {
    let updating = false;
    for(let item of json) {
        if(item.id == param.id) {
            item = Object.assign(item, param);
            return;
        } 
    }
    json.push({
        ...param,
        id: idSeq++
    })
}