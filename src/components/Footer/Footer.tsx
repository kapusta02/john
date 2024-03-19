import {Image, Space, Typography} from "antd";
import './Footer.css';

const {Text, Link} = Typography;
export const Footer = () => {
    return (
        <>
            <Space className="container">
                <Space className="messengers-block">
                    <Link href="https://facebook.com" target="_blank">
                        <Image
                            src="../../public/uploads/messengers/fb.png"
                            alt="Facebook"
                            preview={false}
                            className="messengers-block-image"
                        />
                    </Link>
                    <Link href="https://instagram.com" target="_blank">
                        <Image
                            src="../../public/uploads/messengers/insta.png"
                            alt="Instagram"
                            preview={false}
                            className="messengers-block-image"
                        />
                    </Link>
                    <Link href="https://twitter.com" target="_blank">
                        <Image
                            src="../../public/uploads/messengers/twitter.png"
                            alt="Twitter"
                            preview={false}
                            className="messengers-block-image"
                        />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <Image
                            src="../../public/uploads/messengers/linkedin.png"
                            alt="Linkedin"
                            preview={false}
                            className="messengers-block-image"
                        />
                    </Link>
                </Space>
                <Text className="messengers-block-text">Copyright ©2020 All rights reserved</Text>
            </Space>
        </>
    )
}