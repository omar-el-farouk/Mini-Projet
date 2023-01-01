var tab2 = [];


for (let i = 1; i < localStorage.length - 1; i++) {
    if (localStorage.getItem('name' + i)) {
        tab2[i] = {
            name: localStorage.getItem('name' + i),
            phone: localStorage.getItem('phone' + i),
            email: localStorage.getItem('email' + i)
        }
    }
}




export default tab2; 