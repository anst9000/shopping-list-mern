import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { addItem } from "../../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close the modal
    this.toggle();
  };

  render() {
    return (
      <div className="">
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          add item
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          autoFocus={false}
          className="modal-show"
        >
          <ModalHeader toggle={this.toggle} charCode="close" color="red">
            add to shopping list
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  autoFocus={true}
                  placeholder="Add Shopping Item"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button
                type="submit"
                color="dark"
                style={{ marginTop: "2rem" }}
                block={true}
              >
                Add Item
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired,
  itemReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  itemReducer: state.itemReducer,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
