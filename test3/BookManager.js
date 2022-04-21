class BookManager{
    constructor() {
        this.books = [];
    }
    showListProduct(){
        let html = '';
        if(this.books.length === 0){
            html += '<tr>'
            html += '<td colspan="5">Không có sách</td>'
            html += '<tr>'
        }else {
            for (let i = 0; i < this.books.length; i++) {
                html += `<tr>`
                html += `<td>${this.books[i].getId()}</td>`
                html += `<td>${this.books[i].getName()}</td>`
                html += `<td>${this.books[i].getYear()}</td>`
                html += `<td>${this.books[i].getNumber()}</td>`
                html += `<td>${this.books[i].status}</td>`
                html += `</tr>`
            }
        }

        document.getElementById('tdbody').innerHTML = html;
    }
    add(id,name,year,number){
        let book = new Book(id, name, year, number);
        this.books.push(book);
        this.showListProduct();
        this.checkStatus();
    }
    borrow(name,number){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name===name){
                this.books[i].number -= number;
            }
        }
        this.checkStatus();

    }
    checkStatus(){
        for (let i = 0; i < this.books.length; i++) {
            this.books[i].checkStatus();
        }
    }



}