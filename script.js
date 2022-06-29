let Comedy = [
    {
        title: "The Hangover", //se beber não case
        director: "Todd Phillips",
        year: 2009
    },
    {
        title: "Meet the Parents", //entrando numa fria
        director: "Jay Roach",
        year: 2000
    },
    {
        title: "Ferris Bueller's Day Off", //curtindo a vida adoidado
        director: "John Hughes",
        year: 1986
    }];

let Action = [
    {
        title: "Dhoom 3",
        director: "Vijay Krishna Acharya",
        year: 2013
    },
    {
        title: "Dangal",
        director: "Nitesh Tiwari",
        year: 2016
    },
    {
        title: "Ghajini",
        director: "A. R. Murugadoss",
        year: 2008
    }];

let Fantasy = [
    {
        title: "The BFG", // O bom gigante amigo
        director: "Steven Spielberg",
        year: 2016 // versão brasileira
    },
    {
        title: "Charlie and the Chocolate Factory", //A fantástica fábrica de chocolate
        director: "Tim Burton",
        year: 2005
    },
    {
        title: "The Adventures of Tintin: Secret of the Unicorn", // As aventuras de Tintim
        director: "Steven Spielberg",
        year: 2012
    }];

console.log(Comedy, Action, Fantasy);

if(Action[1].title === "Dangal"){
    console.log("My movie favorite is", Action[1].title)
}else{
    console.log("Not even 5 stars...")
}

if(Comedy[1].title !== "Meet the Parents"){
    console.log("My movie favorite is", Action[1].title)
}else{
    console.log(Comedy[1].title, "not even 5 stars...")
}