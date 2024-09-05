const name1 = "Kabil";
const name2 = "Kabil";
const object1 = { name: "Kabil" };
const object2 = { name: "Kabil" };
function Compare() {
    const comp1 = (name1 === name2);
    alert(`Primitive comparison: ${comp1}`);  
    const comp2 = (object1 === object2);
    alert(`Reference comparison: ${comp2}`);  
}
function App()
{
    return(
        <div className="App">
            <h1>Let us see the output of the Javascript</h1>
            <button onClick={Compare}>Click</button><br></br><br></br>
        </div>
    )
}
export default App;
