var tab1 = [];



for (let i = 1; i < sessionStorage.length - 1; i++) {
    if (sessionStorage.getItem('subject' + i)) {
        tab1[i] = {
            subject: sessionStorage.getItem('subject' + i),
            date: sessionStorage.getItem('date' + i),
            Description: sessionStorage.getItem('Description' + i)
        }
    }
}

export default tab1;