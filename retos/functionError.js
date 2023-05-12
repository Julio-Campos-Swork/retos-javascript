async function request(){
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const json = await response.json();
        // console.log(json);
        return json;
        
    } catch (error) {
        return {message: "error"}
    }
}
async function process(){
    const data = await request();
    console.log(data.results[0].name);
}

process();

const name = "Jhon";
window.name = "Taylor";

const getName = () => {
    const name = "Jeff";
    return this.name;;
};
console.log(getName());