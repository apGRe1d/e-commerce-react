import React from 'react';
import MenuItem from '../menu-item/Menu-item';
import './directory.scss';
import {sections} from './directory.data';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    )
  }
}

export default Directory;
