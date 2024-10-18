//your JS code here. If required.
const input = document.getElementById('ip');
const btn = document.getElementById('btn');
const div = document.getElementById('output');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    transformData()
        .then((res) => {
            console.log(res);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    div.innerHTML = `Result: ${res * 2}`;
                    resolve(res * 2)
                }, 1000);
            })
        })
        .then((res) => {
            console.log(res);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    div.innerHTML = `Result: ${res - 3}`;
                    resolve(res - 3)
                }, 1000);
            })
        })
        .then((res) => {
            console.log(res);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    div.innerHTML = `Result: ${res / 2}`;
                    resolve(res / 2)
                }, 1000);
            })
        })
        .then((res) => {
            console.log(res);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    div.innerHTML = `Result: ${res + 10}`;
                    resolve(res + 10)
                }, 1000);
            })
        })
        .then((res) => {
            console.log(res);
            div.innerHTML = `Final Result: ${res}`;
        })
});
function transformData() {
    const ip = input.value;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.innerHTML = `Result: ${ip}`;
            resolve(ip)
        }, 2000);
    })
}
