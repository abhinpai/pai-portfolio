---
id: module1_basic
title: Basic is the foundation of all programming language 😇
sidebar_label: "Module 1: Basics"
---

<br/>

### ⭐️ A Story of `var`, `let` and `const`

<BulletSentence emojie= "🟠" keyword="var" stmt = "Its a old school technique to declare a variable"/>
<BulletSentence emojie= "🟠" keyword="let" stmt = "Replacement for a var"/>
<BulletSentence emojie= "🟠" keyword="const" stmt = "Its never gonna change once its declared "/>

<!-- Placement for the JSX components -->

export const CWord = ({children, color}) => (
    <span style={{color: color}}>{children}</span>
);



export const BulletSentence = ({children, emojie, keyword, stmt}) => (
  <p style={{fontSize: '22px', margin: '0'}}>
    <span style={{ paddingRight: '0.3rem' }}>{emojie} </span> 
    <span style={{
        backgroundColor: '#0090d9',
        borderRadius: '6px',
        margin: '0',
        paddingLeft: '6px',
        paddingRight: '6px',
        color: 'white',
        paddingBottom: '2px'}}>{keyword}:</span>  {stmt}
  </p>
);
