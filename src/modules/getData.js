const getData = () => {
    return fetch('https://testt-dfb6c-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}
export default getData