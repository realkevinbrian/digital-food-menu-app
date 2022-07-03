const generateToken = () => {
    let keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
    let Letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]

    console.log("=>", localStorage.length)
    if(localStorage.length === 0){
        return `${Letters[Math.round(Math.random() * 22)]+keys[Math.round(Math.random() * 10)]+Letters[Math.round(Math.random() * 15 - 4)]+keys[Math.round(Math.random() * 16)]+keys[Math.round(Math.random() * 15)]+Letters[Math.round(Math.random() * 20)]+keys[Math.round(Math.random() * 15)]+keys[Math.round(Math.random() * 12)]}`
    }
}
export default generateToken