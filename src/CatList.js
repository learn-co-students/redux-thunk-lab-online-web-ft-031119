import React, {Component} from 'react'

export default class CatList extends Component {

  render(){
    console.log(this.props);
    const catsImagesList = this.props.catPics.map(cat => <img key={cat.id} src={cat.url}/>)
    return(
      <ul>
        {catsImagesList}
      </ul>
    )
  }
}
