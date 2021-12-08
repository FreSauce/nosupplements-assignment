import { Avatar, Card } from "antd";
import {
    EditOutlined,
    DeleteFilled,
    HeartOutlined,
    HeartFilled,
    MailOutlined,
    PhoneOutlined,
    GlobalOutlined,
} from "@ant-design/icons";

import styles from "./carditem.module.css";

const CardItem = ({ cardData, likeCard, editCard, deleteCard }) => {
    return (
        <div>
            <Card
                className={styles.cardItem}
                bordered={true}
                style={{ margin: "15px" }}
                cover={
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            backgroundColor: "#f5f5f5",
                            justifyContent: "center",
                        }}
                    >
                        <Avatar
                            size={200}
                            src={cardData?.avatarUrl}
                            shape="square"
                        />
                    </div>
                }
                actions={[
                    <LikeButton cardData={cardData} likeCard={likeCard} />,
                    <button className={styles.button} onClick={() => editCard(cardData.id)}>
                        <EditOutlined />
                    </button>,
                    <button className={styles.button} onClick={() => deleteCard(cardData.id)}>
                        <DeleteFilled />
                    </button>
                ]}
            >
                <h3>{cardData.name}</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <MailOutlined
                        style={{
                            fontSize: "18px",
                        }}
                    />
                    <p style={{ margin: "0 0 0 10px" }}>{cardData.email}</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <PhoneOutlined
                        style={{
                            fontSize: "18px",
                        }}
                    />
                    <p style={{ margin: "4px 0 0 10px" }}>{cardData.phone}</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <GlobalOutlined
                        style={{
                            fontSize: "18px",
                        }}
                    />
                    <p style={{ margin: "4px 0 0 10px" }}>{cardData.website}</p>
                </div>
            </Card>
        </div>
    );
};

const LikeButton = ({ cardData, likeCard }) => {
    return cardData.isLiked ? (
        <button className={styles.button} onClick={() => likeCard(cardData.id)}>
            <HeartFilled
                style={{ color: "red", fontSize: "20px", padding: 0 }}
            />
        </button>
    ) : (
        <button className={styles.button} onClick={() => likeCard(cardData.id)}>
            <HeartOutlined style={{ color: "red" }} />
        </button>
    );
};

export default CardItem;
