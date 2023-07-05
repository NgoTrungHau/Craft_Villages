import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Stack, Typography, Pagination, useMediaQuery } from '@mui/material';

import styles from './Product.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Product() {
  const HighPC = useMediaQuery('(min-width:1680px)');
  const PC = useMediaQuery('(max-width:1679px) and (min-width:1024px)');
  const Tablet = useMediaQuery('(max-width:1023px) and (min-width:740px)');
  const Mobile = useMediaQuery('(max-width:739px) and (min-width:360px)');

  const [perPage, setPerPage] = useState(10);
  useEffect(() => {
    if (HighPC || Mobile) {
      setPerPage(10);
    } else if (PC || Tablet) {
      setPerPage(12);
    }
  }, [HighPC, PC, Tablet, Mobile]);

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const products = [];
  for (let i = 0; i < 60; i++) {
    products.push(
      <>
        <img
          className={cx('product-image')}
          src="https://lzd-img-global.slatic.net/g/p/97b7e675dd7c37d52d8cd11e38c4654a.jpg_720x720q80.jpg"
          alt=""
        />
        <div className={cx('product-link')}>Xem chi tiết</div>
        <div className={cx('product-title')}>Giỏ mây {i + 1}</div>
        <div className={cx('product-quantity')}>39.000đ</div>
      </>,
    );
  }

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('list')}>
          <div className={cx('heading')}>
            <div className={cx('line-heading')}>
              <h4>Sản phẩm</h4>
            </div>
          </div>
          <Stack spacing={2}>
            <Typography component={'div'} className={cx('products')}>
              {products.map((product, index) => {
                if (index >= (page - 1) * perPage && index < page * perPage) {
                  return (
                    <Link className={cx('product-item')} to="#" key={index}>
                      {product}
                    </Link>
                  );
                }
              })}
            </Typography>
            <Pagination
              className={cx('pagination')}
              count={Math.ceil(products.length / perPage)}
              page={page}
              shape="rounded"
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
    </>
  );
}

export default Product;
