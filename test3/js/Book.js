class Book{
    constructor(id,name,year,number) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.number = number;
        this.status = true;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getYear(){
        return this.year;
    }
    getNumber(){
        return this.number;
    }


    checkStatus(){
        if(this.number === 0){
            this.status = false;
        }
    }
}