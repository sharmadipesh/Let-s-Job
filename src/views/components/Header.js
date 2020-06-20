import React, { Component } from 'react';
import Icon from 'utils/Icon';
import { Menu, Dropdown,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class Header extends Component {
    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <div >
                        1st menu item
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div>
                        2nd menu item
                    </div>
                </Menu.Item>
            </Menu>
        );


        return (
            <div className="d-flex align-items-center justify-content-between header-style-container">
                <div className="d-flex align-items-center">
                    <Icon className="icon-logo mr-10" icon="ICON_LOGO"/>
                    <div className="company-name mr-40">Let's Jobs</div>
                    <div className="mr-25">
                        <Dropdown overlay={menu}>
                            <div className="clickable dropdown-menu-style">
                                For Employees <DownOutlined />
                            </div>
                        </Dropdown>
                    </div>
                    <div className="mr-25">
                        <Dropdown overlay={menu}>
                            <div className="clickable dropdown-menu-style">
                                For Applicants <DownOutlined />
                            </div>
                        </Dropdown>
                    </div>
                    <div className="clickable dropdown-menu-style">Support</div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="dropdown-menu-style clickable mr-20">Sign in</div>
                    <Button type="primary">Submit Jobs</Button>
                </div>
            </div>
            
        );
    }
}

export default Header;