class Person {
    constructor(name,dateOfBirth,mobileNo,email,address){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.mobileNo = mobileNo;
        this.email = email;
        this.address = address;

    }
    getDetails(){
        return (`name : ${this.name}.`)
      }
      getDetails1(){
        return (`date of birth : ${this.dateOfBirth}.`)
      }
      getDetails2(){
        return (`mobile number :  ${this.mobileNo}.`)
      }
      getDetails3(){
        return (`email : ${this.email}.`)
      }
      getDetails4(){
        return (`address :  ${this.address}.`)
      }
}
let customer = new Person('Nishanth', '11/04/2001', '123456888','nishanth@gmail.com','123, main road, cuddalore, tamil nadu, india')
    
  console.log(customer.getDetails()); 
  console.log(customer.getDetails1()); 
  console.log(customer.getDetails2());   
  console.log(customer.getDetails3());
  console.log(customer.getDetails4()); 