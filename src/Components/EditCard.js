import { Modal, Input, Form } from "antd";
import { useEffect } from "react";

const EditCard = ({ isModalVisible, handleOk, handleCancel, modalData }) => {
    const [form] = Form.useForm();
    
    useEffect(() => {
        if(modalData){
            form.setFieldsValue({
                name: modalData.name,
                email: modalData.email,
                phone: modalData.phone,
                website: modalData.website,
            });
        }
    }, [form, modalData]);

    return (
        <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={() => {
                form.validateFields().then((values) => {
                    handleOk(values);
                });
            }}
            onCancel={() => {
                form.resetFields();
                handleCancel();
            }}
        >
            <Form form={form} layout="horizontal" name="editForm">
                <Form.Item
                    labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
                    wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
                    name={"name"}
                    label="Name"
                    rules={[{ required: true }]}
                >
                    <Input xs={24} sm={16} />
                </Form.Item>
                <Form.Item
                    labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
                    wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
                    name={"email"}
                    label="Email"
                    rules={[
                        {
                            type: "email",
                            required: true,
                            message: "Invalid email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
                    wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
                    name={"phone"}
                    label="Phone"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
                    wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
                    name={"website"}
                    label="Website"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditCard;
