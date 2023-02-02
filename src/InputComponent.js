import { Component } from "react";

export class Checklist extends Component {
    state = {
        userinput: "",
        list: []
    }

onChange(e) {
   this.setState({userinput: e})
}




    render() {
        return(
            <div>
                <input onChange = { (e) => {this.onChange(e.target.value)}}
                 placeholder="Enter your deal..."
                  type="text" value={this.state.userinput}/>
            </div>
        )
    }
}