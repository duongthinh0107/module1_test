let bookManager = new BookManager();
bookManager.showListProduct();
let book = new Book()


function addBook(){
    let id = prompt("id sach");
    let name = prompt('ten sach');
    let year = prompt('nam xuat ban')
    let number = prompt('so luong')
    bookManager.add(id,name,year,number);
    confirm('them thanh cong')
}
function borrowBook(){
    let nameBook = prompt('sach muon muon');
    let number = +prompt('so luong:');
    bookManager.borrow(nameBook,number)
    bookManager.showListProduct();

}

