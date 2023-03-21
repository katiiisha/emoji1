import React from 'react'
import st from './cards.module.css';

function Cards({emojiList}) {
 
  return (
    <main>
      
      
      {emojiList.map((elem, index) => (
            
              <div key={index} className={st.card}>
                  <div className={st.emoji}>{elem.symbol}</div>
          <h3 >{elem.title}</h3>
          <p>{elem.keywords}</p>
        </div>
      ))}
    </main>
  )
}

export default Cards