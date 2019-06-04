import React from "react";
import ReactDOM from "react-dom";
import Clients from "./Clients";
import "./styles.css";
import ClientForm from "./ClientForm";

class App extends React.Component {
  //create ref clients

  state = {
    clients: [
      { id: 1, nom: "Nomenajanahary Fabien" },
      { id: 2, nom: "Tahianajanahary Fabrice" },
      { id: 3, nom: "Tahianajanahary Rakoto" }
    ],
    nouveauxClient: ""
  };

  handleDelete = id => {
    //copie tableaux
    const clients = [...this.state.clients];
    //trouver la bonne index
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };

  clientsAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);
    this.setState({ clients });
  };

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <td>Nom</td>
            <td>Action</td>
          </thead>
          <tbody>
            {this.state.clients.map(client => (
              <Clients detail={client} onDelete={this.handleDelete} />
            ))}
          </tbody>
        </table>
        <hr />
        <ClientForm onClientAdd={this.clientsAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
