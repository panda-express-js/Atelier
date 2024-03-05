import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductDetail from '../components/product_details/index.jsx';
import Details from '../components/product_details/details.jsx';
import PhotoList from '../components/product_details/photoList.jsx';
import Photos from '../components/product_details/photos.jsx';
import StyleSelector from '../components/product_details/styleSelect.jsx';
import Summary from '../components/product_details/summary';

// START of Sample Data
const productExample = {
  "id": 40345,
  "campus": "hr-rfp",
  "name": "Bright Future Sunglasses",
  "slogan": "You've got to wear shades",
  "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
  "category": "Accessories",
  "default_price": "69.00",
  "created_at": "2021-08-13T14:38:44.509Z",
  "updated_at": "2021-08-13T14:38:44.509Z",
  "features": [
      {
          "feature": "Lenses",
          "value": "Ultrasheen"
      },
      {
          "feature": "UV Protection",
          "value": null
      },
      {
          "feature": "Frames",
          "value": "LightCompose"
      }
  ]
}

const allStylesExample = [
  {
      "style_id": 240506,
      "name": "Black Lenses & Black Frame",
      "original_price": "69.00",
      "sale_price": null,
      "default?": false,
      "photos": [
          {
              "thumbnail_url": null,
              "url": null
          }
      ],
      "skus": {
          "null": {
              "quantity": null,
              "size": null
          }
      }
  },
  {
      "style_id": 240507,
      "name": "Black Lenses & Gold Frame",
      "original_price": "69.00",
      "sale_price": null,
      "default?": true,
      "photos": [
          {
              "thumbnail_url": null,
              "url": null
          }
      ],
      "skus": {
          "null": {
              "quantity": null,
              "size": null
          }
      }
  },
  {
      "style_id": 240508,
      "name": "Gold Lenses & Black Frame",
      "original_price": "69.00",
      "sale_price": null,
      "default?": false,
      "photos": [
          {
              "thumbnail_url": null,
              "url": null
          }
      ],
      "skus": {
          "null": {
              "quantity": null,
              "size": null
          }
      }
  },
  {
    "style_id": 240509,
    "name": "Gold Lenses & Gold Frame",
    "original_price": "69.00",
    "sale_price": "49.50",
    "default?": false,
    "photos": [
        {
            "thumbnail_url": null,
            "url": null
        }
    ],
    "skus": {
        "null": {
            "quantity": null,
            "size": null
        }
    }
  }
]

const styleExample1 = {
  "style_id": 240506,
  "name": "Black Lenses & Black Frame",
  "original_price": "69.00",
  "sale_price": null,
  "default?": false,
  "photos": [
      {
          "thumbnail_url": null,
          "url": null
      }
  ],
  "skus": {
      "null": {
          "quantity": null,
          "size": null
      }
  }
}

const styleExample2 =  {
  "style_id": 240509,
  "name": "Gold Lenses & Gold Frame",
  "original_price": "69.00",
  "sale_price": "49.50",
  "default?": false,
  "photos": [
      {
          "thumbnail_url": null,
          "url": null
      }
  ],
  "skus": {
      "null": {
          "quantity": null,
          "size": null
      }
  }
}
// END OF SAMPLE DATA

describe(Details, () => {

  it('renders the correct category', () => {
    render(<Details product={productExample} allStyles={allStylesExample} style={styleExample1} />);
    expect(screen.getByText("Accessories")).toBeInTheDocument();
  })

  it('renders the correct name', () => {
    render(<Details product={productExample} allStyles={allStylesExample} style={styleExample1} />);
    expect(screen.getByText("Bright Future Sunglasses")).toBeInTheDocument();
  })

  it('renders the correct price if on sale', () => {
    render(<Details product={productExample} allStyles={allStylesExample} style={styleExample2} />);
    expect(screen.getByText("49.50")).toBeInTheDocument();
  })

  it('renders the correct price if not on sale', () => {
    render(<Details product={productExample} allStyles={allStylesExample} style={styleExample1} />);
    expect(screen.getByText("69.00")).toBeInTheDocument();
  })
})

// describe(ProductDetail, () => {

//   it('renders the photos component', () => {
//
//   })

//   it('renders the details component', () => {
//
//   })

//   it('renders the summary component', () => {
//
//   })

// })