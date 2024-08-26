class User {
  #name;
  #password;
  /* static database=[] */

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
  /*  static addUser(user){
     this.database.push(user)
   } */
}
class Teacher extends User{
  constructor(){
    console.log('ฉันเป็นครู')
  }
 
}
class Student extends User{
  
  constructor(){
  console.log('ฉันเป็นนักเรัยน')
  }
}

const user1 = new Teacher('test',54245245)

user1.showdetail()

const user2 = new Student('jo',14444)
user2.showdetail()



/* const user1 = new User("joey", 123);
console.log(User.showType()) */

/* console.log(Math.random())
console.log(Math.max(10,20,30)) */

/* const user1 = new User("joey", 123)
const user2 = new User("jojo",456)
const user3 = new User("nut",789)

User.addUser(user1)
User.addUser(user2)
User.addUser(user3) */


/* User.database.forEach((user)=>{
  user.showdetail()
}) */
/* for(user of User.database){
  user.showdetail();
} */



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
