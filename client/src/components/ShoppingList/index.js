import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import { deleteItem, getItems } from "../../actions/itemActions";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.itemReducer;

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem
                  style={{ fontWeight: "bold", letterSpacing: "1px" }}
                >
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  itemReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  itemReducer: state.itemReducer,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
