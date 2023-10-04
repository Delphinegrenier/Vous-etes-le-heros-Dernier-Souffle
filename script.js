let chapters = {
  debut: {
    titre: "Le message radio",
    description: `Après de longues heures passées à réparer votre vieille radio dans ce nouveau monde apocalyptique, le grésillement cède la place à une voix brisée. Le message vous informe de l'existence d'une ville de survivants, un havre de sécurité appelé "New Haven." Votre cœur s'emballe d'espoir à l'idée d'un refuge potentiel, mais vous savez que la route vers cette destination est semée d'embûches. Votre aventure commence ici, alors que vous vous apprêtez à traverser un monde déchu et hostile pour atteindre ce bastion lointain.`,
    image: "./assets/debut.jpg",
    boutons: [
      {
        titre: "Rester au campement",
        destination: "campement",
      },
      {
        titre: "Débuter le voyage",
        destination: "intersection",
      },
    ],
  },
  campement: {
    titre: "Le campement mortel",
    description: `Dans votre hésitation, vous choisissez de rester au campement. Les jours passent, mais les réserves de nourriture s'amenuisent rapidement. La faim insupportable vous affaiblit, et votre aventure prend fin tragiquement, votre corps sans vie gisant parmi les débris.`,
    image: "./assets/campement.png",
    boutons: [
      {
        titre: "Recommencer",
        destination: "debut",
      },
    ],
  },
  intersection: {
    titre: "L'intersection'",
    description: `La décision est prise. Vous allez écouter le message radio et entreprendre le périlleux voyage vers New Haven. La ville en ruines s'étend devant vous, une toile de fond sombre pour votre quête désespérée. Vous vous trouvez devant une intersection séparant deux directions: la banlieue ou le centre-ville. Les deux chemins semblent sécuritaire, mais il n'y a aucune certitude.`,
    image: "./assets/intersection.jpg",
    boutons: [
      {
        titre: "Traverser la ville",
        destination: "ville",
      },
      {
        titre: "Vers la banlieue",
        destination: "banlieue",
      },
    ],
  },
  banlieue: {
    titre: "Bloqués en Banlieue",
    description: `Vous choisissez de contourner la ville par la banlieue, mais une rencontre inattendue se produit. Des survivants armés bloquent votre chemin. La tension monte, et vous réalisez que vous ne pourrez pas avancer sans résoudre ce problème. Cependant, leur possession d'armes constitue une menace que vous ne pouvez ignorer.`,
    image: "./assets/banlieue.jpg",
    boutons: [
      {
        titre: "Leur parler",
        destination: "rencontre",
      },
      {
        titre: "Voler une arme",
        destination: "vol",
      },
    ],
  },
  rencontre: {
    titre: "La rencontre violente",
    description: `Vous décidez de tenter votre chance en abordant les survivants armés, espérant une issue pacifique. Malheureusement, leur hostilité est manifeste, et avant même que vous ne puissiez prononcer un mot, ils ouvrent le feu, mettant brutalement fin à votre aventure.`,
    image: "./assets/rencontre.jpg",
    boutons: [
      {
        titre: "Recommencer",
        destination: "debut",
      },
    ],
  },
  vol: {
    titre: "Vol et fuite",
    description: `Avec audace, vous optez pour la discrétion, subtilisant furtivement une arme à feu et la glissant dans votre poche arrière. Incapable de progresser plus avant dans la banlieue, vous faites demi-tour et choisissez de repasser par le centre-ville, l'arme volée maintenant votre seule lueur d'espoir.`,
    image: "./assets/vol.jpg",
    boutons: [
      {
        titre: "Traverser la ville",
        destination: "ville",
      },
    ],
  },
  ville: {
    titre: "Confrontation avec les infectés",
    description: `Le centre-ville s'étend devant vous, mais il est tout sauf désert. Vous vous retrouvez face à face avec des infectés, leurs yeux vides et leur démarche titubante vous rappelant la nature impitoyable de ce monde. Ils s'aperçoivent de votre présence. Vous reculez de quelques pas avant de prendre une décision.`,
    image: "./assets/ville.jpg",
    boutons: [
      {
        titre: "Utiliser l'arme volée",
        destination: "arme",
      },
      {
        titre: "S'enfuir",
        destination: "course",
      },
    ],
  },
  course: {
    titre: "Course contre la mort",
    description: `Malheureusement, les infectés vous aggrippent, et vous n'avez pas d'arme pour vous défendre. Votre souffle se mélange au leur alors qu'ils s'abattent sur vous, mettant brutalement fin à votre voyage.`,
    image: "./assets/course.jpg",
    boutons: [
      {
        titre: "Recommencer",
        destination: "debut",
      },
    ],
  },
  arme: {
    titre: "L'arrivé",
    description: `Vous dégainez l'arme à feu que vous avez volée et ouvrez le feu sur les infectés qui vous poursuivent. Votre main tremble, mais vous parvenez à abattre les menaces qui vous entourent et traverser la ville. Enfin, vous atteignez New Haven, mais l'accueil n'est pas chaleureux. Les individus qui vous accueillent sont ceux à qui vous avez volé l'arme. Leurs regards accusateurs vous transpercent alors qu'ils vous demandent si vous êtes l'individu responsable du vol.`,
    image: "./assets/arme.jpg",
    boutons: [
      {
        titre: "Dire la vérité",
        destination: "confession",
      },
      {
        titre: "Mentir",
        destination: "mentir",
      },
    ],
  },
  confession: {
    titre: "La confession",
    description: `Face à la vérité, vous choisissez d'être honnête. Vous avouez avoir volé leur arme pour survivre, et leur colère gronde. Vous vous retrouvez sous le feu de leurs armes, mettant brutalement fin à votre quête pour New Haven.`,
    image: "./assets/confession.jpg",
    boutons: [
      {
        titre: "Recommencer",
        destination: "debut",
      },
    ],
  },
  mentir: {
    titre: "Le Mensonge bienvenu",
    description: `Au lieu de la vérité, vous choisissez de mentir. Vous niez avoir volé leur arme, et ils semblent vous croire. Vous êtes autorisé à entrer à New Haven, mais le poids de votre mensonge pèse sur votre conscience alors que vous poursuivez votre histoire dans cette nouvelle communauté.`,
    image: "./assets/mentir.jpg",
    boutons: [
      {
        titre: "Terminer",
        destination: "debut",
      },
    ],
  },
};

