import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
                  fluid(maxWidth: 600) {
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
  // console.log(data.allDataJson.edges[0].node.artists)
  return (
    <div className='parent'>
      {data.allDataJson.edges[0].node.artists.map((items, i) => (
        
        <div key={i} className='max-w-sm mx-auto my-4 rounded overflow-hidden shadow-lg hover:shadow-2xl'>
          <Img
            alt='Sunset in the mountains'
            className='w-full'
            fluid={items.src.childImageSharp.fluid}
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 canela text-2xl'>
              {items.name} 
            </div>
            <p className='text-gray-700 text-base'>{items.bio}</p>
          </div>
          <div className='px-6 py-4'>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
              <a className='no-underline' href={items.link}>
                Link
              </a>
            </button>

            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              #{items.tag}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BioCards;
