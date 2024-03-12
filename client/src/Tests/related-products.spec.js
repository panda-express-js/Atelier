import React from 'react';
import { render , screen, fireEvent } from '@testing-library/react';

import App from '../components/App.jsx';
import RelatedCard from '../components/related_products/RelatedCard.jsx';
import OutfitCard from '../components/related_products/OutfitCard.jsx'
import RelatedProducts from '../components/related_products/index.jsx';
import RelatedCardsCarousel from '../components/related_products/RelatedCardsCarousel.jsx';
import Comparing from '../components/related_products/Comparing.jsx';
import TableRow from '../components/related_products/TableRow.jsx';
import ThumbImg from '../components/related_products/ThumbImg.jsx';
import OutfitCardsCarousel from '../components/related_products/OutfitCardsCarousel.jsx'
import PhotoView from '../components/related_products/PhotoView.jsx'
import { GITHUB_APIKEY } from '../../../config.js';
const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";
const options = {headers: {'Authorization': `${GITHUB_APIKEY}`}};

// sample data
const productIds = [
  41207,
  41220,
  40408,
  40919,
  40524,
  40916
];
const uniqueProductIds = [
  41207,
  41220,
  40408,
  40919,
  40524,
  40916
];
const reviews = 3.48;
const mainProduct = {
  "id": 41088,
  "campus": "hr-rfp",
  "name": "Zora Tank Top",
  "slogan": "At possimus reprehenderit.",
  "description": "Repellat eius necessitatibus sed excepturi. Ut repudiandae vitae eveniet ab. Sint beatae molestiae non. Occaecati expedita voluptatum doloribus dolor ab quis quas sit aspernatur. Ullam veniam consequatur officiis eius repudiandae dolorem aut.",
  "category": "Tank Top",
  "default_price": "427.00",
  "created_at": "2021-08-13T14:38:44.588Z",
  "updated_at": "2021-08-13T14:38:44.588Z",
  "features": [
      {
          "feature": "Cut",
          "value": "\"Loose\""
      },
      {
          "feature": "5 Year Warranty",
          "value": null
      },
      {
          "feature": "Fair Trade Certified",
          "value": null
      },
      {
          "feature": "Green Leaf Certified",
          "value": null
      }
  ]
};
const mainProductStyles = {
  "product_id": "41088",
  "results": [
    {
      "style_id": 245282,
      "name": "Fuchsia",
      "original_price": "427.00",
      "sale_price": "55.00",
      "default?": true,
      "photos": [
        {
          "thumbnail_url": "https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
        }
      ]
    }
  ]
}
const relatedIds = [
  41207,
  41220,
  40408,
  40919,
  40524,
  40916
]
const relatedProduct = {
  "id": 41207,
  "campus": "hr-rfp",
  "name": "Tony Boots",
  "slogan": "Libero illum iusto molestiae ad.",
  "description": "Vero dolorem ratione eum. Et eveniet ut dolore eius. Et cum excepturi omnis sint voluptate vitae impedit.",
  "category": "Boots",
  "default_price": "665.00",
  "created_at": "2021-08-13T14:38:44.588Z",
  "updated_at": "2021-08-13T14:38:44.588Z",
  "features": [
      {
          "feature": "Cut",
          "value": "\"Straight\""
      },
      {
          "feature": "Lifetime Guarantee",
          "value": null
      },
      {
          "feature": "Material",
          "value": "\"FullSupport Hybrid Compound\""
      },
      {
          "feature": "Cut",
          "value": "\"Loose\""
      }
  ]
}
const relatedProductStyles = {
  "product_id": "41207",
  "results": [
    {
      "style_id": 246021,
      "name": "Lavender",
      "original_price": "665.00",
      "sale_price": "100.00",
      "default?": true,
      "photos": [
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          }
      ]
    }
  ]
}

const obj = { id: relatedProduct.id,
name: relatedProduct.name,
category: relatedProduct.category,
default_price: relatedProduct.default_price,
features: relatedProduct.features,
photosArray: relatedProductStyles.results[0].photos,
sale_price: relatedProductStyles.results[0].sale_price
};

