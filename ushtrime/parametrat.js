//ARROW FUNCTION
const hello = (name = "user", surname) => {
    console.log("Hello " + name)
}



const login = (name = "admin", password = "admin") => {
    var emri = document.getElementById('username').value
    var pass = document.getElementById('password').value
    var succes = document.getElementById('sucess')

    if (emri == name && pass == password) {
        succes.innerHTML = "You are in"
    }

    else {
        succes.innerHTML = "Incorrect password"
    }

}



const change_password = (password="admin") => {
    var change = document.getElementById('change').value
    var succes = document.getElementById('sucess')
    


}




hello('Uvejs')




const product ={
    name:"Notebook",
    price: 3,
    stock:200
}

//type: order or devilery




//Prizren lat, log





const trasation = (type,{name ,price, stock} = {} ) => {
    console.log("Type:"  ,type ,"Name:",name, "Price",price,"Stock",stock)
}



trasation('order',product)