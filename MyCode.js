//I know it is not great what I wrote here but it is the first time in my life I'm coding on JS.
//Actually I only know Java and Kotlin.
//I've learned some Javascript only for this ocasion so I hope you'll apreciate))))


const boy = {
    name:"Alex", 
    isHappy:false,
    greet(girl){
        console.log("Hi "+girl.name +"!")
    },
    askHerForACoffee(girl){
        this.greet(girl)
        console.log("Let's have a coffee!")
         girlRespons = girl.acceptInvitation()
         if(girlRespons = "ok"){
            console.log("Uraa!")
            this.isHappy=true
         }else{
            console.log("not Ura")
         }

    }
}

const girl = {
    name:"Nastea",
    acceptInvitation(){
        let response = prompt("Hmmm should I accept(ok to accept/no to reject)")
        console.log(""+this.name+" said "+response)
        return response
    }
}

boy.askHerForACoffee(girl)
