class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio =  studio;
      this.rating= rating;
    }
    getDetails(){
      return (`the title ${this.title}.`)
    }
   
    getDetails2(){
        return (`the studio ${this.studio}.`)
    }
    getDetails3(){
        return (`the rating ${this.rating}.`)
    }
  }
  let customer = new Movie('Casino Royal', 'Eon Prodution', 'PG 13')
    
  console.log(customer.getDetails()); 
  console.log(customer.getDetails2());   
  console.log(customer.getDetails3());