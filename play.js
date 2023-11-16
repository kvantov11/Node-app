const fetchData = callback => {
    setTimeout(() => {
        callback('done');
    }, 1500);
}

setTimeout(() => {
    console.log('timer is done');
    fetchData(text => {
        console.log(text + 1);
    })
}, 2000);

console.log('motha');