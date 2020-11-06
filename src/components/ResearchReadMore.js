import React from "react";
// reactstrap components
import {
    Button,
    Modal,
    Row,
    Col
} from "reactstrap";

class Modals extends React.Component {
    state = {
        defaultModal: false
    };
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };
    render() {
        return (
            <>
                <Row>
                    <Col md="8">
                        <Button
                            block
                            className="mb-3"
                            color="warning"
                            type="button"
                            onClick={() => this.toggleModal("notificationModal")}
                        >
                            Read More
                        </Button>
                        <Modal
                            className="modal-dialog-centered modal-danger"
                            contentClassName="bg-gradient-teal"
                            isOpen={this.state.notificationModal}
                            toggle={() => this.toggleModal("notificationModal")}
                        >
                            <div className="modal-header">
                                <h3 className="modal-title" id="modal-title-notification">
                                    Research
                                </h3>
                                <button
                                    aria-label="Close"
                                    className="close"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() => this.toggleModal("notificationModal")}
                                >
                                    <span aria-hidden={true}>×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="py-3">
                                    <p>
                                        More specifically, we want to investigate how these treatments can increase musicians’ mental and physical comfort and possibly improve the quality of their performance. While there is a great deal of subjective evidence suggesting that these practices are beneficial to musicians, there is a lack of objective data confirming these reports. In order to address this lack of research, the centre studies how these treatments can increase musicians’ mental and physical comfort and possibly improve the quality of their performance. Also, music wellness research is faced with the troubling problem of determining what is meant by “improvement” or “optimal” criteria. Our research investigates whether musical (expression, musicality), mechanical (low forces, stiffness, high speed) and biological (reduced injury risk, low co-contraction) criteria are compatible, and whether it is possible to approach music making in a way that simultaneously achieves all three.
                                    </p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button
                                    className="text-white ml-auto"
                                    color="link"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() => this.toggleModal("notificationModal")}
                                >
                                    Close
                                </Button>
                            </div>
                        </Modal>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Modals;