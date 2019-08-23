
console.log("——————————————————————————— BIBLIOTHEQUE ———————————————————————————")
console.log(".")
console.log(".")


const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  

  // —————————————— Les livres ont été au moins empruntés une fois ? ——————————————  


    let number = books.rented; 
    if(number != 0) {
    console.log("Oui c'est vrai, les livres ont été empruntés");
    } 

    console.log(".");  
    console.log(".");


  // ——————————————————————————— Le livre le plus emprunté ? ———————————————————————————  

    const mostRented = books.sort(function(b1, b2){
    if (b1.rented < b2.rented) {
    return 1
    } else {
      return -1
    }
    });
    //   console.log(mostRented);

    var theMost = mostRented.shift();
    console.log(theMost.title +" est le livre le plus emprunté, (Respect Bronté!)");
    
    console.log(".");  
    console.log(".");
    console.log(".");

 // ——————————————————————————— Le livre le moins emprunté ? ———————————————————————————  


    const lessRented = books.sort(function(b1, b2){
        if (b1.rented > b2.rented) {
        return 1
        } else {
        return -1
        }
        });

    var theLess = lessRented.shift();
    console.log(theLess.title +" est le livre le moins emprunté! (</3)");
    
    console.log(".");  
    console.log(".");
    console.log(".");


   // ——————————————————————————— Find my buddy id #873495 ———————————————————————————  
   
  

    const resultat = books.find (function(book){
   if(book === 873495){
       return true;
   }
    })
    console.log("Il s'agit du livre de : " + resultat);


    console.log(".");  
    console.log(".");
    console.log(".");


      // ——————————————————————————— Suppression id #133712 ———————————————————————————  

//    console.log("Supprime le livre avec l'ID: 133712:");
// let removeFirstElement = books.pop();
// console.log(removeFirstElement);  

booksWithoutOne = books.filter(function(book){
    if(book != 133712) {
        return true;
    }
});
console.log(booksWithoutOne)

//———————————————————————— Tri des livres par ordre alphabétique ———————————————————————— 


const alphabeticBook = books.sort(function(b1, b2) {
    if(b1.title > b2.title) {
        return 1;
    } else {
        return -1;
    }
});
console.log(alphabeticBook)