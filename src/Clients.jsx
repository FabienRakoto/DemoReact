import React, { Component } from "react";

class Client extends Component {
  render() {
    const detail = this.props.detail;
    const onDelete = this.props.onDelete;
    return (
      <tr>
        <td>{detail.nom}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(detail.id)}
          >
            <i className="fa fa-trash" />
          </button>
        </td>
      </tr>
    );
  }
}

export default Client;
