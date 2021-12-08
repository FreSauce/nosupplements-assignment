import CardItem from "./CardItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col} from "antd";
import EditCard from "./EditCard";
import Loading from "./Loading";
const Cards = () => {
    const [cardData, setCardData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        let cards = [];
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                res.data.map((data) => {
                    cards.push({
                        id: data.id,
                        username: data.username,
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        website: "http://" + data.website,
                        company: data.company.name,
                        address: data.address,
                        avatarUrl: `https://avatars.dicebear.com/v2/avataaars/${data.username}.svg?options[mood][]=happy`,
                        isLiked: false,
                    });
                    return null;
                });
                setCardData(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Card actions
    const likeCard = (id) => {
        const newData = cardData.map((item) => {
            if (item.id === id) {
                return { ...item, isLiked: !item.isLiked };
            }
            return item;
        });
        setCardData(newData);
    };

    const editCard = (id) => {
        cardData.map((item) => {
            if (item.id === id) {
                setModalData(item);
            }
            return item;
        });
        showModal();
    };

    const deleteCard = (id) => {
        const newData = cardData.filter((item) => item.id !== id);
        setCardData(newData);
    };

    //Modal handlers
    const showModal = () => {

        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        const edit = modalData;
        edit.name = values.name;
        edit.email = values.email;
        edit.phone = values.phone;
        edit.website = values.website;
        const newData = cardData.map((item) => {
            if (item.id === edit.id) {
                return { ...item, ...edit };
            }
            return item;
        });
        setIsModalVisible(false);
        setCardData(newData);
    };

    const handleCancel = () => {
        setModalData(null);
        setIsModalVisible(false);
    };

    if (cardData.length === 0) {
        return <Loading />;
    }

    return (
        <div>
            <Row>
                {cardData
                    ? cardData.map((data, index) => {
                          return (
                              <Col xs={24} sm={24} md={8} lg={8} xl={6} key={index}>
                                  <CardItem
                                      cardData={data}
                                      likeCard={likeCard}
                                      editCard={editCard}
                                      deleteCard={deleteCard}
                                      key={data.id}
                                  />
                              </Col>
                          );
                      })
                    : null}
            </Row>
            <EditCard
                modalData={modalData}
                handleOk={handleOk}
                handleCancel={handleCancel}
                isModalVisible={isModalVisible}
            />
        </div>
    );
};

export default Cards;