const changeID = (newId) => {
  if (id !== newId) {
    setId(newId);
  }
};
const changePhoto = (url) => {
  setPhoto(url);
};
/*Related card formating */
describe('RelatedCard Component', () => {
  test('renders data', () => {
    render(<RelatedCard key={obj.id} id={obj.id} obj={obj} changeId={changeID} product={mainProduct} style={mainProductStyles}/>);

  var img = screen.getByAltText(`product image of ${obj.name}`);
  var name = screen.getByText(obj.name);
  var category = screen.getByText(obj.category);
  var salesPrice = screen.getByText(obj.sale_price);
  var defaultPrice = screen.getByText(obj.default_price);

  expect(img).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(category).toBeInTheDocument();
  expect(salesPrice).toBeInTheDocument();
  expect(defaultPrice).toBeInTheDocument();
  })

});
describe('Outfit Card Component', () => {
  test('renders data', () => {
    render(<OutfitCard key={obj.id} obj={obj} changeId={changeID} />);
    var img = screen.getByAltText(`product image of ${obj.name}`);
    var name = screen.getByText(obj.name);
    var category = screen.getByText(obj.category);
    var salesPrice = screen.getByText(obj.sale_price);
    var defaultPrice = screen.getByText(obj.default_price);
    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(salesPrice).toBeInTheDocument();
    expect(defaultPrice).toBeInTheDocument();
  });
  test('deletes outfit on click', () => {
  const deleteBTN = jest.fn();
  render(<OutfitCard key={obj.id} obj={obj} changeId={changeID} deleteOutfit={deleteBTN} />);
  const deleteButton = screen.getByTestId('BTN');
  fireEvent.click(deleteButton);
  expect(deleteBTN).toHaveBeenCalledWith(obj.id);
  })

});
/*index */
describe('RelatedProducts', () => {
  test('renders divs', () => {
    const card = render(<RelatedProducts product={mainProduct} server={server} options={options} productIds={productIds} changeId={changeID} style={mainProductStyles} reviews={reviews} avgRating={reviews} />);
  var productDiv = card.getByText('RELATED PRODUCTS')
  var outfitDiv = card.getByText('YOUR OUTFIT');
  expect(productDiv).toBeInTheDocument();
  expect(outfitDiv).toBeInTheDocument();
  })
});
/*photoview */
describe('PhotoView Component', () => {
  const photos = [
    { url: 'photo1.jpg' },
    { url: 'photo2.jpg' },
    { url: 'photo3.jpg' },
    { url: 'photo4.jpg' },
    { url: 'photo5.jpg' },
    { url: 'photo6.jpg' }
  ];
  const photo = 'photo1.jpg';
  const rightArrow = jest.fn();
  const leftArrow = jest.fn()
  test('renders component', () => {
    render(<PhotoView photos={photos} photo={photo} changePhoto={changePhoto} />);
    expect(screen.getByTestId('pictureCarousel')).toBeInTheDocument();
    expect(screen.getByTestId('rPicBtn')).toBeInTheDocument();
  });
  test('right arrow func', () => {
    render(<PhotoView photos={photos} photo={photo} changePhoto={changePhoto} />);
    const rtBtn = screen.getByTestId('rPicBtn');
    fireEvent.click(rtBtn);
    expect(rightArrow).toHaveBeenCalledWith();
  });
});

describe('RelatedCardsCarousel Component', () => {
  test('renders components', () => {
    render(
      <RelatedCardsCarousel
      uniqueProductIds={uniqueProductIds}
      server={server}
      options={options}
      changeId={changeID}
      product={mainProduct}
      style={mainProductStyles}
      />
      );
      expect(screen.getByTestId('carBtnNext')).toBeInTheDocument();
    });
  });

  describe('TableRow Component', () => {
    const featureName = 'Test Feature';
    const mainFeatures = [
      { feature: 'cut', value: 'loose' },
      { feature: 'warranty', value: null },
    ];

    const relatedFeatures = [
      { feature: 'cut', value: 'Related Feature Value' },
      { feature: 'Yet Another Feature', value: null },
    ];

    test('renders component with main and related features', () => {
      render(
        <table>
        <tbody>
          <TableRow featureName={featureName} mainFeatures={mainFeatures} relatedFeatures={relatedFeatures} />
        </tbody>
      </table>
    );
    expect(screen.getByText('Main Feature Value')).toBeInTheDocument();
    expect(screen.getByText('Test Feature')).toBeInTheDocument();
    expect(screen.getByText('Related Feature Value')).toBeInTheDocument();
  });
});

/*thumbImg */
describe('ThumbImg', () => {
  test('img should be on page', () => {
    render(<ThumbImg photoObj={relatedProductStyles.results[0].photos[0]} i={1} changePhoto={changePhoto}/>)
    var image = screen.getByAltText('https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')
    expect(image).toBeInTheDocument();
  })
  test('click should change invoke function', () => {
    const change = jest.fn();
    render(<ThumbImg photoObj={relatedProductStyles.results[0].photos[0]} i={1} changePhoto={change}/>)
    const changeBtn = screen.getByTestId('ThumbImg');
    fireEvent.click(changeBtn);
    expect(change).toHaveBeenCalledWith('https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')
  })
})