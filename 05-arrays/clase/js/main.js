let arrayKoders=["Paco",
                 "Clau",
                 "Fany",
                 "Emi" ]       

  for (let i=0; i< arrayKoders.length; i++ )
  {
      console.log(`hola, mi nombre es ${arrayKoders[i]}`)
  }


  console.log("--------push-----------")
/*push agrega uni o mas items al array*/ 
  arrayKoders.push("Adolfo","Pao","Mike");

  for (let i=0; i< arrayKoders.length; i++ )
  {
      console.log(`hola, mi nombre es ${arrayKoders[i]}`)
  }

  console.log("-------------------")

  arrayKoders.shift()
  console.log(arrayKoders)