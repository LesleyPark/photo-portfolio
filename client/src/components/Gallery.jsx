import React from 'react';
import styles from '../stylesheets/Gallery.css';
import Lightbox from 'react-images';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {lightboxIsOpen: false};
  }

  render () {
    return (
      <div className={styles.gallery}>
        <Lightbox
          images={[
            { src: 'https://s3-us-west-1.amazonaws.com/lpphotoportfolio/photos/01.jpg' },
            { src: 'https://s3-us-west-1.amazonaws.com/lpphotoportfolio/photos/02.jpg' }
          ]}
          backdropClosesModal={true}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}

export default Gallery;