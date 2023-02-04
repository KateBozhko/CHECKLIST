import { Component } from "react";
import tick from './tick.png';


export class Checklist extends Component {
state = {
   userinput: "",
   listArray: []

}
changeInput(e) {
this.setState({userinput: e})
}
addItem(input) {
    if(input === "") {
        alert("Please enter a deal!!!")
    } else {
        let arr = this.state.listArray;
        arr.push(input);
        this.setState({listArray: arr, userinput: ""})
    }
}
crossWord(event) {
    const li = event.target;
    li.classList.toggle('cross')
}
deleteItem() {
    let arr = this.setState.listArray;
    arr = [];
    this.setState({listArray: arr})
}
onSubmit(e) {
e.preventDefault()
}

    render() {
        return (
<div>
    <form onSubmit={this.onSubmit}>
    <div>
    <input className="input" placeholder="Enter your deal..."
    type="text"
    value={this.state.userinput}
    onChange={(e) => {this.changeInput(e.target.value)}}/>
</div>
<div className="buttons">
<div>
<button className="btnOne" onClick={() => this.addItem(this.state.userinput)}>ADD A DEAL</button>

<ul>
    {this.state.listArray.map((item, index) => (
       <li onClick={this.crossWord} key={index}>
           <img className="tick" src={tick} width="20px" alt="tick"/>
           {item}</li>
    ))}
</ul>
<div>
    <button className="btnTwo" onClick={() => this.deleteItem()}>DELETE</button>
</div>
</div>
</div>
</form>
</div>
        )
    }
}