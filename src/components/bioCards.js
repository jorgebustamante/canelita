import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Squiggly from './squiggly';

const BioCards = () => {
  const data = useStaticQuery(graphql`
    query dataQuery {
      allDataJson {
        edges {
          node {
            artists {
              name
              bio
              link
              tag
              src {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    src
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div className='parent px-4 pt-2'>
      {data.allDataJson.edges[0].node.artists.map((items, i) => (
        <div
          key={i}
          className='max-w-md mx-auto my-4 rounded overflow-hidden shadow-lg hover:shadow-2xl ARTISTCARD'
        >
          <Img
            alt='Sunset in the mountains'
            className='w-full'
            fluid={items.src.childImageSharp.fluid}
          />
          <div className='squiggly h-0 w-full'>
              <Squiggly />
            </div>
          <div className='px-6 py-4'>
            
            <div className='font-bold text-xl mb-2 canela text-2xl text-gray-800'>
              {items.name}
            </div>
            <p className='text-gray-700 text-base'>{items.bio}</p>
          </div>
          <div className='px-6 py-4'>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
              <a
                className='no-underline'
                href={items.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                Link
              </a>
            </button>

            <div className=' py-4'>
              {items.tag.map((tags, i) => (
                <button
                  key={i}
                  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
                >
                  #{tags}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BioCards;
