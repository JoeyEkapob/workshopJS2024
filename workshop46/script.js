class User {
  #name;
  #password;
   static type='ผู้ใช่ระบบ' 

  constructor(n, p) {
    this.#name = n;
    this.#password = p;
    /* this.showdetail() */
  }

  //method
  showdetail() {
    console.log(`${this.#name},${this.#password}`);
  }
  set Name(newname) {
    this.#name = newname;
  }
  get Name() {
    return this.#name;
  }
  set Password(newpassword) {
    this.#password = newpassword;
  }
  get Password() {
    return this.#password;
  }
   static showType(){
    console.log('ผู้ใช่ระบบ123')
  }
}


console.log(User.showType())



/* const user1 = new User("joey", 123); */
/* const user2 = new User("jojo",456)
const user3 = new User("nut",789) */

/* user1.showType() */
/* console.log(User.showType()) */
/* console.log(User.type) */
/* User.showType() */

/* console.log(user2.type)
console.log(user3.type) */

/* user1.Name = "ekapob";
user1.Password = 123213;

console.log(user1.Name);
console.log(user1.Password); */
/* user1.setname('fddd')
user1.setpassword('fddd')
console.log(user1.getname())
console.log(user1.getpassword())
 */
/* user1.name ='ekapob'
user1.password='5435'

const user2 = new User("jojo",456)


const user3 = new User("nut",789) */

/* user1.showdetail() */
/* console.log(user1.name)
console.log(user1.password)

const user2 = new User()

console.log(user2.name)
console.log(user2.password) */