function goToChapter(cle) {
  let titreChapitre = document.querySelector("h2");
  let descriptionChapitre = document.querySelector(".description");
  let imageChapitre = document.querySelector("img");

  titreChapitre.innerText = chapters[cle].titre;

  descriptionChapitre.innerText = chapters[cle].description;
  imageChapitre.setAttribute("src", chapters[cle].image);

  

// Sélectionne le div .boutons 

const boutons = document.querySelector('.boutons'); 

  

// Supprime tous les boutons enfants du div .boutons 

while (boutons.firstChild) { 

  boutons.removeChild(boutons.firstChild); 

} 

  

// Pour chaque boutons ... 
console.log(chapters[cle].b)
for (let i = 0; i < chapters[cle].boutons.length; i++) { 

  

  // on crée un nouveau bouton 

  const nouveauBtn = document.createElement('button'); 

  

  // on applique un libellé au bouton 

  nouveauBtn.textContent = chapters[cle].boutons[i].titre; 

  

  // on appele goToChapter lorsqu'on clique le bouton 

  nouveauBtn.addEventListener('click', () => { 

    // la destination, c'est la destination du bouton! 

    goToChapter(chapters[cle].boutons[i].destination) 

  }); 

  

  // enfin, on ajoute le bouton dans la page Web (dans le DOM) 

  boutons.appendChild(nouveauBtn); 

}; 

}

goToChapter("debut");


function goToChapter(cle) {
  if (cle == "vol") {
    chapters["vol"].boutons
    chapters["ville"].boutons[0].titre = "Utiliser l'arme volé";
    chapters["ville"].boutons[0].destination = "arme"; // Si l'utilisateurs à récupérer une arme dans le chapitre vol, il peut passer au prochain chapitre, sinon son histoire se termine
  }
  if (chapters[cle] !== undefined) {
    let titreChapitre = document.querySelector("h2");
    let descriptionChapitre = document.querySelector(".description");
    let imageChapitre = document.querySelector("img");
  
    titreChapitre.innerText = chapters[cle].titre;
  
    descriptionChapitre.innerText = chapters[cle].description;
    imageChapitre.setAttribute("src", chapters[cle].image);

    // Sélectionne le div .boutons 

const boutons = document.querySelector('.barreoption'); 

  

// Supprime tous les boutons enfants du div .boutons 

while (boutons.firstChild) { 

  boutons.removeChild(boutons.firstChild); 

} 

  

// Pour chaque boutons ... 

for (let i = 0; i < chapitre.boutons.length; i++) { 

  

  // on crée un nouveau bouton 

  const nouveauBtn = document.createElement('button'); 

  

  // on applique un libellé au bouton 

  nouveauBtn.textContent = chapitre.boutons[i].titre; 

  

  // on appele goToChapter lorsqu'on clique le bouton 

  nouveauBtn.addEventListener('click', () => { 

    // la destination, c'est la destination du bouton! 

    goToChapter(chapitre.boutons[i].destination) 

  }); 

  

  // enfin, on ajoute le bouton dans la page Web (dans le DOM) 

  boutons.appendChild(nouveauBtn); 

}; 
}
}
goToChapter("debut");

