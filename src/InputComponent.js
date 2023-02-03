import { Component } from "react";


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
    let li = event.target;
    li.classList.target('cross')
}
deleteItem() {
    let arr = this.setState.listArray;
    arr = [];
    this.setState({listArray: arr})
}

    render() {
        return (
<div>
    <div>
    <input placeholder="Enter your deal..."
    type="text"
    value={this.state.userinput}
    onChange={(e) => {this.changeInput(e.target.value)}}/>
</div>
<div>
<button onClick={() => this.addItem(this.state.userinput)}>ADD A DEAL</button>
</div>
<ul>
    {this.state.listArray.map((item, index) => (
       <li onClick={this.crossWord} key={index}>{item}</li>
    ))}
</ul>
<div>
    <button onClick={() => this.deleteItem()}>DELETE</button>
</div>

</div>
        )
    }
}