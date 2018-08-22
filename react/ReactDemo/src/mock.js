let idseq = 10;
let data = [
  { id: 1, name: '宇宙飞船', type: '交通工具', price: 1000 },
  { id: 2, name: '全息电视', type: '家电', price: 100 },
  { id: 3, name: '全息相机', type: '家电', price: 100 },
  { id: 4, name: '火星巧克力', type: '食品', price: 100 }
]; 

export let fetchData = (success) => {
  success(data);
};

export let deleteData = (id, success) => {
  data = data.reduce((pre, cur) => {
    if (cur.id !== id) {
      pre.push(cur);
    }
    return pre;
  }, []);
  success(true);
};

export let saveData = (param, success) => {
  let update = false;
  data.forEach((item) => {
    if (item.id === param.id) {
      Object.assign(item, param);
      update = true;
    }
  });
  if (!update) {
    data.push({
      ...param,
      id: idseq++
    });
  }
  success(true);
};
