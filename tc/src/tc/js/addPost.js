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
                    heading:"Sample Post",
                    body:"This is just a sample post, so don't bother about it and just carry on, Best of Luck ( ;",
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

    addPost = (e) => {
        const date = new Date();
        const time = new Date();
        const nextId = this.state.counter + 1 
        const newPost = [
            {
                id:nextId,
                heading:e.target.defaultValue,
                body:e.target.defaultValue,
                timeCreated: time,
                dateCreated: date,
            },
            ...this.state.post,

        ];
        this.setState({
            post: newPost,
            counter:nextId
        });
        console.log(this.state.post)
    }
removePost = ()=>{
    let remove = Array.from(document.querySelectorAll(".post"));
    remove.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            remove[index].style.display = "none";
            this.state.post.splice(index,1);
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
                            <img id="output" width="100%" height="200px" alt="FilePic"/>
                            <textarea className="heading" placeholder="heading" maxLength="90" defaultValue={item.heading}/>
                            <textarea className="body" placeholder="body" rows="5" defaultValue={item.body}/>
                            {/* <label>id:{item.id}</label><br /> */}
                            <label>date:{item.dateCreated.toLocaleDateString()}</label><br />
                            <label>time:{item.timeCreated.toLocaleTimeString()}</label>
                            <input type="file"  name="image" id="file" onChange={this.loadimg} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default blog
