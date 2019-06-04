import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauxClient: ""
  };

  handleChange = event => {
    this.setState({ nouveauxClient: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.nouveauxClient;

    this.props.onClientAdd({ id, nom });
  };
  render() {
    const onSubmit = this.props.onSubmit;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group ">
          <input
            type="text"
            value={this.state.nouveauxClient}
            onChange={this.handleChange}
            placeholder="Ajouter client"
            className="form-control"
          />
          <br />
          <input type="submit" className="btn btn-primary" value="Entrer" />
        </div>
      </form>
    );
  }
}

export default ClientForm;
