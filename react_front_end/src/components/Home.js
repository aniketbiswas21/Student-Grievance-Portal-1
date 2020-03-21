import React, { Component} from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";

class Home extends Component{
    state={
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {                          //fires up only after the data is fetched
            console.log(res);
            this.setState({
                posts: res.data       
            })
        })
        
    }
render(){
    const { posts}=this.state;
    const postList= posts.length?(posts.map(post=>{
        return(
            <div class="row">
            <div class="col s12">
              <div class="card #f4511e deep-orange darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{post.title}</span>
                  <p>{post.body}</p>
                </div>
                <div class="card-action">
                   <Popup modal trigger={<a className="pointer">Read more...</a>}>
                   {close=>(
                        <div><a onClick={close}><i class=" modal-close material-icons right pointer" >clear </i></a> 
                        <h4 id="category">Academics</h4>
                          <p id="statement">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa eveniet tempora sequi velit asperiores 
                              blanditiis libero dignissimos voluptas sint ad, accusamus officiis itaque minima, cumque molestias odio unde eum.</p>
                       
                        <div class="modal-footer">
                          <a href="#!" class="modal-close btn-flat green right">Upvote<i class="material-icons right">arrow_upward</i></a>
                          <a href="#!" class="modal-close btn-flat red right">Downvote<i class="material-icons right">arrow_downward</i></a>
                        </div>
                        </div>
                        )}
                   </Popup>
                    
                </div>
              </div>
            </div>
            </div>
           
        )
    })):( 
        <div className="center">
        <div class="preloader-wrapper active">
        <div class="spinner-layer spinner-red-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
      </div>
    )
    return(
        <div class="container">
        <br/>
        <br/>
        {postList}
        <div class="fixed-action-btn">
        <a class="btn-floating btn-large red waves-effect hoverable">
          <i class="large material-icons">add</i>
        </a>
      </div>
            </div>
            
    )
}
}
export default Home;