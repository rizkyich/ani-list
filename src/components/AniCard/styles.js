export const cardContainer = {
  width: '100%',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

export const card = {
  position: 'relative',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  }
};

export const imageCard = {
  width: '100%',
  position: 'relative'
};

export const coverImage = {
  width: '100px',
  position: 'absolute',
  left: '20px',
  bottom: '-60px'
};

export const cardTitle = {
  textAlign: 'left',
  marginTop: '1rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  padding: '0 20px'
};

export const scoreCard = {
  position: 'absolute',
  width: '2rem',
  bottom: 0,
  right: 0,
  padding: '8px',
  color: '#fff'
};

export const collectionButton = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '5px',
  marginTop: '5px'
};
