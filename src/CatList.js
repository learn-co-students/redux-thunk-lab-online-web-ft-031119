import React, { Component } from 'react';

class CatList extends Component {
   
    render() { 
        const cats = this.props.catPics.map((pic, index) => <img key=
        {index} src={pic.url} alt={`cat-${index}`} />)
        return ( 
            <div>
                Cat Pics
                {cats}
            </div>
         );
    }
}
 
export default CatList;