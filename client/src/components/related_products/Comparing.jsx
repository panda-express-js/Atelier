import React from 'react';
import Modal from 'react-modal';
import TableRow from './TableRow.jsx';
import StarDisplay from '../ratings/star_rating/Star_Display.jsx'
const Comparing = ({ isModalOpen, closeModal, mainProduct, style, relatedProduct }) => {

  const makeFeaturesArray = (array1, array2) => {
    let array = array1.concat(array2);
    array = array.reduce((accumulator, obj) => {
      if (!accumulator.includes(obj.feature)){
        return accumulator.concat(obj.feature)
      }
      return accumulator;
    }, [])
    return array;
  }

  let featuresArray = makeFeaturesArray(mainProduct.features, relatedProduct.features)

  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Comparing" className='comparisonModal'>
      <h6>Comparing</h6>
      <table className='comparisonTable'>
        <thead>
          <tr>
            <th>{mainProduct.name}</th>
            <th></th>
            <th>{relatedProduct.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{mainProduct.category}</td>
            <td>Category</td>
            <td>{relatedProduct.category}</td>
          </tr>
          <tr>
            <td><StarDisplay rating={mainProduct.stars}/></td>
            <td>Rating</td>
            <td><StarDisplay rating={relatedProduct.stars}/></td>
          </tr>
          {featuresArray.map((feature) => {
            return <TableRow key={feature} featureName={feature} mainFeatures={mainProduct.features} relatedFeatures={relatedProduct.features} />
          })}
        </tbody>
      </table>
    </Modal>
  );
}

export default Comparing;