import React, { Component } from 'react'
import Menubar from './menubar';


class blog extends Component {
    constructor(props) {
        super(props)
        const date = new Date();
        const time = new Date();
        this.state = {
            post: [
                {
                    heading:"Nigerian Suya",
                    body:"The never not delicious roasted beef of the nigeria culture is never not to be savoured with deight",
                    timeCreated: time,
                    dateCreated: date,
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
    // headingChange = (e) => {
    //     this.setState({
    //         post: [
    //             {
    //                 heading: e.target.value,
    //             },
    //         ]
    //     })
    // }
    // bodyChange = (e) => {
        // this.setState({
        //     post: [
        //         {
        //             body: e.target.value,
        //         },
        //     ]
        // })
    // }
    addPost = () => {
        const date = new Date();
        const time = new Date();
        const newPost = [
            ...this.state.post,
            {
                heading:"",
                body:"",
                timeCreated: time,
                dateCreated: date,
            },
        ];
        this.setState({
            post: newPost,
        });
        console.log(this.state.post);
    }


    render() {
        return (
            <div className="blog">
                <Menubar />
                <div className="blogBtn">
                    <button onClick={this.addPost}>Add Post</button>
                    {/* <button onClick={this.sortByLatest}>Latest</button> */}
                </div>

                {
                    this.state.post.map((item, index) => (
                        <div key={index} className="post">
                            <textarea className="heading" placeholder="heading" maxLength="90" value= {item.heading}></textarea>
                            <textarea className="body" placeholder="body" rows="3" value={item.body}></textarea>
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
