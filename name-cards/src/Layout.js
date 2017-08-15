import React from 'react';

export default function Layout({children}) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    header:{
      backgroundColor: 'rgba(26, 26, 26, 0.88)',
      color: 'white'
    },
    content: {
      flex: 1,
      paddingTop: 20,
      paddingBottom: 20
    },
    footer: {
      backgroundColor: 'rgba(26, 26, 26, 0.88)',
      color: 'white'
    }
  }
  return (
    <div style={styles.container}>
      <div style={styles.header}><h3>Header</h3></div>
      <div style={styles.content}>
        {children}
      </div>
      <div style={styles.footer}><h3>Footer</h3></div>
    </div>
  )
}
