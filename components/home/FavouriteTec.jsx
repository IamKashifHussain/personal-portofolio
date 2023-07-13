import Image from 'next/image';
import React from 'react';
import python from '../../public/img/python.png';
import javascript from '../../public/img/javascript.png';
import node from '../../public/img/node.png';
import mysql from '../../public/img/mysql.png';
import react from '../../public/img/react.png';
import docker from '../../public/img/docker.png';
import express from '../../public/img/express.png';
import php from '../../public/img/php.png';
export default function FavouriteTec() {
  return (
    <section className="py-20">
      <div>
        <h3 className="text-center text-3xl py-1 dark:text-white font-yekan">
        Favorite technologies 
        </h3>
      </div>
      <div className="flex gap-10 py-10 flex-row">
        <div className="basis-1/6 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={python}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={javascript}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={node}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={mysql}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={react}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={express}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={docker}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={php}
          />
        </div>
      </div>
    </section>
  );
}
