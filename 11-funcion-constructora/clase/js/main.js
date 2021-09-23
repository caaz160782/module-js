const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },

    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Mauro', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]
/*
Ejercicio en clase:
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
- Prototipo de tipo koder
*/

function Koders(name, lastName,birthday,generation,bootcamp,scores) {
    this.nombre = name
    this.lastName = lastName
    this.birthday = birthday
    this.generation = generation
    this.bootcamp = bootcamp
    this.scores = scores    
}

// Obtener la edad a partir de la fecha de nacimiento
Koders.prototype.calcularEdad=function () {
    let hoy = new Date();
    let cumpleanos = new Date(this.birthday);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }    
    return edad;
}

// Obtener promedio de sus scores
Koders.prototype.score =function () {
    console.log(this.scores)
    const suma = this.scores.reduce( (accum,score) => { 
        return accum + score.score     
    },0)
   return suma/this.scores.length 
}

let koder =kodersCollection.map((koders)=> new Koders(koders.name,koders.lastName,koders.birthday,koders.generation,koders.bootcamp,koders.scores))
console.log(koder)

// Colección de Koder que pertenezcan a JavaScript
const koderJS = (koder) => {
 
    let koders =koder.reduce( (accum,bootcamp) => {
        return bootcamp.bootcamp ==="JavaScript"
              ?[...accum, bootcamp]        
              :accum 
      },[])
    return koders  
}  
  console.log( koderJS(koder))

// Colección de Koder que pertenezcan a Python
const koderPython = (koder) => {
 
    let koders =koder.reduce( (accum,bootcamp) => {
        return bootcamp.bootcamp ==="Python"
              ?[...accum, bootcamp]        
              :accum 
      },[])
    return koders  
}  
  console.log( koderPython(koder))

////
const koderBoot = (koder,boot) => {
 
    let koders =koder.reduce( (accum,bootcamp) => {
        return bootcamp.bootcamp === boot
              ?[...accum, bootcamp]        
              :accum 
      },[])
    return koders  
}  
  console.log( koderBoot(koder,"JavaScript"))


