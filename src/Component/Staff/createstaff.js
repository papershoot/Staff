import { Col, FormInput, Row } from "shards-react";

function CreateStaff() {
    return (
        <>
            <div className="content">
                <div className="form-box">
                    <Row>
                        <Col>
                            <div className="form-input">
                                <div className="label-name">
                                    Name
                                </div>
                                <FormInput
                                    placeholder="Nhập Tên"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default CreateStaff;