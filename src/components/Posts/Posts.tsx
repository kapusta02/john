import {Flex, Space, Typography} from "antd";
import './Posts.css';

const {Text, Link} = Typography;

export const Posts = () => {
    return (
        <>
            <Space className="posts">
                <Space className="container">
                    <Flex className="posts-text">
                        <Text className="posts-block-text">Recent posts</Text>
                        <Link className="posts-block-text-link">View all</Link>
                    </Flex>
                </Space>
                <Space className="posts-card">
                    <Space className="posts-block-card">
                        <Text className="posts-block-card-header">Making a design system from scratch</Text>
                        <Space>
                            <Text className="posts-block-card-date month">12 Feb 2020</Text>
                            <Text className="posts-block-card-date">Design, Pattern</Text>
                        </Space>
                        <Text className="posts-block-card-text">Amet minim mollit non deserunt ullamco est sit <br/>
                            aliqua dolor do amet sint. Velit officia consequat <br/>
                            duis enim velit mollit. Exercitation veniam <br/>
                            consequat sunt nostrud amet.</Text>
                    </Space>
                    <Space className="posts-block-card">
                        <Text className="posts-block-card-header">Creating pixel perfect icons in Figma</Text>
                        <Space>
                            <Text className="posts-block-card-date month">12 Feb 2020</Text>
                            <Text className="posts-block-card-date">Figma, Icon Design</Text>
                        </Space>
                        <Text className="posts-block-card-text">Amet minim mollit non deserunt ullamco est sit <br/>
                            aliqua dolor do amet sint. Velit officia consequat <br/>
                            duis enim velit mollit. Exercitation veniam <br/>
                            consequat sunt nostrud amet.</Text>
                    </Space>
                </Space>
            </Space>
        </>
    )
}