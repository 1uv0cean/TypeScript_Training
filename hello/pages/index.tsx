import { useDeno } from 'framework/react'
import React from 'react'
import dayOfYear from '~/lib/d-day.ts'


export default function Home() {
  const version = useDeno(() => Deno.version.deno)

  return (
    <div className="page">
      <head>
        <title>D-Day❣</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <body>
          <p>하연이 {String(dayOfYear(new Date()))}일 동안 놀리는중💞</p>
      </body>
    </div>
  )
}