import React, { Component } from 'react';
import { Button } from 'antd';
import Icon from 'utils/Icon';

class JobCard extends Component {
    render() {
        return (
            <>
                <div className="card-layout d-flex align-items-center justify-content-between mb-30">
                        <div className="d-flex align-items-center">
                            <img alt="company-image" src={this.props.companyImage} className="company-image mr-10"/>
                            <div className="d-flex flex-column">
                                <div className="company-post mb-2">{this.props.post}</div>
                                <div className="company-info mb-2">
                                    <span className="mr-10">{this.props.companyName}  |</span>
                                    <span className="mr-10">{this.props.location}  |</span>
                                    <span>{this.props.experience}</span>
                                </div>
                                <div>
                                    <span className="company-skill mr-`5">Skills :</span>
                                    <span className="skill-set">{this.props.skills}</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-10">
                            <div className="d-flex align-items-center justify-content-center mb-40">
                                <div className="clickable">
                                    <Icon className="icon-size-20 mr-20" icon="ICON_FACEBOOK"/>
                                </div>
                                <div className="clickable">
                                    <Icon className="icon-size-20 mr-20" icon="ICON_TWITTER"/>
                                </div>
                                <div className="clickable">
                                    <Icon className="icon-size-20" icon="ICON_SHARE"/>
                                </div>
                            </div>
                            <Button type="primary">Apply</Button>
                        </div>
                    </div>
            </>
        );
    }
}

export default JobCard;