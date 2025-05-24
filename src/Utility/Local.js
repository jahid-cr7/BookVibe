export const getBook = () =>{
    const storedBook = localStorage.getItem('Read List');
    if(storedBook) return JSON.parse(storedBook);
    return [];
}
export const addLocal = (id) =>{
    const storedBook = getBook();
    if(storedBook.includes(id)){
    alert("Already Exist")
    }
    else{
        storedBook.push(id);
        const data = JSON.stringify(storedBook);
        localStorage.setItem("Read List", data)
    }
}