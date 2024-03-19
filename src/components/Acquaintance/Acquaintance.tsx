import {Flex, Image, Space, Typography} from "antd";
import './Acquaintance.css'

const {Text} = Typography;

export const Acquaintance = () => {
    return (
        <>
            <Flex className="acquaintance">
                <Space className="acquaintance-block">
                    <Text className="acquaintance-block-header">
                        Hi, I am John,
                        Creative Technologist
                    </Text>
                    <Text className="acquaintance-block-text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                        nostrud amet.
                    </Text>
                    <button className="acquaintance-block-btn">Download Resume</button>
                </Space>
                <Space className="acquaintance-block-image">
                    <Image
                        src="../../public/uploads/john.png"
                        alt="John"
                        preview={false}
                    />
                </Space>
            </Flex>
        </>
    )
}