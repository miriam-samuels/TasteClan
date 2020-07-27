import React, { Component } from 'react'
import Menubar from './menubar';

class blog extends Component {
    constructor(props) {
        super(props)
        const date = new Date();
        const time = new Date();
        this.state = {
            comment: [
                {
                    timeCreated: time,
                    dateCreated: date,
                    heading:"",
                    body:"",
                },
            ],

        };
    }
    // sortByLatest = () => {
    //     const sortedPost = this.state.post.sort((a, b) => {
    //         return b.timeCreated - a.timeCreated;
    //     });
    //     this.setState({
    //         post: [...sortedPost],
    //     })
    // }
    headingChange = (e) => {
        this.setState({
            comment: [
                {
                    heading: e.target.value,
                },
            ]
        })
    }
    bodyChange = (e) => {
        this.setState({
            comment: [
                {
                    body: e.target.value,
                },
            ]
        })
    }
    addPost = () => {
        const date = new Date();
        const time = new Date();
        const newPost = [
            {
                timeCreated: time,
                dateCreated: date,
            },
            ...this.state.comment,
        ];
        this.setState({
            comment: newPost,
        });
    }


    render() {
        return (
            <div className="blog">
                <Menubar />
                <div className="blogBtn">
                    <button onClick={this.addPost}>Add Comment</button>
                    {/* <button onClick={this.sortByLatest}>Latest</button> */}
                </div>

                {
                    this.state.comment.map((item, index) => (
                        <div key={index} className="post">
                            <textarea className="heading" value={item.heading} placeholder="heading" maxLength="90" onChange={this.headingChange} />
                            <textarea className="body" value={item.body} placeholder="body" rows="3" onChange={this.bodyChange} />
                            <label>date:{item.dateCreated.toLocaleDateString()}</label><br />
                            <label>time:{item.timeCreated.toLocaleTimeString()}</label>
                        </div>
                    ))
                }
                <div className="post">
                    <h4 className="heading">Yellow Rice: Easy recipe for yelllow tumeric rice</h4>
                    <p className="body">
                        The classic Indian yellow rice is usually prepared by boiling
                        or steaming only white or brown rice with tumeric
                    </p>
                    <label>date:7/23/2020</label><br />
                    <label>time:12:15:29</label>
                </div>
            </div>
        );
    }
}

export default blog
