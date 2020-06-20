import React, { Component } from 'react';
import JobCard from './JobCard';
import { Form,Checkbox,Button,Input } from 'antd';
const { Search } = Input;

class Jobs extends Component {

    state = {
        jobsDesc:[{
                id:'1',
                companyImage:"img/com1.jpg",
                post:"Frontend Developer",
                companyName:"Lets Venture",
                location:"Bangalore",
                experience:"0 - 2 Years Exp",
                skills:"Angular, React, Javascript, Java, Ruby",
                type:'full-time'
            },{
                id:"2",
                companyImage:"img/com2.png",
                post:"Java Developer",
                companyName:"Google Inc.",
                location:"New Delhi",
                experience:"2 - 4 Years Exp",
                skills:"Java, OOPS",
                type:'part-time'
            },
            {
                id:"3",
                companyImage:"img/com3.png",
                post:"Frontend Developer",
                companyName:"Slack",
                location:"Pune",
                experience:"2 - 4 Years Exp",
                skills:"React, Javascript, Angular, HTML, CSS",
                type:'freelancer'
            }
        ]
    }

    onFinish = values => {
        console.log('Success:', values);
    };

    filterHandler = (e,v) => {
        // console.log("Ddd ",e.target.value);
        
        if(v === 'full-time' && e.target.checked){
            let arraySorting =  this.state.jobsDesc.filter(function(value) {
                return value.type == 'full-time';
            });
            this.setState({
                jobsDesc:arraySorting
            })
        } 
        if(v === 'part-time' && e.target.checked){
            let arraySorting =  this.state.jobsDesc.filter(function(value) {
                return value.type == 'part-time';
            });
            this.setState({
                jobsDesc:arraySorting
            })
        }
        if(v === 'freelancer' && e.target.checked){
            let arraySorting =  this.state.jobsDesc.filter(function(value) {
                return value.type == 'part-time';
            });
            this.setState({
                jobsDesc:arraySorting
            })
        }
    }

    render() {
        return (
            <div>
                <div className="d-flex align-items-center mb-30 mt-10">
                    <Search
                        placeholder="search by keyword"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                        className="mr-20"
                    />
                    <Checkbox onChange={(e)=>this.filterHandler(e,"all")}>All</Checkbox>
                    <Checkbox onChange={(e)=>this.filterHandler(e,"full-time")}>Full-time</Checkbox>
                    <Checkbox onChange={(e)=>this.filterHandler(e,"part-time")}>Part-time</Checkbox>
                    <Checkbox onChange={(e)=>this.filterHandler(e,"freelancer")}>Freelancer</Checkbox>
                    <Button type="primary">Search</Button>
                </div>
                <div>
                    {this.state.jobsDesc.length ? 
                        this.state.jobsDesc.map((value,index)=>
                            <JobCard
                                key={index}
                                id={value.id}
                                companyImage={value.companyImage}
                                post={value.post}
                                companyName={value.companyName}
                                location={value.location}
                                experience={value.experience}
                                skills={value.skills}
                            />      
                        )
                    :null}
                </div>
            </div>
        );
    }
}

export default Jobs;