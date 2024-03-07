import Accordian from './components/accordian/Accordian';
import RandomColor from './components/randomColor/RandomColor';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMoreData from './components/load-more-data/LoadMoreData';
import TreeNode from './components/tree-node/TreeNode';
import Data from './components/tree-node/Data';
import QrCodeGenerator from './components/qr-code-generator/QrCodeGenerator';
import CheackoutStepper from './components/cheack-out-stepper/CheackoutStepper'
import LightDarkMode from './components/light-dark-mode/LightDarkMode';


function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"10"} limit={"10"} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeNode data={Data}/> */}
      {/* <QrCodeGenerator /> */}
      {/* <CheackoutStepper /> */}
      {/* By using costom hooks */}
      <LightDarkMode /> 
    </>
  );
}

export default App;
