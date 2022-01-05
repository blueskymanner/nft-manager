import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import { Heading } from 'components/Heading';
import { FadeInSection } from 'hooks';
import {
  PostItemCard,
  useSelectPostsData,
  useSelectPostLoading,
  PostItemCardSkeleton
} from 'modules/Posts';
import Slider from 'react-slick';
import { isEmpty } from 'lodash';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  loop: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const ContentRaffles: React.FC = () => {
  const data = useSelectPostsData();
  const loading = useSelectPostLoading();
  return (
    <Container sx={{ py: '100px' }}>
      <FadeInSection>
        <Heading text="Raffles" style={{ marginBottom: '32px' }} />
        {loading !== 'pending' ? (
          !isEmpty(data) && (
            <Box mx={-1}>
              <Slider {...settings}>
                {data.map((item, i) => (
                  <Box key={i} px={1}>
                    <PostItemCard hideCountDown={true} {...item} />
                  </Box>
                ))}
              </Slider>
            </Box>
          )
        ) : (
          <PostItemCardSkeleton numberShow={3} />
        )}
      </FadeInSection>
    </Container>
  );
};
