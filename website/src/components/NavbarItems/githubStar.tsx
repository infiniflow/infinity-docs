/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useEffect, useState } from 'react';

import StarIcon from './star.svg';

let globalstars = ''

export const GithubStars = () => {
  const [star, setStar] = useState(globalstars);
  useEffect(() => {
    if (!globalstars) {
      fetch('https://api.github.com/repos/infiniflow/infinity')
      .then((response) => response.json())
      .then((data) => {
        let stars;
        if (data.stargazers_count) {
          stars = (data.stargazers_count / 1000).toFixed(1) + ' k';
        } else {
          stars = '1.5k';
        }
        globalstars = stars
        setStar(stars);
      });
    }
  }, []);

  return (
    <a
      href="https://github.com/infiniflow/infinity"
      target="_blank"
      className="hover:no-underline"
    >
      <div className="flex border border-grey-3 bg-grey-0 text-grey-4 rounded-sm text-caption">
        <div className="p-1 px-2 bg-grey-2 flex items-center">
          <StarIcon height={16} width={16} />
          <span className='ml-1'>Star</span>
        </div>
        <div className='p-1 px-2'>{star}</div>
      </div>
    </a>
  );
};
