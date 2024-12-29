import bg1 from '../../assets/bg-1.png';
import banner1button from '../../assets/banner1-button-icon.png';
const Banner1 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
        
       padding: '2.5rem',
        margin: '0',
      }}
      
    >
      <h1
        style={{
          fontFamily: 'Poppins',
          fontWeight: 500,
          color: 'white',
          fontSize: '48px',
          paddingTop: '20vh',
          paddingBottom: '6vh',
          paddingLeft: '16vw',
          paddingRight: '16vw',
          letterSpacing: '-0.06rem',

        }}
      >
        BAYLA is Dedicated to Positioning Bangladesh as The World’s Most
        Sustainable Apparel Sourcing Destination by 2030.
      </h1>

      <p
        style={{
          color: 'white',
          fontSize: '24px',
          
          paddingLeft: '20vw',
          paddingRight: '20vw',
          fontWeight: 400,
          letterSpacing: '-0.06rem',
          
        }}
      >
        Committed to advancing capacity building, industry innovation, and
        sustainable growth through targeted research and comprehensive training
        programs.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' , paddingTop: '5vh',paddingBottom: '20vh'}}>
        <button
          style={{
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            margin: '1.25rem',
          }}
        >
          <span
            style={{
              
              color: 'black',
              marginRight: '0.625rem',
            }}
          >
            Connect
          </span>
          <img
            src={banner1button}
            alt=""
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </button>
      </div>
    </div>
  );
};

export default Banner1;

