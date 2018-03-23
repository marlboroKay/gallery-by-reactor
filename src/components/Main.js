require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';

//获取图片相关数据
var imageDatas = require('../data/imageData.json');

//let yeomanImage = require('../images/yeoman.png');
//利用自执行函数，将图片信息转化成图片URL路径信息
/*imageDatas = function getImageURL(imageDataArr){
	for(var i = 0,i<imageDataArr.length,i++){
		var singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images/'+singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
}(imageDatas);*/

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
          <section className="img-sec"></section>
          <nav className="controller-nav">
          </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
