import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { Container, Box } from '@mui/material';
import { Heading } from 'components/Heading';
import { FadeInSection } from 'hooks';
import {
  ArtistItem,
  ArtistItemSkeleton,
  useSelectArtistLoading,
  useSelectArtistsData
} from 'modules/Artists';
import { isEmpty } from 'lodash';

export const ContentArtists: React.FC = () => {
  const data = useSelectArtistsData();
  const loading = useSelectArtistLoading();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    loop: false,
    centerMode: true,
    centerPadding: '200px',
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          centerPadding: '100px'
        }
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          centerPadding: '140px'
        }
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '180px'
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '80px'
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '100px'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '100px'
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '120px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px'
        }
      }
    ]
  };

  return (
    <FadeInSection>
      <Container sx={{ paddingTop: '100px' }}>
        <Heading
          text="Featured Artists"
          subText="Top collections over last 7 days"
          showStickyIcon={true}
          style={{ marginBottom: '32px' }}
        />
      </Container>
      <div style={{ padding: '0 8px' }}>
        {loading !== 'pedding' ? (
          !isEmpty(data) && (
            <Slider {...settings}>
              {data.map((item, i) => (
                <Link key={i} href={`/artist/${item.id}`}>
                  <Box component="a" display="block" px={1.5} pb={4}>
                    <ArtistItem {...item} />
                  </Box>
                </Link>
              ))}
            </Slider>
          )
        ) : (
          <Container>
            <ArtistItemSkeleton numberShow={3} />
          </Container>
        )}
      </div>
    </FadeInSection>
  );
};
