const makeNegative = (num: number): number => {
    let data  = 0;
    data = num > 0 ? -num : num;
    console.log(data);
    return data;
};

makeNegative(12)
