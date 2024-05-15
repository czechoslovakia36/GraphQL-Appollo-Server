const  UserList = [
    {
    
      name: "Pedro",
      id: 1,
      username: "PedroTech",
      age: 20,
      nationality: "BRAZIL",
      friends : [
        {
     
          name: "Kelly",
          username: "kelly2019",
          age: 5,
          nationality: "CHILE"
        },
        {
     
          name: "Mukesh",
          username: "mukesh512",
          age: 12,
          nationality: "INDIA"
        },
      ]
    },
    {
     
      name: "Kelly",
      id: 2,
      username: "kelly2019",
      age: 5,
      nationality: "CHILE"
    },
    {
     
      name: "Mukesh",
      id: 3,
      username: "mukesh512",
      age: 12,
      nationality: "INDIA",
      friends : [
        {
     
          name: "Doltero",
          username: "Doltero123",
          age: 90,
          nationality: "GERMANY"
        }
      ]
    },
    {
     
      name: "Doltero",
      id: 4,
      username: "Doltero123",
      age: 90,
      nationality: "GERMANY"
    }
  ]

  const MovieList= [
    {
      id:1,
      name:"Avengers",
      yearOfPublication:2019,
      isInTheaters:true
    },
    {
      id:2,
      name:"Superman",
      yearOfPublication:1978,
      isInTheaters:true
    },
    {
      id:3,
      name:"Superbad",
      yearOfPublication:2009,
      isInTheaters:true
    },
    {
      id:4,
      name:"Bolo Tara Rara",
      yearOfPublication:1787,
      isInTheaters:false
    }
  ]


  module.exports = {
    UserList
    ,MovieList
  }


