import  React, {Component} from 'react';

class FormExample extends Component {
    //Pierwsza wartość inputa ustawiona na ""
    state = {
        name: ""
    };

    handleSubmit = e => {
        e.preventDefault();
    }

    handleNameChange = e => {
        this.setState({name: e.target.value});
    };



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Imię i nazwisko:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        );
    }
}

export default FormExample;
