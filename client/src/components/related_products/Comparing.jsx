import React from 'react';
import Modal from 'react-modal';
import TableRow from './TableRow.jsx';

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
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Comparison Modal">
      <table>
        <thead>
          <tr>
            <th>{mainProduct.name}</th>
            <th></th>
            <th>{relatedProduct.name}</th>
          </tr>
        </thead>
        <tbody>
          {featuresArray.map((feature) => {
            return <TableRow key={feature} featureName={feature} mainFeatures={mainProduct.features} relatedFeatures={relatedProduct.features} />
          })}
        </tbody>
      </table>
    </Modal>
  );
}

export default Comparing;