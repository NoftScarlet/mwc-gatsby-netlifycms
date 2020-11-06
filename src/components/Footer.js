import React from 'react'

const Footer = class extends React.Component {
  render() {
    const style={
      width:'400px',
      height:'205px',
      objectFit:'cover',
      float:'right',
      marginTop:'-100px',
      padding:'40px',
    }

    const styleP={
      fontSize: '13px',
      color: 'grey'
    }
    return (
      <footer className="footer  has-text-white-ter">
        <div>
          <br/>
            <img src="https://piano.uottawa.ca/mwc/img/pianoLogo.png" style={style} />
              <p style={styleP}>@ 2019 Musicians' Wellness Centre<br/>
                Website developed by Lilian Zaky & Yixiao Chen<br/> </p>
        </div>
      </footer>
    )
  }
}

export default Footer
