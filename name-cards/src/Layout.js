import React from 'react';

export default function Layout({children}) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    header:{
      backgroundColor: 'red'
    },
    content: {
      flex: 1
    },
    footer: {
      backgroundColor: 'blue'
    }
  }
  return (
    <div style={styles.container}>
      <div style={styles.header}>header</div>
      <div style={styles.content}>
        {children}
      </div>
      <div style={styles.footer}>footer</div>
    </div>
  )
}
