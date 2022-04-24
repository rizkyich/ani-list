export const darkBg = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  width: '100vw',
  height: '100vh',
  zIndex: 999,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  overflow: 'hidden'
};

export const centered = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const modal = {
  position: 'relative',
  width: '90%',
  maxWidth: '500px',
  background: '#fafafa',
  zIndex: 10,
  borderRadius: '4px',
  boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)'
};

export const modalButtonContainer = {
  bottom: 0,
  top: 'auto',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  padding: '10px'
};

export const closeButton = {
  fontWeight: '500',
  padding: '4px 8px',
  borderRadius: '8px',
  border: 'none',
  fontSize: '18px',
  color: '#2c3e50',
  background: 'white',
  transition: 'all 0.25s ease',
  boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.06)',
  position: 'absolute',
  right: 0,
  top: 0,
  alignSelf: 'flex-end',
  marginTop: '-7px',
  marginRight: '-7px',
  '&:hover': {
    boxSshadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)',
    transform: 'translate(-4px, 4px)'
  }
};
