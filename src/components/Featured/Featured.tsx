import './Featured.css'
import {Image, Space, Typography} from "antd";

const {Text} = Typography;
export const Featured = () => {
    return (
        <>
            <Space className="container">
                <Space className="header">
                    <Text className="featured-header">Featured works</Text>
                </Space>
                <Space className="featured">
                    <Space className="featured-block">
                        <Image
                            src="../../public/uploads/dashbord.png"
                            alt="Dashbord"
                            width="246px"
                            height="180px"
                            preview={false}
                        />
                        <Space className="featured-header-block">
                            <Text className="featured-header-block-header">Designing Dashboards</Text>
                            <Space className="featured-header-block-header-date">
                                <Text className="featured-header-block-header-date-year">2020</Text>
                                <Text className="featured-header-block-header-date-event">Dashboard</Text>
                            </Space>
                            <Text className="featured-header-block-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.</Text>
                        </Space>
                    </Space>
                </Space>
                <Space className="featured">
                    <Space className="featured-block">
                        <Image
                            src="../../public/uploads/vibrant.png"
                            alt="Vibrant"
                            width="246px"
                            height="180px"
                            preview={false}
                        />
                        <Space className="featured-header-block">
                            <Text className="featured-header-block-header">Vibrant Portraits of 2020</Text>
                            <Space className="featured-header-block-header-date">
                                <Text className="featured-header-block-header-date-year">2018</Text>
                                <Text className="featured-header-block-header-date-event">Illustration</Text>
                            </Space>
                            <Text className="featured-header-block-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.</Text>
                        </Space>
                    </Space>
                </Space>
                <Space className="featured">
                    <Space className="featured-block">
                        <Image
                            src="../../public/uploads/days.png"
                            alt="36 days"
                            width="246px"
                            height="180px"
                            preview={false}
                        />
                        <Space className="featured-header-block">
                            <Text className="featured-header-block-header">36 Days of Malayalam type</Text>
                            <Space className="featured-header-block-header-date">
                                <Text className="featured-header-block-header-date-year">2018</Text>
                                <Text className="featured-header-block-header-date-event">Typography</Text>
                            </Space>
                            <Text className="featured-header-block-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.</Text>
                        </Space>
                    </Space>
                </Space>
            </Space>
        </>
    )
}