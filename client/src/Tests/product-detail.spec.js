import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductDetail from '../components/product_details/index.jsx';
import Details from '../components/product_details/details.jsx';
import ItemAdd from '../components/product_details/itemAdd.jsx';
import PhotoList from '../components/product_details/photoList.jsx';
import Photos from '../components/product_details/photos.jsx';
import StyleSelector from '../components/product_details/styleSelect.jsx';
import Summary from '../components/product_details/summary';

// START OF SAMPLE DATA
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

const styleExample3 = {
	"style_id": 240516,
	"name": "Black",
	"original_price": "65.00",
	"sale_price": null,
	"default?": true,
	"photos": [
			{
					"thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
					"url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
			},
			{
					"thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
					"url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
			},
			{
					"thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
					"url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
			},
			{
					"thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
					"url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
			},
			{
					"thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
					"url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
			},
			{
					"thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
					"url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
			}
	],
	"skus": {
			"1394841": {
					"quantity": 8,
					"size": "XS"
			},
			"1394842": {
					"quantity": 16,
					"size": "S"
			},
			"1394843": {
					"quantity": 17,
					"size": "M"
			},
			"1394844": {
					"quantity": 10,
					"size": "L"
			},
			"1394845": {
					"quantity": 15,
					"size": "XL"
			},
			"1394846": {
					"quantity": 6,
					"size": "XXL"
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

describe(ItemAdd, () => {

  it('populates all available sizes into selector', () => {
		render(<ItemAdd style={styleExample3} />);
		expect(screen.getByText("XS")).toBeInTheDocument();
		expect(screen.getByText("M")).toBeInTheDocument();
		expect(screen.getByText("XXL")).toBeInTheDocument();
  })

})

describe(Summary, () => {

  it('renders the correct slogan', () => {
    render(<Summary product={productExample}/>);
    expect(screen.getByText("You've got to wear shades")).toBeInTheDocument();
  })

  it('renders the correct description', () => {
    render(<Summary product={productExample}/>);
    expect(screen.getByText("Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.")).toBeInTheDocument();
  })

  it('renders features of the product', () => {
    render(<Summary product={productExample}/>);
    expect(screen.getByText("Ultrasheen Lenses")).toBeInTheDocument();
    expect(screen.getByText("UV Protection")).toBeInTheDocument();
    expect(screen.getByText("LightCompose Frames")).toBeInTheDocument();
  })

})