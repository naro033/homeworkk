// class Author {
//     constructor(name, email, gender) {
//         this._name = name;
//         this._email = email;
//         this._gender = gender;
//     }
//     get name() {
//         return this._name
//     }
//     set name(value) {
//         this._name = value
//     }
//     toString() {
//         return `My email adres is ${this._email}`
//     }
// }

// class Book extends Author {
//     constructor(title, price, quantity) {
//         super()
//         this._title = title;
//         this.price = price;
//         this.quantity = quantity;
//     }
//     get title() {
//         return this._title
//     }
//     set title(value) {
//         value = this._title
//     }
//     toString() {
//         return ` The author of ${book.title} is ${author.name}`
//     }
//     getProfit() {
//         return this.price * this.quantity

//     }

// }

// let author = new Author("Artur", "artur@gmail.com", "male")
// let book = new Book("matematika", 1500, 100)
// console.log(author.toString())
// console.log(book.toString())
// console.log(book.getProfit())


// 2222222))))))))))))))))))


// class Account {
//     constructor(Id, name, balance, amount) {
//         this._Id = Id;
//         this._name = name;
//         this._balance = balance;
//         this._amount = amount;
//     }
//     get id() {
//         return this._id;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value;
//     }

//     get balance() {
//         return this._balance;
//     }

//     set balance(value) {
//         this._balance = value;
//     }
//     credit(amount) {
//         this._balance += this._amount
//         return this._balance
//     }
//     debit(amount) {
//         if (this._balance - this._amount > 0) {
//             return this._balance
//         } else
//             return "Amount exceeded balance"
//     }

//     transferTo(anotherAccount, amount) {
//         anotherAccount = 3000;
//         anotherAccount += this._balance - this._amount
//         if (anotherAccount < this._balance) {
//             return anotherAccount
//         }
//         return `Amount exceeded balance.`
//     }
//     static identifyAccounts(accountFirst, accountSecond) {
//         if (accountFirst === this._id || accountSecond === this._id) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     toString() {
//         return `${this._name} has ${this._balance}$ in his balance.`
//     }
// }

// let account = new Account("ss", "ss", 5000, 2000)
//     // console.log(account.credit())
//     // console.log(account._balance)
// console.log(account.debit())
// console.log(Account.identifyAccounts())


//3333))))

class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age
    }

    toString() {
        return `${this._firstName } ${this._lastName} is ${this._age} years old`
    }
}

let person = new Person("Avetisyan", "Vahag", "male", 54)
console.log(person.toString())


class Student extends Person {
    constructor(_firstName, year = 2019, fee) {
        super(_firstName)
        this._year = year;
        this._fee = fee;
        this.program = function() {
            let arr = ['English', 'Russian', 'Math'];
            return arr.join(' ')

        }

    }

    passExam(program, grade) {
        program = this.program;
        grade = [14, 16, 20];
        if (grade[0] + grade[1] + grade[2] >= 50) {
            return ++this._year
        }
        return `Grade is less as 50`
    }
    toString() {
        return ` ${this._firstName} pass the exam`
    }

}
class Teacher extends Person {
    constructor(name, pay) {
        super()
        this._name = name;
        this._pay = pay;
    }
    get() {
        return this._name
    }
    set(value) {
        value = this._pay
    }
    toString() {
        return `${this._name} earn ${this._pay} dollars`
    }
}

let student = new Student("Vahag")
console.log(student.passExam())
console.log(student.toString())
let teacher = new Teacher("Lusine", 1000)
console.log(teacher.toString())