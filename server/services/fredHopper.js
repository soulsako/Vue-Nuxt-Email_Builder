const request = require('request');
const parseString = require('xml2js').parseString;

const access = {
  site: {
    jdsports: [
      {
        iso: 'gb',
        lang: 'en_GB',
        user: 'jdplc_01',
        pass: 'Roiv69Quiox~'
      },
      {
        iso: 'be',
        lang: 'be_BE',
        user: 'jdplc_05',
        pass: '_orkemepGip2'
      },
      {
        iso: 'de',
        lang: 'de_DE',
        user: 'jdplc_05',
        pass: '_orkemepGip2'
      },
      {
        iso: 'dk',
        lang: 'dk_DK',
        user: 'jdplc_05',
        pass: '_orkemepGip2'
      },
      {
        iso: 'es',
        lang: 'es_ES',
        user: 'jdplc_05',
        pass: '_orkemepGip2'
      },
      {
        iso: 'fr',
        lang: 'fr_FR',
        user: 'jdplc_05',
        pass: '_orkemepGip2'
      },
      {
        iso: 'ie',
        lang: 'ie_IE',
        user: 'jdplc_05',
        pass: '_orkemepGip2'
      },
      {
        iso: 'it',
        lang: 'it_IT',
        user: 'jdplc_05',
        pass: '_orkemepGip2'
      },
      {
        iso: 'nl',
        lang: 'nl_NL',
        user: 'jdplc_05',
        pass: '_orkemepGip2'
      },
      {
        iso: 'se',
        lang: 'se_SE',
        user: 'jdplc_05',
        pass: '_orkemepGip2'
      },
      {
        iso: 'au',
        lang: 'en_AU',
        user: 'jdplc_10',
        pass: 'yaHuts[floj4'
      },
      {
        iso: 'my',
        lang: 'en_MY',
        user: 'jdplc_10',
        pass: 'yaHuts[floj4'
      },
      {
        iso: 'at',
        lang: 'de_AT',
        user: 'jdplc_14',
        pass: 'tac6opAwduv]'
      },
      {
        iso: 'sg',
        lang: 'en_SG',
        user: 'jdplc_10',
        pass: 'yaHuts[floj4'
      },
      {
        iso: 'fi',
        lang: 'fi_FI',
        user: 'jdplc_14',
        pass: 'tac6opAwduv]'
      },
      {
        iso: 'ko',
        lang: 'ko_KR',
        user: 'jdplc_10',
        pass: 'yaHuts[floj4'
      }
    ]
  }
};

function parsePropertyValue(value) {
  if (typeof value[0] !== 'string') {
    if (value.length === 1 && value[0].hasOwnProperty('_')) {
      return value[0]._;
    }

    const valueList = [];

    value.map(item => valueList.push(item._));
    return valueList;
  }

  return value[0];
}

function urlBuilder(product, override) {
  let colour = product.colour;
  let plu = product.plu;

  if (override) {
    colour = override.colour;
    plu = override.plu;
  }

  const urlSlug = `${colour} ${product.brand} ${product.title}`
    .replace(/\s+/g, '-')
    .replace(/[^\w\s-]/gi, '')
    .replace('undefined-', '')
    .toLowerCase();

  return `/product/${urlSlug}/${plu}`;
}

function queryUrl(server) {
  return `http://query.published.${server}.fas.eu1.fredhopperservices.com/fredhopper/query?`;
}

