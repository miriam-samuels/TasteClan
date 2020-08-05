import React, { Component } from 'react'
import Menubar from './menubar';
import Ordercart from './orderCart';


class blog extends Component {
    constructor(props) {
        super(props)
        const date = new Date();
        const time = new Date();
        const counter = 1;
        this.state = {
            counter:counter,
            post: [
                {
                    id:counter,
                    heading:"",
                    body:"",
                    timeCreated: time,
                    dateCreated: date,
                },
            ],

        };
    }
    loadimg = (e) =>{
        let img = document.getElementById('output');
        img.src = URL.createObjectURL(e.target.files[0]);
    }
    sortByLatest = () => {
        const sortedPost = this.state.post.sort((a, b) => {
            return  b.timeCreated - a.timeCreated ;
        });
        this.setState({
            post: [...sortedPost],
        });
    }
    sortByEarliest = () => {
        const sortedPost = this.state.post.sort((a, b) => {
            return   a.timeCreated - b.timeCreated ;
        });
        this.setState({
            post: [...sortedPost],
        });
    }

    addPost = () => {
        const date = new Date();
        const time = new Date();
        const nextId = this.state.counter + 1 
        const newPost = [
            {
                id:nextId,
                heading:"",
                body:"",
                timeCreated: time,
                dateCreated: date,
            },
            ...this.state.post,

        ];
        this.setState({
            post: newPost,
            counter:nextId
        });
    }
removePost = ()=>{
    let remove = Array.from(document.querySelectorAll(".post"));
    remove.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            remove[index].style.display = "none";
        })

    })
}

    render() {
        return (
            <div className="blog">
                <Menubar />
                <Ordercart />
                <div className="blogBtn">
                    <button onClick={this.addPost}>Add Post</button>
                    <button onClick={this.sortByLatest}>Latest</button>
                    <button onClick={this.sortByEarliest}>Earliest</button>
                </div>

                {
                    this.state.post.map((item) => (
                        <div key={item.id} className="post">
                            <button onMouseOver={this.removePost}>X</button>
                            <textarea className="heading" placeholder="heading" maxLength="90" defaultValue={item.heading}/>
                            <textarea className="body" placeholder="body" rows="4" defaultValue={item.body}/>
                            <label>id:{item.id}</label><br />
                            <label>date:{item.dateCreated.toLocaleDateString()}</label><br />
                            <label>time:{item.timeCreated.toLocaleTimeString()}</label>


                        </div>
                    ))
                }
                <div className="post">
                    <input type="file" accept="image/*" name="image" id="file" onChange={this.loadimg} />
                    <img id="output" width="100%" alt="pic"/>
                    <button>X</button>
                    <h4 className="heading">Sample Post</h4>
                    <p className="body">
                        This is just a sample post, so don't bother about it and just carry on,
                        Best of Luck &#9786; &hearts;
                    </p>
                    <label>date:7/23/2020</label><br />
                    <label>time:12:15:29</label>
                </div>
            </div>
        );
    }
}

export default blog
