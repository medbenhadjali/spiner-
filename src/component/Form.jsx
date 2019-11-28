import React, { Component } from "react";
import "./Styles/Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class Form extends Component {
  // const [show, setShow] = useState(false);
  state = {
    Name: "",
    Date: "",
    Rate: 0,
    link: "",
    modal: false
  };
  // const [modal, setModal] = useState(false);

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  //  handleClose = () => {
  //   this.setState({
  //     show:false
  //   });
  //     // setShow(false)};
  //  }

  // handleShow = () => {

  //   this.setState({
  //     show:true
  //   });
  //   // setShow(true)
  // };

  recupname = e => {
    const { value } = e.target;
    this.setState({
      Name: value
    });
  };
  recupdate = e => {
    const { value } = e.target;
    this.setState({
      Date: value
    });
  };
  recuprate = e => {
    const { value } = e.target;
    this.setState({
      Rate: value
    });
  };
  recuplink = e => {
    const { value } = e.target;
    this.setState({
      link: value
    });
  };
  submit = () => {
   
    this.props.onsubmit(this.state);
    // this.toggle()
  };
  render() {
    const { Name, Date, Rate, link, modal } = this.state;
    return (
      <div className="modal-container">
 
        <div className="button-container">
        <Button color="danger" className="button-add" onClick={this.toggle}>Add new mouvie</Button>
        </div>
      <Modal isOpen={modal} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
        <ModalBody>
        <div className="form-container">
            <div className="input-container">
              <input
                type="text"
                placeholder="Name"
                onChange={this.recupname}
                value={Name}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Date"
                onChange={this.recupdate}
                value={Date}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Rate"
                onChange={this.recuprate}
                value={Rate}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Http..."
                onChange={this.recuplink}
                value={link}
              />
            </div>
           
          </div>


        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{this.submit();this.toggle()}}>Add</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>



     
      </div>
    );
  }
}
// render(<Example />);
