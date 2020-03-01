import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from './Main/Post.js';

export default class ListPosts extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                { "post_title": "Apples"},
                { "post_title": "Peaches"}
            ]
        };
    }

    renderPosts() {
        var listPost = this.state.products.map((product, index) => {
            return <Post key={index.toString()} post_title={product.post_title}/>;
        });
        return (
            <ul>
                {listPost}
            </ul>
            );
    }

    render() {
        return (
            <div className="container">
                {this.renderPosts()}
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
          fetch("http://localhost:8888/post/getPos12ts")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                products: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }, 1000)
    } 
}