module.exports.cleanProductData = function(dirtyProduct) {
  const pluckList = [
    'brand',
    'colour',
    'description',
    'exclusive',
    'fabric',
    'name',
    'price',
    'product_colourway_colour_name',
    'product_colourway_plu',
    'product_colourway_swatch',
    'product_total_review_count',
    'product_url',
    'product_variant_display_size',
    'product_variant_sku',
    'product_variant_stock_allocation',
    'rrp_price',
    'sale',
    'secondid',
    'variant_size',
    'product_ref',
    'short_description'
  ];

  // deref the object passed in
  const prodData = JSON.parse(JSON.stringify(dirtyProduct));

  const cleanProduct = prodData.attribute
    .filter(prop => {
      if (pluckList.includes(prop.$.name) && prop.$.isnull === 'false') {
        return true;
      }

      return false;
    })
    .map(prop => {
      let objKey = prop.$.name;

      if (objKey === 'name') {
        objKey = 'title';
      }

      if (objKey === 'rrp_price') {
        objKey = 'was';
      }

      if (objKey === 'secondid') {
        objKey = 'plu';
      }

      if (objKey === 'product_url') {
        objKey = 'url';
      }

      if (objKey === 'search_categories') {
        objKey = 'category';
      }

      if (objKey === 'product_total_review_count') {
        objKey = 'review_count';
      }

      if (objKey === 'short_description') {
        objKey = 'category';
      }

      prop[objKey] = parsePropertyValue(prop.value);
      delete prop.$;
      delete prop.value;

      return prop;
    });

  const product = Object.assign(...cleanProduct);

  product.title = product.title.replace(product.brand, '').trim();

  product.url = urlBuilder(product);

  product.price = parseFloat(product.price);
  product.was = parseFloat(product.was);

  if (product.product_ref) {
    product.plu = product.product_ref.split('=')[0];
    delete product.product_ref;
  }

  // MORE COLOURS AVAILABLE
  if (product.product_colourway_plu) {
    const similarItemSkus = product.product_colourway_plu.split(';;');

    product.other_colours = [];

    if (typeof similarItemSkus !== 'string') {
      if (typeof product.product_colourway_swatch !== 'undefined') {
        const similarItemSwatch = product.product_colourway_swatch.split(';;');
        const similarItemNames = product.product_colourway_colour_name.split(
          ';;'
        );

        if (similarItemSkus.length > 1) {
          similarItemSkus.forEach((item, i) => {
            let swatchName;

            if (similarItemSwatch[i] === '=') {
              swatchName = similarItemNames[i].replace(/_.+/, '');
            } else {
              if (similarItemSwatch[i]) {
                swatchName = similarItemSwatch[i]
                  .split('=')[1]
                  .replace(/\/.+/, '');
              }
            }

            const plu = item.replace(/\d+=/, '');
            const colour = swatchName;

            product.other_colours.push({
              plu,
              colour,
              url: urlBuilder(product, { plu, colour })
            });
          });
        }
      }
    }

    product.other_colours = product.other_colours.filter(
      item => item.plu !== product.plu
    );

    if (product.other_colours.length === 1) {
      delete product.other_colours;
    }
  }

  if (product.review_count) {
    product.review_count = parseInt(product.review_count, 10);

    if (product.review_count === 0) {
      delete product.review_count;
    }
  }

  if (product.product_variant_display_size) {
    product.size = [];

    const variantLabel = product.product_variant_display_size.split(';;');
    const variantStock = product.product_variant_stock_allocation.split(';;');
    let variantSkus = [];

    if (product.product_variant_sku) {
      variantSkus = product.product_variant_sku.split(';;');
    }
    variantLabel.forEach((label, i) => {
      if (variantSkus[i]) {
        product.size.push({
          label: variantLabel[i].replace(/.+=/, ''),
          available: variantStock[i].replace(/\d+=/, '') !== '1',
          sku: variantSkus[i].replace(/\d+=/, '')
        });
      } else {
        product.size.push({
          label: variantLabel[i].replace(/.+=/, ''),
          available: variantStock[i].replace(/\d+=/, '') !== '1'
        });
      }
    });
  }

  if (product.sale) {
    product.sale = true;
  } else {
    delete product.was;
  }

  if (product.exclusive) {
    product.exclusive = true;
  }

  product.plu = product.plu.replace(/[^0-9.]/g, '');

  delete product.colour;
  delete product.product_colourway_colour_name;
  delete product.product_colourway_plu;
  delete product.product_colourway_swatch;
  delete product.product_variant_display_size;
  delete product.product_variant_sku;
  delete product.product_variant_stock_allocation;
  delete product.variant_size;

  return product;
};

module.exports.getAccess = function(site, iso) {
  return access.site[site].filter(settings => settings.iso === iso);
};

module.exports.query = function(details, query, mock) {
  return new Promise((resolve, reject) => {
    if (mock) {
      resolve(mock);
    }

    let service = 'live1';

    // FIX: remove this state once dual-fullfilment switches back to live1
    if (
      details.location.iso === 'pt' ||
      details.location.iso === 'au' ||
      details.location.iso === 'my'
    ) {
      service = 'live2';
    }

    const fullQuery = `fh_view_size=100&fh_location=//${details.fhLocation}/${
      details.location.lang
    }/${query}`;

    console.info('GET', queryUrl(service) + fullQuery);

    request.get(
      {
        url: queryUrl(service) + fullQuery,
        auth: {
          user: details.location.user,
          pass: details.location.pass,
          sendImmediately: true
        }
      },
      (error, response, body) => {
        if (error) {
          return reject(error);
        }

        parseString(body, (err, result) => {
          if (err) {
            return reject(err);
          }

          return resolve(result);
        });

        return false;
      }
    );
  });
};
